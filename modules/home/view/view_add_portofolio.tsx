/* eslint-disable react-native/no-inline-styles */
import {
  ButtonText,
  ChevronDownIcon,
  Icon,
  InputField,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
  Textarea,
  VStack,
} from '@gluestack-ui/themed';
import {Input} from '@gluestack-ui/themed';
import {TextareaInput} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonIcon} from '@gluestack-ui/themed';
import {Select} from '@gluestack-ui/themed';
import {Box, HStack} from '@gluestack-ui/themed';
import {Camera} from 'lucide-react-native';
import React from 'react';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';

export default function ViewAddPortofolio({navigation}: any) {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={20}>
            <Box bgColor="$amber300" borderRadius={5}>
              <HStack p={10} gap={10} alignContent="center" alignItems="center">
                <Text color="$red500">*</Text>
                <Text color="#000000" fontSize={12}>
                  Lengkapi Data Bisnis
                </Text>
              </HStack>
            </Box>
            <VStack gap={15} mt={10}>
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
            <Box bgColor="$amber300" borderRadius={5} mt={20}>
              <HStack p={10} gap={10} alignContent="center" alignItems="center">
                <Text color="$red500">*</Text>
                <Text color="#000000" fontSize={12}>
                  Upload Logo Bisnis Anda!
                </Text>
              </HStack>
            </Box>
            <VStack pt={10} gap={10}>
              <Box bgColor="$amber300" p={10} borderRadius={10}>
                <Image
                  source={require('..//..//..//assets/no-image.jpeg')}
                  style={{height: 180, width: 'auto'}}
                  alt="Bogopa"
                  borderRadius={10}
                />
              </Box>

              <Button
                size="md"
                variant="solid"
                borderRadius={10}
                bgColor="#14B885"
                isDisabled={false}
                isFocusVisible={false}>
                <HStack gap={10} alignContent="center" alignItems="center">
                  <ButtonIcon as={Camera} />
                  <ButtonText>Upload </ButtonText>
                </HStack>
              </Button>
            </VStack>
            <Box bgColor="$amber300" borderRadius={5} mt={20}>
              <HStack p={10} gap={10} alignContent="center" alignItems="center">
                <Text color="$red500">*</Text>
                <Text color="#000000" fontSize={12}>
                  Isi hanya pada sosial media yang anda miliki
                </Text>
              </HStack>
            </Box>
            <VStack gap={15} mt={10}>
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
                  navigation.navigate('Profile', {name: 'Submit'})
                }>
                <ButtonText>Simpan</ButtonText>
              </Button>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
