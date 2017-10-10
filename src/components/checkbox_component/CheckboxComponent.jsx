import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart, buyCart } from '../../js/redux/actions/CheckboxActions'



class CheckboxComponent extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.handleChange = this.handleChange.bind(this);
    this.buyCart = this.buyCart.bind(this);

  }

  handleChange(event){
    // debugger;
    if(event.target.checked === true){
      this.props.addItemToCart(+(event.target.id));
    }
    else if(event.target.checked === false){
      this.props.removeItemFromCart(+(event.target.id));
    }
    else {
      return null;
    }
  }

  buyCart(){
    // debugger;
    this.props.buyCart(this.props.total);
  }

  render(){
    const { total, wallet } = this.props;
    return(
      <div>

        <p>Cart Total:{total}</p>
        <p>Current Funds in Wallet: {wallet}</p>

        <table>
          <tr>
            <td>Item</td>
            <td>Price</td>
            <td>Add to Cart</td>
          </tr>
          <tr>
            <td>Gangbuster</td>
            <td>$300</td>
            <td><input type='checkbox' id="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Sparta</td>
            <td>$300</td>
            <td><input type='checkbox' id="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Cheif Keef</td>
            <td>$300</td>
            <td><input type='checkbox' id="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Crayola</td>
            <td>$300</td>
            <td><input type='checkbox' id="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Zune</td>
            <td>$300</td>
            <td><input type='checkbox' id="300" onClick={this.handleChange} /></td>
          </tr>
        </table>
        <button onClick={this.buyCart}>Buy</button>
      </div>
    )


  }
}

const mapStateToProps = (state) => ({
  total: state.total,
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  addItemToCart: price => dispatch(addItemToCart(price)),
  removeItemFromCart: price => dispatch(removeItemFromCart(price)),
  buyCart: total => dispatch(buyCart(total)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  CheckboxComponent,
);
