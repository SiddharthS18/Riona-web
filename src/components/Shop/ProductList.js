import React, { Component } from "react";
import styled from "styled-components";
import Product from "./Product";
// import { SareeProducts } from "./SareeData";
import { ProductConsumer } from "../../Context";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
`;

export default class ProductList extends Component {
  render() {
    return (
      <Container>
        <ProductConsumer>
          {(value) => {
            return value.Products.map((product) => {
              return <Product product={product} value={value} />;
            });
          }}
        </ProductConsumer>
      </Container>
    );
  }
}
