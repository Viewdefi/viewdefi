import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { providers } from 'ethers'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './common/Header';
import Footer from './common/Footer';
import HomeView from './views/HomeView';
import MyPageView from './views/MyPageView';
import DetailView from './views/DetailView';

function getLibrary(provider) {
    const library = new providers.Web3Provider(provider)
    library.pollingInterval = 12000
    return library
}

const App = () => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Router>
                <div className="app">
                    <Header />
                    <Switch>
                        <Route path="/mypage">
                            <MyPageView />
                        </Route>
                        <Route path="/detail/:id">
                            <DetailView />
                        </Route>
                        <Route path="/">
                            <HomeView />
                        </Route>
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </Web3ReactProvider>
    )
}

export default App