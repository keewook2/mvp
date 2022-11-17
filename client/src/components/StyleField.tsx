import * as React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/ContextProvider';
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
  const {state, dispatch} = useContext(AppContext);

  return (
    <>
      <Wrapper>
        <Title>Choose background</Title>
        <ButtonDiv>
          <Button text='Random Gradient' selected={state.selected.gradient}/>
          <Button text='Random Solid Color' selected={state.selected.solid}/>
          <Button text='Image URL' selected={state.selected.image}/>
        </ButtonDiv>
      </Wrapper>
      <Wrapper>
        <Title>Choose component</Title>
        <ButtonDiv>
          <Button text='Title / Subtitle / Category' selected={state.selected.three}/>
          <Button text='Title / Category' selected={state.selected.two} />
          <Button text='Title only' selected={state.selected.one}/>
        </ButtonDiv>
      </Wrapper>
      <Wrapper>
        <Title>Text style</Title>
        <ButtonDiv>
          <Button text='Text Shadow' selected={state.selected.textShadow} />
          <Button text='Color Contrast' selected={state.selected.colorContrast}/>
          <Button text='Smaller Text' selected={state.selected.smallText} />
        </ButtonDiv>
      </Wrapper>
    </>
  )
}

export default React.memo(StyleField);