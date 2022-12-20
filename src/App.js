import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import { Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={ <Header /> } />
        <Route path="/main" element={ <Main /> } /> 
      </Routes>
    </Fragment>
  );
}

export default App;
