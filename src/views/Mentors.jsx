import React from 'react'
import './views.css'
import alisher from '../images/Alisher.png'
import Otabek from '../images/Otabek.png'
import Muhammadrasul from '../images/Muhammadrasul.png'
import Salohiddin from '../images/Salohiddin.png'
import Erkaboy from '../images/Erkaboy.png'
import Jahongir from '../images/Jahongir.png'
import Behzod from '../images/Behzod.png'
import { Link, useNavigate } from 'react-router-dom'


function Mentors() {

  const navigate = useNavigate()



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
            <img src={Otabek} alt="" />
            <div className="mentor-title">
              <h3>Otabek Fozilov</h3>
              <span>Frontend | React JS dasturchi</span><br />
              {/* <i>Frontend asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={Muhammadrasul} alt="" />
            <div className="mentor-title">
              <h3>Muhammadrasul Rustamov</h3>
              <span>Backend | Golang dasturchi</span><br />
              {/* <i>Backend asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={Salohiddin} alt="" />
            <div className="mentor-title">
              <h3>Salohiddin Sayfiddinov</h3>
              <span>Mobile | Flutter dasturchi</span><br />
              {/* <i>Mobile | Flutter asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={Erkaboy} alt="" />
            <div className="mentor-title">
              <h3>Erkaboy Fayyozbekov</h3>
              <span>Backend | Python dasturchi</span><br />
              {/* <i>Backend asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={Jahongir} alt="" />
            <div className="mentor-title">
              <h3>Jahongir</h3>
              <span>Backend yordamchi ustoz</span><br />
              {/* <i></i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={alisher} alt="" />
            <div className="mentor-title">
              <h3>Kamron</h3>
              <span>Kids Junior ustoz</span><br />
              {/* <i>Kids asosiy dasturchi</i>  */}
            </div>
          </div>
          <div className="mentors-card">
            <img src={Behzod} alt="" />
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