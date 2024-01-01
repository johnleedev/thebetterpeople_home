import React, { useCallback, useRef, useState } from 'react';
import './Register.scss'
import company from "../../images/notice/company.jpg"
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import MainURL from "../../MainURL";
import { useNavigate, useLocation } from 'react-router-dom';
import SubTitle from '../../components/SubTitle';



export default function RegisterResult (props:any) {

  let navigate = useNavigate();
  const location = useLocation(); 
 

  return (
    <div className="apply">

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">

        <Title name={'등록하기'}/>
        <SubTitle name='작성 완료'/>
        
      </div>

      <Footer/>
    </div>
  );
}
