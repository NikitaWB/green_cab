import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Landing from "./Landing";
import SearchDestinationForm from './SearchDestinationForm';

const StyledMain = styled.div`
min-height: 50%;
margin: 0;
padding: 30px 25px;
text-align: center;
display: flex;
flex-direction: column;

h2{
    margin: 20px 0 40px 0;
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
