import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, MenuItem } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Typography from 'material-ui/Typography/Typography';

import quantityOptions from '../../../constants/quantity-options';
import { orderItemPropTypes } from '../../../constants/prop-types';
import objectToCommaSeparatedString from '../../../util/util-methods';

const OrderItem = ({
  orderItem: { name, qty, price, toppings, key },
  handleRemoveFromOrder,
  handleChangeQty,
}) => (
  <div>
    <Grid container alignItems="center">
      <Grid item xs={2}>
        <IconButton
          aria-label="Delete"
          onClick={() => handleRemoveFromOrder(key)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="subheading" component="h3">
          {name}
        </Typography>
        <Typography color="textSecondary">
          {objectToCommaSeparatedString(toppings)}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <TextField
          select
          value={qty}
          onChange={e => handleChangeQty({ key, qty: e.target.value })}
        >
          {quantityOptions.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={2}>
        <Typography>{`$${price}`}</Typography>
      </Grid>
    </Grid>
    <style jsx>
      {`
        .order-item {
          margin-top: 10px;
        }
      `}
    </style>
  </div>
);

OrderItem.propTypes = {
  orderItem: orderItemPropTypes.isRequired,
  handleRemoveFromOrder: PropTypes.func.isRequired,
  handleChangeQty: PropTypes.func.isRequired,
};

export default OrderItem;
