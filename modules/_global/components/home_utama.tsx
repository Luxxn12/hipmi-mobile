/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ViewHome, ViewProfile, ViewSearch} from '../../home';
import {CircleUserRound, Home, Search} from 'lucide-react-native';
import {Icon} from '@gluestack-ui/themed';

export default function HomeUtama() {
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
    <Tab.Navigator
      id="RootNavigator"
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
        },
        headerStyle: {backgroundColor: '#14B885'},
        tabBarActiveTintColor: '#14B885',
        tabBarInactiveTintColor: '#000000',
        headerTintColor: '#fff',
        tabBarStyle: {backgroundColor: '#fff', paddingBottom: 3},
      }}>
      <Tab.Screen
        name="Home"
        component={ViewHome}
        options={{
          title: 'HOME',
          headerTitle: 'HIPMI',
          tabBarLabel: 'HOME',
          headerTitleAlign: 'center',
          tabBarIcon: ({color}) => <Icon as={Home} color={color} size="xl" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={ViewSearch}
        options={{
          title: 'HOME',
          headerTitle: 'Temukan Pengguna',
          tabBarLabel: 'TEMUKAN PENGGUNA',
          headerTitleAlign: 'center',
          tabBarIcon: ({color}) => <Icon as={Search} color={color} size="xl" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ViewProfile}
        options={{
          title: 'HOME',
          headerTitle: 'Katalog',
          tabBarLabel: 'PROFILE',
          headerTitleAlign: 'center',
          tabBarIcon: ({color}) => (
            <Icon as={CircleUserRound} color={color} size="xl" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
