import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../GlobalStyle';
import ReactMapGL from 'react-map-gl';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledInput = styled.div`
input[type='text'] {
    margin: 10px 20px 20px;
    padding: 10px;
}

.radio {
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    overflow: hidden;
}

.radio_input {
    display: none;
}

.radio_label {
    background: linear-gradient(180deg, #8CC96D 0%, #478E23 100%);
    color: white;
    font-size: 1em;
    height: 45px;
    width: 120px;
    text-align: center;
    margin: 10px 10px 20px;
    padding: 12px 0px;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
.radio_input:checked + .radio_label {
    background: linear-gradient(180deg, #4D8C2D 0%, #8CC96D 100%);
    border: 1px solid black;
}
`

function SearchDestinationForm() {
    const handleChange = (e) =>{
        console.log(e.target.value);
        e.preventDefault();
    }

    const handleSubmit = (e) => {
        console.log('Submited');
        e.preventDefault();
    }

    const [startDate, setStartDate] = useState(new Date());

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '300px',
        latitude: 59.33258,
        longitude: 18.0649,
        zoom: 11
      });

    return (
        <StyledInput>
            <h2>Sök resa</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} placeholder='Åka från..' name='searchfrom'/>
                <input type='text' placeholder='Åka till..' name='searchto'/>
                <br/>
                <div className='radio'>
                    <input className='radio_input' type='radio' name='when' value='now' id='now' />
                    <label className='radio_label' htmlFor='now' >Åka nu</label>
                    <input className='radio_input' type='radio' name='when' value='departure' id='departure' />
                    <label className='radio_label' htmlFor='departure'>Avgång</label>
                    <input className='radio_input' type='radio' name='when' value='arrival' id='arrival' />
                    <label className='radio_label' htmlFor='arrival'>Ankomst</label>
                </div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <ReactMapGL
                    mapboxApiAccessToken={'pk.eyJ1IjoibmlraXRhYnV5b25kbyIsImEiOiJja3Y2aXZxM20wNThmMm9xdWV5NHNqYWptIn0.d48wPJak6j_XYmBP-udUzw'}
                    mapStyle='mapbox://styles/mapbox/dark-v9'
                    {...viewport} 
                    onViewportChange={nextViewport => setViewport(nextViewport)} />
                <Link to='/selectcar' style={{ textDecoration: 'none' }}>
                    <Button>Välj bil</Button>
                </Link>
            </form>
        </StyledInput>
    )
}

export default SearchDestinationForm
