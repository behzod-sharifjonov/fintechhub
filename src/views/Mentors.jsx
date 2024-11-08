import React from 'react'
import './views.css'
import alisher from '../images/Alisher.png'
import otabek from '../images/otabek.png'
import muhammadrasul from '../images/muhammadrasul.png'
import salohiddin from '../images/salohiddin.png'
import erkaboy from '../images/erkaboy.png'
import jahongir from '../images/jahongir.png'
import behzod from '../images/behzod.png'
import kamron from '../images/kamron.jpg'
import { Link } from 'react-router-dom'


function Mentors() {

  return (
    <div>
      <div className="page-container">
        <div className="page-color">
          <h1>Ustozlarimiz</h1>
        </div>
      </div>
      <div className="mentors">
        <div className="mentors-container">
          <div className="mentors-card">
            <img src={alisher} alt="" />
            <div className="mentor-title">
              <h3>Alisher Ashrapov </h3>
              <span>Frontend | React JS dasturchi</span><br />
              {/* <i>Frontend asosiy dasturchi</i>/  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={otabek} alt="" />
            <div className="mentor-title">
              <h3>Otabek Fozilov</h3>
              <span>Frontend | React JS dasturchi</span><br />
              {/* <i>Frontend asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={muhammadrasul} alt="" />
            <div className="mentor-title">
              <h3>Muhammadrasul Rustamov</h3>
              <span>Backend | Golang dasturchi</span><br />
              {/* <i>Backend asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={salohiddin} alt="" />
            <div className="mentor-title">
              <h3>Salohiddin Sayfiddinov</h3>
              <span>Mobile | Flutter dasturchi</span><br />
              {/* <i>Mobile | Flutter asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={erkaboy} alt="" />
            <div className="mentor-title">
              <h3>Erkaboy Fayyozbekov</h3>
              <span>Backend | Python dasturchi</span><br />
              {/* <i>Backend asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={jahongir} alt="" />
            <div className="mentor-title">
              <h3>Jahongir</h3>
              <span>Backend yordamchi ustoz</span><br />
              {/* <i></i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={kamron} alt="Kamon.png" />
            <div className="mentor-title">
              <h3>Kamron</h3>
              <span>Kids Junior ustoz</span><br />
              {/* <i>Kids asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={behzod} alt="Behzod.png" />
            <div className="mentor-title">
              <h3>Behzod Sharifjonov</h3>
              <span>Frontend dasturchi</span><br />
              {/* <i>Frontend yordamchi dasturchi</i>  */}
            </div>
          </div>
        </div>
        <Link to={'https://dasturlash.fintechhub.uz/'} className='mentors-btn'>Batafsil ma'lumut olish uchun</Link>
      </div>
    </div>
  )
}

export default Mentors