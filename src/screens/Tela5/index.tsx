import { Container } from './styles';
import { Text, Alert, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import Checkbox from 'expo-checkbox';

import { useTheme } from "styled-components"

export function Tela5() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [nome, setNome] = useState('');

    const [twitter, setTwitter] = useState('');
    const [koo, setKoo] = useState('');

    function msg() {
        if ( !nome && ( !isCheckedTwitter || !isCheckedKoo ) )
        {
            Alert.alert('Campos obrigatórios!', 'Preencha Nome e pelo menos uma rede social!');
            return false;
        }
        let twitterExibir: string = '';
        if ( isCheckedTwitter )
        {
            twitterExibir = `\nTwitter: ${twitter}`;
        }

        let kooExibir: string = '';
        if ( isCheckedKoo )
        {
            kooExibir = `\nKoo: ${koo}`;
        }

        const mensagem: string = `Hello ${nome}${twitterExibir}${kooExibir}`;
        Alert.alert('Olá', mensagem);
    }

    const [isCheckedTwitter, setCheckedTwitter] = useState(false);
    const [isCheckedKoo, setCheckedKoo] = useState(false);
    const [isCheckedFacebook, setCheckedFacebook] = useState(false);

    const { COLORS } = useTheme();

    return (
        <Container>
            <Text>Tela 5</Text>
            <Input onChangeText={setNome} keyboardType="default" placeholder='Nome'/>
            <Input onChangeText={setTwitter} keyboardType="default" placeholder='Twitter'/>
            <Input onChangeText={setKoo} keyboardType="default" placeholder='Koo'/>

            <Text>Selecione quais meios socais podemos lhe contactar</Text>

            <View style={styles.container}>
                <View style={styles.section}>
                    <Checkbox style={styles.checkbox} value={isCheckedTwitter} onValueChange={setCheckedTwitter}/>
                    <Text>Twitter</Text>
                </View>

                <View style={styles.section}>
                    <Checkbox style={styles.checkbox} value={isCheckedKoo} onValueChange={setCheckedKoo} color={isCheckedKoo ? COLORS.BLUE2 : undefined}/>
                    <Text>Koo</Text>
                </View>

                <View style={styles.section}>
                    <Checkbox style={styles.checkbox} disabled value={isCheckedFacebook} onValueChange={setCheckedFacebook} />
                    <Text style={styles.paragraph}>FaceBook</Text>
                </View>
            </View>

            <Button title='Enviar' onPress={msg}/>
            <Button title='Home' onPress={rotaHome}/>

        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 16,
      marginVertical: 32,
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
  });
