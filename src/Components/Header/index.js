import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
background: #BAE6A2 100%;
  color: white;
  h1 {
    padding: 10px 0px 10px 20px;
  }
`

function Header() {
    return (
        <StyledHeader>
            <h1>GreenCab</h1>
        </StyledHeader>
    )
}

export default Header;
