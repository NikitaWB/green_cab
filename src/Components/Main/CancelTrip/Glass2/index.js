import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../../../images/logo';

const Glass2Div = styled.div`
  position: absolute;
  top: 8rem;
  left: 3rem;
  z-index: 100;
  width: 70%;
  height: 75vh;
  padding: 15px;
  border-radius: 20px;
  border: 2px solid #8cc96d;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }

  .back-btn {
    background: linear-gradient(180deg, #8CC96D 0%, #478E23 100%);
    color: white;
    font-size: 0.8em;
    height: 45px;
    width: 180px;
    text-align: center;
    margin: 10px 10px 20px;
    padding: 12px 0px;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  .cancel-btn {
    background: linear-gradient(180deg, orange 0%, #478E23 100%);
    color: white;
    font-size: 0.8em;
    height: 45px;
    width: 180px;
    text-align: center;
    margin: 10px 10px 20px;
    padding: 12px 0px;
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }


`;

function Glass2() {
  return (
    <Glass2Div>
      <Logo />
      <br />
      <br />
      <p>Är du säker på att du vill avbryta din resa?</p>
      <br />
      <br />
      <Link to='/overview'>
        <button className='back-btn'>Avboka INTE min resa</button>
      </Link>
      <br />
      <br />
      <Link to='/search'>
        <button className='cancel-btn'>Avboka och boka ny resa</button>
      </Link>
    </Glass2Div>
  );
}

export default Glass2;
