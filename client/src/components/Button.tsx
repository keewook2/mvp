import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;
  border: none;
  border-radius: 4px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;

  background-color: #ccc;
  color: #383838;

  &:active,
  &:hover,
  &:focus {
    background-color: #425af5;
    color: white;
  }
`

const Button: React.FC = () => {
  return (
    <ButtonWrapper>
      Text here
    </ButtonWrapper>
  );
}

export default Button;