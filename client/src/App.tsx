import React from 'react';
import GlobalStyle from './GlobalStyle';
import Content from './components/Content';
import { useContext } from 'react';
import ContextProvider, { AppContext } from './context/ContextProvider';
import Header from './components/Header';
const App: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <ContextProvider>
        <GlobalStyle imgURL={state.imgURL}/>
        <Header />
        <div>Thumbnail maker</div>
        <Content />
      </ContextProvider>
    </>
  );
};

export default App;