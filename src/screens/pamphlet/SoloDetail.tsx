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
  program : Array<string>,
  quiry: string,
  superViser: string,
  opener: string,
  supporter: string,
  ticket: string,
  ticketReserve: string,
}

interface profileProps {
  id : number,
  playerName : string,
  part : string,
  imageName : string,
  career : string,
  isStyleWrite: string
}

export default function SoloDetail (props:any) {

  const location = useLocation(); 

  let [postData, setPostData] = useState<postProps>();
  let [profileData, setProfileData] = useState<profileProps[]>([]);
  const fetchPosts = async () => {
    const post = await axios.get(`${MainURL}/pamphlets/posts/${location.state.id}`)
    if (post.data) {
      let copy : postProps = post.data;
      setPostData(copy);
    }
    const profile = await axios.get(`${MainURL}/pamphlets/profiles/${location.state.id}`)
    if (profile.data) {
      let copy : profileProps[] = profile.data;
      setProfileData(copy);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const posterImageURL = `${MainURL}/images/pamphlet_default/${postData?.imageName}`
 
  return  postData === undefined || profileData === undefined ? <Loading /> : (
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
              <li className="notice-list"><p>지역</p>{postData?.location}</li>
              <li className="notice-list"><p>날짜</p>{postData?.date}</li>
              <li className="notice-list"><p>시간</p>{postData?.time}</li>
              <li className="notice-list"><p>장소</p>{postData?.place}</li>
              <li className="notice-list"><p>주관</p>{postData?.superViser}</li>
              <li className="notice-list"><p>주최</p>{postData?.opener}</li>
              <li className="notice-list"><p>후원</p>{postData?.supporter}</li>
              <li className="notice-list"><p>티켓</p>{postData?.ticket}</li>
              <li className="notice-list"><p>티켓예매</p>{postData?.ticketReserve}</li>
              <li className="notice-list"><p>문의</p>{postData?.quiry}</li>
            </ul>
          </div>
        </div>

        <div className="programbox">
          <div className="program-title">Program</div>
          <ul className="program-cover">
            {
              postData?.program.map((item:any, index:any)=>{
                return (
                  <li className="program-list">
                    {item}
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
                      item.imageName &&
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