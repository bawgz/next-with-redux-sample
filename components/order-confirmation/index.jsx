import React from 'react';

import { confirmedOrderPropTypes } from '../../constants/prop-types';
import OrderDetails from '../order/order-details';

const OrderConfirmation = ({ order }) => (
  <div>
    <OrderDetails
      orderDetails={{ items: order.items, total: order.total }}
      orderId={order.id}
      displayImgs
    />
  </div>
);

OrderConfirmation.propTypes = {
  order: confirmedOrderPropTypes.isRequired,
};

export default OrderConfirmation;
