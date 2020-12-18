import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components'
import { PrimaryButton, TextView } from './components'

const SplashScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <TextView>SplashScreen</TextView>
                <PrimaryButton title={"MOVE TO NEXT"} onClick={() => navigation.navigate('Home') } />
            </SafeAreaView>
        </>
    )
}

export default SplashScreen