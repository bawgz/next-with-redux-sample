import React from "react";
import PropTypes from "prop-types";
import { Divider, CardContent, Grid, TextField, MenuItem } from "material-ui";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import Typography from "material-ui/Typography/Typography";

import quantityOptions from "../../../constants/quantity-options";
import { objectToCommaSeparatedString } from "../../../util/util-methods";

const OrderItem = ({ orderItem: {name, qty, price, toppings, key}, handleRemoveFromOrder }) => (
    <div className="order-item">
        <Grid container alignItems="center">
            <Grid item xs={5}>
                <Typography variant="subheading" component="h3">
                    { name }
                </Typography>
                <Typography color="textSecondary">{ objectToCommaSeparatedString(toppings) }</Typography>
            </Grid>
            <Grid item xs={3}>
                <TextField
                    select
                    value={qty}
                >
                    {
                        quantityOptions.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </Grid>
            <Grid item xs={2}>
                <Typography>{ `$${price}` }</Typography>
            </Grid>
            <Grid item xs={2}>
                <IconButton aria-label="Delete" onClick={() => handleRemoveFromOrder(key)}>
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </Grid>
        <style jsx>
          {`
            .order-item {
              margin-top: 10px;
            }
          `}
        </style>
    </div>
);

OrderItem.propTypes = {
    orderItem: PropTypes.object,
    removeFromOrderAction: PropTypes.func
};

export default OrderItem;
