import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'


function Components({handleToggle}) {
    return (
        <Router>
            <Header handleToggle={handleToggle}/>
            <Main />
        </Router>
    )
}

export default Components;
