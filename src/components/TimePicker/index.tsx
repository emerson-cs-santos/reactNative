import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerStyles } from './styles';

interface Props {
    data: (timeSelecionado)=> void
}

export const TimePicker = (Props: Props ) => {
    const { data } = Props;

    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    function showTimePicker() {
        setTimePicker(true);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };

    useEffect(() => {
        data(time);
       }, [time])

    return (
        <View style={DatePickerStyles.MainContainer}>

            {/* <Text style={styleSheet.text}>Time = {time.toLocaleTimeString('en-US')}</Text> */}
            {/* <Text style={DatePickerStyles.text}>Time = {time.toLocaleTimeString()}</Text> */}

            {timePicker && (
                <DateTimePicker
                    value={time}
                    mode={'time'}
                    display='default'
                    is24Hour={false}
                    onChange={onTimeSelected}
                />
            )}

            {!timePicker && (
                <View style={{ margin: 10 }}>
                    <Button title="Selecionar Hora" onPress={showTimePicker} />
                </View>
            )}
        </View>
    );
  };
