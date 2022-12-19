import { Container } from './styles';
import { Text, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

import { RadioGroupOption } from '../../components/RadioGroupOption';

const radioButtonsData: RadioButtonProps[] = [
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Feminino',
        value: 'F',
        selected: true
    },

    {
        id: '2',
        label: 'Masculino',
        value: 'M'
    },

    {
        id: '3',
        label: 'Prefiro não informar',
        value: 'O'
    }
]

const radioButtonsData2: RadioButtonProps[] = [
    {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Solteiro(a)',
        value: 'S',
        selected: true
    },

    {
        id: '2',
        label: 'Casado(a)',
        value: 'C'
    },

    {
        id: '3',
        label: 'Viúvo(a)',
        value: 'V'
    }
]

export function Tela4() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');

    const [radioButtonGenero, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);

    const [radioButtonsEstadoCivil, setRadioButtons2] = useState<RadioButtonProps[]>(radioButtonsData2);

    function msg() {
        if ( !nome || !sobreNome )
        {
            Alert.alert('Campos obrigatórios!', 'Preencha todos os campos!');
            return false;
        }

        let genero: string = '';
        radioButtonGenero.forEach(element =>
        {
            if ( element.selected )
            {
                genero = element.label;
            }
        });
        // if ( radioButtonGenero[0].selected )
        // {
        //     genero = radioButtonGenero[0].label;
        // }
        // if ( radioButtonGenero[1].selected )
        // {
        //     genero = radioButtonGenero[1].label;
        // }
        // if ( radioButtonGenero[2].selected )
        // {
        //     genero = radioButtonGenero[2].label;
        // }

        let estadoCivil: string = '';
        radioButtonsEstadoCivil.forEach(element =>
        {
            if ( element.selected )
            {
                estadoCivil = element.label;
            }
        });
        // if ( radioButtonsEstadoCivil[0].selected )
        // {
        //     estadoCivil = radioButtonsEstadoCivil[0].label;
        // }
        // if ( radioButtonsEstadoCivil[1].selected )
        // {
        //     estadoCivil = radioButtonsEstadoCivil[1].label;
        // }
        // if ( radioButtonsEstadoCivil[2].selected )
        // {
        //     estadoCivil = radioButtonsEstadoCivil[2].label;
        // }

        const mensagem: string = `Hello ${nome} ${sobreNome} \nGênero: ${genero} \nEstado: ${estadoCivil}`;
        Alert.alert('Olá', mensagem);
    }

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    function onPressRadioButton2(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons2(radioButtonsArray);
    }

    const teste = ['teste'];

    return (
        <Container>
            <Text>Tela 4</Text>
            <Input onChangeText={setNome} keyboardType="default" placeholder='Nome'/>
            <Input onChangeText={setSobreNome} keyboardType="default" placeholder='SobreNome'/>

            <Text>Gênero</Text>
            <RadioGroup radioButtons={radioButtonGenero} onPress={onPressRadioButton} />

            <Text>Estado</Text>
            <RadioGroup radioButtons={radioButtonsEstadoCivil} onPress={onPressRadioButton2}/>

            <Button title='Ver Informações' onPress={msg}/>
            <Button title='Home' onPress={rotaHome}/>

            {/* <RadioGroupOption opcoes={radioButtonsData}/> */}
        </Container>
    );
}
