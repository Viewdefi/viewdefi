import React from 'react'

const HomeView = () => {
    const PoolView = () => {
        return (
            <div className="col-md-4 mt-4">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="pool-icon">
                            <i className="tio-city"></i>
                        </div>
                        <h3 className="mb-1"><a className="text-dark" href="#">강남구 서초동 Pool</a></h3>

                        <div className="mb-3">
                            <i className="tio-city mr-1"></i>
                            <span>Research team</span>
                        </div>
                    </div>

                    <div className="card-footer">
                        <div className="row justify-content-between align-items-center">
                        <div className="col-auto py-1">
                            <a className="font-size-sm text-body" href="#">9 connections</a>
                        </div>

                        <div className="col-auto py-1">
                            <div className="custom-control custom-checkbox-switch">
                            <input type="checkbox" id="connectionsCheckbox6" className="custom-control-input custom-checkbox-switch-input" />
                            <label className="custom-checkbox-switch-label btn-sm" for="connectionsCheckbox6">
                                <span className="custom-checkbox-switch-default">
                                    <i className="tio-user-add mr-1"></i> Connect
                                </span>
                                <span className="custom-checkbox-switch-active">
                                    <i className="tio-done mr-1"></i> Connected
                                </span>
                            </label>
                            </div>
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
                                    <button type="button" className="btn btn-primary"><i className="tio-search mr-1"></i>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="row">
                        <PoolView />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView