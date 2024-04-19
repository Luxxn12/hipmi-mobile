/* eslint-disable react-native/no-inline-styles */
import {
  Button,
  ButtonText,
  Center,
  Input,
  InputField,
  VStack,
} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {View} from 'react-native';
// import PhoneInput from 'react-phone-number-input';

export default function ViewLogin({navigation}: any) {
  //   const [value, setValue] = useState();
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Center pt={'$10'}>
            <Image
              source={require('..//..//..//assets/logo.png')}
              style={{height: 180, width: 180}}
              alt="Hipmi"
            />
            <Box w={'$full'} p={'$1'}>
              <VStack space="xs" pb="$2" pt={'$5'}>
                <Text fontSize={18} fontWeight="$bold">
                  Selamat Datang di HIPMI App
                </Text>
                <Text fontSize={14} fontStyle="italic">
                  Silahkan masukan nomor telepon anda untuk masuk !
                </Text>
              </VStack>
              <VStack space="xl" py="$3">
                <Input borderRadius={10}>
                  <InputField py="$2" placeholder="+62" />
                </Input>
              </VStack>
              <VStack space="lg" pt="$4">
                <Button
                  size="md"
                  borderRadius={10}
                  variant="solid"
                  bgColor="#14B885"
                  onPress={() => navigation.navigate('Otp', {name: 'Submit'})}>
                  <ButtonText>LOGIN</ButtonText>
                </Button>
              </VStack>
            </Box>
          </Center>
        </View>
      </Box>
    </>
  );
}
