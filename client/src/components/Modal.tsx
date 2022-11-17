import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.50);
  z-index: 999;
`;

const ModalWrapper = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: white;
  font-size: 24px;

  &:after {
    position: absolute;
    text-align: center;
    content: '🎉 Done! save as image and enjoy! 🎉'
    width: 600px;
    display: inline-block;
    top: -80px;
    color: white;
    font-size: 24px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Modal: React.FC<ModalProps> = ({ setModalOpen }) => {
  const handleBackgroundClick = (): void => {
    removeCapture();
    setModalOpen(false);
  }

  const removeCapture = (): void => {
    const canvasImg = document.querySelector('#modal');
    canvasImg.removeChild(canvasImg.firstElementChild);
  }

  return (
    <Background onClick={handleBackgroundClick}>
      <ModalWrapper id='modal'>
      🎉 Done! save as image and enjoy! 🎉
      </ModalWrapper>
    </Background>
  );
}

export default Modal;