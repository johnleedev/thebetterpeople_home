import React from 'react';
import "./UseNotice.scss"
import company from "../../images/notice/company.jpg"
import Footer from '../../components/Footer';
import Title from '../../components/Title';

export default function UseNotice (props:any) {

  return (
    <div className="usenotice">

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">

        <Title name={'이용안내'}/>

        <div className="notice-content-cover">
          
          <h2>∙ 이용안내</h2>
          <div className="cover">

            <div className="menunotice">
              <h4>이로운팜플렛 회원이시라면 이렇게 이용해보세요!</h4>
              <div className='box'>
                <p className='menu-name'>자신의 연주회를 등록하세요</p>
                <div className='divider'></div>
                <p>이로운팜플렛을 통해, 자신의 연주회 팜플렛을 만들어보세요</p>
              </div>
              <div className='box'>
                <p className='menu-name'>자신이 참석한 연주회를 등록하세요</p>
                <div className='divider'></div>
                <p>이로운팜플렛을 통해, 자신이 참석한 연주회의 팜플렛을 언제 어디서나 열람해보세요</p>
              </div>
            </div>

            
          </div>
        </div>

        <div className="notice-content-cover">
        
          <h2>∙ 메뉴안내</h2>
          <div className="cover">

            <div className="menunotice">
              <h4>이로운팜플렛 안내</h4>
              <div className='box'>
                <p className='menu-name'>이로운팜플렛은?</p>
                <div className='divider'></div>
                <p>이로운팜플렛의 비전과 목적을 제시합니다.</p>
              </div>
              <div className='box'>
                <p className='menu-name'>이용안내</p>
                <div className='divider'></div>
                <p>이로운팜플렛 홈페이지 이용 빙밥을 안내해드립니다. 현재 보고 계신 페이지입니다.</p>
              </div>
            </div>

            <div className="menunotice">
              <h4>e-팜플렛 보기</h4>
              <div className='box'>
                <p className='menu-name'>독창회&독주회</p>
                <div className='divider'></div>
                <p>독창회 및 독주회 팜플렛을 열람할 수 있습니다.</p>
              </div>
              <div className='box'>
                <p className='menu-name'>소형 연주회(2~3인)</p>
                <div className='divider'></div>
                <p>소규모 연주회 팜플렛을 열람할 수 있습니다. 출연자는 2~3인 규모이며, 듀엣, n중주 연주회가 있습니다.</p>
              </div>
              <div className='box'>
                <p className='menu-name'>중형 연주회(4~10인)</p>
                <div className='divider'></div>
                <p>중형 연주회 팜플렛을 열람할 수 있습니다. 출연자는 4~10인 규모이며, 중창, n중주 연주회가 있습니다. </p>
              </div>
              <div className='box'>
                <p className='menu-name'>대형 연주회(10인 이상)</p>
                <div className='divider'></div>
                <p>대형 연주회 팜플렛을 열람할 수 있습니다. 출연자는 10인 이상이며, 합창, 협주, 오페라 등이 있습니다.</p>
              </div>
            </div>

            <div className="menunotice">
              <h4>등록 및 신청</h4>
              <div className='box'>
                <p className='menu-name'>신청하기</p>
                <div className='divider'></div>
                <p>팜플렛을 신청하는 공간입니다. 간단한 정보 입력과 결제가 이루어지는 공간입니다.</p>
              </div>
              <div className='box'>
                <p className='menu-name'>등록하기</p>
                <div className='divider'></div>
                <p>팜플렛에 들어갈 정보와 내용을 입력하는 공간입니다. 신청 후 결제하신 분들만 사용할 수 있습니다.</p>
              </div>
            </div>

            <div className="menunotice">
              <h4>나의 팜플렛</h4>
              <div className='box'>
                <p className='menu-name'>참석한 공연</p>
                <div className='divider'></div>
                <p>자신이 참석했던 공연 중, 이로운팜플렛을 통해 팜플렛을 이용한 공연 정보를 열람할 수 있습니다.</p>
              </div>
              <div className='box'>
                <p className='menu-name'>찜한 공연</p>
                <div className='divider'></div>
                <p>앞으로 참석할 예정인 공연 중, 이로운팜플렛을 통해 팜플렛을 이용할 예정인 공연 정보를 열람할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>


        

      </div>

      <Footer/>

    </div>
  );
}
