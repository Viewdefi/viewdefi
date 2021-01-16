import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { poolListState } from '../core/state'
import PoolChart from './comps/PoolChart'
import PoolInfoComp from './comps/PoolInfoComp'
import InsuranceTableComp from './comps/InsuranceTableComp'
import InsuranceProductComp from './comps/InsuranceProductComp'

const DetailView = () => {
    const poolList = useRecoilValue(poolListState)
    const match = useRouteMatch("/detail/:id")
    const [pool, setPool] = useState({})

    useEffect(() => {
        console.log(poolList)
        console.log(match.params.id)
        setPool(poolList[match.params.id])
    }, [poolList])

    return (
        <div className="container mt-2">
            <div className="row mt-5 mb-15">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-12">
                            { pool && (<PoolInfoComp pool={pool} />) }
                        </div>
                        <div className="col-lg-12 mt-3">
                            { pool && (<PoolChart pool={pool} />) }
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">보험 상품</h4>
                                </div>
                                <InsuranceProductComp />
                            </div>
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">풀 사용 내역</h4>
                                </div>
                                <InsuranceTableComp />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title text-muted">유동성 참여하기</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row form-group">
                                        <div className="col-lg-6 form-col-label">참여 수량</div>
                                        <div className="col-lg-6 form-col-label text-right">지갑 잔액: 5 ETH</div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="text"  
                                                className="form-control form-control-borderless form-control-flush"
                                                placeholder="0 ETH" />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-block btn-sm btn-soft-primary">유동성 참여하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title text-muted">보험 가입하기</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row form-group">
                                        <div className="col-lg-12 form-col-label">목표 지수</div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="text"  
                                                className="form-control form-control-borderless form-control-flush"
                                                placeholder="0" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-12 form-col-label">청구 금액</div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="text"  
                                                className="form-control form-control-borderless form-control-flush"
                                                placeholder="0 ETH" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-lg-12 form-col-label">만기일</div>
                                        <div className="col-lg-12">
                                            <input 
                                                type="text"  
                                                className="form-control form-control-borderless form-control-flush"
                                                placeholder="YYYY/MM/DD" />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-block btn-sm btn-outline-primary">보험 가입하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailView