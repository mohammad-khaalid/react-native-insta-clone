import React from 'react';
import {View} from 'react-native';
import Header from '../Header';
import InstaStories from '../InstaStories';
import InstaPost from '../InstaPost';


const HomeScreen = () => {
  return (
    <View>
      <Header />
    <InstaStories/>
    <InstaPost/>
    </View>
  );
};

export default HomeScreen;
