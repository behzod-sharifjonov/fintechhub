import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import contact_fon from '../images/become-form-angle.png'
import dots_fon from '../images/dot-pattern-1-1.png'
import cycle_first from '../images/circle-stripe-1.png'
import cycle_second from '../images/circle-stripe.png'

function ContactFrom() {

    const [phone, setPhone] = useState('+998');

    const addPostRequiredHandler = (e) => {
        e.preventDefault()
        const requiredData = new FormData(e.target)
        const { name, phone } = Object.fromEntries(requiredData.entries())

        const user_data = {
            name,
            phone,
            kurs: 'dasturlash kurslari uchun'
        }

        console.log(user_data)
    };


    return (
        <div className='contact-forms'>

            <div className="contact-container padding">

                <div className="contact-title">
                    <h1>Hoziroq ro‘yxatdan o'ting</h1>
                    <h3>va bepul darsga ega bo'ling!</h3>
                    <span>Dasturlash bilimlarini onlayn yoki offlayn tarzda o‘rganishingiz mumkin. <br /> Amaliyotni esa, real ishlab turgan loyihalarimizga qo‘shilgan holda o‘taysiz. <br /> Ishonavering, bunaqa imkoniyatlar har joyda ham uchramaydi.</span>
                </div>

                <div className="contact-request">
                    <div className="form-title">
                        <h1>Bepul darsga yozilish</h1>
                    </div>
                    <img className='contact-fon' src={contact_fon} alt="" />
                    <form className='contact-form' action="" onSubmit={addPostRequiredHandler}>
                        <div className="name-input contact-input">
                            <input name='name' placeholder='Ismingiz' type="text" />
                        </div>
                        <div className="number-input contact-input">
                            <ReactInputMask
                                mask="+998 (99) 999-99-99"
                                value={phone}
                                name='phone'
                            >
                                {(inputProps) => <input {...inputProps} type="text" />}
                            </ReactInputMask>
                        </div>
                        <button>Ro'yxatdan o'tish</button>
                    </form>

                </div>
                <img src={cycle_first} className='cycle_first' alt="" />
                <img src={cycle_first} className='cycle_third' alt="" />
                <img src={cycle_second} className='cycle_second' alt="" />
                <div className="dots-fon">
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                    <img src={dots_fon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContactFrom