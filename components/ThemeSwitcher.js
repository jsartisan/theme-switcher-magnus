import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { Toggle, ThemeContext } from 'react-native-magnus';

import THEMES from '../constants/themes';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  /**
   * changes the theme on toggle press
   * if the theme is dark, set theme to light
   * else to dark
   */
  const onToggle = () => {
    if (theme.name === 'dark') {
      setTheme(THEMES.light);
      StatusBar.setBarStyle('dark-content');
    } else {
      setTheme(THEMES.dark);
      StatusBar.setBarStyle('light-content');
    }
  };

  return <Toggle on={theme.name === 'dark'} onPress={onToggle} />;
}
