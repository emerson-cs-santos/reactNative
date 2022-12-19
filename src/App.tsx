import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from './styles/theme';
import { ThemeProvider } from "styled-components/native"
import { Routes } from './routes';

export default function App() {

  return (
    <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>

  );

}

