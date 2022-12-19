import { Container } from './styles';
import { Text, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

import { RadioGroupOption } from '../../components/RadioGroupOption';

// const radioButtonsData: RadioButtonProps[] = [
//     {
//         id: '1', // acts as primary key, should be unique and non-empty string
//         label: 'Feminino',
//         value: 'F',
//         selected: true
//     },

//     {
//         id: '2',
//         label: 'Masculino',
//         value: 'M'
//     },

//     {
//         id: '3',
//         label: 'Prefiro não informar',
//         value: 'O'
//     }
// ]

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

    const [idSelecionado, setidSelecionado] = useState('exemplo valor inicial');
    const [labelSelecionado, setLabelSelecionado] = useState('Feminino');

    // Utilizar useEffect para monitorar a troca de estado de uma ou mais vars, fazer isso ao precisar executar códigos fora de funções
    useEffect(() => {
     //   console.log(idSelecionado);
    }, [idSelecionado, labelSelecionado])

    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');

   // const [radioButtonGenero, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);

    const [radioButtonsEstadoCivil, setRadioButtons2] = useState<RadioButtonProps[]>(radioButtonsData2);

    function msg() {
        if (!nome || !sobreNome) {
            Alert.alert('Campos obrigatórios!', 'Preencha todos os campos!');
            return false;
        }

      //  let genero: string = '';
        // radioButtonGenero.forEach(element => {
        //     if (element.selected) {
        //         genero = element.label;
        //     }
        // });

        let estadoCivil: string = '';
        radioButtonsEstadoCivil.forEach(element => {
            if (element.selected) {
                estadoCivil = element.label;
            }
        });

        const mensagem: string = `Hello ${nome} ${sobreNome} \nGênero: ${labelSelecionado} \nEstado: ${estadoCivil}`;
        Alert.alert('Olá', mensagem);
    }

    // function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    //     setRadioButtons(radioButtonsArray);
    // }

    function onPressRadioButton2(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons2(radioButtonsArray);
    }

   // console.log("carregou tela");

    return (
        <Container>
            <Text>Tela 4</Text>
            <Input onChangeText={setNome} keyboardType="default" placeholder='Nome' />
            <Input onChangeText={setSobreNome} keyboardType="default" placeholder='SobreNome' />

            <Text>Gênero</Text>
            {/* <RadioGroup radioButtons={radioButtonGenero} onPress={onPressRadioButton} /> */}
            <RadioGroupOption data={(id, label) => {
                setidSelecionado(id)
                setLabelSelecionado(label)

                //  console.log(id)
                //  console.log(label)

            }} ativo={true} />

            <Text>Estado</Text>
            <RadioGroup radioButtons={radioButtonsEstadoCivil} onPress={onPressRadioButton2} />

            <Button title='Ver Informações' onPress={msg} />
            <Button title='Home' onPress={rotaHome} />


        </Container>
    );
}
