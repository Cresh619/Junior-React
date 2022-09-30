import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/images/logoTransparent.png";
import emptyCart from "../../../assets/images/EmptyCart.png";
import { gql, useQuery } from "@apollo/client";
import { connect } from "react-redux";

const GET_CATEGORY = gql`
  query GetCategories {
    categories {
      name
    }
    currencies {
      label
      symbol
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 0.3fr 1fr;
  align-items: center;
  & > :nth-child(2) {
    justify-self: center;
  }
  & > :nth-child(3) {
    justify-self: end;
  }
`;
const Navbar = styled.nav`
  ul {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    /* justify-content: space-around; */
    gap: 32px;
    align-items: center;
    li {
      padding: 5px 20px;
      font-size: ${({ theme }) => theme.fonts.size.F500};
      a {
        text-decoration: none;
      }
      a.active {
        color: ${({ theme }) => theme.colors.accent.A500};
        text-decoration: underline;
      }
    }
  }
`;

const withQueryHook = (Component) => {
  return (Navigation = (props) => {
    const { loading, error, data } = useQuery(GET_CATEGORY);
    if (loading) return `Wait, data Loading`;
    if (error) return `Error! ${error}`;
    return <Component {...props} data={data} />;
  });
};

class Navigation extends Component {
  render() {
    const { data } = this.props;
    return (
      <Wrapper>
        <Navbar>
          <ul>
            {data.categories.map((category) => (
              <li key={category.name}>
                <NavLink to={`${category.name}`}>{category.name}</NavLink>
              </li>
            ))}
          </ul>
        </Navbar>
        <div>
          <img src={Logo} alt="" width="30" height="30" />
        </div>
        <div>
          <select name="currnecy" id="currnecy">
            {data.currencies.map((currency) => (
              <option key={currency.symbol} value={currency.symbol}>
                {currency.symbol} {currency.label}
              </option>
            ))}
          </select>
          <div>
            <Link to = 'cart'><img src={emptyCart} alt="emptyCart" width="20" height="20" /></Link>
            <p>{this.props.getQuantity()||0}</p>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) =>({
  getQuantity: () => {
    let total = 0;
    state.cart.cart.forEach((item) => total += item.quantity)
    return total;
  }
});

export default connect(mapStateToProps)(withQueryHook(Navigation));