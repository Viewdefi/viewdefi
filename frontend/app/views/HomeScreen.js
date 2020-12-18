import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components'
import { PrimaryButton, TextView } from './components'

const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <TextView>Hello, World!</TextView>
                <PrimaryButton title={"MOVE TO NEXT"} onClick={() => navigation.navigate('HomeDetail') } />
            </SafeAreaView>
        </>
    )
}

export default HomeScreen