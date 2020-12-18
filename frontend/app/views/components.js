import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import colors from '../common/colors';

export const _PrimaryButton = styled(TouchableOpacity)`
    background-color: ${colors.success};
    color: #fff;
    align-items: center;
    justify-content: center;
    padding-vertical: 15px;
    border-radius: 10px;
`

export const PrimaryButton = ({ title, onClick }) => {
    return (
        <_PrimaryButton 
            onPress={onClick} 
            activeOpacity={0.8}>
            <TextView color={colors.light}>{title}</TextView>
        </_PrimaryButton>
    )
}

export const TextView = styled(Text)`
    font-size: ${props => props.fontSize || 14}px;
    font-weight: bold;
    color: ${props => props.color || colors.default};
`

export const DefaultHeader = ({ title, moveBack }) => {
    const navigation = useNavigation();

    return (
        <_HeaderLayout>
            <_HeaderBackButton onPress={() => navigation.navigate(moveBack)}>
                <Icon name={'ios-arrow-back-outline'} size={24} color={colors.default} />
            </_HeaderBackButton>
            <_HeaderTitle>
                <TextView fontSize={16}>{ title }</TextView>
            </_HeaderTitle>
        </_HeaderLayout>
    )
}

export const _HeaderLayout = styled(View)`
    flex-direction: row;
    padding-horizontal: 10px;
    padding-vertical: 5px;
    background-color: ${colors.light};
    border-bottom-color: #eee;
    border-bottom-width: 1px;
`

export const _HeaderTitle = styled(View)`
    flex: 1;
    justify-content: center;
`

export const _HeaderBackButton = styled(TouchableOpacity)`
    padding: 10px;
`