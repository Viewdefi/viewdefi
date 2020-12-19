import React, { useEffect, useState } from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Input } from '@ui-kitten/components';

import { StatusBar, SafeAreaView, View } from 'react-native'
import styled from 'styled-components'
import { PrimaryButton, TextView, DefaultHeader } from './components'
import colors from '../common/colors'
import { styles } from '../common/styles';
import { useRecoilState } from 'recoil';
import { locationState } from '../states';

const HomeDetailScreen = () => {
    const navigation = useNavigation()
    const [location, setLocation] = useRecoilState(locationState)
    const [data, setData] = useState([])

    useEffect(() => {
        let result = [];
        for(var i = 0; i < 50; i++) {
            result.push(Math.floor(Math.random() * 100) + 400);
        }
        setData(result)
    }, [])

    const contentInset = { top: 20, bottom: 20 }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"지역 정보"} moveBack={"Home"} />
                <Wrapper>
                    <BodyWrapper>
                        <TextView color={colors.primary}>{ location.fullName }</TextView>
                        <Card style={{ marginTop: 20 }}>
                            <CardBody>
                                <InfoView>
                                    <TextView>{ location.name }</TextView>
                                    <TextView style={{ marginTop: 5 }}>현재 시세 지수</TextView>
                                    <DefaultButton size='small' status='basic'>히스토리 보기</DefaultButton>
                                </InfoView>
                                <PriceView>
                                    <TextView color={colors.danger} fontSize={18}>{ location.price }</TextView>
                                </PriceView>
                            </CardBody>
                            <View style={{ height: 120, flexDirection: 'row' }}>
                                <YAxis
                                    data={data}
                                    contentInset={contentInset}
                                    svg={{
                                        fill: 'grey',
                                        fontSize: 10,
                                    }}
                                    numberOfTicks={6}
                                    formatLabel={(value) => `${value}`}
                                />
                                <LineChart
                                    style={{ flex: 1, marginLeft: 16 }}
                                    data={data}
                                    svg={{ stroke: colors.success }}
                                    yMin={0}
                                    yMax={500}
                                    contentInset={contentInset}
                                >
                                    <Grid />
                                </LineChart>
                            </View>
                        </Card>
                        <TextView style={styles.mt1} color={colors.gray}>현재 풀</TextView>
                        <Input
                            placeholder='500억원'
                            disabled={true}
                            placeholderTextColor={colors.default}
                            style={styles.mt1}
                        />
                        <TextView style={styles.mt1} color={colors.gray}>공급자 수</TextView>
                        <Input
                            placeholder='573명'
                            disabled={true}
                            placeholderTextColor={colors.default}
                            style={styles.mt1}
                        />
                    </BodyWrapper>
                    <PrimaryButton title={"유동성 참여하기"} onClick={() => navigation.navigate("ProvideLiquidity") } />
                </Wrapper>
            </SafeAreaView>
        </>
    )
}

const Wrapper = styled(View)`
    flex: 1;
    padding: 20px;
    background-color:${colors.light};
`

const BodyWrapper = styled(View)`
    flex: 1;
`

const CardBody = styled(View)`
    height: 80px;
    flex-direction: row;
`

const InfoView = styled(View)`
    flex: 1;
`

const PriceView = styled(View)`
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
`

const DefaultButton = styled(Button)`
    margin-top: 10px;
`

export default HomeDetailScreen