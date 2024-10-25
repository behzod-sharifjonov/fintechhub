import React from 'react'
import './components.css'
import ContactFrom from './ContactFrom'
import { Typewriter } from 'react-simple-typewriter'

function Banner() {
    return (
        <div className='banner'>
            <div className="banner-container padding">
                <div className="banner-heading">
                    <span className='banner-span'>IT kurslari bo'yicha O'zbekistondagi yirik laboratoriyaga xush kelibsiz! </span>
                    <h1>
                    <Typewriter
                        words={['Dasturlashdagi ilk qadam FINTECHHUB\'dan boshlanadi!']}
                        loop={1}
                        cursor
                        // cursorStyle='_'
                        typeSpeed={100}
                        // deleteSpeed={50}
                        delaySpeed={5000}
                    />
                    </h1>
                </div>
                <ContactFrom />
            </div>
        </div>
    )
}

export default Banner