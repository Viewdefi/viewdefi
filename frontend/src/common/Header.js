import React from 'react'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    const connectToWallet = () => {

    }

    return (
        <header className="navbar navbar-expand-lg navbar-spacer-y navbar-light mb-3">
            <div className="container">
                <div className="navbar-nav-wrap">
                    <div className="navbar-brand-wrapper">
                        <Link className="navbar-brand" to="/" aria-label="Front">VIEWDEFI</Link>
                    </div>

                    <button type="button" className="navbar-toggler btn btn-ghost-secondary rounded-circle ml-auto" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarNavMenuLightEg" data-toggle="collapse" data-target="#navbarNavMenuLightEg">
                        <i className="tio-menu-hamburger"></i>
                    </button>

                    <nav className="collapse navbar-collapse" id="navbarNavMenuLightEg">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className={
                                    classnames("nav-link", {
                                        "active": location.pathname === '/'
                                    })
                                } to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={
                                    classnames("nav-link", {
                                        "active": location.pathname === '/mypage'
                                    })
                                } to="/mypage">My Page</Link>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-sm btn-primary ml-3 btn-wallet-connect" onClick={() => connectToWallet()}>
                                    <i className="tio-wallet-outlined mr-2"></i>
                                    Connect
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header