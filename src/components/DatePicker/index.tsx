import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerStyles } from './styles';

interface Props {
    data: (dataSelecionada)=> void
}

export const DatePicker = (Props: Props ) => {
    const { data } = Props;

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    function showDatePicker() {
        setDatePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    useEffect(() => {
        data(date);
       }, [date])

    return (
        <View style={DatePickerStyles.MainContainer}>

            {/* <Text style={DatePickerStyles.text}>Date = {date.toDateString()}</Text>
            <Text style={DatePickerStyles.text}>Data = {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</Text> */}

            {datePicker && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    display='default'
                    is24Hour={true}
                    onChange={onDateSelected}
                />
            )}

            {!datePicker && (
                <View style={{ margin: 10 }}>
                    <Button title="Selecionar Data" onPress={showDatePicker} />
                </View>
            )}
        </View>
    );
  };
