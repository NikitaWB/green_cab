import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../GlobalStyle';
import styled from 'styled-components';
import Logo from '../../../images/logo';


const StyledLanding = styled.div`
h2{
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
            <Logo />
            <h2>Hej Nikita,<br/>Välkommen tillbaka!</h2>
            <p>Nu kan du boka en grön taxi och få 10% rabatt på din nästa resa.</p>
            <Button>
                <Link to='/search' style={{ textDecoration: 'none' }}>Sök resa</Link>
            </Button>
        </StyledLanding>
    )
}

export default Landing