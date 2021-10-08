import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../../GlobalStyle';

const StyledInput = styled.div`
input{
    margin: 20px;
    padding: 10px;
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
        <h2>Hello from Search Form!</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} placeholder='Åka från..' name='searchfrom'/>
            <input type='text' placeholder='Åka till..' name='searchto'/>
            <Button>
                <Link to='/'>Välj bil</Link>
            </Button>
        </form>
        </StyledInput>
    )
}

export default SearchDestinationForm
