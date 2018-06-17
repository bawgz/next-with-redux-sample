import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import { Elements } from 'react-stripe-elements';

import { orderDetailsPropTypes } from '../../../constants/prop-types';
import CheckoutFormStripe from './checkout-form-stripe';

const Checkout = ({
  isCheckoutDialogOpen, setIsCheckoutDialogOpen, orderDetails, checkout,
}) => (
  <div>
    <Dialog open={isCheckoutDialogOpen} onClose={() => setIsCheckoutDialogOpen(false)}>
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <Elements>
          <CheckoutFormStripe orderDetails={orderDetails} checkout={checkout} />
        </Elements>
      </DialogContent>
    </Dialog>
  </div>
);

Checkout.propTypes = {
  isCheckoutDialogOpen: PropTypes.bool.isRequired,
  setIsCheckoutDialogOpen: PropTypes.func.isRequired,
  orderDetails: orderDetailsPropTypes.isRequired,
  checkout: PropTypes.func.isRequired,
};

export default Checkout;
