import './App.scss';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './screens/main/Main';
import Login from './screens/login/Login';
import Logister from './screens/login/Logister';
import Header from './components/Header';
import Company from './screens/notice/Company';
import UseNotice from './screens/notice/UseNotice';
import Apply from './screens/apply/Apply';
import RegisterDefault from './screens/apply/RegisterDefault';
import RegisterPlayer from './screens/apply/RegisterPlayer';
import Solo from './screens/pamphlet/Solo';
import SoloDetail from './screens/pamphlet/SoloDetail';
import RegisterResult from './screens/apply/RegisterResult';

function App() {
  return (
    <div className="App">
      
      <Header/>
      
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logister" element={<Logister/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/usenotice" element={<UseNotice/>}/>
        <Route path="/apply" element={<Apply/>}/>
        <Route path="/registerdefault" element={<RegisterDefault/>}/>
        <Route path="/registerplayer" element={<RegisterPlayer/>}/>
        <Route path="/registerresult" element={<RegisterResult/>}/>
        <Route path="/solo" element={<Solo/>}/>
        <Route path="/solodetail" element={<SoloDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;