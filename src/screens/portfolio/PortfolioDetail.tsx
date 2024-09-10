import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.scss';
import Footer from '../../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';


export default function PortfolioDetail (props:any) {

  
  let navigate = useNavigate();
  const location = useLocation();
  const propsData = location.state;

  console.log(propsData);
  

  return (
    <div className="retreat">

      <div className="inner">

  
        <div className="subpage__main">
          <div className="subpage__main__title">
            <h3>{props.proctName}</h3>
          </div>

            <div className="subpage__main__content">
              <div className="main__content">

                <div className="imagearea desktop">
                  <div className="mainimage">
                    <img src={`https://www.studentsclassic.com/images/thebetterpeople/${propsData.image}`} alt={'등록된 사진이 없습니다.'} />
                  </div>
                  
                </div>

                <div className='divider'></div>

                <div className="textrow">
                  <h3>장소명</h3>
                  <p>{props.placeName}</p>
                </div>
                <div className="textrow">
                  <h3>형태</h3>
                  <p>{props.sort}</p>
                </div>
                <div className="textrow">
                  <h3>연락처</h3>
                  <a href={`tel:${props.phone}`} target='_blank'
                   className='textrow__link'
                  >{props.phone}</a>
                </div>
                <div className="textrow">
                  <h3>크기</h3>
                  <p>{props.size}</p>
                </div>
                <div className="textrow">
                  <h3>홈페이지</h3>
                  <a href={props.homepage} target='_blank'
                   className='textrow__link'
                  >{props.homepage}</a>
                </div>
                <div className="textrow">
                  <h3>주소</h3>
                  <p>{props.address}</p>
                </div>
               
            </div>
          </div>

        </div>

      </div>
      <Footer/>
    </div>
  )
}



