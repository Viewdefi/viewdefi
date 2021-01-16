import React, { useEffect, useState } from 'react'
import moment from 'moment'
import faker from 'faker'

let positions = ["유동성 공급자", "보험 구매자"]

const InsuranceTableComp = () => {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        let result = []
        for (var i = 0; i < 10; i++) {
            result.push({
                user: faker.finance.ethereumAddress(),
                position: faker.random.number(1),
                amount: faker.random.number(1000) / 10.0,
                status: faker.random.number(4),
                currentTime: moment(faker.date.past(1)).format("YYYY-MM-DD")
            })
        }

        setData(result)
    }, [])

    return (
        <div class="table-responsive">
            <table class="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle">
            <thead class="thead-light">
                <tr>
                    <th>사용자</th>
                    <th>포지션</th>
                    <th>수량</th>
                    <th>상태</th>
                    <th>시간</th>
                </tr>
            </thead>

            <tbody>
                {
                    data && data.map(item => {
                        return (
                            <tr>
                                <td>{item.user}</td>
                                <td>
                                    { item.position == 0 && (<i className="tio-arrow-upward text-primary mr-1"></i>) }
                                    { item.position == 1 && (<i className="tio-arrow-downward text-danger mr-1"></i>) }
                                    {positions[item.position]}
                                </td>
                                <td>{item.amount} ETH</td>
                                <td>{item.status}</td>
                                <td>{item.currentTime}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default InsuranceTableComp