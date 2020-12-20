import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { DefaultHeader, PrimaryButton, TextView, LabelValueView } from './components'
import { styles } from '../common/styles';
import colors from '../common/colors';
import Icon from 'react-native-vector-icons/Ionicons'

const ProvideCompleteScreen = () => {
    const navigation = useNavigation();

    const moveToNext = () => {
        navigation.navigate("Home")
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"유동성 참여하기"} moveBack={"Home"} />
                <View style={styles.wrapper}>
                    <CompleteView>
                        <Icon name={'checkmark-circle'} size={70} color={colors.success} />
                        <TextView fontSize={18} weight={"bold"} style={styles.mt3}>요청 완료</TextView>
                        <TextView fontSize={16} style={styles.mt1} color={colors.gray}>유동성 참여가 완료되었습니다.</TextView>
                    </CompleteView>
                    <PrimaryButton title={"확인"} onClick={moveToNext} />
                </View>
            </SafeAreaView>
        </>
    )
}

const CompleteView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`


export default ProvideCompleteScreen