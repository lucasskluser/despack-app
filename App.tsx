import React, { useEffect } from "react";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { ThemeProvider } from "styled-components/native";
import AppLoading from "expo-app-loading";

import THEME from "./src/theme";

import { Splash } from "./src/screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountCreated } from "./src/screens/AccountCreated";
import { Login } from "./src/screens/Login";
import { SignUp } from "./src/screens/SignUp";
import { Welcome } from "./src/screens/Welcome";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Splash.name}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={Splash.name} component={Splash} />
          <Stack.Screen name={Welcome.name} component={Welcome} />
          <Stack.Screen name={Login.name} component={Login} />
          <Stack.Screen name={SignUp.name} component={SignUp} />
          <Stack.Screen name={AccountCreated.name} component={AccountCreated} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
