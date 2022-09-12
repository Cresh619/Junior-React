import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../assets/images/logoTransparent.png";
import emptyCart from "../../../assets/images/EmptyCart.png";
import { gql, useQuery} from "@apollo/client";

const GET_CATEGORY = gql`
  query GetCategories{
    categories {
      name
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
                <NavLink to={`${category.name}`}>
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Navbar>
        <div>
          <img src={Logo} alt="" width="30" height="30" />
        </div>
        <div>
          <select name="currnecy" id="currnecy">
            <option value="$">$</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <img src={emptyCart} alt="" width="20" height="20" />
        </div>
      </Wrapper>
    );
  }
}

export default withQueryHook(Navigation, GET_CATEGORY);
