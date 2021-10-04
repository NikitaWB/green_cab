import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Landing from "./Landing";
import SearchDestinationForm from './SearchDestinationForm';

const StyledMain = styled.main`
background: #DBF5AE;
min-height: 95vh;
margin: 0;
padding: 75px;
text-align: center;
display: flex;
flex-direction: column;

h2{
    margin: 10px 0 50px 0;
}
`


function Main() {
    return (
        <StyledMain>
            <Switch>
                <Route exact path='/'>
                    <Landing />
                </Route>
                <Route path='/search'>
                    <SearchDestinationForm />
                </Route>
            </Switch>
        </StyledMain>
    )
}

export default Main
