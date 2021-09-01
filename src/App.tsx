import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
      <StatusBar barStyle="dark-content" />
      <Text>Start Text</Text>
    </SafeAreaView>
  );
};

export default App;
