import { Container } from './styles';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

import { SelectList } from 'react-native-dropdown-select-list'

export function Tela6() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [nome, setNome] = useState('');

    const [selected, setSelected] = useState('');

    const data = [
        {key:'1', value:'Mobiles', disabled:true},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]

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

            <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
            />

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}

