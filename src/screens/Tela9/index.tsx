import { Container, ViewButton } from './styles';
import { TextInput, View, SafeAreaView, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ListItem, Stack, IconButton, Button, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export function Tela9() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const abrirDigitar = () => {
        navigation.navigate("tela10", { id: '555'} );
    }

    const abrirDigitar2 = () => {
        navigation.navigate("tela10", { id: '666'} );
    }

    return (
        <Container>
            <Text variant="h5">Tela 9 - Consultar</Text>

            <ViewButton>
                <Button title='Add' onPress={rotaHome}/>
            </ViewButton>

            <ListItem
                title="Item 1"
                leading={<Icon name="file-edit" size={24} />}
                onPress={abrirDigitar}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ListItem
                title="Item 2"
                leading={<Icon name="book-edit" size={24} />}
                onPress={abrirDigitar2}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ListItem
                title="Item 3"
                leading={<Icon name="home-edit" size={24} />}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ListItem
                title="Item 4"
                leading={<Icon name="note-edit" size={24} />}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ListItem
                title="Item 5"
                leading={<Icon name="clock-edit" size={24} />}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ListItem
                title="Item 6"
                leading={<Icon name="human-edit" size={24} />}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ListItem
                title="Item 7"
                leading={<Icon name="image-edit" size={24} />}
                // trailing={props => <Icon name="chevron-right" {...props} />}
            />

            <ViewButton>
                <Button title='Home' onPress={rotaHome}/>
            </ViewButton>

        </Container>
    );
}

