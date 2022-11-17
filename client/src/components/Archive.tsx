import * as React from 'react';
import styled from 'styled-components';
import ArchiveItem from './ArchiveItem';

const Wrapper = styled.div`
  padding-top: 80px;
`;

const Container = styled.div`
  display: flex;
  top:56px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Archive: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />

      </Container>
    </Wrapper>
  )
}

export default Archive;