import React from "react";
import Dialog, { DialogTitle, DialogContent } from "material-ui/Dialog";
import { Elements } from "react-stripe-elements";

import CheckoutFormStripe from "./checkout-form-stripe";

const Checkout = ({ isCheckoutDialogOpen, setIsCheckoutDialogOpen }) => (
    <div>
        <Dialog open={isCheckoutDialogOpen} onClose={() => setIsCheckoutDialogOpen(false)}>
            <DialogTitle>Checkout</DialogTitle>
            <DialogContent>
                <Elements>
                    <CheckoutFormStripe />
                </Elements>
            </DialogContent>
        </Dialog>
    </div>
);

export default Checkout;