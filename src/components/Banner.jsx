// import React from 'react'
// import './components.css'
// import ContactFrom from './ContactFrom'
// import { Typewriter } from 'react-simple-typewriter'
// import video from '../images/main_bg.mp4'

// function Banner() {



//     return (
//         <div className='banner background-video-container'>
//             <video className="background-video" autoPlay loop muted>
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>


//             <div className="banner-container padding">

//                 <div className="  overlay-content">
//                     <div className="banner-heading">
//                         <span className='banner-span'>IT kurslari bo'yicha O'zbekistondagi yirik laboratoriyaga xush kelibsiz! </span>
//                         <h1>
//                             <Typewriter
//                                 words={['Dasturlashdagi ilk qadam FINTECHHUB\'dan boshlanadi!']}
//                                 loop={1}
//                                 cursor
//                                 typeSpeed={100}
//                             />
//                         </h1>
//                     </div>
//                 </div>

//                 {/* <ContactFrom /> */}
//             </div>
//         </div>
//     )
// }

// export default Banner


import React from 'react'
import './components.css'
import { Typewriter } from 'react-simple-typewriter'

function Banner() {
    return (
        <div className='banner'>
            <div className="banner-container">
                <div className="banner-heading">
                    <span className='banner-span'>IT kurslari bo'yicha O'zbekistondagi yirik laboratoriyaga xush kelibsiz! </span>
                    <h1>
                        <Typewriter
                            words={['Dasturlashdagi ilk qadam shu yerdan boshlanadi!']}
                            loop={1}
                            cursor
                            typeSpeed={100}
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner