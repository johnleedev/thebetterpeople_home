import './App.scss';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './screens/main/Main';
import Header from './components/Header';


function App() {

  return (
    <div className="App">
      
      <Header/>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  );
}

export default App;