import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactMapGL from 'react-map-gl';
import PopupCar from '../../PopupCar';


const StyledSelect = styled.div`
.selectbuttons{
    margin-top: 1.2rem;
}
.back-btn{
    background: linear-gradient(180deg, orange 0%, #478E23 100%);
    color: white;
    font-size: 1em;
    height: 45px;
    width: 100px;
    text-align: center;
    margin: 10px 10px 20px;
    padding: 12px 0px;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
.selectbutton{
    background: linear-gradient(180deg, #8CC96D 0%, #478E23 100%);
    color: white;
    font-size: 1em;
    height: 45px;
    width: 100px;
    text-align: center;
    margin: 10px 10px 20px;
    padding: 12px 0px;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
`

function SelectCar() {

    const [buttonPopupCar, setButtonPopupCar] = useState(false)
    
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '550px',
        latitude: 59.33258,
        longitude: 18.0649,
        zoom: 11
        
      });

    return (
        <div>
            <StyledSelect>
                <ReactMapGL
                        mapboxApiAccessToken={'pk.eyJ1IjoibmlraXRhYnV5b25kbyIsImEiOiJja3Y2aXZxM20wNThmMm9xdWV5NHNqYWptIn0.d48wPJak6j_XYmBP-udUzw'}
                        mapStyle='mapbox://styles/mapbox/dark-v9'
                        {...viewport} 
                        onViewportChange={nextViewport => setViewport(nextViewport)} />
                <div className='selectbuttons'>
                <Link to='/search'>
                    <button className='back-btn'>Tillbaka</button>
                </Link>
                <button className='selectbutton' onClick={() => setButtonPopupCar(true)}>Bilar</button>
                <button className='selectbutton'>Tillval</button>
                </div>
            </StyledSelect>
            <PopupCar trigger={buttonPopupCar} setTrigger={setButtonPopupCar}>
                <h3>My popup</h3>
            </PopupCar>
        </div>
    )
}

export default SelectCar
