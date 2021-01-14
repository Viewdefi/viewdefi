import React from 'react'
import classnames from 'classnames'

const MyPageView = () => {
    const PoolView = () => {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Pool: GANGNAM<span className="text-muted ml-2">2412.24 <span className="badge badge-soft-success badge-pill"><i className="tio-trending-up"></i> +23</span></span></h4>
                    </div>
                    <div className="col-md-6 text-sm-right">
                        <button type="button" className="btn btn-sm btn-soft-danger">Remove Liquidity</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <label className="input-label">Your Liquidity</label>
                        <span>100 ETH</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">Since</label>
                        <span>03-01-2021</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">Until</label>
                        <span>03-02-2021</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">Earnings</label>
                        <b className="text-primary">0.23 ETH</b>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">APY</label>
                        <span className="text-success">23.00%</span>
                    </div>
                </div>
            </li>
        )
    }

    const InsuranceView = ({ claimable }) => {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-6">
                        <h4>Pool: GANGNAM
                            <span className={classnames(
                                "badge",
                                "ml-2",
                                { "badge-soft-success": claimable, "badge-soft-secondary": !claimable }
                            )}>{ claimable ? "Claimable" : "Unclaimable" }</span>
                        </h4>
                    </div>
                    <div className="col-md-6 text-sm-right">
                        <button type="button" className={
                            classnames(
                                "btn",
                                "btn-sm",
                                { "btn-soft-success": claimable, "btn-outline-secondary": !claimable }
                            )
                        } disabled={!claimable}>{ claimable ? "Claim Insurance" : "Disabled" }</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <label className="input-label">Current Index</label>
                        <span>234.3</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">Target Index</label>
                        <span>200.0</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">Insurance</label>
                        <span className="text-primary">12.5 ETH</span>
                    </div>
                </div>
            </li>
        )
    }

    return (
        <div className="container mt-5">
            <div className="row mt-5 mb-5 justify-content-md-center">
                <div className="col-lg-8 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 class="page-header-title">My Pool</h3>
                        </div>
                        <div className="col-md-6 text-sm-right">
                            <span className="text-muted">Total Earnings <b className="text-primary ml-2">1.23 ETH</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mb-10">
                    <ul className="list-group">
                        <PoolView />
                        <PoolView />
                        <PoolView />
                        <PoolView />
                    </ul>
                </div>
                <div className="col-lg-8 mb-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 class="page-header-title">My Insurances</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mb-10">
                    <ul className="list-group">
                        <InsuranceView claimable={true} />
                        <InsuranceView claimable={true} />
                        <InsuranceView claimable={false} />
                        <InsuranceView claimable={false} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyPageView