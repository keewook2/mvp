import * as React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  width: 768px;
  height: 70px;
  line-height: 68px;
  margin-bottom: 10px;
  border-bottom: 1px solid #cacaca;
  display: block;
  flex-direction: row;

`;

const Title = styled.span`
  color: #666;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
`;

const ButtonDiv = styled.div`
  float: right;
  box-sizing: border-box;
  display: block;
`;

const StyleField: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Title>Choose background</Title>
        <ButtonDiv>
          <Button text='Random Gradient'/>
          <Button text='Random Solid Color'/>
          <Button text='Image URL'/>
        </ButtonDiv>
      </Wrapper>
      <Wrapper>
        <Title>Choose component</Title>
        <ButtonDiv>
          <Button text='Title / Subtitle / Category'/>
          <Button text='Title / Category'/>
          <Button text='Title only'/>
        </ButtonDiv>
      </Wrapper>
      <Wrapper>
        <Title>Text style</Title>
        <ButtonDiv>
          <Button text='Text Shadow'/>
          <Button text='Color Contrast'/>
          <Button text='Smaller Text'/>
        </ButtonDiv>
      </Wrapper>
    </>
  )
}

export default React.memo(StyleField);