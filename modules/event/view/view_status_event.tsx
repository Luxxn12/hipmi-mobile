/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import {Icon} from '@gluestack-ui/themed';
import {ArrowLeft} from 'lucide-react-native';
import {useEffect} from 'react';
import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

const Publish = () => (
  <View style={{flex: 1, backgroundColor: '#ffffff', padding: 15}}>
    <Text color="#000000" fontSize={12}>
      Tab Publish
    </Text>
  </View>
);
const Review = () => (
  <View style={{flex: 1, backgroundColor: '#ffffff', padding: 15}}>
    <Text color="#000000" fontSize={12}>
      Tab Review
    </Text>
  </View>
);
const Draft = () => (
  <View style={{flex: 1, backgroundColor: '#ffffff', padding: 15}}>
    <Text color="#000000" fontSize={12}>
      Tab Draft
    </Text>
  </View>
);
const Reject = () => (
  <View style={{flex: 1, backgroundColor: '#ffffff', padding: 15}}>
    <Text color="#000000" fontSize={12}>
      Tab Reject
    </Text>
  </View>
);

export default function ViewStatusEvent({navigation}: any) {
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

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    {key: 'publish', title: 'Publish'},
    {key: 'review', title: 'Review'},
    {key: 'draft', title: 'Draft'},
    {key: 'reject', title: 'Reject'},
  ]);

  const renderScene = SceneMap({
    publish: Publish,
    review: Review,
    draft: Draft,
    reject: Reject,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      activeColor={'#14B885'}
      inactiveColor={'#000000'}
      style={{backgroundColor: '#ffffff'}}
    />
  );
  return (
    <>
      <Box bgColor="white" h={'$full'}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </Box>
    </>
  );
}
