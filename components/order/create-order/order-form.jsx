import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  FormLabel,
  FormControl,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CheckboxGroup from '../../general/checkbox-group';
import quantityOptions from '../../../constants/quantity-options';
import TWO from '../../../constants/consts';

// We can inject some CSS into the DOM.
const styles = {
  fullWidth: {
    width: '100% !important',
  },
  buttonStyle: {
    marginTop: '27px',
  },
};

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      toppings: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderCheckboxGroup = this.renderCheckboxGroup.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(topping, event) {
    const toppings = { ...this.state.toppings, [topping.name]: topping };
    if (!event.target.checked) {
      delete toppings[topping.name];
    }
    this.setState({ toppings });
  }

  handleSelect(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit() {
    const { handleAddToOrder, name, price } = this.props;
    handleAddToOrder({ name, pricePerItem: price, ...this.state });
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
    const { toppingsOptions, classes } = this.props;
    return (
      <div>
        <form>
          <FormControl className={classes.fullWidth} component="fieldset">
            <FormLabel component="legend">Toppings</FormLabel>
            <div className="order-form-inputs">
              <Grid container>
                <Grid item xs={6}>
                  {this.renderCheckboxGroup(
                    toppingsOptions.slice(0, toppingsOptions.length / TWO),
                  )}
                </Grid>
                <Grid item xs={6}>
                  {this.renderCheckboxGroup(
                    toppingsOptions.slice(toppingsOptions.length / TWO),
                  )}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    select
                    label="QTY"
                    value={this.state.qty}
                    onChange={e => this.handleSelect('qty', e)}
                    margin="normal"
                  >
                    {quantityOptions.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className={classes.buttonStyle}
                    variant="raised"
                    onClick={this.handleSubmit}
                    color="primary"
                  >
                    Add to Order
                  </Button>
                </Grid>
              </Grid>
            </div>
          </FormControl>
        </form>
        <style jsx>
          {`
            .full-width: {
              width: 100% !important;
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
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddToOrder: PropTypes.func.isRequired,
  toppingsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  classes: PropTypes.shape({
    fullWidth: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(OrderForm);
