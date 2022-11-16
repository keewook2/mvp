import * as React from 'react';
import InputField from './InputField';
import StyleField from './StyleField';

const ControlPanel: React.FC = () => {
  return (
    <>
      <InputField />
      <StyleField />
    </>
  );
};

export default ControlPanel;