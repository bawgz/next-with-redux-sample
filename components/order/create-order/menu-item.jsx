import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid } from 'material-ui';

import MenuItemImg from './menu-item-img';
import OrderForm from './order-form';

const MenuItem = ({
  name,
  description,
  image,
  price,
  handleAddToOrder,
  toppings,
}) => (
  <div>
    <Card raised className="menu-item-card">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <MenuItemImg image={image} title={name} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Grid container direction="column" justify="space-between">
              <Grid item>
                <Typography variant="headline" component="h2">
                  {name}
                </Typography>
                <Typography component="p">{description}</Typography>
              </Grid>
              <Grid item>
                <OrderForm
                  form={`${name}-form`}
                  handleAddToOrder={handleAddToOrder}
                  name={name}
                  price={price}
                  toppingsOptions={toppings}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    <style jsx>
      {`
        .menu-item-card: {
          margin: 7px;
        }
        .menu-item-img: {
          height: 200px;
        }
      `}
    </style>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleAddToOrder: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  toppings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default MenuItem;
