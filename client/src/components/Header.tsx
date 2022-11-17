import * as React from 'react';
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

const Menu = styled.span`
  margin-right: 20px;
  cursor: pointer;
`;


const Header: React.FC = () => {
  return (
    <Wrapper>
      <Logo>Thumbnail maker</Logo>
      <NavBtn>
        <Menu>Main Page</Menu>
        <Menu>Archive</Menu>
      </NavBtn>
    </Wrapper>
  )
}

export default Header;