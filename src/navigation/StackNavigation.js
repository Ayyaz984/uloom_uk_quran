import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from '../screens/OnBoarding';
import DrawerNavigation from './DrawerNavigation';

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main">
        {props => <DrawerNavigation {...props} />}
      </Stack.Screen>
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
