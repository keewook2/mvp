import React from 'react';
import Button from './components/Button';
import Textbox from './components/Textbox';
import GlobalStyle from './GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello world</div>
      <Button />
      <Textbox />
      <Textbox />
    </>
  );
};

export default App;