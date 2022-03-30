import React from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from 'styled-components/native';
import AppLoading from "expo-app-loading";

import THEME from './src/theme';

import { Splash } from "./src/screens/Splash";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={THEME}>
      <Splash />
    </ThemeProvider>
  );
}
