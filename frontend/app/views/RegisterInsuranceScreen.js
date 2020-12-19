import React from 'react'
import { useRecoilState } from 'recoil'
import { useNavigation } from '@react-navigation/native';
import { Card, Input } from '@ui-kitten/components';

import { StatusBar, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components'
import { DefaultHeader, LabelValueView, SuccessButton, TextView } from './components'
import { styles } from '../common/styles';
import colors from '../common/colors';
import { locationState, providerState } from '../states'
import Icon from 'react-native-vector-icons/Ionicons'

const RegisterInsuranceScreen = () => {
    const [state, setState] = useRecoilState(providerState)
    const [location, setLocationState] = useRecoilState(locationState)
    const navigation = useNavigation();

    const moveToNext = () => {
        navigation.navigate("ProvideConfirm")
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"보험 가입하기"} moveBack={"HomeDetail"} />
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Card>
                            <CardBody>
                                <InfoView>
                                    <TextView color={colors.success}>tlink1c30...r5px</TextView>
                                    <TextView> 님의 보유자산</TextView>
                                </InfoView>
                                <PriceView>
                                    <Image source={require("../assets/link.png")} style={{ width: 30, height: 30, marginRight: 10 }} />
                                    <TextView fontSize={24}>4500 LN</TextView>
                                </PriceView>
                            </CardBody>
                        </Card>
                        <LabelValueView label={"현재 " + location.name + " 부동산 지수"} value={location.price} />
                        <Input 
                            style={styles.mt2}
                            label={"목표 위험 지수"} 
                            placeholder={"3000 LN"} />
                        <Input 
                            style={styles.mt2}
                            label={"보험금 청구액"} 
                            placeholder={"청구액을 입력해주세요"} />
                        <LabelValueView label={"계산 보험료"} value={"320 LN"} />
                    </View>
                    <SuccessButton title={"보험 가입하기"} onClick={() => moveToNext() } />
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
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`

export default RegisterInsuranceScreen