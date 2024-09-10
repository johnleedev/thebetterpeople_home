import React, { useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './Portfolio.scss';
import charity from "../../images/charity.png"

export default function MainPortfolio() {


  let navigate = useNavigate();
  interface ListProps {
    id : number,
    sort : string;
    projectName: string;
    image: string;
    link: string;
  }

  const list = [
    { id : 1, sort : '반응형웹', projectName: '수련회모아', image: 'retreatmore.png', link: 'https://retreatmore.com/'},
    { id : 2, sort : '반응형웹', projectName: '성악하는사람들', image: 'studentsclassic.png', link: 'https://www.studentsclassic.com/'},
    { id : 3, sort : '반응형웹', projectName: '계명대창업대학원 커뮤니티', image: 'kugsge.png', link: 'http://kugsge.com/'},
    { id : 7, sort : '어플리케이션', projectName: '성악하는사람들(안드로이드)', image: 'classic-icon.png', link: 'https://play.google.com/store/apps/details?id=com.studentsclassic.app'},
    { id : 8, sort : '어플리케이션', projectName: '성악하는사람들(IOS)', image: 'classic-icon.png', link: 'https://apps.apple.com/kr/app/%EC%84%B1%EC%95%85%ED%95%98%EB%8A%94%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4/id6451302745'},
    { id : 9, sort : '어플리케이션', projectName: '교회수첩(안드로이드)', image: 'churchbooklet-icon.png', link: 'https://play.google.com/store/apps/details?id=com.churchbooklet.app'},
    { id : 10, sort : '어플리케이션', projectName: '교회수첩(IOS)', image: 'churchbooklet-icon.png', link: 'https://apps.apple.com/kr/app/%EA%B5%90%ED%9A%8C%EC%88%98%EC%B2%A9/id6479247886'},
    { id : 11, sort : '어플리케이션', projectName: '간호대학생들(안드로이드)', image: 'nursing-icon.png', link: 'https://play.google.com/store/apps/details?id=com.studentsnursing.app'},
    { id : 12, sort : '어플리케이션', projectName: '간호대학생들(IOS)', image: 'nursing-icon.png', link: 'https://apps.apple.com/kr/app/%EA%B0%84%ED%98%B8%EB%8C%80%ED%95%99%EC%83%9D%EB%93%A4/id6477461773'},
    { id : 13, sort : '어플리케이션', projectName: '아쇼(안드로이드)', image: 'ashow-icon.png', link: 'https://play.google.com/store/apps/details?id=com.ashow.app'},
    { id : 14, sort : '어플리케이션', projectName: '아쇼(IOS)', image: 'ashow-icon.png', link: 'https://apps.apple.com/kr/app/%EC%95%84%EC%87%BC/id6455837375'},
  ]

  interface PlaceGroup {
    sort: string;
    portfolioList: ListProps[];
  }

  const portfolioData: PlaceGroup[] = list.reduce((acc: PlaceGroup[], curr: ListProps) => {
    const sort = curr.sort;
    const existingGroup = acc.find(group => group.sort === sort);
    const list: ListProps = {
        id : curr.id,
        sort: curr.sort,
        projectName: curr.projectName,
        image: curr.image,
        link: curr.link,
    };
    if (existingGroup) {
        existingGroup.portfolioList.push(list);
    } else {
        acc.push({
            sort: sort,
            portfolioList: [list]
        });
    }
    return acc;
  }, []);

  return (
    <div className="portfolio">

      <div className="inner">
       
        <div className="subpage__main">
          <div className="subpage__main__title">
            <h3>포트폴리오</h3>
          </div>
         

          <div className="subpage__main__content">
            <div className="main__content">
            {
              portfolioData.map((item:any, index:any) => (
                  <div
                    key={index}
                    className="place__wrap--category"
                    data-aos="fade-up"
                  >
                    <div className="place__title__row">
                      <div className="place__title">
                        {item.sort}
                      </div>
                    </div>
                    <div className="place__wrap--item">
                      { 
                        item.portfolioList.map((subItem:any, subIndex:any) => {
                          
                          return (
                            <a key={subIndex} className="place__item"
                              href={subItem.link} target='_blank'
                            >
                              <div className="place__img--cover">
                                <div className='imageBox'>
                                  <img src={`https://www.studentsclassic.com/images/thebetterpeople/${subItem.image}`} alt={'등록된 사진이 없습니다.'} />
                                </div>
                              </div>
                              <div className="place__coname">
                                <p>{subItem.projectName}</p>
                              </div>
                              <div className="place__name">
                                <p>{subItem.sort}</p>
                                <p>규모: {subItem.size}</p>
                              </div>
                          </a>
                          )
                        })
                      }
                    </div>
                  </div>
              ))
            }
            </div>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

