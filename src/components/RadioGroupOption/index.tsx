import { useState, forwardRef } from 'react';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';

// interface Props
// {
//     opcoes: RadioButtonProps
// }

export const RadioGroupOption = (Props: RadioButtonProps[]) => {

    console.log(Props);

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
    ];

    const [radioButton, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <RadioGroup radioButtons={radioButton} onPress={onPressRadioButton}/>
    );
  };
