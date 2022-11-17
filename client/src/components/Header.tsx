import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: teal;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 80;
`;

const Logo = styled.h1``;

const NavBtn = styled.nav``;

const MenuLink = styled(Link)`
  margin-right: 20px;
  cursor: pointer;
`;


const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>Thumbnail maker</Logo>
      <NavBtn>
        <MenuLink to='/'>Main Page</MenuLink>
        <MenuLink to='/archive'>Archive</MenuLink>
      </NavBtn>
    </Wrapper>
  )
}

export default Header;