import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import logo from "../../images/logo.jpeg"
import { CiMail } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Footer from '../../components/Footer';
import './Contact.scss';

export default function CommunityMain() {
  return (
    <div className='contact'>

      <div className="inner">

        {/* 왼쪽 메뉴바 */}
        <div className="subpage__menu">
          <img src={logo}/>
        </div>

        <div className="subpage__main">
          <div className="subpage__main__title">견적문의</div>
          <div className="subpage__main__content">
          
            <div className="notice-cover">
              <div className="cover">
                <div className="notice right">
                  <h1>The Better People</h1>
                  <h2>궁금하신 사항이 있으시면 편하게 연락주세요</h2>
                  <h2>통화가능시간 : AM 10:00 ~ PM 21:00</h2>
                </div>
              </div>

              <div className="cover">
                <div className="notice row">
                  <div className="notice-text-row">
                    <div className='notice-text-title'><IoChatbubbleEllipsesOutline /> <h2>카카오톡 아이디</h2></div>
                    <p className="notice-text-right">thebetterpeople</p>
                  </div>
                  <div className="notice-text-row">
                    <div className='notice-text-title'><FiPhone /> <h2>연락처</h2></div>
                    <p className="notice-text-right">010-9584-5948</p>
                  </div>
                  <div className="notice-text-row">
                    <div className='notice-text-title'><CiMail /> <h2>E-mail</h2></div>
                    <p className="notice-text-right">thebetterpeople@naver.com</p>
                  </div>
                </div>
              </div>
      
            </div>

          </div>
        </div>

        
      </div>

      
    <Footer />
  </div>
  )
}
