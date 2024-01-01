import React, { useState } from "react";
import axios from "axios";
import './Logister.scss'
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

export default function Logister(props:any) {
  
  let navigate = useNavigate();

  const [viewEmailConfirm, setViewEmailConfirm] = useState<boolean>(false);

  return (
    <div className="logister">
      <div className="inner">

        <div className={ viewEmailConfirm ? "container add" : "container" }>

          <div className="name">
            <input type="text" placeholder='이름'/>
          </div>
          <div className="email">
            <input type="text" placeholder='이메일'/>
            <div onClick={()=>{
              setViewEmailConfirm(true);
            }}>
              인증메일 발송</div>
          </div>
          {
            viewEmailConfirm 
            ?
            <div className="emailconfirm">
              <input type="text" placeholder='인증번호'/>
              <div onClick={()=>{}}>
                인증하기</div>
            </div>
            :
            null
          }

          <div className="password">
            <input type="password" placeholder='비밀번호'/>
          </div>
          
          <div className="passwordconfirm">
            <input type="password" placeholder='비밀번호확인'/>
          </div>
            
          <div className="logisterbuttonbox">
            <div className="logisterbutton"
             onClick={()=>{

             }}
            >
              <p>회원가입</p>
            </div>
          </div>

          <div className="bottombox">
            <div className="cover">
              <p></p>
              <p onClick={()=>{navigate('/login')}}>간편 로그인 하기</p>
            </div>
          </div>
          
        </div>
        

      </div>

      <Footer/>
    </div>
  );
}
