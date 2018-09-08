import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';

import {
  menuPropTypes,
  orderDetailsPropTypes,
  addressPropTypes,
} from '../constants/prop-types';
import OrderComponent from '../components/order';
import {
  addToOrder,
  removeFromOrder,
  fetchMenu,
  changeQty,
  checkout,
  setAddress,
} from '../ducks';
import withRoot from '../util/with-root';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      isCheckoutDialogOpen: false,
    };
    this.setIsCheckoutDialogOpen = this.setIsCheckoutDialogOpen.bind(this);
  }

  componentDidMount() {
    // needs to be in componentDidMount as this runs on client only and window object needed.
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      stripe: window.Stripe('pk_test_WdfT8LFHRxAs9HmdVyKn56x1'),
    });
  }

  static async getInitialProps({ store, req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    await store.dispatch(fetchMenu(baseUrl));
  }

  setIsCheckoutDialogOpen(isCheckoutDialogOpen) {
    this.setState({ isCheckoutDialogOpen });
  }

  render() {
    const {
      addToOrderAction,
      removeFromOrderAction,
      orderDetails,
      menu,
      changeQtyAction,
      checkoutAction,
      address,
      setAddressAction,
    } = this.props;
    const {
      loadSqript,
      sqriptLoaded,
      allScriptsLoaded,
      isCheckoutDialogOpen,
    } = this.state;
    console.log(setAddressAction);
    return (
      <div>
        <StripeProvider stripe={this.state.stripe}>
          <OrderComponent
            handleAddToOrder={addToOrderAction}
            handleRemoveFromOrder={removeFromOrderAction}
            orderDetails={orderDetails}
            menu={menu}
            handleChangeQty={changeQtyAction}
            sqriptLoaded={sqriptLoaded}
            loadSqript={loadSqript}
            allScriptsLoaded={allScriptsLoaded}
            handleOnLoadScript={this.handleOnLoadScript}
            handleLastScriptLoaded={this.handleLastScriptLoaded}
            checkout={checkoutAction}
            isCheckoutDialogOpen={isCheckoutDialogOpen}
            setIsCheckoutDialogOpen={this.setIsCheckoutDialogOpen}
            address={address}
            handleSubmitAddress={setAddressAction}
          />
        </StripeProvider>
      </div>
    );
  }
}

Order.propTypes = {
  addToOrderAction: PropTypes.func.isRequired,
  removeFromOrderAction: PropTypes.func.isRequired,
  orderDetails: orderDetailsPropTypes.isRequired,
  menu: menuPropTypes.isRequired,
  changeQtyAction: PropTypes.func.isRequired,
  checkoutAction: PropTypes.func.isRequired,
  address: addressPropTypes,
  setAddressAction: PropTypes.func.isRequired,
};

Order.defaultProps = {
  address: {},
};

const mapStateToProps = ({ orderDetails, menu, address }) => ({
  orderDetails,
  menu,
  address,
});

const mapDispatchToProps = {
  addToOrderAction: addToOrder,
  removeFromOrderAction: removeFromOrder,
  fetchMenuAction: fetchMenu,
  changeQtyAction: changeQty,
  checkoutAction: checkout,
  setAddressAction: setAddress,
};

export default withRoot(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Order),
);
