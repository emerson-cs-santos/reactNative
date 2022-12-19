import { Container } from './styles';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

export function Tela6() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [nome, setNome] = useState('');

    function msg() {
        if ( !nome )
        {
            Alert.alert('Campos obrigatórios!', 'Preencha todos os campos!');
            return false;
        }
        const mensagem: string = `Hello ${nome}`;
        Alert.alert('Olá', mensagem);
    }

    return (
        <Container>
            <Text>Tela 6</Text>
            <Input onChangeText={setNome} keyboardType="default" placeholder='Nome'/>

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}

