import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from './styles/theme';
import { ThemeProvider } from "styled-components/native"
import { Routes } from './routes';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans"
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

export default function App() {

    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
        DMSans_400Regular,
        DMSerifDisplay_400Regular
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

  return (
    <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>

  );

}

