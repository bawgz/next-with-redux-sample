import React from 'react';
import { Grid } from "material-ui";
  
import CreateOrder from "./create-order";
import OrderDetails from "./order-details";
import Checkout from "./checkout"

const Order = ({ 
    menu, handleAddToOrder, handleRemoveFromOrder, orderDetails, handleChangeQty,
    sqriptLoaded, loadSqript, allScriptsLoaded, handleOnLoadScript, handleLastScriptLoaded,
    checkout, isCheckoutDialogOpen, setIsCheckoutDialogOpen
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
        />
    </div>
);

export default Order;
