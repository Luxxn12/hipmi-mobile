/* eslint-disable react-native/no-inline-styles */
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {Image} from 'react-native';
import {View} from 'react-native';

export default function SplashScreen() {
  return (
    <Box bgColor="white" h={'$full'}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('..//..//..//assets/logo.png')}
          style={{height: 180, width: 180}}
          alt="Bogopa"
        />
      </View>
    </Box>
  );
}
