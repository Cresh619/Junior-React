import React, { Component } from 'react';
import { gql, useQuery } from "@apollo/client";
import ProductCard from '../components/molecules/ProductCard/ProductCard';
import styled from 'styled-components';

export const GET_PRODUCTS = gql`
query {
  category (input:{title:"all"}) {
    name
    products {
      id
      name
      gallery
      prices{
        amount
      }
    }
  }
}
`;

const withQueryHook = (Component, query) => {
  return (All = (props) => {
    const { loading, error, data } = useQuery(query);
    if (loading) return `Wait, data Loading`;
    if (error) return `Error! ${error}`;
    return <Component {...props} data={data} />;
  });
};

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 50px;
`;

 class All extends Component {
  render(){
    const { data } = this.props;
    return (
      <div>
      <h2>{data.category.name}</h2>
      <Wrapper>
      {data.category.products.map(product =>
      <ProductCard
      id={product.id}
      image={product.gallery[0]}
      name={product.name}
      price={product.prices[0].amount}
      />)}

      </Wrapper>
      </div>
    )
  }
}

export default withQueryHook(All, GET_PRODUCTS )