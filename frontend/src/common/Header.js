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
        <nav className="navbar navbar-expand navbar-light navbar-bg">
            <div className="container">
                <Link className="navbar-brand" to="/" aria-label="Front">VIEWDEFI</Link>
                <nav className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">
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
        </nav>
    )
}

export default Header