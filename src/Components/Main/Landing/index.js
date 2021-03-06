import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../GlobalStyle';
import styled from 'styled-components';
import Logo from '../../../images/logo';


const StyledLanding = styled.div`
h2{
    margin-top: 60px;
}
p{
    padding: 0rem 1.5rem;
    margin-top: 50px;
    margin-bottom: 100px;
}
`

function Landing() {
    return (
        <StyledLanding>
            <Logo />
            <h2>Hej Nikita,<br/>Välkommen tillbaka!</h2>
            <p>Nu kan du boka en grön taxi och få 10% rabatt på din nästa resa.</p>
            <Link to='/search' style={{ textDecoration: 'none' }}>
                <Button>Sök resa</Button>
            </Link>
        </StyledLanding>
    )
}

export default Landing