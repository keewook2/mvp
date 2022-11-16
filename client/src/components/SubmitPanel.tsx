import html2canvas from 'html2canvas';
import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Wrapper = styled.div`
  margin-top: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Btn = styled.button`
  width: 192px;
  height: 40px;
  border: none;
  background-color: #f4f4f4;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.4s ease, transform 0.4s ease;

  &:active,
  &:hover,
  &:focus {
    background-color: #425af5;
    color: white;
  }
`;

const SubmitBtn = styled(Btn)`
  background-color: #888;
  color: #fff;
`;

const SubmitPanel: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const onCapture = (): void => {
    console.log('capturing');
    html2canvas(document.getElementById('preview'), {
      logging: true,
      allowTaint: true,
      useCORS: true,
    })
      .then(canvas => {
        setModalOpen(true);
        document.querySelector('#modal').appendChild(canvas);
        onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
      });
  }

  const onSaveAs = (uri: string, filename: string): void => {
    console.log('Save as');
    let link = document.createElement('a');
    document.querySelector('#modal').appendChild(link);
    link.href = uri;
    link.download = filename;
    // Uncomment this line to auto-download file.
    // link.click();
  }

  return (
    <Wrapper>
      <Btn>Reset</Btn>
      <SubmitBtn onClick={onCapture}>Make Thumbnail</SubmitBtn>
      {modalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
    </Wrapper>
  );
}

export default SubmitPanel;