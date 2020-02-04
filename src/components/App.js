import React from 'react'

import { Switch, Router, Route, Redirect } from 'react-router-dom';
import history from '../config/history';

import Container from './Container'
import Search from './Search'
import Nav from './Nav'
import Results from './Results'

const App = () => {
    return (
        <Router history={history}>
            <Container>
                <Nav />
                <Search />
                <Results />
            </Container>

        </Router>
    )
}

export default App