import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/ContextProvider';
import { getRandomRGB } from '../lib/colorHelper';

type ButtonProps = {
  text: string;
  selected: boolean;
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

const Button: React.FC<ButtonProps> = ({ text, selected }) => {
  const { state, dispatch } = useContext(AppContext);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const body = document.body;
    const preview = document.getElementById('preview');
    const title = document.getElementById('title');
    const subtitle = document.getElementById('subtitle');
    const category = document.getElementById('category');

    if (text === 'Image URL') {
      let enteredImgUrl = getImageFromPrompt();
      dispatch({type: 'IMAGE_CLICK'})
      dispatch({type: 'CHANGE_IMAGE', payload: enteredImgUrl });
      document.body.style.background = `url(${enteredImgUrl})`;
      preview.style.background = `url(${enteredImgUrl})`;
      body.style.backgroundSize = preview.style.backgroundSize = 'cover';
      body.style.backgroundRepeat = preview.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundPosition = preview.style.backgroundPosition = 'center';
    }
    if (text === 'Random Gradient') {
      dispatch({type: 'GRADIENT_CLICK'})
      const rgb1 = getRandomRGB();
      const rgb2 = getRandomRGB();
      document.body.style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
      document.getElementById('preview').style.background = `linear-gradient(to bottom, #${rgb1}, #${rgb2})`;
    }
    if (text === 'Random Solid Color') {
      dispatch({type: 'SOLID_CLICK'});
      const rgb = getRandomRGB();
      document.body.style.background = `#${rgb}`;
      document.getElementById('preview').style.background = `#${rgb}`;
    }
    if (text === 'Title / Subtitle / Category') {
      dispatch({type: 'THREE_CLICK'});
      title.style.visibility= 'visible';
      subtitle.style.visibility = 'visible';
      category.style.visibility = 'visible';
    }
    if (text === 'Title / Category') {
      dispatch({type: 'TWO_CLICK'});
      title.style.visibility= 'visible';
      subtitle.style.visibility = 'visible';
      category.style.visibility = 'hidden';
    }
    if (text === 'Title only') {
      dispatch({type: 'ONE_CLICK'});
      title.style.visibility= 'visible';
      subtitle.style.visibility = 'hidden';
      category.style.visibility = 'hidden';
    }
    if (text === 'Text Shadow') {
      dispatch({type: 'TEXTSHADOW_CLICK'});
      const arr = [title, subtitle, category];
      arr.forEach((item) => {
        if (selected) {
          item.style.textShadow = '2px 2px 4px rgba(0,0,0,0.4)';
        } else {
          item.style.textShadow = '';
        }
      });
    }
    if (text === 'Color Contrast') {
      dispatch({type: 'CONTRAST_CLICK'});
      const arr = [title, subtitle, category];
      arr.forEach((item) => {
        if (selected) {
          item.style.color = 'black';
          subtitle.style.borderTop = '1px solid #000';
        } else {
          item.style.color = '#fff';
          subtitle.style.borderTop = '1px solid #fff';
        }
      })
    }
    if (text === 'Smaller Text') {
      dispatch({type: 'SMALLTEXT_CLICK'});
      const arr = [title, subtitle, category];
      arr.forEach((item) => {
        if (selected) {
          title.style.fontSize = '46px';
          subtitle.style.fontSize = '22px';
          category.style.fontSize = '22px';
        } else {
          title.style.fontSize = '54px';
          subtitle.style.fontSize = '24px';
          category.style.fontSize = '24px';
        }
      })
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
    <ButtonWrapper onClick={handleButtonClick} selected={selected}>
      {text}
    </ButtonWrapper>
  );
}

export default Button;