import {Input, InputField, Text} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {ScrollView} from 'react-native';

export default function ViewEditMediaSosial({navigation}: any) {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={20}>
            <VStack gap={15}>
              <VStack space="xs">
                <Text color="#000000" fontSize={12}>
                  Facebook
                </Text>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Facebook" />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text color="#000000" fontSize={12}>
                  Instagram
                </Text>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Instagram" />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text color="#000000" fontSize={12}>
                  Tiktok
                </Text>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Tiktok" />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text color="#000000" fontSize={12}>
                  Twitter
                </Text>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Twitter" />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text color="#000000" fontSize={12}>
                  Youtube
                </Text>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Youtube" />
                </Input>
              </VStack>
            </VStack>
            <VStack space="xs" mt={20}>
              <Button
                size="md"
                borderRadius={10}
                variant="solid"
                bgColor="#14B885"
                onPress={() =>
                  navigation.navigate('DetailPortofolio', {name: 'Submit'})
                }>
                <ButtonText>Update</ButtonText>
              </Button>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
