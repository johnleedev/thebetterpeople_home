import React, { useEffect, useState } from 'react';
import company from "../../images/notice/company.jpg"
import './SoloDetail.scss'
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import MainURL from "../../MainURL";
import Loading from '../../components/Loading';

interface postProps {
  id : number,
  location: string,
  title : string,
  date : string,
  time : string,
  place : string
  address : string,
  imageName : string,
  quiry: string,
  superViser: string,
  opener: string,
  supporter: string,
  ticket: string,
  ticketReserve: string,
}

interface programProps {
  number : number,
  composition: string[],
  songName: string[]
}

interface subProgramProps {
  programNumber : number,
  songName : string[]
}

interface profileProps {
  pamphletID : number,
  playerName : string,
  part : string,
  imageName : string,
  career : string,
  isStyleWrite: string
}

export default function SoloDetail (props:any) {

  const location = useLocation(); 

  let [postData, setPostData] = useState<postProps>();
  let [programData, setProgramData] = useState<programProps[]>([]);
  let [subProgramData, setSubProgramData] = useState<subProgramProps[]>([]);
  let [profileData, setProfileData] = useState<profileProps[]>([]);
  const fetchPosts = async () => {
    const post = await axios.get(`${MainURL}/pamphlets/posts/${location.state.id}`)
    if (post.data) {
      let copy : postProps = post.data[0];
      setPostData(copy);
    }
    const program = await axios.get(`${MainURL}/pamphlets/program/${location.state.id}`)
    if (program.data) {
      let copy = program.data[0];
      const programData = JSON.parse(copy.program);
      setProgramData(programData);
      const subProgramData = JSON.parse(copy.subProgram);
      setSubProgramData(subProgramData);
    }
    const profile = await axios.get(`${MainURL}/pamphlets/profiles/${location.state.id}`)
    if (profile.data) {
      let copy : profileProps[] = profile.data;
      copy.reverse();
      setProfileData(copy);
    }
  };
  console.log(typeof postData);
  console.log(typeof programData);
  console.log(typeof profileData);

  useEffect(() => {
    fetchPosts();
  }, []);

  const posterImageURL = `${MainURL}/images/pamphlet_default/${postData?.imageName}`
  
  
  return  postData === undefined || programData.length === 0 || profileData.length === 0
    ? (
    <div style={{flex:1, width:'100%', height:'80vh'}}>
      <Loading /> 
    </div>
    ) : (
    <div className='soloDetail'>

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">
        
        <Title name={'독창회&독주회'}/>

        <div className='noticebox'>
          <div className='notice-title'>{postData?.title}</div>
          <div className='noticebox-sub'>
            <div className="noticebox-sub-left">
              <div className="notice-image">
                <img src={posterImageURL} alt='postermain'/>
              </div>
            </div>
            <ul className="noticebox-sub-right">
              <li className="notice-list"><p>지역</p><p className='content'>{postData?.location}</p></li>
              <li className="notice-list"><p>날짜</p><p className='content'>{postData?.date}</p></li>
              <li className="notice-list"><p>시간</p><p className='content'>{postData?.time}</p></li>
              <li className="notice-list"><p>장소</p><p className='content'>{postData?.place}</p></li>
              <li className="notice-list"><p>주관</p><p className='content'>{postData?.superViser}</p></li>
              <li className="notice-list"><p>주최</p><p className='content'>{postData?.opener}</p></li>
              <li className="notice-list"><p>후원</p><p className='content'>{postData?.supporter}</p></li>
              <li className="notice-list"><p>티켓</p><p className='content'>{postData?.ticket}</p></li>
              <li className="notice-list"><p>티켓예매</p><p className='content'>{postData?.ticketReserve}</p></li>
              <li className="notice-list"><p>문의</p><p className='content'>{postData?.quiry}</p></li>
            </ul>
          </div>
        </div>

        <div className="programbox">
          <div className="program-title">Program</div>
          <ul className="program-cover">
            {
              programData.map((item:any, index:any)=>{
                const copy = subProgramData.find((e)=> e.programNumber === item.number);
                return (
                  <li className="program-list" key={item.number}>
                    {
                      item.composition.map((compositionItem:any, compositionIndex:any)=>{
                        return (
                          <>
                           {
                            compositionItem === 'InterMission' 
                            ?
                            null
                            :
                            <p className="program-composition">{compositionItem}</p>
                           }
                          </>
                        )
                      })
                    }
                    {
                      item.songName.map((subItem:any, subIndex:any)=>{
                        return(
                          <>
                            {
                              subItem === 'InterMission' 
                              ?
                              <p className="InterMission" key={subIndex}>
                              - InterMission -
                              </p>
                              :
                              <p className="program-songname" key={subIndex}>{subItem}</p>
                            }
                            {
                              copy
                              ?
                              <>
                                {
                                  copy.songName.map((song:any, songIdx:any)=>{
                                    return (
                                      <p className="program-subsongname" key={songIdx}>{songIdx+1}. {song}</p>
                                    )
                                  })
                                }
                              </>
                              :
                              null
                            }
                          </>
                        )
                      })
                    }
                  </li>
                )
              })
            }
          </ul>
        </div>
        
        <div className="careerbox">
          <div className="career-title">Profile</div>
          {
            profileData?.map((item:any, index:any)=>{
              const profileImageURL = `${MainURL}/images/pamphlet_player/${item.imageName}`
              const careerCopy = item.isStyleWrite === "true" ? item.career : JSON.parse(item.career);
              return (
                <div className="career-container" key={item.id}>
                  <div className="career-player">
                    <p className="career-part">{item.part}</p>
                    <p className="career-name">{item.playerName}</p>
                  </div>
                  <div className="career-content">
                    {
                      item.imageName !== 'undefined' &&
                      <div className="career-image">
                        <img src={profileImageURL} alt='profileImage'/>
                      </div>
                    }
                    <ul className="career-listcover">
                      {
                        item.isStyleWrite === "true"
                        ?
                        <div className="career-writting">
                          {careerCopy}
                        </div>
                        :
                        careerCopy.map((item:any, index:any)=>{
                          return(
                            <li className="career-list">
                              {item}
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              )
            })
          }
        </div>

        

      </div>
       
      <Footer/>
    </div>
  );
}