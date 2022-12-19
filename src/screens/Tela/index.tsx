import { Container } from './styles';
import { useState, useEffect } from 'react';
import { Text, Alert } from 'react-native';
import { Button } from './../../components/Button/index';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Input } from '../../components/Input';

type RouteParams = {
    param1: string;
  };

export function Tela1() {
    const navigation = useNavigation();

    const route = useRoute();
    let { param1 } = route.params as RouteParams;

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [testeInput, setTesteInput] = useState('');

    const verInput = () => {
        Alert.alert('teste', testeInput);
    }

    if ( param1 )
    {
        Alert.alert('Parametro1', param1);
    }

    // Faz executar apenas na primeira vez que abriu a tela, para executar novamente, somente após abrir o app novamente
    useEffect(() => {
        if ( param1 )
        {
            Alert.alert('Abrindo app pela primeira vez', param1);
        }

    }, [] )

    return (
    <Container>
        <Text>Tela 1</Text>
        <Input onChangeText={setTesteInput} defaultValue='valor padrão input' placeholder="campo texto generico"/>
        <Button title='alert' onPress={verInput} />
        <Button title='Home' onPress={rotaHome}/>
    </Container>
    );
}

