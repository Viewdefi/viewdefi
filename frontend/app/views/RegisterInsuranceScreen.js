import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components'
import { PrimaryButton, TextView } from './components'

const RegisterInsuranceScreen = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <TextView>RegisterInsuranceScreen</TextView>
                <PrimaryButton title={"MOVE TO NEXT"} />
            </SafeAreaView>
        </>
    )
}

export default RegisterInsuranceScreen