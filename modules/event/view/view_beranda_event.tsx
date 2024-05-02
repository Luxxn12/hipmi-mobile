/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Divider, ScrollView} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {HStack, Icon, VStack} from '@gluestack-ui/themed';
import {Box, Text} from '@gluestack-ui/themed';
import {ArrowLeft, Plus} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

const dataEvent = [
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

export default function ViewBerandaEvent({navigation}: any) {
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
        <HStack
          style={{
            position: 'absolute',
            bottom: 30,
            right: 30,
            zIndex: 9999,
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddEvent', {
                name: 'addEvent',
              })
            }>
            <Box
              padding={15}
              bgColor="#14B885"
              borderRadius={50}
              borderColor="#B3BAB8"
              borderWidth={1}>
              <Icon as={Plus} size="xl" mt={1} color="#ffffff" />
            </Box>
          </TouchableOpacity>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={20}>
            {dataEvent.map((v, i) => {
              return (
                <View
                  key={i}
                  style={{
                    marginBottom: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DetailEvent', {
                        name: 'event',
                      })
                    }>
                    <View>
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
                      <VStack mt={10}>
                        <Text
                          fontSize={14}
                          color="#000000"
                          fontWeight="$semibold">
                          Rekonsolidasi Super Apps
                        </Text>
                        <ViewMoreText
                          numberOfLines={3}
                          renderViewMore={renderViewMore}
                          renderViewLess={renderViewLess}
                          textStyle={{textAlign: 'justify', marginTop: 5}}>
                          <Text
                            fontSize={15}
                            color="#000000"
                            textAlign="justify">
                            Kepada Yth. Temen- temen BPC HIPMI Badung Terkait
                            dengan beberapa Program Kerja yg akan dilaksanakan
                            secepatnya ditahun ini antara lain : Program Bedah
                            Rumah - ⁠Pembagian Bibit kepada pemuda di badung
                            melalui Karang Taruna - ⁠HIPMI Badung Bisnis
                            Matching to Vietnam
                          </Text>
                        </ViewMoreText>
                      </VStack>
                      <Divider my={1} bgColor="#B3B3B3" mt={20} />
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}
