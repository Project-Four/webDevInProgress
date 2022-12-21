import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
      <Routes>
        <Route path="/" element={ <Header /> } />
        <Route path="/main" element={ <Main /> } /> 
        <Route path="/*" element={ <Main />} />
      </Routes>
  );
}

export default App;
