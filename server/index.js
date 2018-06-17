const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dataService = require('./data-service');
const stripeService = require('./stripe-service');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());

    server.get('/api/menu', async (req, res) => {
      try {
        const menu = await dataService.getMenu();
        res.send(menu);
      } catch (err) {
        throw err;
      }
    });

    server.post('/api/checkout', async (req, res, nextMiddleware) => {
      console.log('--------------req--------------');
      console.log(req.body);
      stripeService.chargeCard(req.body, (err, charge) => {
        console.log('------------err----------------');
        console.log(err);
        console.log('------------charge-----------');
        console.log(charge);
        if (err) {
          nextMiddleware(err);
        } else {
          res.send(charge);
        }
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
