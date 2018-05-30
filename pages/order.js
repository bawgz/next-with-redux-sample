import React from 'react';
import { connect } from 'react-redux';
import { Grid } from "material-ui";
import { StripeProvider } from 'react-stripe-elements';

import OrderComponent from "../components/order";
import NavBar from "../components/general/nav-bar";
import { addToOrder, removeFromOrder, fetchMenu, changeQty, checkout } from "../ducks";
import withRoot from '../util/with-root';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stripe: null,
      isCheckoutDialogOpen: false
    }
    this.setIsCheckoutDialogOpen = this.setIsCheckoutDialogOpen.bind(this);
  }

  static async getInitialProps ({ store }) {
    await store.dispatch(fetchMenu());
  }

  componentDidMount() {
    this.setState({ stripe: window.Stripe('pk_test_WdfT8LFHRxAs9HmdVyKn56x1') })
  }

  setIsCheckoutDialogOpen(isCheckoutDialogOpen) {
    this.setState({isCheckoutDialogOpen});
  }

  render() {
    const { addToOrderAction, removeFromOrderAction, orderDetails, menu, changeQtyAction, checkoutAction } = this.props;
    const { loadSqript, sqriptLoaded, allScriptsLoaded, isCheckoutDialogOpen } = this.state;
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
            />
        </StripeProvider>
      </div>
    );
  }
}

const mapStateToProps = ({ orderDetails, menu }) => ({
    orderDetails, menu
});

const mapDispatchToProps = {
  addToOrderAction: addToOrder,
  removeFromOrderAction: removeFromOrder,
  fetchMenuAction: fetchMenu,
  changeQtyAction: changeQty,
  checkoutAction: checkout
}

export default withRoot(connect(mapStateToProps, mapDispatchToProps)(Order));
