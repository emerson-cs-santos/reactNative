import { Container } from './styles';
import { Text, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

export function Tela4() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');

    function msg() {
        if ( !nome || !sobreNome )
        {
            Alert.alert('Campos obrigatórios!', 'Preencha todos os campos!');
            return false;
        }
        const mensagem: string = `Hello ${nome} ${sobreNome}`;
        Alert.alert('Olá', mensagem);
    }

    return (
        <Container>
            <Text>Tela 4</Text>
            <Input onChangeText={setNome} keyboardType="default" placeholder='Nome'/>
            <Input onChangeText={setSobreNome} keyboardType="default" placeholder='SobreNome'/>

            <Text>Gênero</Text>

            <Text>Estado civil</Text>


            <Button title='Ver Informações' onPress={msg}/>
            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}
