import React from 'react'
import { Link } from 'react-router-dom'

const HomeView = () => {

    const PoolView = () => {
        return (
            <div className="col-md-4 mt-4">
                <div className="card">
                    <div className="card-body text-center">
                        <h3 className="mb-1 text-dark mt-3">GANG-NAM POOL #1</h3>
                        <div className="mb-1">
                            <i className="tio-city mr-1"></i>
                            <span>강남구 서초동</span>
                        </div>
                        <div className="mb-3">
                            <span class="badge badge-soft-danger badge-pill"><i class="tio-trending-down"></i> -23 index</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-12">
                                <Link to="/buy/insurance" className="btn btn-sm btn-block btn-outline-secondary">Buy Insurance</Link>
                            </div>
                            <div className="col-md-12">
                                <Link to="/add/liquidity" className="btn btn-sm btn-block btn-outline-secondary mt-2">Provide Liquidity</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-md-center">
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            <h4>Find your place.</h4>
                            <div className="input-group">
                                <input className="form-control form-control-light" placeholder={"Enter your keyword."} />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-outline-secondary"><i className="tio-search mr-1"></i>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 text-right mt-5">
                    <button type="button" className="btn btn-sm btn-soft-danger"><i class="tio-add mr-1"></i>Create a new pool</button>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <PoolView />
                        <PoolView />
                        <PoolView />
                        <PoolView />
                        <PoolView />
                        <PoolView />
                        <PoolView />
                        <PoolView />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView