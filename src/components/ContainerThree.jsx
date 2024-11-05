import React from 'react'
import './components.css'
import ctr_image_main from '../images/benifits.jpg'

function ContainerThree() {
    return (
        <div className='container-tree'>
            <div className="ctr-tree-container">
                <div className="ctr-child-image">
                    <img src={ctr_image_main} alt="" />
                </div>

                <div className="ctr-child-text">
                    <h2>Dasturlashni nega aynan FinTechHub'da o'rganish kerak?</h2>
                    <div className="why-loren-fintech">
                        <div>
                            <span class="kipso-icon-strategy"></span>
                            <h4>Bilimlar amaliyotgan ko‘chadi</h4>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <h4>Amaliyot real loyihada ishtirok etishga o‘tkazadi</h4>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <h4>Natijada o‘zingiz StartUp yaratasiz</h4>
                        </div>
                    </div>
                    <button>Ko'proq ma'lumot olmoqchiman</button>
                </div>
            </div>
        </div>
    )
}

export default ContainerThree