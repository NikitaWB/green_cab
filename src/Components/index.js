import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

function Components() {
    return (
        <Router>
            <Header />
            <Main />
        </Router>
    )
}

export default Components;
