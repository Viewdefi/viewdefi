import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView, View } from 'react-native';
import styled from 'styled-components'
import { PrimaryButton, TextView } from './components'

const SplashScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Container>
                <Introduction>
                    <TextView fontSize={18}>Hello, Viewdefi</TextView>
                </Introduction>
                <PrimaryButton title={"START"} onClick={() => navigation.navigate('Home') } />
            </Container>
        </>
    )
}

const Container = styled(SafeAreaView)`
    flex: 1;
    flex-direction: column;
`

const Introduction = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export default SplashScreen