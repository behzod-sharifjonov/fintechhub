import React from 'react'
import './views.css'
import Coursees from '../components/Coursees'

function CousePage() {
    return (
        <div>
            <div className="page-container">
                <div className="page-color">
                    <h1>Dasturlash kurslari</h1>
                </div>
            </div>
            <Coursees />
            
        </div>
    )
}

export default CousePage