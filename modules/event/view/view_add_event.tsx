import {
  HStack,
  Icon,
  Input,
  InputField,
  Select,
  SelectBackdrop,
  SelectDragIndicator,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {SelectContent} from '@gluestack-ui/themed';
import {SelectDragIndicatorWrapper} from '@gluestack-ui/themed';
import {Textarea} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {ButtonText} from '@gluestack-ui/themed';
import {TextareaInput} from '@gluestack-ui/themed';
import {SelectIcon} from '@gluestack-ui/themed';
import {SelectInput} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {ChevronDownIcon} from 'lucide-react-native';
import React from 'react';
import {ScrollView} from 'react-native';

export default function ViewAddEvent({navigation}: any) {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={20}>
            <VStack gap={15}>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Judul
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Masukkan Judul" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Tipe Acara
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Select>
                  <SelectTrigger variant="outline" size="md" borderRadius={10}>
                    <SelectInput placeholder="Pilih Tipe Acara" />
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
                      <SelectItem label="Seminar" value="sm" />
                      <SelectItem label="Konferensi" value="kon" />
                      <SelectItem label="Musyawarah Anggota" value="mus" />
                      <SelectItem label="Kegiatan Sosial" value="keg" />
                      <SelectItem label="Workshop" value="Wor" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Lokasi
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField type="text" placeholder="Masukkan Lokasi Acara" />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Tanggal & Waktu
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Input borderRadius={10}>
                  <InputField
                    type="text"
                    placeholder="Masukkan Tanggal dan waktu Acara"
                  />
                </Input>
              </VStack>
              <VStack space="xs">
                <HStack gap={10} alignContent="center" alignItems="center">
                  <Text color="#000000" fontSize={12}>
                    Tanggal & Waktu
                  </Text>
                  <Text color="$red500">*</Text>
                </HStack>
                <Textarea
                  size="md"
                  isReadOnly={false}
                  isInvalid={false}
                  isDisabled={false}
                  borderRadius={10}>
                  <TextareaInput placeholder="Deskripsikan acara yang akan diselenggarakan..." />
                </Textarea>
              </VStack>
              <VStack space="xs" mt={20}>
                <Button
                  size="md"
                  borderRadius={10}
                  variant="solid"
                  bgColor="#14B885"
                  onPress={() =>
                    navigation.navigate('BerandaEvent', {name: 'Submit'})
                  }>
                  <ButtonText>Simpan</ButtonText>
                </Button>
              </VStack>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
