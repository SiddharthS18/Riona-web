import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../Context";
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px;
  max-width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover {
    background-color: #e9f5f5;
  }
`;

const Image = styled.img`
  height: 338px;
  z-index: 2;
`;

const Button = styled.button`
  margin: 15px 15px;
  padding: 5px;
  font-size: 15px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c9aba9;
    color: #fff;
  }
`;

const Title = styled.h1`
  font-size: 15px;
  margin: 5px 15px;
`;

const PriceCart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

const LinkD = styled(Link)`
  cursor: pointer;
`;
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, type } = this.props.item;
    return (
      <ProductConsumer>
        {(value) => (
          <Container onClick={() => value.handleDetail(id, type)}>
            <LinkD to="/ProductDetails">
              <Image src={img} />
            </LinkD>
            <Title>{title}</Title>
            <PriceCart>
              <Title>₹ {price}</Title>
              <Button Added={inCart ? true : false}>
                {inCart ? <p added>ADDED TO CART</p> : <p>ADD TO CART</p>}
              </Button>
            </PriceCart>
          </Container>
        )}
      </ProductConsumer>
    );
  }
}
