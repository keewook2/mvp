import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface TextboxProps {
  placeholder: string;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextWrapper = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  margin-left: 10px;
`;

const TextInput = styled.input`
  margin: 0;

  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: 230px;
  border: none;
  border-radius: 4px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: 0.5s;

  background-color: white;
  color: #777;

  &:active,
  &:focus {
    background-color: #425af5;
    color: white;
    caret-color: white;

    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
    }
    :-ms-input-placeholder {
      color: white;
    }
  }
`;

const Textbox: React.FC<TextboxProps> = ({ placeholder, handleChange, name }) => {
  return (
    <TextWrapper>
      <TextInput name={name} onChange={handleChange} placeholder={placeholder} />
    </TextWrapper>
  );
}

export default Textbox;