import React from "react";
import axios from "axios";
import kakao from "../../images/login/kakao.png"
import naver from "../../images/login/naver.png"
import './Login.scss'
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

export default function Login(props:any) {
  
  let navigate = useNavigate();

  // 카카오 로그인
  const kakaoLogin = async () => {
    try {
      // 카카오 로그인 로직
      // const token = await login();
      // axios 호출 등의 로직
    } catch (err) {
      console.error("login err", err);
    }
  };

  // 네이버 로그인
  const naverLogin = async () => {
    // 네이버 로그인 로직
    try {
      // 네이버 로그인 로직
      // axios 호출 등의 로직
    } catch (err) {
      console.log("naver 토큰 요청 에러:", err);
    }
  };

  return (
    <div className="login">
      <div className="inner">

        <div className="container">
          <div className="notice">
            <p>로그인을 하시면 더 많은 서비스를 이용하실 수 있습니다.</p>
          </div>

          <div className="loginbuttonbox">
            <div className="loginbutton kakao" onClick={kakaoLogin}>
              <img src={kakao}/>
              <p>카카오 로그인</p>
            </div>
            <div className="loginbutton naver" onClick={naverLogin}>
              <img src={naver} />
              <p>네이버 로그인</p>
            </div>
          </div>

          <h3>이메일로 로그인하기</h3>

          <div className="emailbox-id">
            <input type="text" placeholder='이메일'/>
          </div>
          <div className="emailbox-pass">
            <input type="password" placeholder='비밀번호'/>
          </div>

          <div className="emailloginbuttonbox">
            <div className="emailloginbutton"
             onClick={()=>{

             }}
            >
              <p>로그인</p>
            </div>
          </div>

          <div className="bottombox">
            <div className="cover">
              <p>비밀번호 찾기</p>
              <p onClick={()=>{navigate('/logister')}}>이메일로 회원가입</p>
            </div>
          </div>
          
        </div>
        

      </div>

      <Footer/>
    </div>
  );
}
