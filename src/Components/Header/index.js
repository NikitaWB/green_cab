import React, { useState } from 'react'
import styled from 'styled-components';
import Switch from '../Switch';

const StyledHeader = styled.header`
background: #BAE6A2 100%;
  color: white;
  h1 {
    padding: 10px 0px 10px 20px;
  }
  
`

function Header() {

  const [isToggled, setIsToggled] = useState(false)

    return (
        <StyledHeader>
            <h1>GreenCab</h1>
            <Switch rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
        </StyledHeader>
    )
}

export default Header;
