import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {ViewLogin, ViewOtp} from '../../auth';
import HomeUtama from './home_utama';
import {
  ViewAddPortofolio,
  ViewDetailPortofolio,
  ViewEditDataBisnis,
  ViewEditMediaSosial,
  ViewEditProfile,
} from '../../home';
import HomeForums from './home_forums';
import {
  ViewAddForums,
  ViewPostingan,
  ViewProfileUser,
  ViewUserForums,
} from '../../forums';
import HomeEvent from './home_event';
import {ViewAddEvent, ViewDetailEvent} from '../../event';

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
        <Stack.Screen
          name="HomeForums"
          component={HomeForums}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeEvent"
          component={HomeEvent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={ViewEditProfile}
          options={{
            title: 'Edit Profile',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddPortofolio"
          component={ViewAddPortofolio}
          options={{
            title: 'Buat Portofolio',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailPortofolio"
          component={ViewDetailPortofolio}
          options={{
            title: 'Detail Portofolio',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="EditDataBisnis"
          component={ViewEditDataBisnis}
          options={{
            title: 'Edit Data Bisnis',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="EditMediaSosial"
          component={ViewEditMediaSosial}
          options={{
            title: 'Edit Media Sosial',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddForums"
          component={ViewAddForums}
          // options={{
          //   title: 'Tambah Postingan',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //     fontSize: 20,
          //   },
          //   headerStyle: {backgroundColor: '#ffffff'},
          //   headerTintColor: '#000000',
          //   headerTitleAlign: 'center',
          // }}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Postingan"
          component={ViewPostingan}
          options={{
            title: 'Postingan',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="UserForums"
          component={ViewUserForums}
          options={{
            title: '',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ProfileUsers"
          component={ViewProfileUser}
          options={{
            title: 'Katalog',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DetailEvent"
          component={ViewDetailEvent}
          options={{
            title: 'Detail Event',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="AddEvent"
          component={ViewAddEvent}
          options={{
            title: 'Tambah Event',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerStyle: {backgroundColor: '#14B885'},
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
