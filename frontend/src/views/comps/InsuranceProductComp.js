import React, { useEffect, useState } from 'react'
import Big from 'big.js'
import moment from 'moment'
import faker from 'faker'

let positions = ["유동성 공급자", "보험 구매자"]

const InsuranceProductComp = () => {
    const eth = 1254.75;
    const endDate = moment().add(90, 'days').format("YY-MM-DD");

    return (
        <div class="table-responsive">
            <table class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle">
            <thead class="thead-light">
                <tr>
                    <th width="20%">상품</th>
                    <th width="20%">보장 금액</th>
                    <th width="25%">보험 비용</th>
                    <th width="15%">가입 기간</th>
                    <th>-</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td><h4 className="mb-0 text-danger">-6000 헷지</h4></td>
                    <td><h4 className="mb-0">20 ETH<span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 20).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">1.0 ETH <span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 1.0).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">90일 ({endDate})</h4></td>
                    <td className="text-right"><button type="button" className="btn btn-sm btn-outline-primary">구매하기</button></td>
                </tr>
                <tr>
                    <td><h4 className="mb-0 text-danger">-5500 헷지</h4></td>
                    <td><h4 className="mb-0">30 ETH<span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 30).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">0.8 ETH <span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 0.8).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">90일 ({endDate})</h4></td>
                    <td className="text-right"><button type="button" className="btn btn-sm btn-outline-primary">구매하기</button></td>
                </tr>
                <tr>
                    <td><h4 className="mb-0 text-danger">-5000 헷지</h4></td>
                    <td><h4 className="mb-0">35 ETH<span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 35).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">0.7 ETH <span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 0.7).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">90일 ({endDate})</h4></td>
                    <td className="text-right"><button type="button" className="btn btn-sm btn-outline-primary">구매하기</button></td>
                </tr>
                <tr>
                    <td><h4 className="mb-0 text-danger">-4500 헷지</h4></td>
                    <td><h4 className="mb-0">40 ETH<span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 40).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">0.65 ETH <span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 0.65).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">90일 ({endDate})</h4></td>
                    <td className="text-right"><button type="button" className="btn btn-sm btn-outline-primary">구매하기</button></td>
                </tr>
                <tr>
                    <td><h4 className="mb-0 text-danger">-4000 헷지</h4></td>
                    <td><h4 className="mb-0">45 ETH<span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 45).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">0.6 ETH <span className="badge badge-pill badge-soft-primary ml-1">${ Big(eth * 0.6).toFixed(2) }</span></h4></td>
                    <td><h4 className="mb-0">90일 ({endDate})</h4></td>
                    <td className="text-right"><button type="button" className="btn btn-sm btn-outline-primary">구매하기</button></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default InsuranceProductComp