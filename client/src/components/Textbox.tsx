import * as React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: 250px;
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

const Textbox: React.FC = () => {
  return (
    <TextWrapper>
      <TextInput placeholder='제목을 입력하세요' />
    </TextWrapper>
  );
}

export default Textbox;