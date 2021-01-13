import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './common/Header';
import Footer from './common/Footer';
import HomeView from './views/HomeView';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/">
                        <HomeView />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App