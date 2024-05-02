/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  ViewBerandaEvent,
  ViewKontribusiEvent,
  ViewRiwayatEvent,
  ViewStatusEvent,
} from '../../event';
import {Icon} from '@gluestack-ui/themed';
import {
  CalendarFold,
  History,
  Home,
  SquareGanttChart,
} from 'lucide-react-native';

export default function HomeEvent() {
  const Tab = createBottomTabNavigator();
  return (
    <>
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
          name="BerandaEvent"
          component={ViewBerandaEvent}
          options={{
            title: 'EVENT',
            headerTitle: 'EVENT',
            tabBarLabel: 'BERANDA',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => <Icon as={Home} color={color} size="xl" />,
          }}
        />
        <Tab.Screen
          name="StatusEvent"
          component={ViewStatusEvent}
          options={{
            title: 'Status Event',
            headerTitle: 'STATUS EVENT',
            tabBarLabel: 'STATUS EVENT',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => (
              <Icon as={SquareGanttChart} color={color} size="xl" />
            ),
          }}
        />
        <Tab.Screen
          name="KontribusiEvent"
          component={ViewKontribusiEvent}
          options={{
            title: 'Kontribusi',
            headerTitle: 'KONTRIBUSI',
            tabBarLabel: 'KONTRIBUSI',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => (
              <Icon as={CalendarFold} color={color} size="xl" />
            ),
          }}
        />
        <Tab.Screen
          name="RiwayatEvent"
          component={ViewRiwayatEvent}
          options={{
            title: 'Riwayat',
            headerTitle: 'RIWAYAT',
            tabBarLabel: 'RIWAYAT',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => (
              <Icon as={History} color={color} size="xl" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
