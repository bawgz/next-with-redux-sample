import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Button,
  TextField,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import RadioButtonGroup from '../../general/radio-button-group';
import quantityOptions from '../../../constants/quantity-options';

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
      filling: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(filling) {
    this.setState({ filling });
  }

  handleSelect(name, event) {
    this.setState({ [name]: event.target.value });
  }

  handleSubmit() {
    const { handleAddToOrder, name, price, image } = this.props;
    handleAddToOrder({ name, pricePerItem: price, image, ...this.state });
    this.setState({ filling: '', qty: 1 });
  }

  render() {
    const { fillingsOptions, classes } = this.props;
    return (
      <div>
        <form>
          <FormControl className={classes.fullWidth} component="fieldset">
            <Grid container>
              <Grid item xs={12}>
                <RadioButtonGroup
                  options={fillingsOptions}
                  handleChange={this.handleChange}
                  filling={this.state.filling}
                />
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
                  variant="contained"
                  onClick={this.handleSubmit}
                  color="primary"
                >
                  Add to Order
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </form>
      </div>
    );
  }
}

OrderForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddToOrder: PropTypes.func.isRequired,
  fillingsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
  classes: PropTypes.shape({
    fullWidth: PropTypes.string.isRequired,
    buttonStyle: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(styles)(OrderForm);
