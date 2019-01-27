import React from 'react';

import { confirmedOrderPropTypes } from '../../constants/prop-types';

const OrderConfirmation = ({ order }) => (
  <div>
    <h1>Order Confirmation</h1>
    Order Number: {order.id}
  </div>
);

OrderConfirmation.propTypes = {
  order: confirmedOrderPropTypes.isRequired,
};

export default OrderConfirmation;
