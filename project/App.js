import { registerRootComponent } from 'expo';
import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  //AppRegistry.registerComponent('main', () => App);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! UWU
      </Text>
    </View>
  );
}

registerRootComponent(App);
