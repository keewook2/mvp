import React from 'react';
import GlobalStyle from './GlobalStyle';
import Content from './components/Content';
import { useContext } from 'react';
import ContextProvider, { AppContext } from './context/ContextProvider';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Archive from './components/Archive';

const App: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <BrowserRouter>
      <GlobalStyle imgURL={state.imgURL} />
      <Header />
      <Routes>
          <Route path='/' element={
            <ContextProvider>
              <Content />
            </ContextProvider>
          }/>
          <Route path='/archive' element={
            <Archive />
          }/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;