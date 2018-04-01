import React from 'react';
import { Grid } from "material-ui";
  
import CreateOrder from "./create-order";
import OrderDetails from "./order-details";

const Order = ({ menu, handleAddToOrder, handleRemoveFromOrder, orderDetails, handleChangeQty }) => (
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
                />
            </Grid>
        </Grid>
    </div>
);

export default Order;
