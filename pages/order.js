import React from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { Grid } from "material-ui";

import OrderComponent from "../components/order";
import NavBar from "../components/general/nav-bar";
import { initStore, addToOrder, removeFromOrder, fetchMenu, changeQty } from "../ducks";
import withRoot from '../util/with-root';

class Order extends React.Component {
  static async getInitialProps ({ store }) {
    await store.dispatch(fetchMenu());
  }
  
  render() {
    const { addToOrderAction, removeFromOrderAction, orderDetails, menu, changeQtyAction } = this.props;
      return (
        <div>
          <Grid container>
            <Grid item xs={12}>
              <NavBar />            
            </Grid>
            <Grid item xs={12}>
              <OrderComponent
                handleAddToOrder={addToOrderAction}
                handleRemoveFromOrder={removeFromOrderAction}
                orderDetails={orderDetails}
                menu={menu}
                handleChangeQty={changeQtyAction}
              />
            </Grid>
          </Grid>
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
  changeQtyAction: changeQty
}

export default withRoot(withRedux(initStore, mapStateToProps, mapDispatchToProps)(Order));
