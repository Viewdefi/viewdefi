import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomeView = () => {
    const [poolList, setPoolList] = useState([{
        name: "BITCOIN",
        icon: "bitcoin",
        theme: "dark"
    },{
        name: "Ethereum",
        icon: "ethereum",
        theme: "white"
    },{
        name: "Cosmos(ATOM)",
        icon: "cosmos",
        theme: "dark"
    },{
        name: "Chainlink",
        icon: "chainlink",
        theme: "dark"
    },{
        name: "EOS",
        icon: "eos",
        theme: "white"
    },{
        name: "Litecoin",
        icon: "litecoin",
        theme: "dark"
    },{
        name: "Aave",
        icon: "aave",
        theme: "dark"
    }])

    const PoolView = ({ item }) => {
        return (
            <div className="col-md-4 mt-4">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="card-crypto-logo dark">
                            {item.icon && ( <img src={`https://cryptologos.cc/logos/thumbs/${item.icon}.png`} /> ) }
                            {item.symbol && ( <span>{item.symbol}</span>)}
                        </div>
                        <h4 className="mb-1 text-dark mt-3">{item.name} POOL</h4>
                        <div className="mb-2">
                            <span className="badge badge-soft-danger badge-pill"><i className="tio-trending-down"></i> -23 index</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-12">
                                <Link to="/buy/insurance" className="btn btn-block btn-outline-secondary">Buy Insurance</Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="/add/liquidity" className="btn btn-block btn-outline-secondary mt-2">Provide Liquidity</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-2">
            <div className="row justify-content-md-center">
                <div className="col-lg-10 mt-2">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Pool List</h3>
                        </div>
                        <div className="col-md-6 text-right">
                            <button type="button" className="btn btn-sm btn-danger"><i className="tio-add mr-1"></i>Create a new pool</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="text-muted">Staking Lock</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <PoolView 
                                item={{
                                    name: "ETH 2.0",
                                    symbol: "E",
                                    theme: "dark"
                                }} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="text-muted">Crypto Currency</h5>
                        </div>
                    </div>
                    <div className="row">
                        {
                            poolList.map(x => {
                                return (<PoolView item={x} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView