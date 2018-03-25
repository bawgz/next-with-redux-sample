import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { Grid } from "material-ui";
  
import OrderComponent from "../components/order";
import { initStore, addToOrder, removeFromOrder } from "../ducks";
import menu from "../constants/menu-items";
import toppings from "../constants/toppings";
import withRoot from '../util/with-root';

class Order extends React.Component {
  static getInitialProps () {
    return { toppings, menu };
  }
  
  render() {
    const { addToOrderAction, removeFromOrderAction, orderDetails } = this.props;
      return (
        <OrderComponent handleAddToOrder={addToOrderAction} handleRemoveFromOrder={removeFromOrderAction} orderDetails={orderDetails} menu={menu} toppings={toppings} />
      );
  }
}

const mapStateToProps = ({ orderDetails }) => ({
  orderDetails
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToOrderAction: bindActionCreators(addToOrder, dispatch),
    removeFromOrderAction: bindActionCreators(removeFromOrder, dispatch)
  }
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(Order));
