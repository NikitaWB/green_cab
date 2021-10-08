import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../GlobalStyle';
import styled from 'styled-components';

const StyledLanding = styled.div`
h3{
    margin: 10px;
}
p{
    margin-top: 50px;
    margin-bottom: 50px;
}
`

function Landing() {
    return (
        <StyledLanding>
            <h3>Hej Nikita, Välkommen tillbaka!</h3>
            <p>Nu kan du boka en grön taxi och få 10% rabatt på din nästa resa.</p>
            <Button>
                <Link to='/search'>Sök resa</Link>
            </Button>
        </StyledLanding>
    )
}

export default Landing