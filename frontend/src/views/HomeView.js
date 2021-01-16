import React, { useState } from 'react'
import classnames from 'classnames'
import { useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
import { poolListState } from '../core/state'

const HomeView = () => {
    const poolList = useRecoilValue(poolListState)

    const PoolView = ({ item, idx }) => {
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
                            <span className={classnames(
                                "bdage",
                                "badge-pill",
                                { 
                                    "badge-soft-danger": item.value < 0,
                                    "badge-soft-success": item.value >= 0
                                },
                            )}><i className={classnames({
                                "tio-trending-down": item.value < 0,
                                "tio-trending-up": item.value >= 0
                            })}></i> {item.value}</span>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-md-12">
                                <Link to={`/detail/${idx}`} className="btn btn-block btn-outline-secondary">상세히 보기</Link>
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
                            <h3>풀 리스트</h3>
                        </div>
                        <div className="col-md-6 text-right">
                            <button type="button" className="btn btn-sm btn-danger"><i className="tio-add mr-1"></i>신규 풀 생성</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mt-3">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="text-muted">보험 풀</h5>
                        </div>
                    </div>
                    <div className="row">
                        {
                            poolList.filter(x => x.type === 2).map((x, index) => {
                                return (<PoolView key={"pool" + x.idx} item={x} idx={x.idx} />)
                            })
                        }
                    </div>
                </div>
                <div className="col-lg-10 mt-10">
                    <div className="row">
                        <div className="col-lg-12">
                            <h5 className="text-muted">지분 락업 보험</h5>
                        </div>
                    </div>
                    <div className="row">
                        {
                            poolList.filter(x => x.type === 1).map((x, index) => {
                                return (<PoolView key={"pool" + x.idx} item={x} idx={x.idx} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView