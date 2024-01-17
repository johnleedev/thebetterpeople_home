import React, { useEffect, useState } from 'react';
import './First.scss'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import axios from 'axios'
import MainURL from "../../MainURL";

export default function First(props : any) {

	let navigate = useNavigate();

	interface postList {
    id : number,
    location: string,
    title : string,
    date : string,
    time : string,
    place : string,
		imageName : string
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


  return (
    <div className="first">
      
			<div className="inner">

				<div className="topbox">
 					<div className="dropdown-menu">
							<p>e-팜플렛 검색</p>
							<div className="cover">
								<select>
									<option value="all">전체</option>
									<option value="1">독창회&독주회</option>
									<option value="2">소규모 연주회(2~10인)</option>
									<option value="3">대형 연주회(10인이상)</option>
								</select>
								<div className="search">
									<input type="text" placeholder='검색 키워드를 입력하세요'/>
									<IoSearchOutline 
										className="search-icon"
										onClick={()=>{}}
									/>
								</div>
							</div>
						</div>
				</div>

				<div className="bottombox">
					<div className='title'>
						<p>최근 게시물</p>
					</div>
					<Swiper 
						className="swiper"
						loop={true}
						modules={[Pagination, Navigation, Autoplay]}
						autoplay = {{ delay : 3000, disableOnInteraction: true}}
						slidesPerView={4}
						slidesPerGroup={1} 
						spaceBetween={10}
					>
						{
							postList.map((item, index)=>{
								const posterImageURL = `${MainURL}/images/pamphlet_default/${item?.imageName}`
 								return (
									<SwiperSlide className='slide' key={index}>
										<div className="content" onClick={()=>{
											 navigate('/detail', {state: { ...item}})
										}}>
											<img src={posterImageURL} />
											<div>{item.title}</div>
											<div>{item.date}</div>
											<div>{item.time}</div>
											<div>{item.location}</div>
											<div>{item.place}</div>
										</div>
									</SwiperSlide>
								)
							})
						}
						  {/* Pagination */}
							<div className="swiper-pagination" />
							{/* Navigation */}
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
					</Swiper>
				</div>
			</div>
	
    </div>
  );
}