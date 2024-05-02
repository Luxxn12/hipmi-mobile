/* eslint-disable react-native/no-inline-styles */
import {Divider, Icon} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {Home, Mail, PersonStanding, Smartphone} from 'lucide-react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {ScrollView} from 'react-native';

export default function ViewProfileUser({navigation}: any) {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={10}>
            <View
              style={{
                padding: 10,
                borderWidth: 1,
                borderColor: '#C7C6C6',
                borderRadius: 10,
              }}>
              <Image
                source={require('..//..//..//assets/bg.jpeg')}
                style={{height: 150, width: 'auto'}}
                alt="Bogopa"
                borderRadius={10}
              />
              <Box
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  top: 90,
                  left: '35%',
                }}>
                {/* <TouchableOpacity> */}
                <Image
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 120 / 2,
                    borderWidth: 3,
                    borderColor: '#ffffff',
                  }}
                  source={{uri: 'https://i.pravatar.cc/1000?img=18'}}
                  alt="aa"
                />
              </Box>
              <VStack pt={'15%'} alignContent="center" alignItems="center">
                <Text fontWeight="$semibold" fontSize={20} color="#000000">
                  Joko Widodo
                </Text>
                <Text fontSize={14} color="#000000">
                  @jokowidodo
                </Text>
              </VStack>
              <VStack pl={10} gap={15} pt={30}>
                <HStack
                  style={{alignContent: 'center', alignItems: 'center'}}
                  gap={15}>
                  <Icon as={Smartphone} color="#000000" size="lg" />
                  <Text fontSize={14} color="#000000">
                    +6287701790942
                  </Text>
                </HStack>
                <HStack
                  style={{alignContent: 'center', alignItems: 'center'}}
                  gap={15}>
                  <Icon as={Mail} color="#000000" size="lg" />
                  <Text fontSize={14} color="#000000">
                    lukman.bip2023@gmail.com
                  </Text>
                </HStack>
                <HStack
                  style={{alignContent: 'center', alignItems: 'center'}}
                  gap={15}>
                  <Icon as={Home} color="#000000" size="lg" />
                  <Text fontSize={14} color="#000000">
                    Denpasar, Bali
                  </Text>
                </HStack>
                <HStack
                  style={{alignContent: 'center', alignItems: 'center'}}
                  gap={15}>
                  <Icon as={PersonStanding} color="#000000" size="lg" />
                  <Text fontSize={14} color="#000000">
                    Laki - laki
                  </Text>
                </HStack>
              </VStack>
            </View>
            <VStack pt={10}>
              <View
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: '#C7C6C6',
                  borderRadius: 10,
                }}>
                <Text
                  fontWeight="$semibold"
                  fontSize={20}
                  color="#000000"
                  textAlign="center">
                  Portofolio
                </Text>
                <Box pt={10}>
                  <VStack gap={10}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('DetailPortofolio', {name: 'add'})
                      }>
                      <VStack gap={'$1'} ml={10} mr={10}>
                        <HStack gap={20} style={{alignItems: 'center'}}>
                          <Image
                            source={require('..//..//..//assets/bg.jpeg')}
                            style={{height: 50, width: 50}}
                            alt="Bogopa"
                            borderRadius={10}
                          />
                          <VStack gap={'$0.5'}>
                            <Text
                              fontWeight="$semibold"
                              fontSize={16}
                              color="#000000">
                              Sepeda Listrik
                            </Text>
                            <Text fontSize={12} color="#000000">
                              Jalan Batu raden no 12 Denpasar
                            </Text>
                          </VStack>
                        </HStack>
                        <Divider my="$0.5" />
                      </VStack>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('DetailPortofolio', {name: 'add'})
                      }>
                      <VStack gap={'$1'} ml={10} mr={10}>
                        <HStack gap={20} style={{alignItems: 'center'}}>
                          <Image
                            source={require('..//..//..//assets/bg.jpeg')}
                            style={{height: 50, width: 50}}
                            alt="Bogopa"
                            borderRadius={10}
                          />
                          <VStack gap={'$0.5'}>
                            <Text
                              fontWeight="$semibold"
                              fontSize={16}
                              color="#000000">
                              Sepeda Listrik
                            </Text>
                            <Text fontSize={12} color="#000000">
                              Jalan Batu raden no 12 Denpasar
                            </Text>
                          </VStack>
                        </HStack>
                        <Divider my="$0.5" />
                      </VStack>
                    </TouchableOpacity>
                  </VStack>
                </Box>
              </View>
            </VStack>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
