import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";
import AppLoading from 'expo-app-loading';
import {
  useFonts, Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import { CategorySelect } from "./src/screens/CategorySelect";

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    )
  }
}