import { Container } from './styles';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from "styled-components";
import { SelectList } from 'react-native-dropdown-select-list'
import Ionicons from '@expo/vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

export function Tela6() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const { FONTS, COLORS } = useTheme();

    const [selected, setSelected] = useState('');
    const [itemSelecionadoDescricao, setItemSelecionadoDescricao] = useState('');

    const data = [
        {key:'1', value:'Mobiles'},
        {key:'2', value:'Appliances'},
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers'},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks', disabled:true},
    ]

    const guardarSelected = ( key: string ) => {
        setSelected(key);
        data.forEach(element => {
            if ( element.key == key )
            {
                setItemSelecionadoDescricao(element.value);
            }
        });
    }

    return (
        <Container>
            <Text>Tela 6</Text>

            <SelectList
                arrowicon={<Ionicons name="arrow-down" size={RFValue(20)} color={COLORS.GRAY2} />}
                boxStyles={{borderRadius:0}} //override default styles
                fontFamily={FONTS.POPPINSREGULAR}

                search={true}
                searchicon={<Ionicons name="search" size={RFValue(20)} color={COLORS.GRAY2} />}

              //  onSelect={() => alert(selected)}
                setSelected={(key) => guardarSelected(key) }
                data={data}
                save="key"
                defaultOption={{ key:'1', value:'Mobiles' }}   //default selected option
            />

            <Text>Opção Selecionada: {'\n'}key: {selected} {'\n'}value: {itemSelecionadoDescricao}</Text>

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}

