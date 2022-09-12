import React, { Component } from "react";
import "../../assets/styles/styleReset.css";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../assets/styles/GlobalStyle";
import { Theme } from "../../assets/styles/theme";
import Navigation from "../organisms/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { store } from '../../store'
import { Provider } from 'react-redux'

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

const Wrapper = styled.main`
padding: 50px;
`;

class Layout extends Component {
  render() {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <ThemeProvider theme={Theme}>
              <GlobalStyle />
              <Navigation />
              <Wrapper>
              {this.props.children}
              </Wrapper>
            </ThemeProvider>
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default Layout;
