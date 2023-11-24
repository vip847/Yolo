import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './components/AppRoutes';
import tw from 'twrnc';

const App = () => {
  return (
    <SafeAreaProvider style={tw`bg-black`}>
      <StatusBar backgroundColor={'black'} />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
