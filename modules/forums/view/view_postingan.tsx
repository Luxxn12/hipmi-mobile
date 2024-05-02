/* eslint-disable react-native/no-inline-styles */
import {Divider, Image} from '@gluestack-ui/themed';
import {Badge} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {BadgeText} from '@gluestack-ui/themed';
import {VStack} from '@gluestack-ui/themed';
import {Box, HStack, Text} from '@gluestack-ui/themed';
import {
  EllipsisVertical,
  FilePenLine,
  MessageCircle,
  SendHorizonal,
  Trash2,
  X,
} from 'lucide-react-native';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';

const dataChat = [
  {
    id: 1,
    name: 'Arya Saloka',
    username: '@username',
    chat: 'Selamat Datang Angga',
    image: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 2,
    name: 'Benny Setiawan',
    username: '@username',
    chat: 'Selamat Datang Angga',
    image: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 3,
    name: 'Bella Bonita',
    username: '@username',
    chat: 'Selamat Datang Angga',
    image: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
  {
    id: 4,
    name: 'Bibo Santoso',
    username: '@username',
    chat: 'Selamat Datang Angga',
    image: {uri: 'https://i.pravatar.cc/1000?img=13'},
  },
  {
    id: 5,
    name: 'I Wayan Dinda',
    username: '@username',
    chat: 'Selamat Datang Angga',
    image: {uri: 'https://i.pravatar.cc/1000?img=11'},
  },
  {
    id: 6,
    name: 'Made Muku',
    username: '@username',
    chat: 'Selamat Datang Angga',
    image: {uri: 'https://i.pravatar.cc/1000?img=12'},
  },
];

export default function ViewPostingan({navigation}: any) {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} pl={15} pr={15}>
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
                            <Icon as={Trash2} size="xl" color="$coolGray700" />
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
            <Divider my={1} bgColor="#B3B3B3" mt={10} />
            {/* cht balasan */}
            {dataChat.map((v, i) => {
              return (
                <View key={i}>
                  <HStack
                    style={{paddingTop: 20, justifyContent: 'space-between'}}>
                    <HStack alignItems="flex-start" gap={10}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('UserForums', {
                            name: 'user forum',
                          })
                        }>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50 / 2,
                            borderWidth: 1,
                            borderColor: '#000000',
                          }}
                          source={v.image}
                          alt="aa"
                        />
                      </TouchableOpacity>
                      <View>
                        <Text
                          fontWeight="$semibold"
                          fontSize={15}
                          color="#000000">
                          {v.name}
                        </Text>
                        <Text fontSize={12} color="$coolGray500">
                          {v.username}
                        </Text>
                      </View>
                    </HStack>
                    <HStack gap={10} alignItems="center">
                      <Text fontSize={13} color="$coolGray500">
                        12 jam
                      </Text>
                      <TouchableOpacity>
                        <Icon
                          as={EllipsisVertical}
                          size="md"
                          mt={1}
                          color="#000000"
                        />
                      </TouchableOpacity>
                    </HStack>
                  </HStack>
                  <VStack ml={50} mt={5}>
                    <Text fontSize={14} color="#000000">
                      {v.chat}
                    </Text>
                  </VStack>
                  <Divider my={1} bgColor="#B3B3B3" mt={20} />
                </View>
              );
            })}
          </Box>
        </ScrollView>
        <View style={{paddingVertical: 10}}>
          <View style={styles.messageInputView}>
            <TextInput
              style={styles.messageInput}
              placeholder="Ketik komentar Anda"
            />
            <TouchableOpacity style={styles.messageSendView}>
              <Icon as={SendHorizonal} size="xl" mt={1} color="#000000" />
            </TouchableOpacity>
          </View>
        </View>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#ffffff',
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
