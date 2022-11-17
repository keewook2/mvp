import * as React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import ControlPanel from './ControlPanel';
import Preview from './Preview';
import SubmitPanel from './SubmitPanel';

const Wrapper = styled.div`
  top: 56px;
  position: relative;
  margin: 0 auto;
  width: 768px;
  background: white;
  padding-bottom: 30px;
  z-index: 1;
`;

const Content: React.FC = () => {
  const titleRef = useRef<HTMLLIElement>(null);
  const subtitleRef = useRef<HTMLLIElement>(null);
  const categoryRef = useRef<HTMLLIElement>(null);

  return (
    <Wrapper>
      <Preview />
      <ControlPanel />
      <SubmitPanel />
    </Wrapper>
  );
}

export default Content;