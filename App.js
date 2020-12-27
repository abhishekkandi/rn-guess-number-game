import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
    screen : {
      flex : 1 /* Flex 1 will ensure it(Root View) takes all the space that it can get. All width and the screen */
    }
});
