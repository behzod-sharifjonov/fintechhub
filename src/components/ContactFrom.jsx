import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'

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
        <div className='contact-form'>
            <div className="contact-container">
                <span>Kurs haqida ma'lumot olish uchun</span>
                <form className='contact-form' action="" onSubmit={addPostRequiredHandler}>
                    <div className="name-input contact-input">
                        <input name='name' placeholder='Ismingiz' type="text" />
                    </div>
                    <div className="number-input contact-input">
                        {/* <span>+998</span>
                        <input type="number" /> */}

                        <ReactInputMask
                            mask="+998 (99) 999-99-99"
                            value={phone}
                            name='phone'
                        >
                            {(inputProps) => <input {...inputProps} type="text" />}
                        </ReactInputMask>
                    </div>
                    <button>Yuborish</button>
                </form>
            </div>
        </div>
    )
}

export default ContactFrom