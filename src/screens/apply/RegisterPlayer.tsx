import React, { useCallback, useRef, useState } from 'react';
import './RegisterPlayer.scss'
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
  const sort = location.state.sort;
  
  const userPart = location.state.part;
  
  interface playerProps {
    part: string;
    name: string;
    imageFiles: File[];
    careerInputs: string[];
    careerText : string,
    isStyleWrite: boolean;
  }

  const [players, setPlayers] = useState<Array<playerProps>>(
    sort === 'Piano' 
    ?
    [
      { part: userPart ? userPart : '', name: '', imageFiles: [], careerInputs: ['', '', '', ''], careerText: "", isStyleWrite: false }
    ]
    :
    [
      { part: userPart ? userPart : '', name: '', imageFiles: [], careerInputs: ['', '', '', ''], careerText: "", isStyleWrite: false },
      { part: 'Piano', name: '', imageFiles: [], careerInputs: ['', '', '', ''], careerText: "", isStyleWrite: false }
    ]
  );

  // 연주자 박스 추가
  const addProgramInput = () => {
    setPlayers([...players, { part: '', name: '', imageFiles: [], careerInputs: ['', '', '', ''], careerText: "", isStyleWrite: false }]);
  };
  

  // careerTextArea 높이 조절
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const inputs = [...players];
    const copy = e.target.value;
    inputs[index].careerText = copy;
    setPlayers(inputs);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  // 파트 입력란 내용 변경
  const handlePartInputChange = (text: string, index: number) => {
    const inputs = [...players];
    inputs[index].part = text;
    setPlayers(inputs);
  };

  // 이름 입력란 내용 변경
  const handleNameInputChange = (text: string, index: number) => {
    const inputs = [...players];
    inputs[index].name = text;
    setPlayers(inputs);
  };

  // 이력 스타일 변경
  const handleCareerStyleChange = (index: number, selectInputWrite: boolean) => {
    const inputs = [...players];
    inputs[index].isStyleWrite = !selectInputWrite;
    setPlayers(inputs);
  };

  // 이력 입력란 내용 변경
  const handleCareerInputChange = (index: number, text: string, subIndex: number) => {
    const inputs = [...players];
    inputs[index].careerInputs[subIndex] = text;
    setPlayers(inputs);
  };

  // 이력 입력란 추가
  const addCareerInput = (index: number, subIndex: number) => {
    const inputs = [...players];
    inputs[index].careerInputs[subIndex + 1] = "";
    setPlayers(inputs);
  };

  // 이력 입력란 삭제
  const removeCareerInput = (index: number) => {
    const inputs = [...players];
    inputs[index].careerInputs.splice(index, 1);
    setPlayers(inputs);
  };

  // ---------------------------------------------------------------

  interface BoxProps {
    index: number;
  }

  const ImageBox: React.FC<BoxProps> = ({ index }) => {
    
    const onDrop = useCallback((acceptedimageFiles: File[]) => {
      const inputs = [...players];
      inputs[index].imageFiles = acceptedimageFiles;
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
    return (
      <div className="boxStyle">
        {players[index].imageFiles.length > 0 && 
          <div className='imagedelete' onClick={()=>{
            const copy = [...players];
            copy[index].imageFiles = [];
            setPlayers(copy);
          }}>-</div>
        }
        {players[index].imageFiles.length > 0 ? (
          <img
            src={URL.createObjectURL(players[index].imageFiles[0])}
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
  // ---------------------------------------------------------------
  // 출연진 정보 등록
  const registerPost = async () => {
    
    const formDataArray = players.map((player) => {
      const formData = new FormData();
      formData.append("img", player.imageFiles[0]);
      return {
        formData,
        getParams: {
          userAccount: 'johnleedev@naver.com',
          userName: '이요한',
          pamphletID: location.state.pamphletID,
          part: player.part,
          name: player.name,
          imageName: player.imageFiles[0]?.name,
          isStyleWrite: player.isStyleWrite,
          career: JSON.stringify(player.isStyleWrite === false ? player.careerInputs : player.careerText),
        },
      };
    });

    const requests = formDataArray.map(({ formData, getParams }) => {
      return axios.post(`${MainURL}/pamphlets/postplayer`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: getParams,
      });
    });

    try {
      const responses = await Promise.all(requests);
      const allSuccessInserted = responses.every(res => res.data === true);
      if (allSuccessInserted) {
        alert('모든 출연진 정보가 성공적으로 입력되었습니다.');
        navigate('/registerresult');
      } else {
        console.error('일부 출연진 정보가 입력되지 않았습니다.');
      }
    } catch (error) {
      console.error('여러 명의 출연진 정보를 전송하는 중 에러 발생:', error);
    }
  };

  return (
    <div className="apply">

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">

        <Title name={'등록하기'}/>
        <SubTitle name='출연진 프로필'/>

        {players.map((item:any, index:any) => {
            
          return (
            <div className='registerPlayerBox' key={item.id}>
              <div className="register menu">
                <h3>프로필 사진</h3>
                <div className="inputbox white">
                  <ImageBox index={index} />
                </div>
                {
                  index === players.length - 1 && sort !== 'Piano' &&
                  <div className="inputboxNoButton">* 원하시면 사진 첨부 안하셔도 됩니다.</div>
                }
              </div>
              <div className="divider"></div>
              <div className="register content">
                <div className="inputbox">
                  <div className='name'>
                    <p>파트</p>
                  </div>
                  <input type="text" value={item.part} onChange={(e)=>{handlePartInputChange(e.target.value, index)}}/>
                </div>
                <div className="inputbox">
                  <div className='name'>
                    <p>이름(한글)</p>
                  </div>
                  <input type="text" value={item.name} onChange={(e)=>{handleNameInputChange(e.target.value, index)}}/>
                </div>
                <div className="selectButton">
                  <div className={item.isStyleWrite === false ? "selectButton-btn seleted" : "selectButton-btn"} 
                    onClick={()=>{handleCareerStyleChange(index, item.isStyleWrite)}}>이력형식</div>
                  <div className={item.isStyleWrite === true ? "selectButton-btn seleted" : "selectButton-btn"} 
                    onClick={()=>{handleCareerStyleChange(index, item.isStyleWrite)}}>글형식</div>
                </div>
                {
                  item.isStyleWrite === false
                  ?
                  <>
                    { item.careerInputs?.map((subItem:any, subIndex:any) => (
                      <div key={subIndex} className='inputbox'>
                        <div className='name2'>
                          <p>{subIndex + 1}</p>
                        </div>
                        <input
                          value={subItem}
                          onChange={(e) => handleCareerInputChange(index, e.target.value, subIndex)}
                        />
                        { subIndex === item.careerInputs.length - 1 ? (
                          <div className='plus-minus-button'
                          onClick={()=>{addCareerInput(index, subIndex)}}
                          ><p>+</p></div>
                        ) : (
                          <div className='plus-minus-button'
                            onClick={() =>{removeCareerInput(index)}}
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
                      value={item.careerText}
                      onChange={(e)=>{onChange(e, index)}}
                    />
                  </div>
                }
              </div>
              <div className="divider"></div>
              <div className="register view">
                
              </div>
            </div>
          )
        })
        }
        {
          players.length === 2 &&
          <div style={{ display:'flex'}} className='guest-plus-box'>
              * 협연 연주자 추가하기
              <div className='guest-plus-button'
                onClick={addProgramInput}
                >
                  <p>+</p>
              </div>
          </div>
        }
        <div className="buttonbox">
          <div className="button" onClick={()=>{
            navigate('/registerprogram'); 
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
