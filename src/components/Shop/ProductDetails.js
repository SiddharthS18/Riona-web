import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../Context";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { img, title, info, price, inCart } = value.DetailProduct;
          return (
            <Container>
              <Wrapper>
                <ImgContainer>
                  <Image src={img} />
                </ImgContainer>
                <InfoContainer>
                  <Title>{title}</Title>
                  <Desc>{info}</Desc>
                  <Price>₹ {price}</Price>
                  <AddContainer>
                    <Button Added={inCart ? true : false}>
                      {inCart ? <p added>ADDED TO CART</p> : <p>ADD TO CART</p>}
                    </Button>
                  </AddContainer>
                </InfoContainer>
              </Wrapper>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}
