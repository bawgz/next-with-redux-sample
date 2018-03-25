import React from 'react';
import { Grid } from "material-ui";
  
import CreateOrder from "./create-order";
import OrderDetails from "./order-details";

const Order = ({ menu, toppings, handleAddToOrder, handleRemoveFromOrder, orderDetails }) => (
    <div>
        <Grid container>
            <Grid item xs={8}>
                <CreateOrder menu={menu} toppings={toppings} handleAddToOrder={handleAddToOrder} />
            </Grid>
            <Grid item xs={4}>
                <OrderDetails handleRemoveFromOrder={handleRemoveFromOrder} orderDetails={orderDetails} />
            </Grid>
        </Grid>
    </div>
);

export default Order;
