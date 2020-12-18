import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card } from '@ui-kitten/components';

import { StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components'
import { DefaultHeader, PrimaryButton, TextView } from './components'
import { styles } from '../common/styles';
import colors from '../common/colors';

const ProvideConfirmScreen = () => {
    const navigation = useNavigation();
    
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
                                    <TextView fontSize={24}>4500 LN</TextView>
                                </PriceView>
                            </CardBody>
                        </Card>
                    </View>
                    <PrimaryButton title={"다음"} />
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

export default ProvideConfirmScreen