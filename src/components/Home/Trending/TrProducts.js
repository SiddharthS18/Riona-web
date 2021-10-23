import styled from "styled-components";
import TrProduct from "./TrProduct";
import { ProductConsumer } from "../../../Context";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 5px 0px -10px 25px;
  color: #a002a6;
`;

const TrProducts = () => {
  return (
    <>
      <Title>Trending Right Now</Title>
      <Container>
        <ProductConsumer>
          {(value) => {
            return value.TrProducts.map((item) => {
              return <TrProduct key={item.id} item={item} />;
            });
          }}
        </ProductConsumer>
      </Container>
    </>
  );
};

export default TrProducts;
