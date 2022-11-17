import * as React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin-left: 4%;
  width: 20%;
  height: 100%;
  margin-bottom: 20px;
  border: 1px solid black;
`;

const ImageDiv = styled.div`
  text-align: center;

  & img{
    max-width: 95%;
    max-height: 100%;
  }
`;

const Title = styled.h5`
  font-size: 1.3rem;
  font-weight: 500;
  margin: 4%;
  border-top: 2px solid black;
`;

const Heart = styled.div`
  float: right;
  cursor: pointer;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
`;

const ArchiveItem: React.FC = () => {
  return (
    <Item>
      <ImageDiv>
        <img src='https://images.unsplash.com/photo-1668467927853-4a29d2df0ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' />
      </ImageDiv>
      <Title>
        Test
        <Heart>♡ Number</Heart>
      </Title>
    </Item>
  )
}

export default ArchiveItem;