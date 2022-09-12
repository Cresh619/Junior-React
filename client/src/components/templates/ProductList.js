import React, { Component } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useCategory } from "../hooks/useCategory";
import ProductCard from "../molecules/ProductCard/ProductCard";

const hocProduct = (Component) => {
  return (ProductList = (props) => {
    const { name } = useParams();
    const { loading, error, data } = useCategory(name);
    if (loading) return `Wait, data Loading`;
    if (error) return `Error! ${error}`;
    return <Component {...props} data={data} />;
  });
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

class ProductList extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
          <h2>{data.category.name}</h2>
        <Wrapper>
        {data.category.products.map((product) => (
          <ProductCard
            id={product.id}
            image={product.gallery[0]}
            name={product.name}
            price={product.prices[0].amount}
            currency={product.prices[0].currency.symbol}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default hocProduct(ProductList);
