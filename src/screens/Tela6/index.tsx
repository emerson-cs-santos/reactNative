import { Container } from './styles';
import { Text } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { SelectListJogos } from '../../components/SelectListJogos';

export function Tela6() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [selected, setSelected] = useState('');
    const [itemSelecionadoDescricao, setItemSelecionadoDescricao] = useState('');

    return (
        <Container>
            <Text>Tela 6</Text>

            <SelectListJogos data={(keySelecionada, descSelecionada) => {
                 setSelected(keySelecionada)
                 setItemSelecionadoDescricao(descSelecionada)
            }}/>

            <Text>Opção Selecionada: {'\n'}key: {selected} {'\n'}value: {itemSelecionadoDescricao}</Text>

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}

