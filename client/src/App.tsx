import React from 'react';
import Button from './components/Button';
import GlobalStyle from './GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div>Hello world</div>
      <Button />
    </>
  );
};

export default App;