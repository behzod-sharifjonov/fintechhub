import React from 'react'
import gallery_1 from '../images/01.jpg'
import gallery_2 from '../images/02.jpg'
import gallery_3 from '../images/03.jpg'
import gallery_4 from '../images/04.jpg'
import gallery_5 from '../images/05.jpg'
import gallery_6 from '../images/06.jpg'

function Photos() {
    return (
        <div className='gallery'>
            <div className="gallery-container">
                <h1>Bizning o‘quvchilar va amaliyot jarayonlaridan lavhalar</h1>
                <div className="gallery-parent">
                    <img src={gallery_1} alt="hello" />
                    <img src={gallery_2} alt="hello" />
                    <img src={gallery_3} alt="hello" />
                    <img src={gallery_4} alt="hello" />
                    <img src={gallery_5} alt="hello" />
                    <img src={gallery_6} alt="hello" />
                </div>
            </div>
        </div>
    )
}

export default Photos