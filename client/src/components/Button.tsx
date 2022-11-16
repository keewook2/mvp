import React, { useState } from 'react';
import styled from 'styled-components';

type ButtonProps = {
  text: string;
};

const ButtonWrapper = styled.button<{ selected: boolean }>`
  margin: 0;
  padding: 0.5rem 1rem;

  width: 192px;
  height: 40px;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  border: none;
  border-radius: 20px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;

  background-color: ${(props) => (props.selected ? '#425af5' : '#f4f4f4')};
  color: ${(props) => (props.selected ? 'white' : '#383838')};

  &:active,
  &:hover,
  &:focus {
    background-color: #425af5;
    color: white;
  }
`

const Button: React.FC<ButtonProps> = ({ text }) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setSelected(prevSelect => !prevSelect);
  }
  return (
    <ButtonWrapper onClick={handleSelected} selected={selected}>
      {text}
    </ButtonWrapper>
  );
}

export default Button;