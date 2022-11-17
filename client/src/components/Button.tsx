import React, { useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/ContextProvider';

type ButtonProps = {
  text: string;
};

const ButtonWrapper = styled.button<{ selected: boolean }>`
  margin: 0;
  padding: 0.5rem 1rem;

  width: 192px;
  height: 40px;

  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  border: none;
  border-radius: 20px;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: 0.5s;

  background-color: ${(props) => (props.selected ? '#425af5' : '#f4f4f4')};
  color: ${(props) => (props.selected ? 'white' : '#383838')};

  &:active,
  &:hover,
  &:focus {
    background-color: #425af5;
    color: white;
  }
`

const Button: React.FC<ButtonProps> = ({ text }) => {
  const [selected, setSelected] = useState(false);
  const { state, dispatch } = useContext(AppContext);

  const handleSelected = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setSelected(prevSelect => !prevSelect);
    if (text === 'Image URL') {
      let enteredImgUrl = prompt('Enter the unsplash image URL 😇');
      console.log(enteredImgUrl);
      dispatch({type: 'CHANGE_IMAGE', payload: enteredImgUrl });
      document.body.style.background = `url(${enteredImgUrl})`;
    }
  }

  const getImageFromPrompt = (): string | void => {
    let enteredImgUrl = prompt('Enter the unsplash image URL 😇');
    const regex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    if (enteredImgUrl === null) {
      return;
    }
    if (!enteredImgUrl.match(regex)) {
      alert('Invalid URL 😨');
      return;
    }
    return enteredImgUrl;
  }

  return (
    <ButtonWrapper onClick={handleSelected} selected={selected}>
      {text}
    </ButtonWrapper>
  );
}

export default Button;