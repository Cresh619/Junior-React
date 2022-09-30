import React, { Component } from "react";
import { useProduct } from "../hooks/useProduct";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { addToCart } from "../../store/Features/Cart/cartSlice";

const hocProduct = (Component) => {
  return (ProductDetail = (props) => {
    const { id } = useParams();
    const { loading, error, data } = useProduct(id);
    if (loading) return `Wait, data Loading`;
    if (error) return `Error! ${error}`;
    return <Component {...props} data={data} />;
  });
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Gallery = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
`;

class ProductDetail extends Component {
  render() {
    const { product } = this.props.data;
    return (
      <div>
        <Wrapper>
          <Gallery>
            <div>
              {product.gallery.map((image) => (
                <img key={image} src={image} alt="" width="100" height="100" />
              ))}
            </div>
            <img src={product.gallery[0]} alt="" width="600" height="600"  />
          </Gallery>
          <div>
            <h2>{product.name}</h2>
            <div>
              {product.attributes.map((attribute) => (
                <div key={attribute.name}>
                  <h5>{attribute.name}</h5>
                  {attribute.items.map((item) => (
                    <button key={item.value}>{item.value}</button>
                  ))}
                </div>
              ))}
            </div>
            <div>
              <p>PRICE</p>
              <p><span>{product.prices[0].currency.symbol}</span><span>{product.prices[0].amount}</span></p>
            </div>
            <button onClick={()=>this.props.addToCart({product})}>ADD TO CART</button>
            <p>DESCRIPTION</p>
          </div>
        </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // cart: state.cart,
  // something: console.log(state.cart)
})

const mapDispatchToProps = {addToCart};


export default connect(mapStateToProps, mapDispatchToProps)(hocProduct(ProductDetail));
