/* eslint-disable react-native/no-inline-styles */
import {HStack, Icon, Image, TextareaInput} from '@gluestack-ui/themed';
import {Textarea} from '@gluestack-ui/themed';
import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {X} from 'lucide-react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native';

export default function ViewAddForums({navigation}: any) {
  return (
    <>
      <Box bgColor="#ffffff" h={'$full'}>
        <Box w={'$full'} p={20}>
          <HStack justifyContent="space-between">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon as={X} size="xl" mt={1} color="#000000" />
            </TouchableOpacity>
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
                  Post
                </Text>
              </Box>
            </TouchableOpacity>
          </HStack>
          <ScrollView showsVerticalScrollIndicator={false}>
            <HStack mt={20}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  // borderWidth: 1,
                  // borderColor: '#000000',
                }}
                source={{uri: 'https://i.pravatar.cc/1000?img=4'}}
                alt="aa"
              />
              <Textarea
                size="md"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
                borderRadius={10}
                borderWidth={0}
                w="$full">
                <TextareaInput placeholder="Apa yang sedang hangat dibicarakan ?" />
              </Textarea>
            </HStack>
          </ScrollView>
        </Box>
      </Box>
    </>
  );
}
