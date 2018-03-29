const express = require('express')
const next = require('next')
const dataService = require("./data-service");

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/api/menu', async (req, res) => {
    console.log("calling async method")
    try {
      const menu = await dataService.getMenu();
      res.send(menu);
    } catch (err) {
      throw err;
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
