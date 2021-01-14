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
import AddLiquidityView from './views/AddLiquidityView';
import BuyInsuranceView from './views/BuyInsuranceView';
import MyPageView from './views/MyPageView';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Switch>
                    <Route path="/mypage">
                        <MyPageView />
                    </Route>
                    <Route path="/add/liquidity">
                        <AddLiquidityView />
                    </Route>
                    <Route path="/buy/insurance">
                        <BuyInsuranceView />
                    </Route>
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