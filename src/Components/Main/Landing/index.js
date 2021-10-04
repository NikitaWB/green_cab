import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
  background: linear-gradient(100deg, #8CC96D 0%, #478E23 100%);
  color: white;
  font-size: 1.5em;
  margin: 1.6em;
  padding: 0.5em 1em;
  border: 1px solid white;
  border-radius: 3px;
  box-shadow: 2px 5px rgba(0, 0, 0, 0.5);
  bottom: 0;
`


function Landing() {
    return (
        <>
            <h3>Hej Nikita, Välkommen tillbaka!</h3>
            <br></br>
            <p>Nu kan du boka en grön taxi och få 10% rabatt på din nästa resa.</p>
            <br></br>
            <Button>
                <Link to='/search'>Sök resa</Link>
            </Button>
        </>
    )
}

export default Landing