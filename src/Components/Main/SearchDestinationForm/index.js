import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../GlobalStyle';

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
    width: 130px;
    text-align: center;
    margin: 10px 10px 20px;
    padding: 12px 0px;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}
/* Test 1 för intryckt radio */
.radio_input:checked + .radio_label {
    background: blue;
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
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button>Välj bil</Button>
                </Link>
            </form>
        </StyledInput>
    )
}

export default SearchDestinationForm
