/* eslint-disable react-native/no-inline-styles */
import {Divider, ScrollView, Text, VStack} from '@gluestack-ui/themed';
import {HStack} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

const dataPeserta = [
  {
    id: 1,
    name: 'Arya Saloka',
    username: '@username',
    image: {uri: 'https://i.pravatar.cc/1000?img=6'},
  },
  {
    id: 2,
    name: 'Benny Setiawan',
    username: '@username',
    image: {uri: 'https://i.pravatar.cc/1000?img=7'},
  },
  {
    id: 3,
    name: 'Bella Bonita',
    username: '@username',
    image: {uri: 'https://i.pravatar.cc/1000?img=10'},
  },
  {
    id: 4,
    name: 'Bibo Santoso',
    username: '@username',
    image: {uri: 'https://i.pravatar.cc/1000?img=13'},
  },
  {
    id: 5,
    name: 'I Wayan Dinda',
    username: '@username',
    image: {uri: 'https://i.pravatar.cc/1000?img=11'},
  },
  {
    id: 6,
    name: 'Made Muku',
    username: '@username',
    image: {uri: 'https://i.pravatar.cc/1000?img=12'},
  },
];

export default function ViewDetailEvent({navigation}: any) {
  const renderViewMore = (onPress: any) => (
    <Text fontSize={15} color="#B3B3B3" onPress={onPress}>
      lihat banyak
    </Text>
  );
  const renderViewLess = (onPress: any) => (
    <Text onPress={onPress}>lebih sedikit</Text>
  );
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={10}>
            <View
              style={{
                borderColor: '#bcbcbc',
                borderWidth: 0.5,
                borderRadius: 10,
                padding: 20,
              }}>
              <HStack
                style={{alignItems: 'center', justifyContent: 'space-between'}}>
                <HStack alignItems="flex-start" gap={10}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProfileUsers', {
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
                      source={{uri: 'https://i.pravatar.cc/1000?img=6'}}
                      alt="aa"
                    />
                  </TouchableOpacity>
                  <View>
                    <Text fontWeight="$semibold" fontSize={15} color="#000000">
                      Arya Saloka
                    </Text>
                    <Text fontSize={12} color="$coolGray500">
                      @username
                    </Text>
                  </View>
                </HStack>
                <TouchableOpacity>
                  <Box
                    padding={4}
                    bgColor="#14B885"
                    pl={20}
                    pr={20}
                    alignItems="center"
                    alignContent="center"
                    borderRadius={10}>
                    <Text fontSize={14} color="#ffffff">
                      Join
                    </Text>
                  </Box>
                </TouchableOpacity>
              </HStack>
              <VStack mt={20}>
                <Text fontWeight="$semibold" fontSize={18} color="#000000">
                  Rekonsolidasi Super-App
                </Text>
                <VStack gap={20} mt={10}>
                  <HStack space="lg">
                    <Text
                      fontSize={15}
                      color="#000000"
                      fontWeight="$bold"
                      w={'25%'}>
                      Lokasi
                    </Text>
                    <Text fontSize={15} color="#000000">
                      : Sekretariat BPC HIPMI Badung
                    </Text>
                  </HStack>
                  <HStack space="lg">
                    <Text
                      fontSize={15}
                      color="#000000"
                      fontWeight="$bold"
                      w={'25%'}>
                      Tipe Acara
                    </Text>
                    <Text fontSize={15} color="#000000">
                      : Musyawarah Anggota
                    </Text>
                  </HStack>
                  <HStack space="lg">
                    <Text
                      fontSize={15}
                      color="#000000"
                      fontWeight="$bold"
                      w={'25%'}>
                      Tanggal
                    </Text>
                    <Text fontSize={15} color="#000000">
                      : Selasa, 30 April 2024
                    </Text>
                  </HStack>
                  <HStack space="lg">
                    <Text
                      fontSize={15}
                      color="#000000"
                      fontWeight="$bold"
                      w={'25%'}>
                      Jam
                    </Text>
                    <Text fontSize={15} color="#000000">
                      : 10:00
                    </Text>
                  </HStack>
                  <VStack>
                    <Text
                      fontSize={15}
                      color="#000000"
                      fontWeight="$bold"
                      w={'25%'}>
                      Deskripsi
                    </Text>
                    <ViewMoreText
                      numberOfLines={3}
                      renderViewMore={renderViewMore}
                      renderViewLess={renderViewLess}
                      textStyle={{textAlign: 'justify', marginTop: 5}}>
                      <Text fontSize={15} color="#000000" textAlign="justify">
                        Kepada Yth. Temen- temen BPC HIPMI Badung Terkait dengan
                        beberapa Program Kerja yg akan dilaksanakan secepatnya
                        ditahun ini antara lain : Program Bedah Rumah -
                        ⁠Pembagian Bibit kepada pemuda di badung melalui Karang
                        Taruna - ⁠HIPMI Badung Bisnis Matching to Vietnam
                      </Text>
                    </ViewMoreText>
                  </VStack>
                </VStack>
              </VStack>
            </View>
            <View style={{marginTop: 10}}>
              <View
                style={{
                  borderColor: '#bcbcbc',
                  borderWidth: 0.5,
                  borderRadius: 10,
                  padding: 20,
                }}>
                <Text
                  fontSize={15}
                  color="#000000"
                  fontWeight="$bold"
                  textAlign="center">
                  Daftar Peserta (6)
                </Text>
                <View style={{marginTop: 10}}>
                  {dataPeserta.map((v, i) => {
                    return (
                      <View style={{marginTop: 10}} key={i}>
                        <HStack
                          style={{
                            justifyContent: 'space-between',
                          }}>
                          <HStack alignItems="flex-start" gap={10}>
                            <TouchableOpacity
                              onPress={() =>
                                navigation.navigate('ProfileUsers', {
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
                              April 30, 2024
                            </Text>
                          </HStack>
                        </HStack>
                        <Divider my={1} bgColor="#B3B3B3" mt={10} />
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
