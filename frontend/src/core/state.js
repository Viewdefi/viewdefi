import { atom } from 'recoil'

export const poolListState = atom({
    key: "poolListState",
    default: [{
        name: "BITCOIN",
        icon: "bitcoin",
        theme: "dark",
        index: -84624
    },{
        name: "Ethereum",
        icon: "ethereum",
        theme: "white",
        index: +52344
    },{
        name: "Cosmos(ATOM)",
        icon: "cosmos",
        theme: "dark",
        index: +1756
    },{
        name: "Chainlink",
        icon: "chainlink",
        theme: "dark",
        index: +1252
    },{
        name: "EOS",
        icon: "eos",
        theme: "white",
        index: +112
    },{
        name: "Litecoin",
        icon: "litecoin",
        theme: "dark",
        index: -2873
    },{
        name: "Aave",
        icon: "aave",
        theme: "dark",
        index: -2868
    }]
})