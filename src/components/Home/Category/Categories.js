import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../../../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Title = styled.h1`
  font-size: 25px;
  margin: 10px 0px -10px 25px;
  color: #a002a6;
`;

const Categories = () => {
  return (
    <>
      <Title>Categories</Title>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
