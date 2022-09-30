import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../../molecules/CartItem/CartItem";

class Cart extends Component {
  render() {

    const {cart}  = this.props.cart

    return (
      <div>
        <div>
          <div>
            <h3>My Bag</h3>
            <span>3 Items</span>
          </div>
          <div>
            {cart.map((item) => ( 
              <CartItem 
              key={item.product.id}
              id={item.product.id}
              name={item.product.name}
              prices={item.product.prices}
              atr={item.product.attributes}
              quantity = {item.quantity}
              />
            ))}
          </div>
          <div>
            <p>Total: </p>
            <p>{this.props.getPrice() || 0} {"$"} </p>
          </div>
          <div>
            <button>Viev Bag</button>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  getPrice: () => {
    let totalPrice= 0;
    state.cart.cart.forEach((item) => totalPrice += item.product.prices[0].amount * item.quantity)
    return totalPrice;
  }
});

export default connect(mapStateToProps)(Cart);
