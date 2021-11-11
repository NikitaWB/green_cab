import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Landing from "./Landing";
import SearchDestinationForm from './SearchDestinationForm';
import SelectCar from './SelectCar';
import Confirm from './Confirm';
import Overview from './Overview';

const StyledMain = styled.div`
min-height: 50%;
margin: 0;
text-align: center;
display: flex;
flex-direction: column;

h2{
    margin: 20px 0 20px 0;
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
                <Route path='/selectcar'>
                    <SelectCar />
                </Route>
                <Route path='/confirm'>
                    <Confirm />
                </Route>
                <Route path='/overview'>
                    <Overview />
                </Route>
            </Switch>
        </StyledMain>
    )
}

export default Main
