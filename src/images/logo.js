import React from 'react'
import GreenCabLogo from './logo.svg'
import styled from 'styled-components'

const StyledLogo = styled.div`
margin-top: 50px;
`

function Logo() {
    return (
        <StyledLogo>
            <img src={GreenCabLogo} alt='logo' />
        </StyledLogo>
    )
}

export default Logo
