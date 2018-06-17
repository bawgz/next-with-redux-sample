import React from 'react';
import { Grid } from 'material-ui';
import PropTypes from 'prop-types';

import { menuPropTypes, orderDetailsPropTypes } from '../../constants/prop-types';
import CreateOrder from './create-order';
import OrderDetails from './order-details';
import Checkout from './checkout';

const Order = ({
  menu, handleAddToOrder, handleRemoveFromOrder, orderDetails, handleChangeQty,
  checkout, isCheckoutDialogOpen, setIsCheckoutDialogOpen,
}) => (
  <div>
    <Grid container>
      <Grid item xs={12} md={8}>
        <CreateOrder menu={menu} handleAddToOrder={handleAddToOrder} />
      </Grid>
      <Grid item xs={12} md={4}>
        <OrderDetails
          handleRemoveFromOrder={handleRemoveFromOrder}
          orderDetails={orderDetails}
          handleChangeQty={handleChangeQty}
          setIsCheckoutDialogOpen={setIsCheckoutDialogOpen}
        />
      </Grid>
    </Grid>
    <Checkout
      isCheckoutDialogOpen={isCheckoutDialogOpen}
      setIsCheckoutDialogOpen={setIsCheckoutDialogOpen}
      orderDetails={orderDetails}
      checkout={checkout}
    />
  </div>
);

Order.propTypes = {
  menu: menuPropTypes.isRequired,
  handleAddToOrder: PropTypes.func.isRequired,
  handleRemoveFromOrder: PropTypes.func.isRequired,
  orderDetails: orderDetailsPropTypes.isRequired,
  handleChangeQty: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  isCheckoutDialogOpen: PropTypes.bool.isRequired,
  setIsCheckoutDialogOpen: PropTypes.func.isRequired,
};

export default Order;
