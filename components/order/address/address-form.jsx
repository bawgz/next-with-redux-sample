import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  textField: {
    width: '100%',
  },
});

class AddressForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      street: '',
      city: '',
      state: '',
      zip: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    this.setState({
      [name]: event.target.value,
    });
  }

  render() {
    const { classes, handleSubmitAddress } = this.props;
    const { street, city, state, zip } = this.state;
    return (
      <form noValidate autoComplete="off">
        <h2>Address</h2>
        <TextField
          className={classes.textField}
          id="street"
          label="Street"
          value={street}
          onChange={event => this.handleChange(event, 'street')}
          margin="normal"
        />
        <TextField
          className={classes.textField}
          id="city"
          label="City"
          value={city}
          onChange={event => this.handleChange(event, 'city')}
          margin="normal"
        />
        <TextField
          className={classes.textField}
          id="state"
          label="State"
          value={state}
          onChange={event => this.handleChange(event, 'state')}
          margin="normal"
        />
        <TextField
          className={classes.textField}
          id="zip"
          label="Zip Code"
          value={zip}
          onChange={event => this.handleChange(event, 'zip')}
          margin="normal"
        />
        <Button
          onClick={() => handleSubmitAddress({ street, city, state, zip })}
        >
          Submit
        </Button>
      </form>
    );
  }
}

AddressForm.propTypes = {
  handleSubmitAddress: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    textField: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AddressForm);
