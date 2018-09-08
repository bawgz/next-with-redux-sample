import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import {
  menuPropTypes,
  orderDetailsPropTypes,
  addressPropTypes,
} from '../../constants/prop-types';
import CreateOrder from './create-order';
import OrderDetails from './order-details';
import Checkout from './checkout';
import Address from './address';

const Order = ({
  menu,
  handleAddToOrder,
  handleRemoveFromOrder,
  orderDetails,
  handleChangeQty,
  checkout,
  isCheckoutDialogOpen,
  setIsCheckoutDialogOpen,
  address,
  handleSubmitAddress,
}) => (
  <div>
    {Object.keys(address).length === 0 ? (
      <Address handleSubmitAddress={handleSubmitAddress} />
    ) : (
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
    )}
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
  address: addressPropTypes,
  handleSubmitAddress: PropTypes.func.isRequired,
};

Order.defaultProps = {
  address: {},
};

export default Order;
