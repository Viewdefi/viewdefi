import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../core/connectors'

const Header = () => {
    const location = useLocation()
    const [balance, setBalance] = useState(null);

    const context = useWeb3React()
    const { account, active, activate, library, error } = context

    useEffect(() => {
        if (!!account && !!library) {
            library.getBalance(account)
                .then(balance => {
                    setBalance(balance.toString())
                })
                .catch(err => {
                    console.error(err)
                    setBalance(null)
                })
        }
    }, [account, library])

    const connectToWallet = () => {
        if(!active) {
            activate(injected)
        }
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
                                { !active && (
                                    <button className="btn btn-sm btn-primary ml-3 btn-wallet-connect" onClick={() => connectToWallet()}>
                                        <i className="tio-wallet-outlined mr-2"></i>
                                        Connect
                                    </button>
                                ) }
                                { active && (
                                    <ul className="nav nav-segment">
                                        <li className="nav-item">
                                            <span className="nav-link active">{balance} ETH</span>
                                        </li>
                                        <li className="nav-item">
                                            <span className="nav-link">{account}</span>
                                        </li>
                                    </ul>
                                ) }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header