import React from 'react'
import { Link } from 'react-router-dom';
import './PopupCar.css'


function PopupCar(props) {
    return (props.trigger) ? (
        <div className='popupcar'>
            <div className='popupcar-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
                <h2>Hur vill du resa?</h2>
                { props.children }
                <Link to='/confirm'>
                    <button className='book-btn'>Boka</button>
                </Link>
            </div>
        </div>
    ) : '';
}

export default PopupCar
