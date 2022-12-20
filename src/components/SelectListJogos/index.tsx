import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from "styled-components";
import { SelectList } from 'react-native-dropdown-select-list'
import Ionicons from '@expo/vector-icons/Ionicons';
import { RFValue } from "react-native-responsive-fontsize";

interface Props {
    data: (keySelecionada, descSelecionada)=> void
}

export const SelectListJogos = (Props: Props ) => {
    const { data } = Props;
    const { FONTS, COLORS } = useTheme();
    const [ keyselected, setKeyselected] = useState('');
    const [ itemSelecionadoDescricao, setItemSelecionadoDescricao] = useState('');

    const opcoesList = [
        {key:'1', value:'1-Sonic 3'},
        {key:'2', value:'2-Metal Gear Solid'},
        {key:'3', value:'3-Resident Evil'},
        {key:'4', value:'4-BloodBorne'},
        {key:'5', value:'5-Crash Bandicoot'},
        {key:'6', value:'6-Super Mario Bros 3'},
        {key:'7', value:'7-Mega Man X4 (Desabilitado)', disabled:true},
    ]

    const enviarOpcaoSelecionada = ( key: string ) => {
        opcoesList.forEach(element => {
            if ( element.key == key )
            {
                setKeyselected(key);
                setItemSelecionadoDescricao(element.value);
               // data(key, itemSelecionadoDescricao);
            }
        });

    }

    useEffect(() => {
        data(keyselected, itemSelecionadoDescricao);
       }, [keyselected,itemSelecionadoDescricao])

    return (
       <View>
        <Text>Filmes:</Text>
        <SelectList
                arrowicon={<Ionicons name="arrow-down" size={RFValue(20)} color={COLORS.GRAY2} />}
                boxStyles={{borderRadius:0}} //override default styles
                fontFamily={FONTS.POPPINSREGULAR}

                search={true}
                searchicon={<Ionicons name="search" size={RFValue(20)} color={COLORS.GRAY2} />}

            //  onSelect={() => alert(selected)}
                setSelected={(key) => enviarOpcaoSelecionada(key) }
                data={opcoesList}
                save="key"
                defaultOption={ { key: opcoesList[0].key , value:opcoesList[0].value } }   //default selected option
            />
       </View>

    );
  };
