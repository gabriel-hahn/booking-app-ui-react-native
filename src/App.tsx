import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';
import Home from './views/Home';

const App = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
