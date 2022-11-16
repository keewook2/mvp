import * as React from 'react';
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
  return (
    <Wrapper>
      <Textbox />
      <Textbox />
      <Textbox />
    </Wrapper>
  )
}

export default InputField;