import { atom } from 'recoil'
import moment from 'moment'
import faker from 'faker'

const TYPE_STAKING = 1
const TYPE_CRYPTO = 2

export const myPoolState = atom({
    key: "myPoolState",
    default: [{
        poolIdx: 0,
        liquidity: faker.random.number(15) + 10,
        earnings: faker.random.number(10) / 100.0,
        since: moment().subtract(2, 'days').format("YYYY-MM-DD"),
        until: moment().add(1, 'years').format("YYYY-MM-DD")
    },{
        poolIdx: 1,
        liquidity: faker.random.number(15) + 10,
        earnings: faker.random.number(10) / 100.0,
        since: moment().subtract(2, 'days').format("YYYY-MM-DD"),
        until: moment().add(1, 'years').format("YYYY-MM-DD")
    },{
        poolIdx: 3,
        liquidity: faker.random.number(15) + 10,
        earnings: faker.random.number(10) / 100.0,
        since: moment().subtract(2, 'days').format("YYYY-MM-DD"),
        until: moment().add(1, 'years').format("YYYY-MM-DD")
    },{
        poolIdx: 4,
        liquidity: faker.random.number(15) + 10,
        earnings: faker.random.number(10) / 100.0,
        since: moment().subtract(2, 'days').format("YYYY-MM-DD"),
        until: moment().add(1, 'years').format("YYYY-MM-DD")
    }]
})

export const myInsuranceState = atom([

])

export const poolListState = atom({
    key: "poolListState",
    default: [{
        idx: 0,
        name: "ETH 2.0",
        symbol: "E",
        theme: "dark",
        value: faker.random.number(100000),
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_STAKING
    },{
        idx: 1,
        name: "강남구",
        assets: ["방배동", "신사동", "논현동", "개포동", "대치동", "역삼동", "세곡동", "수서동", "일원동"],
        symbol: "GN",
        theme: "dark",
        value: 6604.98,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 2,
        name: "TOP 10 CRYPTO INDEX",
        assets: ["Bitcoin", "Ethereum", "Polkadot", "XRP", "Cardano", "Litecoin", "Bitcoin Cash", "Chainlink", "Stellar", "BNB"],
        symbol: "CI",
        theme: "dark",
        value: 6604.98,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 3,
        name: "Ethereum",
        icon: "ethereum",
        theme: "white",
        value: +52344,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 4,
        name: "Cosmos(ATOM)",
        icon: "cosmos",
        theme: "dark",
        value: +1756,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(10000),
            providers: faker.random.number(10000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 5,
        name: "Chainlink",
        icon: "chainlink",
        theme: "dark",
        value: +1252,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 6,
        name: "EOS",
        icon: "eos",
        theme: "white",
        value: +112,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 7,
        name: "Litecoin",
        icon: "litecoin",
        theme: "dark",
        value: -2873,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    },{
        idx: 8,
        name: "Aave",
        icon: "aave",
        theme: "dark",
        value: -2868,
        apy: faker.random.number(100) + 10,
        liquidity: {
            users: faker.random.number(1000),
            providers: faker.random.number(1000),
            value: faker.random.number(1000)
        },
        type: TYPE_CRYPTO
    }]
})