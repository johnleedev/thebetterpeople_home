import React from 'react';
import "./Company.scss"
import company from "../../images/notice/company.jpg"
import Footer from '../../components/Footer';
import Title from '../../components/Title';

export default function Company(props:any) {
  return (
    <div className="company">

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">

        <Title name={'이로운팜플렛은?'}/>

        <div className="cover">
          <div className="notice">
            <h2>우리의 비전</h2>
            <h4>Changing Culture, Changing World</h4>
            <p>우리는 문화를 바꾸고, 세상을 바꿉니다.</p>
          </div>
        </div>

        <div className="cover">
          <div className="notice">
            <h2>우리의 목적</h2>
            <h4>'이로운팜플렛'은 디지털 팜플렛을 서비스하는 플랫폼으로서, <br></br>
            사용자들의 활용성 향상 및 편의성 향상과 비용절감을 목표로하며, <br></br>
            더 나아가 종이 인쇄물을 대체하여 환경보호에 기여하고 합니다.
            </h4>
            <div className='box'>
              <p className='number'>1</p>
              <div className='divider'></div>
              <p>활용성</p>
              <div className='divider'></div>
              <p>행사 당일에만 볼수 있는 종이 팜플렛이 아니라, 행사전부터 미리 볼수 있고, 이후에도 찾아볼수 있는 팜플렛입니다.</p>
            </div>

            <div className='box'>
              <p className='number'>2</p>
              <div className='divider'></div>
              <p>편의성</p>
              <div className='divider'></div>
              <p>부피가 적지 않은 종이 팜플렛 대신에, 언제 어디서나 핸드폰과 태블릿에서 볼 수 있는 팜플렛입니다.</p>
            </div>

            <div className='box'>
              <p className='number'>3</p>
              <div className='divider'></div>
              <p>비용절감</p>
              <div className='divider'></div>
              <p>비싼 인쇄비를 지불해야 하는 종이 팜플렛을 대신함으로, 행사 주최자들의 비용을 절감합니다.</p>
            </div>

            <div className='box'>
              <p className='number'>4</p>
              <div className='divider'></div>
              <p>환경보호</p>
              <div className='divider'></div>
              <p>당일에만 사용되는 많은 양의 종이 팜플렛을 대신함으로, 환경 보호에 기여할 수 있습니다.</p>
            </div>
            
          </div>
        </div>
        
        

      </div>

      <Footer/>
    </div>
  );
}
