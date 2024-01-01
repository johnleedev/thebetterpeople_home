import React, { useEffect, useState } from 'react';
import company from "../../images/notice/company.jpg"
import './Solo.scss'
import Title from '../../components/Title';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import MainURL from "../../MainURL";

export default function Solo(props:any) {

  let navigate = useNavigate();

  interface postList {
    id : number,
    location: string,
    title : string,
    date : string,
    time : string,
    place : string
  }

  let [postList, setPostList] = useState<postList[]>([]);

  // 게시글 가져오기
  const fetchPosts = async () => {
    const res = await axios.get(`${MainURL}/pamphlets/postsall`)
    if (res) {
      let copy: any = [...res.data];
      copy.reverse();
      setPostList(copy);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  
  // State 변수 추가
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5; // 한 페이지당 표시될 리스트 수
  const totalPages = Math.ceil(postList.length / itemsPerPage);

  // 리스트를 현재 페이지에 해당하는 부분만 필터링
  const displayedpostList = postList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지 변경 함수
  const changePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='solo'>

      <div className="topimage">
        <img src={company} alt='company'/>
      </div>

      <div className="inner">
        
        <Title name={'독창회&독주회'}/>

        <div className='list-wrapper'>

          <div className='list-menubox'>
            <div className='list-menu box1'>지역</div>
            <div className='list-menu box2'>제목</div>
            <div className='list-menu box3'>날짜</div>
            <div className='list-menu box4'>시간</div>
            <div className='list-menu box5'>장소</div>
          </div>
          {
            displayedpostList.map((item:any, index:any)=>{
              return(
                <div key={item.id}
                  onClick={()=>{
                  navigate('/solodetail', {state: { ...item}})
                }}>
                  <div style={{width: '100%', height: '1px', backgroundColor: '#BDBDBD'}}></div>
                  <div className='list-contentbox'>
                    <div className='list-content box1'>{item.location}</div>
                    <div className='list-content box2'>{item.title}</div>
                    <div className='list-content box3'>{item.date}</div>
                    <div className='list-content box4'>{item.time}</div>
                    <div className='list-content box5'>{item.place}</div>
                  </div>
                </div>
              )
            })
          }
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => changePage(page)}
              style={{ margin: '5px', padding: '5px', cursor: 'pointer', borderRadius: '5px' }}
            >
              {page}
            </button>
          ))}
        </div>
       
      </div>
       
      <Footer/>
    </div>
  );
}