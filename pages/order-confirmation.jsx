import React from 'react';
import { connect } from 'react-redux';

import withRoot from '../util/with-root';
import { confirmedOrderPropTypes } from '../constants/prop-types';

const OrderConfirmation = ({ order }) => <div>Order Number: {order.id}</div>;

OrderConfirmation.propTypes = {
  order: confirmedOrderPropTypes.isRequired,
};

const mapStateToProps = ({ confirmedOrder }) => ({
  order: confirmedOrder,
});

export default withRoot(connect(mapStateToProps)(OrderConfirmation));
