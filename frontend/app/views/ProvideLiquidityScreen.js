import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components'
import { PrimaryButton, TextView } from './components'

const ProvideLiquidityScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <TextView>ProvideLiquidityScreen</TextView>
                <PrimaryButton title={"MOVE TO NEXT"} />
            </SafeAreaView>
        </>
    )
}

export default ProvideLiquidityScreen