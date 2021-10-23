import styled from "styled-components";
import { mobile } from "../../../responsive";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../../Context";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-border: 1px solid black;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c9aba9;
    color: #fff;
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <ProductConsumer>
      {(value) => (
        <Container onClick={() => value.handleItems(item.type)}>
          <Image src={item.img} />
          <Info>
            <Title>{item.title}</Title>
            <Link to="/ProductList">
              <Button>SHOP NOW</Button>
            </Link>
          </Info>
        </Container>
      )}
    </ProductConsumer>
  );
};

export default CategoryItem;
