import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(sprops) => sprops.type === "total" && "500"};
  font-size: ${(sprops) => sprops.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  background-color: black;
  font-weight: 600;
  font-size: 15px;
  background-image: linear-gradient(to right, #c9aba9, #edbcf5);
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #edbcf5;
  }
`;
export default function Summary({ value }) {
  return (
    <div>
      <SummaryContainer>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryItemText>Subtotal</SummaryItemText>
          <SummaryItemPrice>₹ {value.cartSubTotal}</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryItemText>Delivery</SummaryItemText>
          <SummaryItemPrice>₹ 0 (Free Delivery!)</SummaryItemPrice>
        </SummaryItem>
        <SummaryItem type="total">
          <SummaryItemText>Total</SummaryItemText>
          <SummaryItemPrice>₹ {value.cartSubTotal}</SummaryItemPrice>
        </SummaryItem>
        <Button>CHECKOUT NOW</Button>
      </SummaryContainer>
    </div>
  );
}
