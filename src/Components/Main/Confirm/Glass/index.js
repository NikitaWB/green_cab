import React from 'react'
import styled from 'styled-components'


const GlassDiv = styled.div`
position: absolute;
top: 6rem;
left: 1.5rem;
z-index: 100;
width: 70%;
height: 60vh;
padding: 15px;
border-radius: 20px;
border: 2px solid #8CC96D;
justify-content: center;
align-items: center;
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(2px);

img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
`

function Glass() {
    return (
        <GlassDiv>
            <h3>GULD</h3>
            <img src={`http://localhost:3000/images/img3.jpg`} alt='bild på vald bilalternativ'/>
            <p>Åka från: Farsta Strand</p>
            <p>Åka till: Huddinge Centrum</p>
            <br/>
            <p>Erhållen rabatt: 10%</p>
            <br/>
            <p>400kr</p>
            <p>-40kr</p>
            <p>Totalt: 360kr</p>
        </GlassDiv>
    )
}

export default Glass
