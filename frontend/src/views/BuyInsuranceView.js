import React from 'react'

const BuyInsuranceView = () => {
    return (
        <div className="container mt-5">
            <div className="row mt-15 mb-15 justify-content-md-center">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">0x1234....12883</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <span className="card-subtitle mb-0">Name</span>
                                    <h4>GANGNAM POOL</h4>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <span className="card-subtitle mb-0">APY</span>
                                    <h4 className="text-primary">13.2%</h4>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <span className="card-subtitle mb-0">Pool Liquidity</span>
                                    <h4>135.5 ETH</h4>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <span className="card-subtitle mb-0">Number of providers</span>
                                    <h4>112</h4>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <span className="card-subtitle mb-0">Current Index 
                                        <i className="tio-help-outlined text-body ml-1"></i>
                                    </span>
                                    <h4>2412.24 <span className="badge badge-soft-success badge-pill"><i className="tio-trending-up"></i> +23</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <label className="input-label">Target Index</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg mt-1" 
                                    placeholder="0" />
                            </div>
                            <div className="form-group mt-3">
                                <label className="input-label">Target Value</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg mt-1" 
                                    placeholder="0 ETH" />
                            </div>
                            <div className="form-group mt-3">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="input-label">Evaluated Protection Cost</label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <span className="input-label text-muted">Balance: 3.52 ETH</span>
                                    </div>
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    disabled={true}
                                    placeholder="0 ETH" />
                            </div>
                            <button type="submit" className="btn btn-lg btn-block btn-primary mt-3">Buy Insurance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyInsuranceView