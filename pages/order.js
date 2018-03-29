import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { Grid } from "material-ui";

import OrderComponent from "../components/order";
import { initStore, addToOrder, removeFromOrder, fetchMenu } from "../ducks";
import withRoot from '../util/with-root';

class Order extends React.Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(fetchMenu());
  }
  
  render() {
    const { addToOrderAction, removeFromOrderAction, orderDetails, menu } = this.props;
      return (
        <div>
          <OrderComponent handleAddToOrder={addToOrderAction} handleRemoveFromOrder={removeFromOrderAction} orderDetails={orderDetails} menu={menu} />
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
  fetchMenuAction: fetchMenu
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(Order));
