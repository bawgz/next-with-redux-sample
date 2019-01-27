import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import MenuItemImg from './menu-item-img';
import OrderForm from './order-form';

const styles = {
  card: {
    margin: '5px',
  },
};

const MenuItem = ({
  name,
  description,
  image,
  price,
  handleAddToOrder,
  fillings,
  classes,
}) => (
  <div>
    <Card raised className={classes.card}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <MenuItemImg image={image} title={name} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Grid
              container
              direction="column"
              justify="space-between"
              spacing={16}
            >
              <Grid item>
                <Typography variant="h5" component="h2">
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
                  fillingsOptions={fillings}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleAddToOrder: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  fillings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  classes: PropTypes.shape({
    card: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(MenuItem);
