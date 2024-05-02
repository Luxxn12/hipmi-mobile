import {
  ButtonText,
  ChevronDownIcon,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  VStack,
} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Input} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {SelectIcon} from '@gluestack-ui/themed';
import {InputField} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {ScrollView} from 'react-native';

export default function ViewEditProfile({navigation}: any) {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={20}>
            <VStack gap={15}>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Nomor
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="087701790942" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Username
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Jokowi" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Nama
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Jokowi" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Email
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="User@gmail.com" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Alamat
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Jalan Merpati no 12" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Jenis Kelamin
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Select>
                  <SelectTrigger variant="outline" size="md" borderRadius={10}>
                    <SelectInput placeholder="Jenis Kelamin" />
                    <SelectIcon mr="$3">
                      <Icon as={ChevronDownIcon} />
                    </SelectIcon>
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Laki - Laki" value="ux" />
                      <SelectItem label="Perempuan" value="web" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </VStack>
              <VStack space="xs" mt={20}>
                <Button
                  size="md"
                  borderRadius={10}
                  variant="solid"
                  bgColor="#14B885"
                  onPress={() =>
                    navigation.navigate('Profile', {name: 'Submit'})
                  }>
                  <ButtonText>UPDATE</ButtonText>
                </Button>
              </VStack>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
