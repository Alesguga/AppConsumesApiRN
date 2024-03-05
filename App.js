import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import GameDetails from './screens/GameDetails';
import TabNavigator from './tabnavigator/TabNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
    <Stack.Screen name="tabs"component={TabNavigator} options={{headerShown: false}}/>
    <Stack.Screen name="GameDetails" component={GameDetails} options={{headerShown: false}} />
  </Stack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}