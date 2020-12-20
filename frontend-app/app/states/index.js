import React from 'react'
import { atom } from 'recoil'

export const providerState = atom({
    key: "provider",
    default: {
        num: ""
    }
})

export const locationState = atom({
    key: "location",
    default: {
        
    }
})