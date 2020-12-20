import React from 'react'
import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';
import { Card } from '@ui-kitten/components';

import { StatusBar, SafeAreaView, View, Image } from 'react-native';
import styled from 'styled-components'
import { DefaultHeader, PrimaryButton, TextView, LabelValueView } from './components'
import { styles } from '../common/styles';
import colors from '../common/colors';
import { locationState, providerState } from '../states';


const ProvideConfirmScreen = () => {
    const navigation = useNavigation();
    const [state, setState] = useRecoilState(providerState)
    const [location, setLocation] = useRecoilState(locationState)

    const moveToNext = () => {
        navigation.navigate("ProvideComplete")
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"유동성 참여하기"} moveBack={"ProvideLiquidity"} />
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
                        <LabelValueView label={"참여 비용"} value={state.num + " LN"}/>
                        <LabelValueView label={"APY"} value={location.apy}/>
                        <View style={styles.center}>
                            <TextView style={styles.mt3} color={colors.gray}>유동성 공급자의 자산은 1년간 출금이 불가능 합니다</TextView>
                        </View>
                    </View>
                    <PrimaryButton title={"다음"} onClick={moveToNext} />
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

export default ProvideConfirmScreen