import React from 'react'
import './PopupCar.css'


function PopupCar(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
                <h2>Våra Bilar</h2>
                { props.children }
            </div>
        </div>
    ) : '';
}

export default PopupCar
