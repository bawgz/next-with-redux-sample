import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography, CardActions, Button, Grid, Divider } from "material-ui";

import OrderItem from "./order-item";

const OrderDetails = ({ orderDetails, handleRemoveFromOrder }) => (
    <div>
      <Card raised={true}>
        <CardContent>
          <Typography variant="headline" component="h2">Order Summary</Typography>
          <Divider />
          {
            Object.keys(orderDetails).length === 0 ? (
              <div className="margin-top">
                <Typography align="center" color="textSecondary">
                  Your Order is Empty
                </Typography>
              </div>
            ) : Object.keys(orderDetails).map((orderItem, i) => (
              <OrderItem key={i} orderItem={orderDetails[orderItem]} handleRemoveFromOrder={handleRemoveFromOrder} />
            ))
          }
        </CardContent>
        <CardActions>
          <Grid container justify="flex-end">
            <Grid item>
              <Button size="small">Checkout</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
      <style jsx>
          {`
            .margin-top {
              margin-top: 20px;
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
