import React from 'react'
import './components.css'
import { IoIosMailOpen } from "react-icons/io";

function Mailchimp() {
    return (
        <div className='mailchimp'>
            <div className="mailchimp-container">
                <div className="mailchimp-icons">
                    <div className="mailchimp-icon">
                        <IoIosMailOpen />
                    </div>
                    <h2>Mutlaqo bepul sinov <br /> darsiga yoziling!</h2>
                </div>
                <div className="mailchimp-btn">
                    <button>Shu yerga bosing</button>
                </div>
            </div>
        </div>
    )
}

export default Mailchimp