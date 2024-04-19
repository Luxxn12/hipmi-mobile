import {
  Box,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  VStack,
} from '@gluestack-ui/themed';
import {SearchIcon} from 'lucide-react-native';
import React from 'react';

export default function ViewSearch() {
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <VStack m={10}>
          <Input borderRadius={10}>
            <InputSlot pl="$3">
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField py="$2" placeholder="Search Users" />
          </Input>
        </VStack>
      </Box>
    </>
  );
}
