import { Container } from './styles';
import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { DatePicker } from '../../components/DatePicker';
import { TimePicker } from '../../components/TimePicker';

export function Tela7() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [dataSelecionadaAtual, setDateSelecionadaAtual] = useState(new Date());
    const [timeSelecionadoAtual, setTimeSelecionadoAtual] = useState(new Date(Date.now()));

    return (
        <Container>
            <Text>Tela 7</Text>

            <Text>Date Picker</Text>
            <DatePicker data={(dataSelecionada) => {
                 setDateSelecionadaAtual(dataSelecionada);
            }}></DatePicker>

            <Text>Time Picker</Text>
            <TimePicker data={(timeSelecionado) => {
                 setTimeSelecionadoAtual(timeSelecionado);
            }}></TimePicker>

            <Text>Data = {`${dataSelecionadaAtual.getDate()}/${dataSelecionadaAtual.getMonth()+1}/${dataSelecionadaAtual.getFullYear()}`}</Text>
            <Text>Hora = {timeSelecionadoAtual.toLocaleTimeString()}</Text>

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}
