import React from 'react'
import styled from 'styled-components';
import Toggle from 'react-styled-toggle';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
background: linear-gradient(0deg, #8CC96D 0%, #478E23 100%);
color: white;
padding: 10px 0px 10px 20px;
align-content: ;
h1{
    color: white;
}
`

function Header({handleToggle}) {

    return (
        <StyledHeader>
            <Link to='/' style={{ textDecoration: 'none' }}>
            <h1>GreenCab</h1>
            </Link>
            <Toggle onChange={() => handleToggle()}
            labelRight='Byt tema'
            backgroundColorButton='#478E23' 
            backgroundColorUnchecked='#081c15' 
            backgroundColorChecked='#F7F9F8'
            width='30'
            height='17'
            sliderWidth='13'
            sliderHeight='13'
            translate='11' />
        </StyledHeader>
    )
}

export default Header;
