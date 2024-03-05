import React, { useEffect, useRef, useState } from 'react';
import './Projects.scss'
import { useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import apple from '../../images/projects/apple.png'
import google from '../../images/projects/google.png'
import ashow from '../../images/projects/ashow.png'
import ashow_icon from '../../images/projects/ashow-icon.png'
import classic from '../../images/projects/classic.png'
import classic_icon from '../../images/projects/classic-icon.png'
import nursing from '../../images/projects/nursing.png'
import nursing_icon from '../../images/projects/nursing-icon.png'
import { useSetRecoilState } from 'recoil';
import { projects_Y_Location } from '../../RecoilStore';



export default function Projects(props : any) {

	let navigate = useNavigate();
  const setProjects_Y_Location = useSetRecoilState(projects_Y_Location);
  const divRef = useRef<HTMLDivElement>(null); 
  
  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setProjects_Y_Location(rect.y);
    }
  }, []); 

  return (
    <div className="projects" ref={divRef}>
      
			<div className="inner">

				<div className="topbox">
          <h1>PROJECTS</h1>
				</div>

        <div className="project-box">
          <img src={ashow} className='project-img'/>
          
          <div className="textbox">
            <h1>아쇼</h1>
        
            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>주요 서비스</p>
              </div>
              <div className="row-notice">
                <p>분양 아파트 관련 정보 플랫폼</p>
              </div>
            </div>

            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>핵심기능</p>
              </div>
              <div className="row-notice">
                <p>분양 아파트 최신 정보 소개, 가격비교, 분양 가이드, 커뮤니티</p>
              </div>
            </div>

            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>아이콘</p>
              </div>
              <div className="row-notice">
                <img src={ashow_icon} className='project-icon'/>
              </div>
            </div>
            
            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>앱 다운받기</p>
              </div>
              <div className="row-notice">
                <div className="button-box">
                  <a href='https://apps.apple.com/kr/app/%EC%95%84%EC%87%BC/id6455837375' target='_blank'>
                    <div className="button">
                      <img src={apple} className="btn-img" alt="Logo" />
                      <p>App Store</p>
                    </div>
                  </a>
                </div>

                <div className="button-box">
                  <a href='https://play.google.com/store/apps/details?id=com.ashow.app' target='_blank'>
                    <div className="button">
                        <img src={google} className="btn-img" alt="Logo" />
                        <p>Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
				</div>

        <div className="project-box">
          <img src={classic} className='project-img'/>
          
          <div className="textbox">
            <h1>성악과학생들</h1>
        
            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>주요 서비스</p>
              </div>
              <div className="row-notice">
                <p>성악과학생들이 서로 소통하고 교류하는, 학습&커뮤니티 플랫폼</p>
              </div>
            </div>

            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>핵심기능</p>
              </div>
              <div className="row-notice">
                <p>스터디(곡 검색, 단어검색), 커뮤니티</p>
              </div>
            </div>

            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>아이콘</p>
              </div>
              <div className="row-notice">
                <img src={classic_icon} className='project-icon'/>
              </div>
            </div>
            
            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>앱 다운받기</p>
              </div>
              <div className="row-notice">
                <div className="button-box">
                  <a href='https://apps.apple.com/kr/app/%EC%84%B1%EC%95%85%ED%95%98%EB%8A%94%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4/id6451302745' target='_blank'>
                    <div className="button">
                      <img src={apple} className="btn-img" alt="Logo" />
                      <p>App Store</p>
                    </div>
                  </a>
                </div>

                <div className="button-box">
                  <a href='https://play.google.com/store/apps/details?id=com.studentsclassic.app' target='_blank'>
                    <div className="button">
                        <img src={google} className="btn-img" alt="Logo" />
                        <p>Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
				</div>

        <div className="project-box">
          <img src={nursing} className='project-img'/>
          
          <div className="textbox">
            <h1>간호대학생들</h1>
        
            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>주요 서비스</p>
              </div>
              <div className="row-notice">
                <p>간호대 학생들이 서로 소통하고 교류하는, 학습&커뮤니티 플랫폼</p>
              </div>
            </div>

            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>핵심기능</p>
              </div>
              <div className="row-notice">
                <p>스터디(간호술기, 의학약어, 의학용어, 학습하기, 문제풀기), 커뮤니티</p>
              </div>
            </div>

            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>아이콘</p>
              </div>
              <div className="row-notice">
                <img src={nursing_icon} className='project-icon'/>
              </div>
            </div>
            
            <div className="textrow">
              <div className="row-name">
                <FaCheck />
                <p>앱 다운받기</p>
              </div>
              <div className="row-notice">
                <div className="button-box">
                  <a href='https://apps.apple.com/kr/app/%EA%B0%84%ED%98%B8%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4/id6477461773' target='_blank'>
                    <div className="button">
                      <img src={apple} className="btn-img" alt="Logo" />
                      <p>App Store</p>
                    </div>
                  </a>
                </div>

                <div className="button-box">
                  <a href='https://play.google.com/store/apps/details?id=com.studentsnursing.app' target='_blank'>
                    <div className="button">
                        <img src={google} className="btn-img" alt="Logo" />
                        <p>Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
				</div>


			</div>
	
    </div>
  );
}