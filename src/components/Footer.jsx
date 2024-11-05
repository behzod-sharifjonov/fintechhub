import React from 'react'
import './components.css'
import { IoLogoInstagram } from 'react-icons/io'
import { FaYoutube } from 'react-icons/fa6'
import { SiTelegram } from 'react-icons/si'
import { Link } from 'react-router-dom'
import nav_logo from '../images/logo-black.svg'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top display-center">
          <div className="footer-top-left">
            <div className="logo footer-logo">
              <img src={nav_logo} alt="" />

              <div className='footer-email'>
                <a href="">
                  <FaPhone />
                  <span>71 203 88 00</span>
                </a>
                <a href="">
                  <IoMdMail />
                  <span>info@fintechhub.uz</span>
                </a>
              </div>

              <div className="nav-social">
                <ul className='display-center nav-ul-social footer-social'>
                  <Link to={'https://instagram.com/fintechhubuz?igshid=MzRlODBiNWFlZA=='}>
                    <IoLogoInstagram />
                  </Link>
                  <Link to={'https://www.youtube.com/@fintechhubuz'}>
                    <FaYoutube />
                  </Link>
                  <Link to={'https://t.me/fintechhubuz'}>
                    <SiTelegram />
                  </Link>
                  <Link>
                    <FaFacebook />
                  </Link>
                  <Link>
                    <FaLinkedin />
                  </Link>
                </ul>
              </div>
            </div>
            <div className="footer-course">
              <h3>Kurslarimiz</h3>
              <ul>
                <li>Front-End dasturlash kursi</li>
                <li>Back-End dasturlash kursi </li>
                <li>Mobile dasturlash kursi </li>
                <li>Kiberxavfsizlik kursi</li>
                <li>QA Engineer kursi</li>
                <li>KIDS  kursi</li>
              </ul>
            </div>
            <div className="footer-course">
              <h3>Bo'limlar</h3>
              <ul>
                <li>Biz  haqimizda</li>
                <li>Rasmlar</li>
                <li>Kontakt</li>
                <li>FAQ</li>
                <li>Ustozlarimiz</li>
              </ul>
            </div>
          </div>
          <div className="footer-top-right">
            <h2>Biz haqimizda qisqacha</h2>

            <span>FintechHub - dasturlashga ilk qadam shu yerdan boshlanadi!</span>
            <button className='footer-btn-1'>71 203 88  00</button>
            <button className='footer-btn-2'>Ro'yhatdan o'tish</button>
          </div>

        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; Copyright 2023 by <a href="/">fintechhub.uz</a></span>
          </div>
          <div className="footer-bottom-right">
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer