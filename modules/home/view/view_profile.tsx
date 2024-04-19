/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  ButtonIcon,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {Box, Image} from '@gluestack-ui/themed';
import {
  Camera,
  Home,
  Mail,
  PersonStanding,
  Smartphone,
} from 'lucide-react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {View} from 'react-native';

export default function ViewProfile() {
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
                <TouchableOpacity>
                  <Image
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: 120 / 2,
                      borderWidth: 3,
                      borderColor: '#ffffff',
                    }}
                    source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
                    alt="aa"
                  />
                </TouchableOpacity>
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
                    // right: 10,
                    top: 80,
                    left: 80,
                  }}>
                  <ButtonIcon as={Camera} color="white" size="lg" />
                </TouchableOpacity>
              </Box>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50 / 2,
                  backgroundColor: '#000000',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  // right: 10,
                  top: 140,
                  right: 30,
                }}>
                <ButtonIcon as={Camera} color="white" size="xl" />
              </TouchableOpacity>
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
                    <TouchableOpacity>
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
                    <TouchableOpacity>
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
// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     width: '40%',
//     margin: 5, // is 50% of container width
//   },
// });
