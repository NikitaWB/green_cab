import React from 'react'
import './PopupCar.css'


function PopupCar(props) {
    return (props.trigger) ? (
        <div className='popupcar'>
            <div className='popupcar-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
                <h2>Hur vill du resa?</h2>
                { props.children }
            </div>
        </div>
    ) : '';
}

export default PopupCar
