import React from 'react'
import { TouchableOpacity, Text } from 'react-native';

import styled from 'styled-components'

export const _PrimaryButton = styled(TouchableOpacity)`
    background-color: #3072FF;
    color: #fff;
    align-items: center;
    justify-content: center;
    padding-vertical: 10px;
`

export const PrimaryButton = ({ title, onClick }) => {
    return (
        <_PrimaryButton 
            onPress={onClick} 
            activeOpacity={0.8}>
            <TextView color={"#fff"}>{title}</TextView>
        </_PrimaryButton>
    )
}

export const TextView = styled(Text)`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.color || "#333"};
`