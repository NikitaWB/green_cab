import React from 'react'
import './PopupOption.css'


function PopupOption(props) {
    return (props.trigger) ? (
        <div className='popupoption'>
            <div className='popupoption-inner'>
                <button className='close-btn' onClick={() => props.setTrigger(false)} >X</button>
                <h2>Ändra Tillval</h2>
                { props.children }
            </div>
        </div>
    ) : '';
}

export default PopupOption
