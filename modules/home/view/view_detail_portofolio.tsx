/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  HStack,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {ButtonIcon} from '@gluestack-ui/themed';
import {Divider} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {
  Building2,
  Camera,
  EllipsisVertical,
  Facebook,
  FilePenLine,
  Instagram,
  LayoutList,
  Phone,
  Pin,
  Trash2,
  Twitter,
  Youtube,
} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';

export default function ViewDetailPortofolio({navigation}: any) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          placement="top"
          trigger={({...triggerProps}) => {
            return (
              <TouchableOpacity style={{paddingRight: 10}} {...triggerProps}>
                <Icon as={EllipsisVertical} size="xl" mt={1} color="#FFFFFF" />
              </TouchableOpacity>
            );
          }}>
          <MenuItem
            key="1"
            textValue="1"
            onPress={() =>
              navigation.navigate('EditDataBisnis', {name: 'edit'})
            }>
            <Icon as={FilePenLine} size="md" mr="$2" />
            <MenuItemLabel size="sm">Edit Data Bisnis</MenuItemLabel>
          </MenuItem>
          <MenuItem
            key="3"
            textValue="3"
            onPress={() =>
              navigation.navigate('EditMediaSosial', {name: 'add'})
            }>
            <Icon as={FilePenLine} size="md" mr="$2" />
            <MenuItemLabel size="sm">Edit Media Sosial</MenuItemLabel>
          </MenuItem>
          <MenuItem
            key="4"
            textValue="4"
            onPress={() => navigation.navigate('Profile', {name: 'add'})}>
            <Icon as={Trash2} size="md" mr="$2" color="$red400" />
            <MenuItemLabel size="sm" color="$red400">
              Hapus Portofolio
            </MenuItemLabel>
          </MenuItem>
        </Menu>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={10}>
            <View
              style={{
                padding: 20,
                borderWidth: 1,
                borderColor: '#C7C6C6',
                borderRadius: 10,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 130,
                    height: 130,
                    borderRadius: 130 / 2,
                    borderWidth: 3,
                    borderColor: '#ffffff',
                  }}
                  source={require('..//..//..//assets/bg.jpeg')}
                  alt="aa"
                />
                <TouchableOpacity
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 50 / 2,
                    backgroundColor: '#000000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    borderWidth: 2,
                    borderColor: '#ffffff',
                    right: 100,
                    top: 90,
                  }}>
                  <ButtonIcon as={Camera} color="white" size="lg" />
                </TouchableOpacity>
              </View>
              <VStack m={10}>
                <Text color="#000000" fontWeight="$bold">
                  Data Bisnis
                </Text>
                <VStack mt={20} gap={20}>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Building2} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Sepeda Listrik
                    </Text>
                  </HStack>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Phone} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      +62 877 0179 0942
                    </Text>
                  </HStack>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={LayoutList} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Software Developer
                    </Text>
                  </HStack>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Pin} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Melayani pembuatan Software
                    </Text>
                  </HStack>
                  <Divider my="$1" bgColor="#000000" />
                  <Text color="#000000" fontWeight="$bold">
                    Media Sosial Bisnis
                  </Text>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Facebook} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Lukman Facebook
                    </Text>
                  </HStack>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Instagram} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Lukman Instagram
                    </Text>
                  </HStack>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Twitter} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Lukman Twitter
                    </Text>
                  </HStack>
                  <HStack
                    style={{alignContent: 'center', alignItems: 'center'}}
                    gap={20}>
                    <Icon as={Youtube} color="#000000" size="lg" />
                    <Text fontSize={14} color="#000000">
                      Lukman Youtube
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </View>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
