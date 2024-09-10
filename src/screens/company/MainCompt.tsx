import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Company.scss';
import Footer from '../../components/Footer';
import charity from "../../images/charity.png"
import { FaRegBuilding } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { SlScreenDesktop } from "react-icons/sl";

export default function MainCompt() {

  let navigate = useNavigate();

  const mapElement = useRef<HTMLDivElement | null>(null);
  const { naver } = window;
  const addressAPI = async (addressQuery:any) => {
    window.naver.maps.Service.geocode({
      query: (addressQuery)
    }, function(status:any, response:any) {
      const longitude = parseFloat(response.v2.addresses[0].y);
      const latitude = parseFloat(response.v2.addresses[0].x);
      if (!mapElement.current || !naver) return;
      const location = new naver.maps.LatLng(longitude, latitude);
      const mapOptions = {
        center: location,
        zoom: 14,
        zoomControl: true,
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
        position: location,
        map,
      });
    })
  };

  useEffect(() => {
    addressAPI('대구시 달서구 중흥로 3')
  }, []); 

  return (
    <div className='company'>

      <div className="inner">

        {/* 왼쪽 메뉴바 */}
        <div className="subpage__menu">
         <img src={charity}/>
        </div>

        <div className="subpage__main">
          <div className="subpage__main__title">회사소개</div>
          <div className="subpage__main__content">
          
            <div className="notice-cover">
              <div className="cover">
                <div className="notice right">
                  <h1>The Better People</h1>
                  <h2>'더좋은사람들'은 더좋은 세상을 만들려는 사람이</h2>
                  <h2>보다 더 '좋은' 사람이라고 믿습니다.</h2>
                  <h2>우리는 플랫폼을 통해 더좋은 세상을 만들어갑니다.</h2>
                </div>
              </div>

              <div className="cover">
                <div className="notice row">
                  <div className="notice-text-row">
                    <div className='notice-text-title'><FaRegBuilding /> <h2>회사명</h2></div>
                    <p className="notice-text-right">더좋은사람들</p>
                  </div>
                  <div className="notice-text-row">
                    <div className='notice-text-title'><IoPersonOutline /> <h2>대표</h2></div>
                    <p className="notice-text-right">이요한</p>
                  </div>
                  <div className="notice-text-row">
                    <div className='notice-text-title'><FaRegFileAlt /> <h2>사업자등록번호</h2></div>
                    <p className="notice-text-right">736-29-01512</p>
                  </div>
                </div>
              </div>
              <div className="cover">
                <div className="notice row">
                  <div className="notice-text-row">
                    <div className='notice-text-title'><SlLocationPin /> <h2>업체주소</h2></div>
                    <p className="notice-text-right">대구광역시 달서구 중흥로 3, 달서청년센터 3층 A호</p>
                  </div>
                  <div className="notice-text-row">
                    <div className='notice-text-title'><FiPhone /> <h2>연락처</h2></div>
                    <p className="notice-text-right">010-9584-5948</p>
                  </div>
                  <div className="notice-text-row">
                    <div className='notice-text-title'><SlScreenDesktop /> <h2>주요업무</h2></div>
                    <p className="notice-text-right">웹/앱 플랫폼 기획 및 제작, 홈페이지구축</p>
                  </div>
                </div>
              </div>
      
            </div>

          </div>
        </div>

        
      </div>

      <div className="inner" style={{flexDirection:'column'}}>

        <div className="maptitle">오시는길</div>
        <div className="maparea">
          <div id="map" ref={mapElement} style={{ minHeight: '500px'}} />
        </div>


      </div>


    <Footer />
  </div>
  );
}

