import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { poolListState } from '../core/state'
import PoolChart from './comps/PoolChart'
import PoolInfoComp from './comps/PoolInfoComp'
import InsuranceTableComp from './comps/InsuranceTableComp'

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
                                    Test    
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
                                    Test    
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