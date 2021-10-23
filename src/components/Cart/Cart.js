import { React, Component } from "react";
import { ProductConsumer } from "../../Context";
import CartList from "./CartList";
import Summary from "./Summary";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
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

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

export default class Cart extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Top>
          <Bottom>
            <ProductConsumer>
              {(value) => {
                return (
                  <>
                    <Info>
                      <CartList value={value} />
                    </Info>
                    <Summary value={value} />
                  </>
                );
              }}
            </ProductConsumer>

            {/* ---------------------------------- */}
          </Bottom>
        </Wrapper>
      </Container>
    );
  }
}
