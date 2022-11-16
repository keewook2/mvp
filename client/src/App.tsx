import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Content from './components/Content';

const App: React.FC = () => {
  const [imgURL, setImgURL] = useState('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80');

  return (
    <>
      <GlobalStyle imgURL={imgURL}/>
      <div>Thumbnail maker</div>
      <Content imgURL={imgURL} />
    </>
  );
};

export default App;