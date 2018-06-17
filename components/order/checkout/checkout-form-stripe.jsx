import React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import Button from 'material-ui/Button';

const inputFieldStyle = {
  display: 'block',
  margin: '10px 0 20px 0',
  width: '100%',
  border: 'none',
  maxWidth: '500px',
  padding: '10px 14px',
  boxShadow:
    'rgba(50, 50, 93, 0.14902) 0px 1px 3px, rgba(0, 0, 0, 0.0196078) 0px 1px 0px',
  borderRadius: '4px',
  background: 'white',
};

const createOptions = () => ({
  style: {
    base: {
      fontSize: '14px',
      color: '#424770',
      letterSpacing: '0.025em',
      fontFamily: 'Source Code Pro, monospace',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
});

class CheckoutFormStripe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      formError: '',
    };
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  async handleOnSubmit(ev) {
    const { name } = this.state;
    const { stripe, checkout, orderDetails } = this.props;
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    const resp = await stripe.createToken({ name });

    console.log(resp);
    console.log('Received Stripe token:', resp.token);
    const order = { ...orderDetails, name };
    if (!resp.error) {
      await checkout(order, resp.token.id);
    } else {
      this.setState({ formError: resp.error.message });
    }
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">
            Name on Card
            <input
              name="name"
              type="text"
              style={inputFieldStyle}
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </label>
          <label htmlFor="cardDetails">
            Card Details
            <CardElement
              name="cardDetails"
              className="stripe-element"
              style={inputFieldStyle}
              {...createOptions}
            />
          </label>
          <Button type="submit">Confirm Order</Button>
          <p>{this.state.formError}</p>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutFormStripe);
