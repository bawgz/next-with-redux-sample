import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography/Typography';

import MenuItemImg from '../create-order/menu-item-img';
import quantityOptions from '../../../constants/quantity-options';
import { orderItemPropTypes } from '../../../constants/prop-types';

const OrderItem = ({
  orderItem: { name, qty, price, filling, key, image },
  handleRemoveFromOrder,
  handleChangeQty,
  displayImg = false,
}) => (
  <div>
    <Grid container alignItems="center">
      <Grid item xs={2}>
        {handleRemoveFromOrder && (
          <IconButton
            aria-label="Delete"
            onClick={() => handleRemoveFromOrder(key)}
          >
            <DeleteIcon />
          </IconButton>
        )}
        {displayImg && <MenuItemImg image={image} title={name} />}
      </Grid>
      <Grid item xs={5}>
        <Typography variant="subtitle1" component="h3">
          {name}
        </Typography>
        <Typography color="textSecondary">{filling}</Typography>
      </Grid>
      <Grid item xs={3}>
        {handleChangeQty ? (
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
        ) : (
          qty
        )}
      </Grid>
      <Grid item xs={2}>
        <Typography>{`$${price}`}</Typography>
      </Grid>
    </Grid>
  </div>
);

OrderItem.propTypes = {
  orderItem: orderItemPropTypes.isRequired,
  handleRemoveFromOrder: PropTypes.func.isRequired,
  handleChangeQty: PropTypes.func.isRequired,
  displayImg: PropTypes.bool.isRequired,
};

export default OrderItem;
