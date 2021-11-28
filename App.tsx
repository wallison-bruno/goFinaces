import React from "react";

//Theme
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";

//Loading for fonts
import AppLoading from 'expo-app-loading';

//Fonts
import {
  useFonts, Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";

import Routs from "./src/routes/app.routes";

//Start App
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
        <Routs />
      </ThemeProvider>
    )
  }
}