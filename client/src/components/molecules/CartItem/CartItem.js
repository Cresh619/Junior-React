import React, { Component } from "react";
class CartItem extends Component {

  render() {
    const {id, name, prices, atr, quantity} = this.props;

    return (
      <div>
      {console.log(id)}
        <div>
          <p>{name}</p>
          <p><span>{prices[0].amount}</span><span>{prices[0].currency.symbol}</span></p>
          <div>
            <div>
              {atr.map((attribute) => (
                <div key={attribute.name}>
                  <h5>{attribute.name}</h5>
                  {attribute.items.map((item) => (
                    <button key={item.value}>{item.value}</button>
                  ))}
                </div>
              ))}
            </div>
        </div>
        <div>
          <button>+</button>
          <p>{quantity}</p>
          <button>-</button>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      </div>
    );
  }
}



export default CartItem;
