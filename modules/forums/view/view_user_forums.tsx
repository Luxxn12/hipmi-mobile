/* eslint-disable react-native/no-inline-styles */
import {
  ButtonText,
  Center,
  HStack,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import {Button} from '@gluestack-ui/themed';
import {Divider} from '@gluestack-ui/themed';
import {BadgeText} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {Badge} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {
  EllipsisVertical,
  FilePenLine,
  MessageCircle,
  Trash2,
  X,
} from 'lucide-react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView, View} from 'react-native';
import Modal from 'react-native-modal';

const dataChat = [
  {
    id: 1,
    name: 'Angga Pangestu',
    status: 1,
    chat: 'Selamat Datang Angga',
  },
  {
    id: 2,
    name: 'Angga Pangestu',
    status: 1,
    chat: 'Selamat Datang Angga',
  },
  {
    id: 3,
    name: 'Angga Pangestu',
    status: 0,
    chat: 'Selamat Datang Angga',
  },
  {
    id: 4,
    name: 'Angga Pangestu',
    status: 1,
    chat: 'Selamat Datang Angga',
  },
  {
    id: 5,
    name: 'Angga Pangestu',
    status: 0,
    chat: 'Selamat Datang Angga',
  },
  {
    id: 6,
    name: 'Angga Pangestu',
    status: 1,
    chat: 'Selamat Datang Angga',
  },
];

export default function ViewUserForums({navigation}: any) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} pl={15} pr={15}>
            <View>
              <Center mt={20}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 100 / 2,
                    borderWidth: 1,
                    borderColor: '#000000',
                  }}
                  source={{uri: 'https://i.pravatar.cc/1000?img=3'}}
                  alt="aa"
                />
              </Center>
              <HStack
                mt={10}
                justifyContent="space-between"
                alignItems="center">
                <VStack gap={5}>
                  <Text fontWeight="$semibold" fontSize={15} color="#000000">
                    Angga Pangestu
                  </Text>
                  <HStack gap={10}>
                    <Text fontSize={12} color="$coolGray500">
                      @angga_pangestu
                    </Text>
                    <Text fontSize={12} color="$coolGray500">
                      2 Posting
                    </Text>
                  </HStack>
                </VStack>
                <Button
                  size="xs"
                  borderRadius={20}
                  variant="outline"
                  action="positive"
                  onPress={() =>
                    navigation.navigate('ProfileUsers', {name: 'Submit'})
                  }>
                  <ButtonText>Kunjungi Profile</ButtonText>
                </Button>
              </HStack>
              <Divider my={1} bgColor="#B3B3B3" mt={20} />
              {dataChat.map((v, i) => {
                return (
                  <View key={i}>
                    <HStack pt={20} justifyContent="space-between">
                      <HStack gap={10} alignItems="center">
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
                        <View>
                          <Text
                            fontWeight="$semibold"
                            fontSize={15}
                            color="#000000">
                            {v.name}
                          </Text>
                          <Box>
                            {v.status ? (
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
                            ) : (
                              <Badge
                                w={60}
                                size="md"
                                variant="solid"
                                borderRadius={10}
                                action="error"
                                alignContent="center"
                                alignItems="center"
                                justifyContent="center">
                                <BadgeText>Close</BadgeText>
                              </Badge>
                            )}
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
                                    <Icon
                                      as={X}
                                      size="xl"
                                      color="$coolGray700"
                                    />
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
                        <Text color="#000000">{v.chat}</Text>
                      </VStack>
                      <HStack
                        style={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <HStack gap={10} alignItems="center">
                          <Icon
                            as={MessageCircle}
                            size="lg"
                            color="$coolGray700"
                          />
                          <Text color="#000000">10</Text>
                        </HStack>
                        <Text fontSize={14} color="$coolGray500">
                          30 April 2024
                        </Text>
                      </HStack>
                    </TouchableOpacity>
                    <Divider my={1} bgColor="#B3B3B3" mt={10} />
                  </View>
                );
              })}
            </View>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
