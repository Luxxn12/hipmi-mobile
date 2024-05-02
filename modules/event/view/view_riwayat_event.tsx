/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Icon} from '@gluestack-ui/themed';
import {Box, Text} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';

export default function ViewRiwayatEvent({navigation}: any) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingLeft: 15}}
          onPress={() => navigation.navigate('Home', {name: 'back'})}>
          <Icon as={ArrowLeft} size="xl" mt={1} color="#FFFFFF" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <Text>Riwayat event</Text>
      </Box>
    </>
  );
}
