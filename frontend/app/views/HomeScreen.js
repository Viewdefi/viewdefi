import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

import { StatusBar, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components'
import { DefaultHeader, PrimaryButton, TextView } from './components'
import { fetchLocations } from '../api'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [locations, setLocations] = useState([]);
    const [isProivder, setIsProvider] = useState(true);

    useEffect(() => {
        fetchLocations().then(res => {
            if(res.statusCode == 200)
                setLocations(res.data)
        })
    }, [])

    const selectLocation = () => {
        console.info("select location clicked");
        navigation.navigate("HomeDetail")
    }

    const RenderMarkerView = () => {
        return locations.map((x, index) => 
            <Marker
                key={String(index)}
                coordinate={{'latitude': x.lat, 'longitude': x.lng}}
                onPress={selectLocation}>
                <MarkerContainer>
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
                <RoleBtnContainer>
                    <RoleBtn 
                        role={'provider'} 
                        active={isProivder} 
                        onPress={() => setIsProvider(true)}
                        activeOpacity={0.8}>
                        <TextView color={isProivder ? "#fff" : "#333"} fontSize={12}>공급자</TextView>
                    </RoleBtn>
                    <RoleBtn 
                        role={'register'} 
                        active={!isProivder} 
                        onPress={() => setIsProvider(false)}
                        activeOpacity={0.8}>
                        <TextView color={!isProivder ? "#fff" : "#333"} fontSize={12}>가입자</TextView>
                    </RoleBtn>
                </RoleBtnContainer>
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
    background-color: #272F7F;
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