/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Text, VStack} from '@gluestack-ui/themed';
import {Avatar, Box, Icon, Image} from '@gluestack-ui/themed';
import {User} from 'lucide-react-native';
import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView, StyleSheet, View} from 'react-native';

export default function ViewHome({navigation}: any) {
  useEffect(() => {
    navigation.setOptions({
      headerLift: () => (
        <View>
          <Avatar bgColor="$yellow500" size="md">
            {/* User is imported from 'lucide-react-native' */}
            <Icon as={User} color="white" size="lg" />
          </Avatar>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box w={'$full'} p={'$1'}>
            <View style={{margin: 10}}>
              <Image
                source={require('..//..//..//assets/home-hipmi.png')}
                style={{height: 130, width: 'auto', borderRadius: 10}}
                alt="Hipmi"
              />
            </View>
            <VStack m={10} ml={15} mt={15}>
              <Text fontWeight="$bold" fontSize={18} color="#000">
                Service Features
              </Text>
            </VStack>
            <View style={styles.container}>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/messages-square.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Text
                    mt={'$2'}
                    fontWeight="$semibold"
                    fontSize={16}
                    color="#08704F">
                    Forums
                  </Text>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/calendar-days.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Text
                    mt={'$2'}
                    fontWeight="$semibold"
                    fontSize={16}
                    color="#08704F">
                    Event
                  </Text>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/package-check.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Text
                    mt={'$2'}
                    fontWeight="$semibold"
                    fontSize={16}
                    color="#08704F">
                    Voting
                  </Text>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/map-pinned.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Box>
                    <Text
                      mt={'$2'}
                      fontWeight="$semibold"
                      fontSize={16}
                      color="#08704F"
                      textAlign="center">
                      Business Maps
                    </Text>
                  </Box>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/folder-git-2.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Box>
                    <Text
                      mt={'$2'}
                      fontWeight="$semibold"
                      fontSize={16}
                      color="#08704F"
                      textAlign="center">
                      Project Collaboration
                    </Text>
                  </Box>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/heart-handshake.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Box>
                    <Text
                      mt={'$2'}
                      fontWeight="$semibold"
                      fontSize={16}
                      color="#08704F"
                      textAlign="center">
                      Crowd Funding
                    </Text>
                  </Box>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/briefcase-business.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Box>
                    <Text
                      mt={'$2'}
                      fontWeight="$semibold"
                      fontSize={16}
                      color="#08704F"
                      textAlign="center">
                      Job Vacancy
                    </Text>
                  </Box>
                </VStack>
              </View>
              <View style={styles.item}>
                <VStack
                  m={10}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                    <Box
                      style={{
                        backgroundColor: '#fff',
                        padding: 30,
                        borderRadius: 20,
                        borderWidth: 1,
                        borderColor: '#08704F',
                      }}>
                      <Image
                        source={require('..//..//..//assets/shopping-bag.png')}
                        style={{height: 34, width: 40}}
                        alt="Hipmi"
                      />
                    </Box>
                  </TouchableOpacity>
                  <Box>
                    <Text
                      mt={'$2'}
                      fontWeight="$semibold"
                      fontSize={16}
                      color="#08704F"
                      textAlign="center">
                      Marketplace
                    </Text>
                  </Box>
                </VStack>
              </View>
            </View>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item: {
    // width: '30.7%',
    width: '30.7%',
    margin: 5, // is 50% of container width
  },
});
