import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllScreen from '../screens/AllScreen';
import LatestScreen from '../screens/LatestScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

//navegador de pestañas
const TabNavigator = () => (
  <Tab.Navigator 
  screenOptions={{
    tabBarActiveTintColor: 'white',
    tabBarLabelStyle: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    tabBarStyle: {
      backgroundColor: '#129494',
      height:60
    }
  }}>
    <Tab.Screen name="All" component={AllScreen}  //tab de todos los juegos
    options={{
      tabBarIcon: ({ color, size }) => ( //icono  de la tab
        <MaterialCommunityIcons 
            name="gamepad-variant" 
            size={size + 10} 
            color={color} 
          />
      ),
      headerShown: false
    }}
    />
    <Tab.Screen name="Latest" component={LatestScreen} //tab de los juegos mas recientes
    options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons 
            name="history" 
            size={size + 10} 
            color={color}
          />
      ),
      headerShown: false
    }}
    />
  </Tab.Navigator>
);

export default TabNavigator;