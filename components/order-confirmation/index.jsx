import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { confirmedOrderPropTypes } from '../../constants/prop-types';

const OrderConfirmation = ({ order }) => (
  <div>
    <Paper elevation={1}>
      <Typography variant="h3" component="h1">
        Order Confirmation
      </Typography>
      <Typography component="p">Order Number: {order.id}</Typography>
    </Paper>
  </div>
);

OrderConfirmation.propTypes = {
  order: confirmedOrderPropTypes.isRequired,
};

export default OrderConfirmation;
