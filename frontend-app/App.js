import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './app/views/HomeScreen';
import HomeDetailScreen from './app/views/HomeDetailScreen';
import ProvideLiquidityScreen from './app/views/ProvideLiquidityScreen';
import RegisterInsuranceScreen from './app/views/RegisterInsuranceScreen';
import SplashScreen from './app/views/SplashScreen';
import ProvideConfirmScreen from './app/views/ProvideConfirmScreen';
import ProvideCompleteScreen from './app/views/ProvideCompleteScreen';
import RegisterDetailScreen from './app/views/RegisterDetailScreen';
import MyPortfolioScreen from './app/views/MyPortfolioScreen';
import { RecoilRoot } from 'recoil';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    Icon.loadFont();
  }, []) 

  return (
    <RecoilRoot>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
            <Stack.Screen name="ProvideLiquidity" component={ProvideLiquidityScreen} />
            <Stack.Screen name="ProvideConfirm" component={ProvideConfirmScreen} />
            <Stack.Screen name="ProvideComplete" component={ProvideCompleteScreen} />
            <Stack.Screen name="RegisterInsurance" component={RegisterInsuranceScreen} />
            <Stack.Screen name="RegisterDetail" component={RegisterDetailScreen} />
            <Stack.Screen name="MyPortfolio" component={MyPortfolioScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </RecoilRoot>
  );
};

export default App;
