import React from 'react'
import './components.css'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Header() {
    return (
        <header>

            <div className="header-container">
                <div className='display-center gap'>

                    <a href="">
                        <FaPhone />
                        <span>71 203 88 00</span>
                    </a>
                    <a href="">
                        <IoMdMail />
                        <span>info@fintechhub.uz</span>
                    </a>
                </div>
                <a href="https://dasturlash.fintechhub.uz/">
                    <b>Kurslarga yozilish</b>
                </a>
            </div>

        </header>
    )
}

export default Header