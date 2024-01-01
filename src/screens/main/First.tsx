import React, { useState } from 'react';
import './First.scss'
import { IoSearchOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Controller } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default function First(props : any) {

	const postData = [
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjJfMjE5%2FMDAxNzAwNjQ3MDI5NzM3.gvhpFiMbJdckzk7UqiYDBG5myBmNQKykq8OUKZRDjLUg.9xB14RHdBSu6f6HgKQs0rXF9XBMtWsWoPszo7IlKTQog.PNG.jjangmi9595%2F655d77ee3eda1672bec61275.png&type=a340", 
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjFfMTUg%2FMDAxNzAwNTY1MTY4MzM0.325-j28wQw6n55gmF1QhImoSS5sEY0J9LiPOUHyoSS0g.MSdfVwrkudvLHKLvuRtvmwaV21L0Kh7WaFxtWAfjnYAg.JPEG.yoonchae96%2Fdog-3407906_1280.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjlfMTA4%2FMDAxNzAxMjU0ODIxODMz.SDvSboywgVEDPguHwkLAwLUi2FbRBRYauiqurdnaw_Yg.A7psbbHvL44yXwab_YQmOMM_XR4FwbGuxxhJsUu3Guwg.JPEG.pks12000%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BA%25D0%25BE%25E7757.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjRfMTc5%2FMDAxNzAwODM0NjU4MDc3.YmCTDrj9pt3-28bFRSRVIMEEfQV6chsQ3BKLGIHFczkg.RiaVcAa4z0Q3lgs2UJ5HXJHy_w8bdmEzoE4e8sHd4VEg.PNG.gabipet%2F008.png&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjJfMjEy%2FMDAxNzAwNjI3NjU4OTk2.243OAVBMGnqTGlaHjF71PFwmkFhVgNi-4j175A3x4sIg.01VkPs-MB5afWClyq_YRGQROb4JSFwr4z7s1uzCKM00g.JPEG.genisu%2F%25B0%25ED%25BE%25E7%25C0%25CC%25BA%25D0%25BE%25E7752.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjVfNTYg%2FMDAxNzAwODgwNzUzNDU2.1MArqQRAEkyHAQVLMqfeOmfXbSeDftcCLhNKqUtzVMcg.9L9Lt2UgNLUFeZSaiBHVhtaenVu4LTgk48kFkw-VbJ4g.JPEG.pks12000%2F%25B0%25ED%25BE%25E7%25C0%25CC%25BA%25D0%25BE%25E7584.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjJfMjE5%2FMDAxNzAwNjQ3MDI5NzM3.gvhpFiMbJdckzk7UqiYDBG5myBmNQKykq8OUKZRDjLUg.9xB14RHdBSu6f6HgKQs0rXF9XBMtWsWoPszo7IlKTQog.PNG.jjangmi9595%2F655d77ee3eda1672bec61275.png&type=a340", 
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjFfMTUg%2FMDAxNzAwNTY1MTY4MzM0.325-j28wQw6n55gmF1QhImoSS5sEY0J9LiPOUHyoSS0g.MSdfVwrkudvLHKLvuRtvmwaV21L0Kh7WaFxtWAfjnYAg.JPEG.yoonchae96%2Fdog-3407906_1280.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjlfMTA4%2FMDAxNzAxMjU0ODIxODMz.SDvSboywgVEDPguHwkLAwLUi2FbRBRYauiqurdnaw_Yg.A7psbbHvL44yXwab_YQmOMM_XR4FwbGuxxhJsUu3Guwg.JPEG.pks12000%2F%25B0%25AD%25BE%25C6%25C1%25F6%25BA%25D0%25BE%25E7757.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjRfMTc5%2FMDAxNzAwODM0NjU4MDc3.YmCTDrj9pt3-28bFRSRVIMEEfQV6chsQ3BKLGIHFczkg.RiaVcAa4z0Q3lgs2UJ5HXJHy_w8bdmEzoE4e8sHd4VEg.PNG.gabipet%2F008.png&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjJfMjEy%2FMDAxNzAwNjI3NjU4OTk2.243OAVBMGnqTGlaHjF71PFwmkFhVgNi-4j175A3x4sIg.01VkPs-MB5afWClyq_YRGQROb4JSFwr4z7s1uzCKM00g.JPEG.genisu%2F%25B0%25ED%25BE%25E7%25C0%25CC%25BA%25D0%25BE%25E7752.jpg&type=a340",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzExMjVfNTYg%2FMDAxNzAwODgwNzUzNDU2.1MArqQRAEkyHAQVLMqfeOmfXbSeDftcCLhNKqUtzVMcg.9L9Lt2UgNLUFeZSaiBHVhtaenVu4LTgk48kFkw-VbJ4g.JPEG.pks12000%2F%25B0%25ED%25BE%25E7%25C0%25CC%25BA%25D0%25BE%25E7584.jpg&type=a340"
	]
	
  
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
							postData.map((item, index)=>{
								return (
									<SwiperSlide className='slide'>
										<div className="content">
											<img src={item} />
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