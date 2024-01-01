import React, { useState } from 'react';
import './Apply.scss'
import company from "../../images/notice/company.jpg"
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import Checkout from '../../paymentspage/Checkout';
import SubTitle from '../../components/SubTitle';

export default function Apply(props:any) {

  const [selectedBox, setSelectedBox] = useState<number>(1);

  return (
    <div className="apply">

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">

        <Title name={'신청하기'}/>
        <SubTitle name='요금제'/>

        <p>https://www.canva.com/ko_kr/free/ 참조</p>
        
        <ul className="costBox">
          <li className={ selectedBox === 1 ? 'cost selected' : 'cost'} onClick={()=>{setSelectedBox(1)}}>
            <h3>무료 팜플렛</h3>
            <p>이미지가 필요없이, 연주순서만 필요하다면!</p>

            <h2>₩ 0</h2>

            <div className='button'>
              구매하기
            </div>
          </li>
          <li className={ selectedBox === 2 ? 'cost selected' : 'cost'} onClick={()=>{setSelectedBox(2)}}>
            <h3>독창회 & 독주회 (1인)</h3>
            <p>1인 연주회 전용</p>
            
            <h2>₩ 49,000</h2>
            <p>(vat포함)</p>
            
            <div className='button'>
              구매하기
            </div>
          </li>
          <li className={ selectedBox === 3 ? 'cost selected' : 'cost'} onClick={()=>{setSelectedBox(3)}}>
            <h3>소형 연주회 (2~3인)</h3>
            <p>2~3인 연주회 전용</p>
            
            <h2>₩ 99,000</h2>
            <p>(vat포함)</p>
            
            <div className='button'>
              구매하기
            </div>
          </li>
          <li className={ selectedBox === 4 ? 'cost selected' : 'cost'} onClick={()=>{setSelectedBox(4)}}>
            <h3>중형 연주회 (4~10인)</h3>
            <p>4~10인 연주회 전용</p>
            
            <h2>₩ 149,000</h2>
            <p>(vat포함)</p>

            <div className='button'>
              구매하기
            </div>
          </li>
          <li className={ selectedBox === 5 ? 'cost selected' : 'cost'} onClick={()=>{setSelectedBox(5)}}>
            <h3>대형 연주회 (10인 이상)</h3>
            <p>10인 이상 연주회 전용</p>
            
            <h2>₩ 199,000</h2>
            <p>(vat포함)</p>

            <div className='button'>
              구매하기
            </div>
          </li>
        </ul>

        
        
       
        <Checkout/>

      </div>

      <Footer/>
    </div>
  );
}
