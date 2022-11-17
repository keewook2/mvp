import * as React from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/ContextProvider';
import reducer, { initialState } from '../reducer';

const Wrapper = styled.div<{imgURL: string}>`
  width: 768px;
  height: 400px;

  background: url(${props => props.imgURL});
  color: white;
  text-align: center;
`;

const Title = styled.li`
  position: relative;
  display: block;
  top: 140px;
  font-size: 54px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

const Subtitle = styled.li`
  position: relative;
  display: block;
  top: 150px;
  font-size: 24px;
  border-top: 1px solid #fff;
  padding-top: 5px;
`;

const Category = styled.span`
  position: relative;
  top:220px;
  font-size: 24px;
`;

const Preview: React.FC = () => {
  const {state, dispatch} = useContext(AppContext);

  return (
    <Wrapper id='preview' imgURL={state.imgURL}>
      <Title id='title'>{state.inputs.title}</Title>
      <Subtitle id='subtitle'>{state.inputs.subtitle}</Subtitle>
      <Category id='category'>{state.inputs.category}</Category>
    </Wrapper>
  )
};

export default Preview;