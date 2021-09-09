import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/Home';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => (
  <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    {/* <Screen name="Details" component={HomeDetails} /> */}
  </Navigator>
);

export default StackRoutes;
