import React from 'react'
import './components.css'
import nav_logo from '../images/logo-black.svg'
import { IoLogoInstagram } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../constants/constants';
import { IoMenu } from "react-icons/io5";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();



  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <nav className='padding'>
      <div className="logo">
        <img src={nav_logo} alt="" />
      </div>
      <div className="nav-social">
        <ul className='display-center nav-ul-social'>
          <Link to={'https://instagram.com/fintechhubuz?igshid=MzRlODBiNWFlZA=='}>
            <IoLogoInstagram />
          </Link>
          <Link to={'https://www.youtube.com/@fintechhubuz'}>
            <FaYoutube />
          </Link>
          <Link to={'https://t.me/fintechhubuz'}>
            <SiTelegram />
          </Link>
        </ul>
      </div>
      <div className="nav-list">
        <ul className='display-center nav-ul-list'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={location.pathname === item.path ? 'active' : ''}
              onClick={() => handleItemClick(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-menu">
        <button className='nav-menu-btn'>
          <IoMenu />
        </button>
      </div>
    </nav>
  )
}

export default Navbar