import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from './app/views/HomeScreen';
import HomeDetailScreen from './app/views/HomeDetailScreen';
import ProvideLiquidityScreen from './app/views/ProvideLiquidityScreen';
import RegisterInsuranceScreen from './app/views/RegisterInsuranceScreen';
import SplashScreen from './app/views/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    Icon.loadFont();
  }, []) 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
        <Stack.Screen name="ProvideLiquidityScreen" component={ProvideLiquidityScreen} />
        <Stack.Screen name="RegisterInsuranceScreen" component={RegisterInsuranceScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
