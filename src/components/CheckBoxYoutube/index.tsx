import { useState } from 'react';
import { Text, Alert, StyleSheet, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useTheme } from "styled-components";
import { TouchableOpacity } from 'react-native';
import { CheckBoxStyles } from './styles';

interface Props {
    data: (retorno)=> void
}

export const CheckBoxYoutube = (Props: Props ) => {
    const { data } = Props;
    const [youtube, setYoutube] = useState('');
    const [isCheckedYoutube, setCheckedYoutube] = useState(false);
    const { COLORS } = useTheme();

    const marcarViaText = () => {
        if ( isCheckedYoutube )
        {
            setCheckedYoutube(false);
        }

        if ( !isCheckedYoutube )
        {
            setCheckedYoutube(true);
        }
        data(isCheckedYoutube)
    }

    return (
        <View style={CheckBoxStyles.section}>
            <Checkbox
                style={CheckBoxStyles.checkbox}
                value={isCheckedYoutube}
                color={isCheckedYoutube ? COLORS.RED : undefined}
                onValueChange={(item)=>{
                    setCheckedYoutube(item)
                    data(item)
                }}
                />
            <TouchableOpacity onPress={marcarViaText}>
                <Text>Youtube - Label clicavel</Text>
            </TouchableOpacity>
        </View>
    );
  };

//   const styles = StyleSheet.create({

//     section: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     paragraph: {
//       fontSize: 15,
//     },
//     checkbox: {
//       margin: 8,
//     },
//   });
