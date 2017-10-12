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
      // var list = this.state.list;
      this.props.addItemToCart(+(event.target.value), event.target.name);

      // list.push(" "+event.target.name);
      // debugger;
      // return list;
    }
    else if(event.target.checked === false){
      // var list = this.state.list;
      this.props.removeItemFromCart(+(event.target.value));
      // return list;
    }
    else {
      return null;
    }
  }

  buyCart(list){
    // debugger;
    if(this.props.wallet >= this.props.total){
      this.props.buyCart(this.props.total, list);

      // var spoils = "";
      // spoils.push(this.state.list);
      // this.state.list.length = 0;
    }
    else {
      return this.props.wallet;
    }
  }

  render(){
    const { total, wallet, list, bought} = this.props;
    return(
      <div>

        <p>Cart Total:{total}</p>
        <p>Current Funds in Wallet: {wallet}</p>
        <p>Currently Selected Items: {list} </p>
        <p>Items Bought: {bought} </p>

        <table>
          <tr>
            <td>Item</td>
            <td>Price</td>
            <td>Add to Cart</td>
          </tr>
          <tr>
            <td>Gangbusters</td>
            <td>$300</td>
            <td><input name="Gangbusters" type='checkbox' value="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Sparta</td>
            <td>$300</td>
            <td><input name="Sparta" type='checkbox' value="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Cheif Keef</td>
            <td>$300</td>
            <td><input name="Chief Keef" type='checkbox' value="300" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Crayola</td>
            <td>$6400</td>
            <td><input name="Crayola" type='checkbox' value="6400" onClick={this.handleChange} /></td>
          </tr>
          <tr>
            <td>Zune</td>
            <td>$300</td>
            <td><input name="Zune" type='checkbox' value="300" onClick={this.handleChange} /></td>
          </tr>
        </table>
        <button onClick={this.buyCart(list)}>Buy</button>
      </div>
    )


  }
}

const mapStateToProps = (state) => ({
  total: state.total,
  wallet: state.wallet,
  list: state.list,
  bought: state.bought,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  addItemToCart: (price, name) => dispatch(addItemToCart(price, name)),
  removeItemFromCart: (price, name) => dispatch(removeItemFromCart(price, name)),
  buyCart: (total, list) => dispatch(buyCart(total, list)),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  CheckboxComponent,
);
