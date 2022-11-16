import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  width: 192px;
  height: 40px;
  border: none;
  background-color: #f4f4f4;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.4s ease, transform 0.4s ease;

  &:active,
  &:hover,
  &:focus {
    background-color: #425af5;
    color: white;
  }
`;

const SubmitBtn = styled(Btn)`
  background-color: #888;
  color: #fff;
`;

const SubmitPanel: React.FC = () => {
  return (
    <Wrapper>
      <Btn>Reset</Btn>
      <SubmitBtn>Make Thumbnail</SubmitBtn>
    </Wrapper>
  );
}

export default SubmitPanel;