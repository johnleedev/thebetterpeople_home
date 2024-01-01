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



export default function RegisterPlayer (props:any) {

  let navigate = useNavigate();
  const location = useLocation(); 
 
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  
  const [part, setPart] = useState('');
  const [name, setName] = useState('');
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [selectInputWrite, setSelectInputWrite] = useState<boolean>(false);
  const [careerInputs, setCareerInputs] = useState<string[]>(['', '', '', '', '', ''])
  const [careerText, setCareerText] = useState("");
  const [isStyleWrite, setIsStyleWrite] = useState<boolean>(false);

  // careerTextArea 높이 조절
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCareerText(e.currentTarget.value);
  
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  // 이력 입력란 내용 변경
  const handleCareerInputChange = (text: string, index: number) => {
    const inputs = [...careerInputs];
    inputs[index] = text;
    setCareerInputs(inputs);
  };

  // 이력 입력란 추가
  const addCareerInput = () => {
    setCareerInputs([...careerInputs, '']);
  };

  // 이력 입력란 삭제
  const removeCareerInput = (index: number) => {
    const inputs = [...careerInputs];
    inputs.splice(index, 1);
    setCareerInputs(inputs);
  };


  interface BoxProps {
    boxNumber: number;
  }

  const ImageBox: React.FC<BoxProps> = ({ boxNumber }) => {
    const onDrop = useCallback((acceptedimageFiles: File[]) => {
      setImageFiles(acceptedimageFiles);
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

  // 출연진 정보 등록
  const registerPost = async () => {
    const formData = new FormData();
    formData.append("img", imageFiles[0]);
    const getParams = {
      userAccount : 'johnleedev@naver.com', userName: '이요한',
      pamphletID : location.state, part: part, name : name, 
      imageName : imageFiles[0].name, isStyleWrite : isStyleWrite,
      career : JSON.stringify(selectInputWrite === false ? careerInputs : careerText),
    }

    axios 
      .post(`${MainURL}/pamphlets/postplayer`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: getParams,
      })
      .then((res) => {
        if (res.data === true) {
          alert('입력되었습니다.');
          navigate('/registerresult'); 
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

        <Title name={'등록하기'}/>
        <SubTitle name='출연진 프로필'/>

        {/* 프로필 */}
        <div className='registerBox'>
          <div className="register menu">
            <h3>프로필 사진</h3>
            <div className="inputbox white">
              <ImageBox boxNumber={1} />
            </div>
          </div>
          <div className="divider"></div>
          <div className="register content">
            <div className="inputbox">
              <div className='name'>
                <p>파트</p>
              </div>
              <input type="text" onChange={(e)=>{setPart(e.target.value)}} value={part} />
            </div>
            <div className="inputbox">
              <div className='name'>
                <p>이름</p>
              </div>
              <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} />
            </div>
            <div className="selectButton">
              <div className={selectInputWrite === false ? "selectButton-btn seleted" : "selectButton-btn"} 
                onClick={()=>{setSelectInputWrite(false); setIsStyleWrite(false)}}>이력형식</div>
              <div className={selectInputWrite === true ? "selectButton-btn seleted" : "selectButton-btn"} 
                onClick={()=>{setSelectInputWrite(true); setIsStyleWrite(true)}}>글형식</div>
            </div>
            {
              selectInputWrite === false
              ?
              <>
                {careerInputs?.map((item, index) => (
                  <div key={index} className='inputbox'>
                    <div className='name2'>
                      <p>{index + 1}</p>
                    </div>
                    <input
                      value={item}
                      onChange={(e) => handleCareerInputChange(e.target.value, index)}
                    />
                    {index === careerInputs.length - 1 ? (
                      <div className='plus-minus-button'
                      onClick={addCareerInput}
                      ><p>+</p></div>
                    ) : (
                      <div className='plus-minus-button'
                        onClick={() => removeCareerInput(index)}
                      ><p>-</p></div>
                    )}
                  </div>
                ))}
              </>
              :
              <div className="inputbox">
                <div className='name'>
                  <p>프로필</p>
                </div>
                <textarea 
                  ref={textareaRef}
                  placeholder=''
                  value={careerText}
                  onChange={onChange}
                />
              </div>
            }
          </div>
          <div className="divider"></div>
          <div className="register view">
            
          </div>
        </div>
     
        <div className="buttonbox">
          <div className="button" onClick={()=>{
            navigate('/registerdefault'); 
          }}>
            <p>이전</p>
          </div>
          <div className="button" onClick={registerPost}>
            <p>작성 완료</p>
          </div>
        </div>
        
      </div>

      <Footer/>
    </div>
  );
}
