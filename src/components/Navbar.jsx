import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css'; // Ensure the CSS file is correctly linked
import nav_logo from '../images/logo-black.svg';
import { IoLogoInstagram, IoMenu } from "react-icons/io5";
import { SiTelegram } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuItems } from '../constants/constants';
import { StateContext } from '../App';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu after item click
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <img src={nav_logo} alt="Logo" />
      </div>
      <div className="nav-social">
        <ul className='nav-ul-social'>
          <li>
            <Link to={'https://instagram.com/fintechhubuz?igshid=MzRlODBiNWFlZA=='}>
              <IoLogoInstagram />
            </Link>
          </li>
          <li>
            <Link to={'https://www.youtube.com/@fintechhubuz'}>
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link to={'https://t.me/fintechhubuz'}>
              <SiTelegram />
            </Link>
          </li>
        </ul>
      </div>
     
      <div className="nav-menu">
        <button className='nav-menu-btn' onClick={toggleMenu}>
          <IoMenu />
        </button>
      </div>
      {/* Menu List */}
      <div className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <button className='close-btn' onClick={() => setMenuOpen(false)}>
          &times; {/* Close icon */}
        </button>
        <ul className='nav-ul-list'>
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
      <ul className='pc-nav-ul-list'>
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
    </nav>
  );
}

export default Navbar;
