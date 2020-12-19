import React from 'react'
import { useRecoilState } from 'recoil'
import { useNavigation } from '@react-navigation/native';
import { Card } from '@ui-kitten/components';

import { StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { DefaultHeader, PrimaryButton, TextView } from './components'
import { styles } from '../common/styles';
import colors from '../common/colors';
import { locationState, providerState } from '../states'
import Icon from 'react-native-vector-icons/Ionicons'

const ProvideLiquidityScreen = () => {
    const [state, setState] = useRecoilState(providerState)
    const navigation = useNavigation();

    const onPressNumPad = (num) => {
        setState({
            ...state,
            num: state.num + String(num)
        })
    }

    const onPressDelete = () => {
        setState({
            ...state,
            num: state.num.substring(0, state.num.length-1)
        })
    }

    const moveToNext = () => {
        navigation.navigate("ProvideConfirm")
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"유동성 참여하기"} moveBack={"HomeDetail"} />
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Card>
                            <CardBody>
                                <InfoView>
                                    <TextView color={colors.success}>tlink1c30...r5px</TextView>
                                    <TextView> 님의 보유자산</TextView>
                                </InfoView>
                                <PriceView>
                                    <TextView fontSize={24}>4500 LN</TextView>
                                </PriceView>
                            </CardBody>
                        </Card>
                        <EnteredPriceView>
                            <TextView fontSize={20} color={colors.gray}>{ state.num == "" ? "금액입력" : state.num }</TextView>
                        </EnteredPriceView>
                        <NumberPad>
                            <NumPadRow>
                                <NumPad onPress={() => onPressNumPad(1)}><TextView color={colors.gray} fontSize={20}>1</TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(2)}><TextView color={colors.gray} fontSize={20}>2</TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(3)}><TextView color={colors.gray} fontSize={20}>3</TextView></NumPad>
                            </NumPadRow>
                            <NumPadRow>
                                <NumPad onPress={() => onPressNumPad(4)}><TextView color={colors.gray} fontSize={20}>4</TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(5)}><TextView color={colors.gray} fontSize={20}>5</TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(6)}><TextView color={colors.gray} fontSize={20}>6</TextView></NumPad>
                            </NumPadRow>
                            <NumPadRow>
                                <NumPad onPress={() => onPressNumPad(7)}><TextView color={colors.gray} fontSize={20}>7</TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(8)}><TextView color={colors.gray} fontSize={20}>8</TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(9)}><TextView color={colors.gray} fontSize={20}>9</TextView></NumPad>
                            </NumPadRow>
                            <NumPadRow>
                                <NumPad><TextView color={colors.gray} fontSize={20}> </TextView></NumPad>
                                <NumPad onPress={() => onPressNumPad(0)}><TextView color={colors.gray} fontSize={20}>0</TextView></NumPad>
                                <NumPad onPress={() => onPressDelete()}><TextView color={colors.gray} fontSize={20}><Icon name={"ios-backspace-outline"} size={30} color={colors.gray}/></TextView></NumPad>
                            </NumPadRow>
                        </NumberPad>
                    </View>
                    <PrimaryButton title={"다음"} onClick={() => moveToNext() } />
                </View>
            </SafeAreaView>
        </>
    )
}

const CardBody = styled(View)`
    height: 80px;
    flex-direction: row;
`

const InfoView = styled(View)`
    flex: 1;
    flex-direction: row;
`

const PriceView = styled(View)`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`

const EnteredPriceView = styled(View)`
    align-items: center;
    padding-vertical: 70px;
`

const NumberPad = styled(View)`
    flex: 1;
`

const NumPadRow = styled(View)`
    flex-direction: row;
`

const NumPad = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

export default ProvideLiquidityScreen