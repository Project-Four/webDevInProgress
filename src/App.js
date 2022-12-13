import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={ <Header /> } />
        <Route path="/main" element={ <Main /> } /> 
      </Routes>
    </div>
  );
}

export default App;
