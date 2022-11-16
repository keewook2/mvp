import * as React from 'react';
import styled from 'styled-components';
import ControlPanel from './ControlPanel';
import Preview from './Preview';
import SubmitPanel from './SubmitPanel';

export interface ContentProps {
  imgURL: string;
}

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 768px;
  background: white;
  padding-bottom: 30px;
  z-index: 1;
`;

const Content: React.FC<ContentProps> = ({ imgURL }) => {
  return (
    <Wrapper>
      <Preview imgURL={imgURL} />
      <ControlPanel />
      <SubmitPanel />
    </Wrapper>
  );
}

export default Content;