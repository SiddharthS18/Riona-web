import React from "react";
import {
  AiOutlinePlus as Add,
  AiOutlineMinus as Remove,
  AiFillDelete as DeleteIcon,
} from "react-icons/ai";
import styled from "styled-components";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
//hello
const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;
const DeleteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  font-size: 25px;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;
export default function CartProduct({ item, value }) {
  return (
    <>
      <Product>
        <ProductDetail>
          <Image src={item.img} />
          <Details>
            <ProductName>
              <b>Product:</b> {item.title}
            </ProductName>
            <ProductId>
              <b>ID:</b> {item.id}
            </ProductId>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Remove onClick={() => value.decrement(item.id, item.type)} />
            <ProductAmount>2</ProductAmount>
            <Add onClick={() => value.increment(item.id, item.type)} />
          </ProductAmountContainer>
          <ProductPrice>₹ {item.price}</ProductPrice>
        </PriceDetail>
        <DeleteButtonContainer>
          <DeleteIcon onClick={() => value.removeItem(item.id, item.type)} />
        </DeleteButtonContainer>
      </Product>
      <hr />
    </>
  );
}
