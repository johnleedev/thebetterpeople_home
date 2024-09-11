import React, { useState, useEffect } from 'react';
import './Header.scss';
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { recoilLoginState, recoilUserData } from '../RecoilStore';

const Header: React.FC = () => {
  
  let navigate = useNavigate();
   
  const menus = [
    { title: "회사소개", url:"/company"},
    { title: "포트폴리오", url:"/portfolio"},
    { title: "견적문의", url:"/contact"},
  ];

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = () => {
      setMenuOpen(!menuOpen);
  };

  const toggleMobileMenu = (index: number) => {
      setMobileMenuOpen((prevState) => ({
          ...prevState,
          [index]: !prevState[index],
      }));
  };


  return (
    <div className="header">
      <div className="header-content">
        <div className="inner">
          <div className="container header-content-container">
              <div className="header-logo" 
                onClick={()=>{navigate('/')}}
              >
                <h1>더좋은사람들</h1>
              </div>
              <div className="header-menu">
                {
                  menus.map((item:any, index:any) => (
                    <div className="menu-item" key={index}>
                        <div className="menu-face" 
                          onClick={()=>{
                            navigate(item.url);
                          }}
                        >{item.title}</div>
                    </div>
                  ))
                }
              </div>
              <div className={`header-hamburger_menu ${menuOpen ? 'header-hamburger_menu--open' : ''}`}>
                  <div className="header-hamburger_icon" onClick={toggleMenu}></div>
                  <div className="header-mobile_menu">
                      <div className="mobile_menu-inner">
                         
                          <div className="mobile_menu-list">
                              {
                                menus.map((item:any, index:any) => (
                                  <div className={`mobile_menu-item ${mobileMenuOpen[index] ? 'mobile_menu-item--open' : ''}`} 
                                    key={index} onClick={() => {
                                      toggleMobileMenu(index);
                                      setMenuOpen(false);
                                    }}>
                                      <div className="mobile_menu-item_inner">
                                          <div className={`mobile_menu-face ${mobileMenuOpen[index] ? 'mobile_menu-face--open' : ''}`}>
                                              <div className="mobile_menu-face_text" 
                                                onClick={()=>{
                                                  navigate(item.url);
                                                }}>{item.title}</div>
                                              <div className="mobile_menu-face_icon"></div>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
