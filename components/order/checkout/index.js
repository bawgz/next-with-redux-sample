import React from "react";
import Dialog, { DialogTitle, DialogContent } from "material-ui/Dialog";
import { Elements } from "react-stripe-elements";

import CheckoutFormStripe from "./checkout-form-stripe";

const Checkout = ({ isCheckoutDialogOpen, setIsCheckoutDialogOpen, orderDetails, checkout }) => (
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

export default Checkout;