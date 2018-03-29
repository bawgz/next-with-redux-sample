import React from "react";
import PropTypes from "prop-types";
import { Divider, CardContent, Grid, TextField, MenuItem } from "material-ui";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import Typography from "material-ui/Typography/Typography";

import quantityOptions from "../../../constants/quantity-options";
import { objectToCommaSeparatedString } from "../../../util/util-methods";

const OrderItem = ({orderItem: {name, qty, price, toppings, key}, handleRemoveFromOrder}) => (
    <div>
        <CardContent>
            <Grid container justify="space-between">
                <Grid item xs={10}>
                    <Typography variant="headline" component="h2">
                        { name }
                    </Typography>
                    <Typography>{ objectToCommaSeparatedString(toppings) }</Typography>
                </Grid>
                <Grid item xs={2}>
                    <IconButton aria-label="Delete" onClick={() => handleRemoveFromOrder(key)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid container justify="space-between" alignItems="flex-end">
                <Grid item>
                    <TextField
                        select
                        label="QTY"
                        value={qty}
                        margin="normal"
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
                <Grid item>
                    <Typography>
                        { `$${price}` }
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <Divider />
    </div>
);

OrderItem.propTypes = {
    orderItem: PropTypes.object,
    removeFromOrderAction: PropTypes.func
};

export default OrderItem;
