import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    FormLabel,
    FormControl
  } from "material-ui/Form";
import { Grid, Button, TextField, MenuItem } from "material-ui";

import CheckboxGroup from "../../general/checkbox-group";
import quantityOptions from "../../../constants/quantity-options";
import { TWO } from "../../../constants/consts";

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            toppings: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.renderCheckboxGroup = this.renderCheckboxGroup.bind(this);
    }

    handleChange(name, event) {
        const toppings = { ...this.state.toppings, [name]: event.target.checked };
        if (!event.target.checked) {
            delete toppings[name];
        }
        this.setState({ toppings });
    }

    handleSelect(name, event) {
        this.setState({ [name]: event.target.value });
    }

    handleSubmit() {
        const { handleAddToOrder, name } = this.props;
        const price = this.props.price * this.state.qty;
        handleAddToOrder({ name, price, ...this.state });
        this.setState({ toppings: {}, qty: 1 });
    }

    renderCheckboxGroup(options) {
        return (
            <CheckboxGroup
                options={options}
                handleChange={this.handleChange}
                optionsChecked={this.state.toppings}
            />
        );
    }

    render() {
        const { toppingsOptions } = this.props;
        return (
            <div>
                <form>
                    <FormControl className="full-width" component="fieldset">
                        <FormLabel component="legend">Toppings</FormLabel>
                        <div className="order-form-inputs">
                            <Grid container>
                                <Grid item xs={6}>
                                    {
                                        this.renderCheckboxGroup(
                                            toppingsOptions.slice(0, toppingsOptions.length / TWO)
                                        )
                                    }
                                </Grid>
                                <Grid item xs={6}>
                                    {
                                        this.renderCheckboxGroup(
                                            toppingsOptions.slice(toppingsOptions.length / TWO)
                                        )
                                    }
                                </Grid>
                            </Grid>
                            <TextField
                                select
                                label="QTY"
                                value={this.state.qty}
                                onChange={(e) => this.handleSelect("qty", e)}
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
                        </div>
                        <div>
                            <Button
                                className="add-to-order-btn"
                                variant="raised"
                                onClick={this.handleSubmit.bind(this)}
                            >
                                Add to Order
                            </Button>
                        </div>
                    </FormControl>
                </form>
                <style jsx>
                    {`
                        .full-width: {
                            width: 100%;
                        }
                        .order-form-inputs {
                            margin-left: 20px;
                        }
                        .add-to-order-btn {
                            float: right;
                        }
                    `}
                </style>
            </div>
        );
    }
}

OrderForm.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    handleAddToOrder: PropTypes.func
};

export default OrderForm;
