import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import './Main.scss'
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function Main(props:any) {

	let navigate = useNavigate();

	return (
		<div className='main'>

      <div className="main__box1">
				<div className="inner">
         
          <div className="main_top_container">
						<p className="main__box-slogan">
							<span className="slogan-item">더좋은 세상을 만드는</span>
							<span className="slogan-item">더좋은사람들</span>
						</p>
            <p className="main__box-sub_text">Digital&IT를 통해</p>
						<p className="main__box-sub_text">조금 더 좋은 세상을 꿈꿉니다.</p>
					</div>

          <div className="main_middle_cover">
            <div className="main_bottom_box"
              onClick={()=>{
                window.scrollTo(0, 0);
                navigate('/company'); 
              }}
            >
              <div className="main_bottom_text">
                <h1>회사소개</h1>
                <p>더좋은사람들을 소개합니다.</p>
              </div>
              <div className="main_bottom_link">
                <p>바로가기</p>
                <MdKeyboardDoubleArrowRight size={20}/>
              </div>
            </div>
            <div className="main_bottom_box"
              onClick={()=>{
                window.scrollTo(0, 0);
                  navigate('/portfolio');
              }}
            >
              <div className="main_bottom_text">
                <h1>포트폴리오</h1>
                <p>더좋은사람들에서 기획&제작한</p>
                <p>웹/앱 플랫폼입니다.</p>
              </div>
                <div className="main_bottom_link">
                <p>바로가기</p>
                <MdKeyboardDoubleArrowRight size={20}/>
              </div>
            </div>
            <div className="main_bottom_box"
              onClick={()=>{
                window.scrollTo(0, 0);
                navigate('/contact');
              }}
            >
              <div className="main_bottom_text">
                <h1>견적문의</h1>
                <p>웹/앱 플랫폼 제작을 원하시면</p>
                <p>내용을 작성해서 신청해주세요.</p>
              </div>
              <div className="main_bottom_link">
                <p>바로가기</p>
                <MdKeyboardDoubleArrowRight size={20}/>
              </div>
            </div>
          </div>
          
          <div className="main_bottom_cover">
            
          </div>


				</div>	
  		</div>

           
			<Footer />

		</div>
	);
}
