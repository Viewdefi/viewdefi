import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Button } from '@ui-kitten/components';

import MapView, { Marker } from 'react-native-maps';

import { StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components'
import { TextView } from './components'
import { fetchLocations } from '../api'
import colors from '../common/colors';
import { styles } from '../common/styles';
import { useRecoilState } from 'recoil';
import { locationState } from '../states'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [currentLocation, setCurrentLocation] = useRecoilState(locationState)
    const [activeIndex, setActiveIndex] = useState(0);
    const [locations, setLocations] = useState([]);
    const [isProvider, setIsProvider] = useState(true);

    useEffect(() => {
        fetchLocations().then(res => {
            if(res.statusCode == 200)
                setLocations(res.data)
        })
    }, [])

    const selectLocation = () => {
        setCurrentLocation(locations[activeIndex])
        if(isProvider) {
            navigation.navigate("HomeDetail")
        } else {
            navigation.navigate("RegisterDetail")
        }
    }

    const RenderMarkerView = () => {
        return locations.map((x, index) => 
            <Marker
                key={String(index)}
                coordinate={{'latitude': x.lat, 'longitude': x.lng}}
                onPress={() => setActiveIndex(index)}>
                <MarkerContainer active={activeIndex == index}>
                    <TextView color={"#fff"}>{x.name}</TextView>
                </MarkerContainer>
            </Marker>
        )
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <Container>
                <BackgroundMap initialRegion={{
                    latitude: 37.4968436,
                    longitude: 127.0328342,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}>
                    <RenderMarkerView />
                </BackgroundMap>
                <SearchContainer>
                    <Icon name={'ios-search-outline'} size={20} color={"#aaa"} />
                </SearchContainer>
                <MyBtnContainer>
                    <MyBtn 
                        onPress={() => navigation.navigate("MyPortfolio")}
                        activeOpacity={0.8}>
                        <TextView fontSize={12}>포트폴리오</TextView>
                    </MyBtn>
                </MyBtnContainer>
                <RoleBtnContainer>
                    <RoleBtn 
                        role={'provider'} 
                        active={isProvider} 
                        onPress={() => setIsProvider(true)}
                        activeOpacity={0.8}>
                        <TextView color={isProvider ? "#fff" : "#333"} fontSize={12}>공급자</TextView>
                    </RoleBtn>
                    <RoleBtn 
                        role={'register'} 
                        active={!isProvider} 
                        onPress={() => setIsProvider(false)}
                        activeOpacity={0.8}>
                        <TextView color={!isProvider ? "#fff" : "#333"} fontSize={12}>가입자</TextView>
                    </RoleBtn>
                </RoleBtnContainer>
                {
                    locations.length > 0 && (
                        <InfoContainer>
                            <InfoView>
                                <TextView weight={"bold"}>{locations[activeIndex].fullName}</TextView>
                                <TextView>{locations[activeIndex].name}</TextView>
                                <TextView weight={"bold"} style={styles.mt2}>현재 가격 지수</TextView>
                                <TextView color={colors.danger} weight={"bold"} fontSize={16}>{locations[activeIndex].price}</TextView>
                                <TextView weight={"bold"} style={styles.mt2}>APY</TextView>
                                <TextView color={colors.success} weight={"bold"} fontSize={16}>{locations[activeIndex].apy}</TextView>
                            </InfoView>
                            <ButtonView>
                                <Button status={"success"} onPress={() => selectLocation()}>참여하기</Button>
                            </ButtonView>
                        </InfoContainer>
                    )
                }
            </Container>
        </>
    )
}

const Container = styled(SafeAreaView)`
    flex: 1;
`

const BackgroundMap = styled(MapView)`
    flex: 1;
`

const MarkerContainer = styled(View)`
    padding-horizontal: 16px;
    padding-vertical: 8px;
    background-color: ${props => props.active ? colors.danger : colors.primary };
    border-radius: 8px;
`

const SearchContainer = styled(View)`
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    position: absolute;
    top: 80px;
    left: 5%;
    width: 90%;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 1px 2px 2px #ccc;
    padding-vertical: 10px;
    padding-horizontal: 15px;
`

const InfoContainer = styled(View)`
    flex: 1;
    flex-direction: row;
    position: absolute;
    width: 90%;
    bottom: 3%;
    left: 5%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 1px 2px 2px #ccc;
    padding-vertical: 15px;
    padding-horizontal: 20px;
`

const InfoView = styled(View)`
    flex: 2;
`

const ButtonView = styled(View)`
    flex: 1;
    justify-content: flex-end;
`

const MyBtnContainer = styled(View)`
    flex-direction: row;
    position: absolute;
    top: 40px;
    left: 5%;
`

const MyBtn = styled(TouchableOpacity)`
    width: 80px;
    padding-vertical: 10px;
    border-radius: 20px;
    background-color: #ffffff;
    border-color: #ccc;
    border-width: 1px;
    align-items: center;
`

const RoleBtnContainer = styled(View)`
    flex-direction: row;
    position: absolute;
    top: 40px;
    right: 5%;
`

const RoleBtn = styled(TouchableOpacity)`
    width: 60px;
    padding-vertical: 10px;
    border-top-left-radius: ${props => props.role == 'provider' ? 20 : 0}px;
    border-bottom-left-radius: ${props => props.role == 'provider' ? 20 : 0}px;
    border-top-right-radius: ${props => props.role == 'provider' ? 0 : 20}px;
    border-bottom-right-radius: ${props => props.role == 'provider' ? 0 : 20}px;
    background-color: ${props => props.active ? "#1CA662" : "#fff"};
    align-items: center;
`

export default HomeScreen