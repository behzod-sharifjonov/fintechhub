import React from 'react'
import './components.css'
import about_image from '../images/fintech.jpg'

function About() {
    return (
        <div className='about'>
            <div className="about-container">
                <div className="about-image pc-about">
                    <img src={about_image} alt="" />
                    <div className="about-border"></div>
                    <div className="about-bottom">
                        <div className="about-bottom-title">
                            <b>500+</b>
                            <span>bizga ishonganlar</span>
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <h1>IT labaratoriyamiz haqida qisqacha</h1>
                    <p>FintechHub kompyuter dasturlari va startap loyihalarni ishlab chiqaradigan yurtimizdagi yirik IT laboratoriya hisoblanadi. Dunyo darajasidagi raqamli loyihalarni amaliyotga tadbiq etish bilan birga, o‘z sohasida kuchli bo‘lgan dasturchilarni tayyorlash bilan ham shug‘ullanadi. E’tiborni tortadigan va taassurot uyg‘otadigan interfeyslarni yaratishga qaratilgan Front End kurslarimiz sizga ma’qul keladi. Server tarafda ishlaydigan va amalda eng muhim vazifalarni bajarishga ixtisoslashgan Back End dasturlash kurslarimiz bo‘lsa alohida dunyo. Hech narsani bilmasdan turib, ekspert darajasiga yetishish muammo emas. Buning uchun bizda hamma shart-sharoitlar bor. Poytaxtimiz markazidagi shinam ofis, o‘rganish uchun barcha kerakli jihozlar, yuqori tezlikdagi Wi-Fi, nihoyat o‘z ishining ustasi bo‘lgan o‘qituvchilar sizga ko‘mak berishadi.</p>
                </div>
                <div className="about-image mobile-about">
                    <img src={about_image} alt="" />
                    <div className="about-border"></div>
                    <div className="about-bottom">
                        <div className="about-bottom-title">
                            <b>500+</b>
                            <span>bizga ishonganlar</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About