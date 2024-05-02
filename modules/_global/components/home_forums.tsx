/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ViewAddForums, ViewForums, ViewProfileForums} from '../../forums';
import {CircleUserRound, MessagesSquare, Plus} from 'lucide-react-native';
import {Icon} from '@gluestack-ui/themed';
import {TouchableOpacity, View} from 'react-native';

export default function HomeForums({navigation}: any) {
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
          name="FORUMS"
          component={ViewForums}
          options={{
            title: 'FORUMS',
            headerTitle: 'FORUM',
            tabBarLabel: 'FORUM',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => (
              <Icon as={MessagesSquare} color={color} size="xl" />
            ),
          }}
        />
        <Tab.Screen
          name="ADDFORUMS"
          component={ViewAddForums}
          options={{
            title: '',
            headerTitle: 'FORUMS',
            // tabBarLabel: 'FORUMS',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => (
              <Icon as={MessagesSquare} color={color} size="xl" />
            ),
            tabBarButton: () => (
              <TouchableOpacity
                style={{
                  top: -20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() =>
                  navigation.navigate('AddForums', {name: 'add forums'})
                }>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 35,
                    backgroundColor: '#14B885',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon as={Plus} color={'#ffffff'} size="xl" />
                </View>
              </TouchableOpacity>
            ),
            // )
          }}
        />
        <Tab.Screen
          name="PROFILEFORUMS"
          component={ViewProfileForums}
          options={{
            title: 'PROFILE',
            headerTitle: 'PROFILE',
            tabBarLabel: 'PROFILE',
            headerTitleAlign: 'center',
            tabBarIcon: ({color}) => (
              <Icon as={CircleUserRound} color={color} size="xl" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
