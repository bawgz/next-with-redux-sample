import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardActions, Button, Grid, Divider } from "material-ui";

import OrderItem from "./order-item2";

const OrderDetails = ({ orderDetails, handleRemoveFromOrder }) => (
    <div>
      <Card raised={true}>
        <CardContent>
          <Typography variant="headline" component="h2">Order Summary</Typography>
          {
            Object.keys(orderDetails).length === 0 ? (
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
                  Object.keys(orderDetails).map((orderItem, i) => (
                    <OrderItem key={i} orderItem={orderDetails[orderItem]} handleRemoveFromOrder={handleRemoveFromOrder} />
                ))}
              </div>
            )
          }
        </CardContent>
        {
          Object.keys(orderDetails).length !== 0 &&
          (
            <CardActions>
              <Grid container justify="center">
                <Grid item>
                  <Button variant="raised" color="primary">Checkout</Button>
                </Grid>
              </Grid>
            </CardActions>
          )
        }
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
