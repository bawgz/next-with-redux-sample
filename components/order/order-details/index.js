import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardActions, Button, Grid, Divider } from "material-ui";
import Link from "next/link";

import OrderItem from "./order-item";

const OrderDetails = ({ orderDetails, handleRemoveFromOrder, handleChangeQty, setIsCheckoutDialogOpen }) => (
    <div>
      <Card raised={true}>
        <CardContent>
          <Typography variant="headline" component="h2">Order Summary</Typography>
          {
            Object.keys(orderDetails.items).length === 0 ? (
              <div>
                <Divider />
                <div className="margin-top">
                  <Typography align="center" color="textSecondary">
                    Your Order is Empty
                  </Typography>
                </div>
              </div>
            ) : (
              <div className="margin-top-10">
                <Grid container>
                  <Grid item xs={2} />
                  <Grid item xs={5}>
                    <Typography color="textSecondary">ITEM</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography color="textSecondary">QTY</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography color="textSecondary">PRICE</Typography>
                  </Grid>
                </Grid>
                <Divider />
                { 
                  Object.keys(orderDetails.items).map((orderItem, i) => (
                    <OrderItem
                      key={i}
                      orderItem={orderDetails.items[orderItem]}
                      handleRemoveFromOrder={handleRemoveFromOrder}
                      handleChangeQty={handleChangeQty}
                    />
                ))}
                <Grid container>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={7}></Grid>
                  <Grid item xs={3}>
                    <Typography>TOTAL: </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography>{ `$${orderDetails.total}` }</Typography>
                  </Grid>
                  <Grid item></Grid>
                  <Grid container justify="center">
                    <Grid item>
                      <div className="margin-top-10">
                        <Button
                          onClick={() => setIsCheckoutDialogOpen(true)}
                          variant="raised"
                          color="primary"
                        >
                          Checkout
                        </Button>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            )
          }
        </CardContent>
      </Card>
      <style jsx>
          {`
            .margin-top {
              margin-top: 20px;
            }
            .margin-top-10 {
              margin-top: 10px;
            }
          `}
      </style>
    </div>
);

OrderDetails.propTypes = {
  orderDetails: PropTypes.object,
  removeFromOrderAction: PropTypes.func
};

export default OrderDetails;
