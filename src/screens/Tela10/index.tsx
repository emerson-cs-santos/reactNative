import { Container, ViewButton } from './styles';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Stack, IconButton, Button, Text, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

type RouteParams = {
    id: string;
  };

export function Tela10() {
    const navigation = useNavigation();

    const route = useRoute();
    let { id } = route.params as RouteParams;

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const voltarConsultar = () => {
        navigation.navigate("tela9");
    }

    const [idRegistro, setidRegistro] = useState('');
    const [campo1, setCampo1] = useState('');

    return (
        <Container>
            <Text variant="h5">Tela 10 - Digitar ( Item: {id} )</Text>

            <TextInput onChangeText={setidRegistro} keyboardType="number-pad" placeholder='ID'/>
            <TextInput onChangeText={setCampo1} keyboardType="default" placeholder='Campo1'/>

            <ViewButton>
                <Button title='OK' onPress={voltarConsultar} color="secondary"/>
            </ViewButton>

            <ViewButton>
                <Button title='Cancelar' onPress={voltarConsultar} color="pink" tintColor="red"/>
            </ViewButton>

            <ViewButton>
                <Button title='Home' onPress={rotaHome}/>
            </ViewButton>

        </Container>
    );
}

