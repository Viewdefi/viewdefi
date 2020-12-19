import React, { useEffect, useState } from 'react'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { useNavigation } from '@react-navigation/native'
import { Card, Button, Input } from '@ui-kitten/components';

import { StatusBar, SafeAreaView, View } from 'react-native'
import styled from 'styled-components'
import { PrimaryButton, TextView, DefaultHeader, LabelValueView } from './components'
import colors from '../common/colors'
import { styles } from '../common/styles';

const MyPortfolioScreen = () => {
    const navigation = useNavigation()
    
    let data = [{
        name: "서울특별시 강남구 청담동 (POOL)",
        deposit: "30000",
        apy: "12.3%",
        profit: "14"
    },{
        name: "서울특별시 강남구 논현동 (POOL)",
        deposit: "34000",
        apy: "8.1%",
        profit: "8"
    },{
        name: "서울특별시 서초구 양재동 (POOL)",
        deposit: "20000",
        apy: "12.8%",
        profit: "82"
    },{
        name: "서울특별시 마포구 대흥동 (POOL)",
        deposit: "52000",
        apy: "6.4%",
        profit: "24"
    }]

    const RenderList = () => {
        return data.map((x, index) => {
            return (
                <Card key={String(index)} style={{ marginBottom: 20 }}>
                    <TextView>{x.name}</TextView>
                    <TextView style={styles.mt2} weight={"bold"} fontSize={14} color={colors.success}>+ {x.profit} LN</TextView>
                    <InfoView>
                        <TextView weight={"bold"} fontSize={18}>{x.deposit} LN</TextView>
                        <TextView weight={"bold"} fontSize={18} color={colors.success}>APY {x.apy}</TextView>
                    </InfoView>
                </Card>
            )
        })
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <DefaultHeader title={"포트폴리오"} moveBack={"Home"} />
                <Wrapper>
                    <BodyWrapper>
                        <RenderList />
                    </BodyWrapper>
                </Wrapper>
            </SafeAreaView>
        </>
    )
}

const Wrapper = styled(View)`
    flex: 1;
    padding: 20px;
    background-color: #efefef;
`

const BodyWrapper = styled(View)`
    flex: 1;
`

const InfoView = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`

export default MyPortfolioScreen