import React from 'react'
import styled from 'styled-components';
import Toggle from 'react-styled-toggle';

const StyledHeader = styled.header`
background: linear-gradient(0deg, #8CC96D 0%, #478E23 100%);
  color: white;
  h1 {
    padding: 10px 0px 10px 20px;
  }
  
`

function Header({handleToggle}) {

    return (
        <StyledHeader>
            <h1>GreenCab</h1>
            <Toggle onChange={() => handleToggle()}/>
        </StyledHeader>
    )
}

export default Header;
