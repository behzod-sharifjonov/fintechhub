import React from 'react'
import './components.css'
import curve from '../images/course-title-curve.png'

function CourseOne() {
    return (
        <div className='course-one'>
            <div className="course-one-container">
                <h1>Hozir qaysi kurslar trendda? <br />  Ularni bizdan topasiz! </h1>
            </div>
            <div className="course-one-curve">
                <img src={curve} alt="" />
            </div>
        </div>
    )
}

export default CourseOne