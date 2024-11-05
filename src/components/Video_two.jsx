import React, { useState } from 'react';
import './components.css';
import { IoVideocam } from "react-icons/io5";

function Video_two() {

    const [showModal, setShowModal] = useState(false); // state to control modal visibility

    const handleButtonClick = () => {
        setShowModal(true); // Show the modal
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    return (
        <div className='video-two'>
            <div className="video-two-container padding">
                <div className="video-two-text">
                    <h1>FintechHub - professional dasturchi bo‘lib chiqishingizni kafolatlaydi!</h1>
                    <span>2 daqiqali video-lavhamizda fikringiz o‘zgaradi.</span>
                </div>
                <div className="video-two-btn">
                    <button onClick={handleButtonClick}><IoVideocam /></button>
                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close-button" onClick={handleCloseModal}>&times;</span>
                                <div className="video-container">
                                    <iframe
                                        width="660"
                                        height="415"
                                        src="https://www.youtube.com/embed/a8PE7XlEcEI"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Video_two;
