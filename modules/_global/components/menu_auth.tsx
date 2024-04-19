import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ViewLogin, ViewOtp} from '../../auth';
import HomeUtama from './home_utama';

export default function MenuAuth() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={ViewLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otp"
          component={ViewOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeUtama"
          component={HomeUtama}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
