import { Container } from './styles';
import { Text, TextInput, View, SafeAreaView, StyleSheet, Linking, Alert } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

const OpenURLButton = ({ url, children }) => {

    //Linking.openURL(url).then(() => null).catch(() => null);

    const handlePress = useCallback(async () => {

      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
  };

export function Tela8() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [Url, setUrl] = useState('');

    return (
        <Container>
            <Text>Tela 8</Text>

            <Text>Digite uma URL:</Text>
            <Input onChangeText={setUrl} defaultValue='https://g1.globo.com/' placeholder="Digite uma URL de um site"/>

            <OpenURLButton url={Url}>Abrir Url</OpenURLButton>

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}

