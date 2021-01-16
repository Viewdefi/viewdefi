import React from 'react'
import classnames from 'classnames'
import { useRecoilValue } from 'recoil'
import { myPoolState, poolListState } from '../core/state'

const MyPageView = () => {
    const myPoolList = useRecoilValue(myPoolState)
    const poolList = useRecoilValue(poolListState)

    const PoolView = ({ item, pool }) => {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-6">
                        <h4>풀: {pool.name}<span className="text-muted ml-2">{pool.value} <span className="badge badge-soft-success badge-pill"><i className="tio-trending-up"></i> +3.25%</span></span></h4>
                    </div>
                    <div className="col-md-6 text-sm-right">
                        <button type="button" className="btn btn-sm btn-danger">유동성 제거하기</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <label className="input-label">유동성</label>
                        <span>{item.liquidity} ETH</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">시작일</label>
                        <span>{item.since}</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">락업 기간</label>
                        <span>{item.until}</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">수익</label>
                        <b className="text-primary">{item.earnings} ETH</b>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">연이율</label>
                        <span className="text-primary">{pool.apy}%</span>
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
                        <h4>풀: GANGNAM
                            <span className={classnames(
                                "badge",
                                "ml-2",
                                { "badge-soft-success": claimable, "badge-soft-secondary": !claimable }
                            )}>{ claimable ? "청구 가능" : "청구 불가능" }</span>
                        </h4>
                    </div>
                    <div className="col-md-6 text-right">
                        <button type="button" className={
                            classnames(
                                "btn",
                                "btn-sm",
                                { "btn-outline-success": claimable, "btn-outline-secondary": !claimable }
                            )
                        } disabled={!claimable}>{ claimable ? "보험금 청구하기" : "비활성화" }</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-2">
                        <label className="input-label">현재 인덱스</label>
                        <span>234.3</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">목표 인덱스</label>
                        <span>200.0</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">보험 금액</label>
                        <span className="text-primary">12.5 ETH</span>
                    </div>
                    <div className="col-md-2">
                        <label className="input-label">보장 비용</label>
                        <span className="text-primary">12.5 ETH</span>
                    </div>
                </div>
            </li>
        )
    }

    return (
        <div className="container mt-5">
            <div className="row mt-5 mb-5 justify-content-md-center">
                <div className="col-lg-10 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="page-header-title">내 풀</h3>
                        </div>
                        <div className="col-md-6 text-sm-right">
                            <span className="text-muted">전체 수익 <b className="text-primary ml-2">0.75 ETH</b></span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mb-10">
                    <ul className="list-group">
                        {
                            myPoolList.map(x => {
                                return (<PoolView key={"myPool" + x.poolIdx} item={x} pool={poolList[x.poolIdx]}/>)
                            })
                        }
                    </ul>
                </div>
                <div className="col-lg-10 mb-3 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="page-header-title">내 보험</h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 mb-10">
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