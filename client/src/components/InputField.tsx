import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Textbox from './Textbox';

const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  border-bottom: 1px solid #cacaca;
`;

const InputField: React.FC = () => {
  const [inputs, setInputs] = useState({
    title: '>Enter title',
    subtitle: '>Enter subtitle',
    category: '>Enter category',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Wrapper>
      <Textbox name='title' handleChange={handleChange} placeholder='>Enter title'/>
      <Textbox name='subtitle' handleChange={handleChange} placeholder='>Enter subtitle'/>
      <Textbox name='category' handleChange={handleChange} placeholder='>Enter category'/>
    </Wrapper>
  )
}

export default InputField;