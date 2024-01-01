import React, { useCallback, useRef, useState } from 'react';
import './Register.scss'
import company from "../../images/notice/company.jpg"
import Footer from '../../components/Footer';
import Title from '../../components/Title';
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import MainURL from "../../MainURL";
import { useNavigate } from 'react-router-dom';
import SubTitle from '../../components/SubTitle';


export default function RegisterDefault(props:any) {

  let navigate = useNavigate();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  // -------------------------------------------------------
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [address, setAddress] = useState('');
  const [superViser, setSuperViser] = useState('');
  const [opener, setOpener] = useState('');
  const [supporter, setSupporter] = useState('');
  const [ticket, setTicket] = useState('');
  const [ticketReserve, setTicketReserve] = useState('');
  const [quiry, setQuiry] = useState('');  
  const [programInputs, setProgramInputs] = useState<string[]>(['', '', '', ''])
  
  // 프로그램 입력란 내용 변경
  const handleProgramInputChange = (text: string, index: number) => {
    const inputs = [...programInputs];
    inputs[index] = text;
    setProgramInputs(inputs);
  };

  // 프로그램 입력란 추가
  const addProgramInput = () => {
    setProgramInputs([...programInputs, '']);
  };

  // 프로그램 입력란 삭제
  const removeProgramInput = (index: number) => {
    const inputs = [...programInputs];
    inputs.splice(index, 1);
    setProgramInputs(inputs);
  };


  interface BoxProps {
    boxNumber: number;
  }

  const ImageBox: React.FC<BoxProps> = ({ boxNumber }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
      setImageFiles(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
    return (
      <div className="boxStyle">
        {imageFiles.length > 0 && 
          <div className='imagedelete' onClick={()=>{setImageFiles([])}}>-</div>
        }
        {imageFiles.length > 0 ? (
          <img
            src={URL.createObjectURL(imageFiles[0])}
            style={{ width: '100%', height: '100%'}}
          />
          ) : (
          <div {...getRootProps()} className="dropzoneStyle">
            <input {...getInputProps()} />
            <div className='imageplus'>+</div>
          </div>
          )
        }
      </div>
    );
  };

  // 프로그램 팜플렛 등록
  const registerPost = async () => {
    const formData = new FormData();
    formData.append("img", imageFiles[0]);
    const getParams = {
      userAccount : 'johnleedev@naver.com', userName: '이요한',
      title: title, location: location, date: date, time : time, 
      place : place, address : address, superViser :superViser,
      opener: opener, supporter : supporter,
      ticket :ticket, ticketReserve: ticketReserve, quiry :quiry,
      imageName : imageFiles[0].name,
      program : JSON.stringify(programInputs)
    }

    axios 
      .post(`${MainURL}/pamphlets/postdefault`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: getParams,
      })
      .then((res) => {
        if (res.data.success === true) {
          alert('입력되었습니다.');
          navigate('/registerplayer', {state : res.data.pamphletID }); 
        } else {
          alert(res.data);
        }
      })
      .catch(() => {
        console.log('실패함')
      })
  };

  return (
    <div className="apply">

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">

        <div className="title">
          <Title name={'등록하기'}/>
        </div>

        <SubTitle name='연주회 정보 / 연주 순서'/>

        {/* 기본정보 */}
        <div className='registerBox'>
          <div className="register menu">
            <h3>연주회 포스터</h3>
            <div className="inputbox white">
              <ImageBox boxNumber={1}/>
            </div>
          </div>
          <div className="divider"></div>
          <div className="register content">
            <div className="inputbox">
              <div className='name'>
                <p>연주회 제목</p>
              </div>
              <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>지역</p>
              </div>
              <input type="text" onChange={(e)=>{setLocation(e.target.value)}} value={location} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>날짜</p>
              </div>
              <input type="text" onChange={(e)=>{setDate(e.target.value)}} value={date} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>시간</p>
              </div>
              <input type="text" onChange={(e)=>{setTime(e.target.value)}} value={time} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>장소</p>
              </div>
              <input type="text" onChange={(e)=>{setPlace(e.target.value)}} value={place} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>주소</p>
              </div>
              <input type="text" onChange={(e)=>{setAddress(e.target.value)}} value={address} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>주관</p>
              </div>
              <input type="text" onChange={(e)=>{setSuperViser(e.target.value)}} value={superViser} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>주최</p>
              </div>
              <input type="text" onChange={(e)=>{setOpener(e.target.value)}} value={opener} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>후원</p>
              </div>
              <input type="text" onChange={(e)=>{setSupporter(e.target.value)}} value={supporter} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>티켓</p>
              </div>
              <input type="text" onChange={(e)=>{setTicket(e.target.value)}} value={ticket} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>티켓예매</p>
              </div>
              <input type="text" onChange={(e)=>{setTicketReserve(e.target.value)}} value={ticketReserve} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>문의</p>
              </div>
              <input type="text" onChange={(e)=>{setQuiry(e.target.value)}} value={quiry} />
            </div>
          </div>
          <div className="divider"></div>
          <div className="register view">
            <div className="cover">
              <div className="topbox"></div>
              <div className="contentbox">
                <div className="content-text" style={{fontSize:24}}>{title}</div>
                <div className="content-text">{date}</div>
                <div className="content-text">{time}</div>
                <div className="content-text">{place}</div>
                <div className="content-text">{address}</div>
                <div className="content-text">{superViser}</div>
                <div className="content-text">{opener}</div>
                <div className="content-text">{supporter}</div>
                <div className="content-text">{ticket}</div>
                <div className="content-text">{ticketReserve}</div>
                <div className="content-text">{quiry}</div>
              </div>
            </div>
          </div>
        </div>

        {/* 연주순서 */}
        <div className='registerBox'>
          <div className="register menu">
            <h3>연주순서</h3>
          </div>
          <div className="divider"></div>
          <div className="register content">
            <>
              {programInputs?.map((item, index) => (
                <div key={index} className='inputbox'>
                  <div className='name2'>
                    <p>{index + 1}</p>
                  </div>
                  <input
                    value={item}
                    onChange={(e) => handleProgramInputChange(e.target.value, index)}
                  />
                  {index === programInputs.length - 1 ? (
                    <div className='plus-minus-button'
                      onClick={addProgramInput}
                    ><p>+</p></div>
                  ) : (
                    <div className='plus-minus-button'
                      onClick={() => removeProgramInput(index)}
                    ><p>-</p></div>
                  )}
                </div>
              ))}
            </>
          </div>
          <div className="divider"></div>
          <div className="register view">
            
          </div>
        </div>
     
        <div className="buttonbox">
          <div className="button" onClick={registerPost}>
            <p>다음</p>
          </div>
        </div>

        

        
      </div>

      <Footer/>
    </div>
  );
}
