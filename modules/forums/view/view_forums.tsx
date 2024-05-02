/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  Divider,
  HStack,
  Input,
  InputSlot,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {InputField} from '@gluestack-ui/themed';
import {Badge} from '@gluestack-ui/themed';
import {BadgeText} from '@gluestack-ui/themed';
import {InputIcon} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {
  ArrowLeft,
  EllipsisVertical,
  FilePenLine,
  Flag,
  MessageCircle,
  SearchIcon,
  Trash2,
  X,
} from 'lucide-react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

export default function ViewForums({navigation}: any) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal1 = () => {
    setModalVisible1(!isModalVisible1);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingLeft: 15}}
          onPress={() => navigation.navigate('Home', {name: 'back'})}>
          <Icon as={ArrowLeft} size="xl" mt={1} color="#FFFFFF" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <Box pl={15} pr={15} pt={15}>
          <Input borderRadius={10}>
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} size="lg" />
            </InputSlot>
            <InputField
              type="text"
              placeholder="Topik forum apa yang anda cari hari ini?"
            />
          </Input>
        </Box>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} pl={15} pr={15}>
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <HStack pt={10} justifyContent="space-between">
                <HStack gap={10} alignItems="center">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserForums', {name: 'user forum'})
                    }>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50 / 2,
                        borderWidth: 1,
                        borderColor: '#000000',
                      }}
                      source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
                      alt="aa"
                    />
                  </TouchableOpacity>
                  <View>
                    <Text fontWeight="$semibold" fontSize={15} color="#000000">
                      Angga Pangestu
                    </Text>
                    <Box>
                      <Badge
                        w={60}
                        size="md"
                        variant="solid"
                        borderRadius={10}
                        action="success"
                        alignContent="center"
                        alignItems="center"
                        justifyContent="center">
                        <BadgeText>Open</BadgeText>
                      </Badge>
                    </Box>
                  </View>
                </HStack>
                <HStack gap={10} alignItems="center">
                  <View>
                    <TouchableOpacity onPress={toggleModal}>
                      <Icon
                        as={EllipsisVertical}
                        size="xl"
                        mt={1}
                        color="#000000"
                      />
                    </TouchableOpacity>
                    <Modal
                      isVisible={isModalVisible}
                      onBackdropPress={() => setModalVisible(false)}
                      onBackButtonPress={() => setModalVisible(false)}
                      swipeDirection={'up'}
                      animationOutTiming={900}
                      backdropTransitionOutTiming={900}
                      animationInTiming={500}
                      backdropTransitionInTiming={500}
                      onSwipeComplete={toggleModal}
                      style={{justifyContent: 'flex-end', margin: 0}}>
                      <View
                        style={{
                          backgroundColor: '#ffffff',
                          paddingTop: 20,
                          paddingHorizontal: 20,
                          borderTopRightRadius: 20,
                          borderTopLeftRadius: 20,
                          paddingBottom: 20,
                        }}>
                        <VStack gap={25}>
                          <TouchableOpacity>
                            <HStack gap={10} alignItems="center">
                              <Icon as={X} size="xl" color="$coolGray700" />
                              <Text color="#000000">Tutup Forum</Text>
                            </HStack>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <HStack gap={10} alignItems="center">
                              <Icon
                                as={Trash2}
                                size="xl"
                                color="$coolGray700"
                              />
                              <Text color="#000000">Hapus</Text>
                            </HStack>
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <HStack gap={10} alignItems="center">
                              <Icon
                                as={FilePenLine}
                                size="xl"
                                color="$coolGray700"
                              />
                              <Text color="#000000">Edit Posting</Text>
                            </HStack>
                          </TouchableOpacity>
                        </VStack>
                      </View>
                    </Modal>
                  </View>
                </HStack>
              </HStack>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Postingan', {name: 'postingan'})
                }>
                <VStack mt={20} mb={20}>
                  <Text color="#000000">Selamat Datang Semuanya</Text>
                </VStack>
                <HStack
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <HStack gap={10} alignItems="center">
                    <Icon as={MessageCircle} size="lg" color="$coolGray700" />
                    <Text color="#000000">10</Text>
                  </HStack>
                  <Text fontSize={14} color="$coolGray500">
                    30 April 2024
                  </Text>
                </HStack>
              </TouchableOpacity>
              <Divider my={1} bgColor="#B3B3B3" mt={10} />
            </View>
            <View
              style={{
                paddingTop: 10,
                paddingBottom: 10,
              }}>
              <HStack pt={10} justifyContent="space-between">
                <HStack gap={10} alignItems="center">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('UserForums', {name: 'user forum'})
                    }>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50 / 2,
                        borderWidth: 1,
                        borderColor: '#000000',
                      }}
                      source={{uri: 'https://i.pravatar.cc/1000?img=4'}}
                      alt="aa"
                    />
                  </TouchableOpacity>
                  <View>
                    <Text fontWeight="$semibold" fontSize={15} color="#000000">
                      I Putu Arya Putra
                    </Text>
                    <Box>
                      <Badge
                        w={60}
                        size="md"
                        variant="solid"
                        borderRadius={10}
                        action="success"
                        alignContent="center"
                        alignItems="center"
                        justifyContent="center">
                        <BadgeText>Open</BadgeText>
                      </Badge>
                    </Box>
                  </View>
                </HStack>
                <HStack gap={10} alignItems="center">
                  <View>
                    <TouchableOpacity onPress={toggleModal1}>
                      <Icon
                        as={EllipsisVertical}
                        size="xl"
                        mt={1}
                        color="#000000"
                      />
                    </TouchableOpacity>
                    <Modal
                      isVisible={isModalVisible1}
                      onBackdropPress={() => setModalVisible1(false)}
                      onBackButtonPress={() => setModalVisible1(false)}
                      swipeDirection={'up'}
                      animationOutTiming={900}
                      backdropTransitionOutTiming={900}
                      animationInTiming={500}
                      backdropTransitionInTiming={500}
                      onSwipeComplete={toggleModal1}
                      style={{justifyContent: 'flex-end', margin: 0}}>
                      <View
                        style={{
                          backgroundColor: '#ffffff',
                          paddingTop: 20,
                          paddingHorizontal: 20,
                          borderTopRightRadius: 20,
                          borderTopLeftRadius: 20,
                          paddingBottom: 20,
                        }}>
                        <VStack gap={25}>
                          <TouchableOpacity>
                            <HStack gap={10} alignItems="center">
                              <Icon as={Flag} size="xl" color="$coolGray700" />
                              <Text color="#000000">Laporkan Posting</Text>
                            </HStack>
                          </TouchableOpacity>
                        </VStack>
                      </View>
                    </Modal>
                  </View>
                </HStack>
              </HStack>
              <TouchableOpacity>
                <VStack mt={20} mb={20}>
                  <Text color="#000000">Selamat Datang Semuanya</Text>
                </VStack>
                <HStack
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <HStack gap={10} alignItems="center">
                    <Icon as={MessageCircle} size="lg" color="$coolGray700" />
                    <Text color="#000000">10</Text>
                  </HStack>
                  <Text fontSize={14} color="$coolGray500">
                    29 April 2024
                  </Text>
                </HStack>
              </TouchableOpacity>
              <Divider my={1} bgColor="#B3B3B3" mt={10} />
            </View>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
