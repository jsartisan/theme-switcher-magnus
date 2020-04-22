/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ThemeProvider, Text, Div } from 'react-native-magnus';

import THEMES from './constants/themes';
import ThemeSwitcher from './components/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider theme={THEMES.light}>
      <Div bg="body" flex={1} px="lg">
        <Text mt="2xl" pt="xl" fontSize="5xl" color="text" fontWeight="bold">
          Settings
        </Text>
        <Div row mt="md">
          <Div flex={1}>
            <Text color="text">Night Mode</Text>
          </Div>
          <Div>
            <ThemeSwitcher />
          </Div>
        </Div>
      </Div>
    </ThemeProvider>
  );
};

export default App;
