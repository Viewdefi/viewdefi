import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView, View } from 'react-native';
import styled from 'styled-components'
import { DefaultHeader, PrimaryButton, TextView } from './components'
import { styles } from '../common/styles';

const ProvideLiquidityScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"유동성 참여하기"} moveBack={"HomeDetail"} />
                <View style={styles.wrapper}>
                    <PrimaryButton title={"다음"} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default ProvideLiquidityScreen