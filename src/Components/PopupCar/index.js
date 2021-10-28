import React from 'react'
import './popupcar.css'


function PopupCar(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
                <h2>Hello from PopupCar!</h2>
                { props.children }
            </div>
        </div>
    ) : '';
}

export default PopupCar
