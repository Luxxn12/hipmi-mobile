/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles from '../style';
import {Box, Button, ButtonText, VStack} from '@gluestack-ui/themed';
import {Center} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';

const CELL_COUNT = 4;

export default function ViewOtp({navigation}: any) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Center>
            <Image
              source={require('..//..//..//assets/logo.png')}
              style={{height: 180, width: 180}}
              alt="Hipmi"
            />
            <Box w={'$full'} p={'$1'}>
              <VStack space="xs" pb="$2" pt={'$5'}>
                <Text fontSize={18} fontWeight="$bold">
                  Verifikasi Kode OTP
                </Text>
                <Text fontSize={13} fontStyle="italic">
                  Silahkan masukan 4 digit kode otp yang dikirim ke
                </Text>
                <Text fontSize={13} fontWeight="$bold">
                  +6287701790942
                </Text>
              </VStack>
              <SafeAreaView style={styles.root}>
                <CodeField
                  ref={ref}
                  {...props}
                  value={value}
                  onChangeText={setValue}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({index, symbol, isFocused}) => (
                    <View
                      onLayout={getCellOnLayoutHandler(index)}
                      key={index}
                      style={[styles.cellRoot, isFocused && styles.focusCell]}>
                      <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    </View>
                  )}
                />
              </SafeAreaView>
              <VStack space="lg">
                <Button
                  size="md"
                  borderRadius={10}
                  variant="solid"
                  bgColor="#14B885"
                  onPress={() =>
                    navigation.navigate('HomeUtama', {name: 'Submit'})
                  }>
                  <ButtonText>VERIFIKASI</ButtonText>
                </Button>
              </VStack>
            </Box>
          </Center>
        </View>
      </Box>
    </>
  );
}
