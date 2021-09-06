import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './styles/theme';
import Home from './views/Home';

const App = () => {
  return (
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
  );
};

export default App;
