import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Elements } from 'react-stripe-elements';

import {
  orderDetailsPropTypes,
  addressPropTypes,
} from '../../../constants/prop-types';
import CheckoutFormStripe from './checkout-form-stripe';

const Checkout = ({
  isCheckoutDialogOpen,
  setIsCheckoutDialogOpen,
  orderDetails,
  checkout,
  address,
}) => (
  <div>
    <Dialog
      open={isCheckoutDialogOpen}
      onClose={() => setIsCheckoutDialogOpen(false)}
    >
      <DialogTitle>Checkout</DialogTitle>
      <DialogContent>
        <Elements>
          <CheckoutFormStripe
            orderDetails={orderDetails}
            checkout={checkout}
            address={address}
          />
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
  address: addressPropTypes.isRequired,
};

export default Checkout;
