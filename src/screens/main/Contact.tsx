import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss'
import { useSetRecoilState } from 'recoil';
import { contact_Y_Location } from '../../RecoilStore';



export default function Contact(props : any) {

  const setContact_Y_Location = useSetRecoilState(contact_Y_Location);
  const divRef = useRef<HTMLDivElement>(null); 
  
  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setContact_Y_Location(rect.y);
    }
  }, []); 

  return (
    <div className="contact" ref={divRef}>
      
			<div className="inner">

        <h1>CONTACT</h1>

        <div className="boxcover">
          <div className="box left">
            <div className="textrow">
              <h2>견적문의</h2>
            </div>
            <div className="textrow">
              <h2>상담신청</h2>
            </div>
          </div>

          <div className="box right">

            <div className="textrow">
              <h2>TEL</h2>
              <div className="divider"></div>
              <p>010-9584-5948</p>
            </div>
            <div className="textrow">
              <h2>EMAIL</h2>
              <div className="divider"></div>
              <p>thebetterpeople@naver.com</p>
            </div>
          </div>

        </div>


			</div>
	
    </div>
  );
}