import * as React from 'react';
import styled from 'styled-components';

export interface PreviewProps {
  imgURL : string;
}

const Wrapper = styled.div<{imgURL: string}>`
  width: 768px;
  height: 400px;

  background: url(${props => props.imgURL});
`;

const Preview: React.FC<PreviewProps> = ({ imgURL }) => {
  return (
    <Wrapper id='preview' imgURL={imgURL}>
      Thumbnail here.
    </Wrapper>
  )
};

export default Preview;