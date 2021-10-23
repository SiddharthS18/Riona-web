import { ShoppingCartOutlined as ShoppingCart } from "@material-ui/icons";
import logo from "../../resources/logo.jpeg";
import React from "react";
import styled from "styled-components";
import { mobile } from "../../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 10%;
  background-image: linear-gradient(to right, #c9aba9, #f1efe3);
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 32px;
  font-weight: bold;
  font-family: "Scheherazade New", serif;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: right;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  margin-left: 25px;
  text-align: center;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const LogoImg = styled.img`
  height: 50px;
`;

const LogoImage = styled(Link)``;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoImage to="/">
            <LogoImg src={logo} alt="logo"></LogoImg>
          </LogoImage>
          <MenuItem to="/Shop">SHOP</MenuItem>
        </Left>
        <Center>
          <Logo to="/">Riona</Logo>
        </Center>
        <Right>
          <MenuItem to="/Cart">
            <ShoppingCart />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
