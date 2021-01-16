import React from 'react'

const PoolInfoComp = ({ pool }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="text-muted mb-0">{ pool.name }</h4>
                { pool.assets && pool.assets.map(x => <span className="text-muted mr-2 font-size-sm">{x}</span>) }
                <h1 className="text-danger mt-3">{ pool.value } <span className="ml-4">+ { 3.25 }%</span></h1>
                <div>
                    <label className="text-muted"><i className="tio-user mr-1"></i>보험 가입자</label>
                    <span className="text-dark ml-2">{ pool.liquidity && pool.liquidity.users }</span>
                    <label className="text-muted ml-4"><i className="tio-user mr-1"></i>유동성 공급자</label>
                    <span className="text-dark ml-2">{ pool.liquidity && pool.liquidity.providers }</span>
                    <label className="text-muted ml-4">총 유동성</label>
                    <span className="text-dark ml-2">{ pool.liquidity && pool.liquidity.value } ETH</span>
                    <label className="text-muted ml-4">연이율</label>
                    <span className="text-primary ml-2"><b>+ { pool.apy }%</b></span>
                </div>
            </div>
        </div>
    )
}

export default PoolInfoComp