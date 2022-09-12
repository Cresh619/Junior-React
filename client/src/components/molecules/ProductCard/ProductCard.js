// import { useQuery } from "@apollo/client";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { GET_CATEGORY } from "../../../API/Query/Category";

const CardWrapper = styled.div`
  div {
    width: 400px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      object-position: center;
    }
  }
`;

class ProductCard extends Component {
  render() {
    // const { data } = this.props;
    return (
      <Link to={`${this.props.id}`}>
        <CardWrapper >
          <div>
            <img src={this.props.image} alt="" />
          </div>
          <div>
            <h2>{this.props.name}</h2>
            <p><span>{this.props.currency}</span><span>{this.props.price}</span></p>
          </div>
        </CardWrapper>
      </Link>
    );
  }
}

export default ProductCard;
