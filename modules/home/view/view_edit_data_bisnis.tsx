import {ButtonText, Text} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {
  Box,
  ChevronDownIcon,
  HStack,
  Icon,
  Input,
  InputField,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {ScrollView} from 'react-native';

export default function ViewEditDataBisnis({navigation}: any) {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={20}>
            <VStack gap={15}>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Nama Bisnis
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Nama bisnis" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Bidang Bisnis
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Select>
                  <SelectTrigger variant="outline" size="md" borderRadius={10}>
                    <SelectInput placeholder="Pilih Salah Satu Bidang Bisnis" />
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
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Alamat Kantor
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Alamat Kantor" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Nomor Telepon Kantor
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="62 xxx xxx xxx" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Nomor Telepon Kantor
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Textarea
                  size="md"
                  borderRadius={10}
                  isReadOnly={false}
                  isInvalid={false}
                  isDisabled={false}
                  w={'$full'}>
                  <TextareaInput placeholder="Deskripsi singkat mengenai usaha.." />
                </Textarea>
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
