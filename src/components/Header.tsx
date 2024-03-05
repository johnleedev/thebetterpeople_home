import React, {  useState, useEffect, useRef } from "react";
import './header.scss'
import logo from '../images/logo.jpeg'
import { useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { contact_Y_Location, projects_Y_Location } from "../RecoilStore";


export default function Header () {
  
  let navigate = useNavigate();

  const [menu, setMenu] = useState<boolean>(false);
 
  const contact_Y = useRecoilValue(contact_Y_Location);
  const projects_Y = useRecoilValue(projects_Y_Location);

  console.log(contact_Y);
  console.log(projects_Y);

  return (
    
    <header className="header">

      <div className="mainmenu">
        <div className="inner">
        
          <div className="box box1" onClick={()=>{navigate('/');}}>
            <img src={logo} />
          </div>
          
          <div className="box box2">
            <div className="menu"
              onClick={()=>{
                window.scroll({top: contact_Y - 150, behavior:'smooth'}) 
              }}
            >
             CONTACT
            </div>
            <div className="menu"
              onClick={()=>{
                window.scroll({top: projects_Y - 150, behavior:'smooth'}) 
              }}
            >
             PROJECTS
            </div>
          </div>

          <div className="box box3">
            <div className="menu-icon"
              onClick={()=>{
                setMenu(!menu);
              }}
            >
              <FaBars/>
            </div>
          </div>
        </div>

        <div className={ menu ? 'dropdown-menu' : 'dropdown-menu-none'}>
          <div className="menu"
            onClick={()=>{
              window.scroll({top: contact_Y - 150, behavior:'smooth'}) 
              setMenu(!menu);
            }}
          >
            CONTACT
          </div>
          <div className="menu"
            onClick={()=>{
              window.scroll({top: projects_Y - 100, behavior:'smooth'}) 
              setMenu(!menu);
            }}
          >
            PROJECTS
          </div>
        </div>

      </div>
      
      
    </header>
    
  );
};

