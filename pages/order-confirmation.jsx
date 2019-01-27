import React from 'react';
import { connect } from 'react-redux';

import OrderConfirmationComponent from '../components/order-confirmation';
import withRoot from '../util/with-root';
import { confirmedOrderPropTypes } from '../constants/prop-types';

const OrderConfirmation = ({ order }) => (
  <OrderConfirmationComponent order={order} />
);

OrderConfirmation.propTypes = {
  order: confirmedOrderPropTypes.isRequired,
};

const mapStateToProps = ({ confirmedOrder }) => ({
  order: confirmedOrder,
});

export default withRoot(connect(mapStateToProps)(OrderConfirmation));
