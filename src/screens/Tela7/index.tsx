import { Container } from './styles';
import { Text, TextInput, View, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import RNDateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';

//console.log('RNDateTimePicker', RNDateTimePicker);
export function Tela7() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

    // const [dataSelecionada, setDataSelecionada] = useState('');

    // const setDate = (event: DateTimePickerEvent, date: Date) => {
    //     const {  type,  nativeEvent: {timestamp}, } = event;
    //     //console.log(event);
    //     //console.log(date);
    //   //  setDataSelecionada(timestamp.toLocaleString);
    //   if ( date )
    //   {
    //     setDataSelecionada(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    //   }

    //   };


    //   useEffect(() => {

    //   }, [setDate])

    const [datePicker, setDatePicker] = useState(false);
    const [date, setDate] = useState(new Date());

    const [timePicker, setTimePicker] = useState(false);
    const [time, setTime] = useState(new Date(Date.now()));

    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };

    return (
        <Container>
            <Text>Tela 7</Text>

            {/* <TextInput>
                <RNDateTimePicker mode="date" value={new Date()} onChange={setDate}/>
            </TextInput> */}

            {/* <View>
                <Text>DateTimePicker</Text>
                <RNDateTimePicker textColor="red" value={new Date()} onChange={setDate} />
            </View>

            <Text>Data Selecionada: {dataSelecionada}</Text> */}

            <SafeAreaView style={{ flex: 1 }}>
                <View style={styleSheet.MainContainer}>

                    <Text style={styleSheet.text}>Date = {date.toDateString()}</Text>
                    <Text style={styleSheet.text}>Data = {`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</Text>
                    {/* <Text style={styleSheet.text}>Time = {time.toLocaleTimeString('en-US')}</Text> */}
                    <Text style={styleSheet.text}>Time = {time.toLocaleTimeString()}</Text>

                    {datePicker && (
                        <DateTimePicker
                            value={date}
                            mode={'date'}
                            display='default'
                            is24Hour={true}
                            onChange={onDateSelected}
                        />
                    )}

                    {timePicker && (
                        <DateTimePicker
                            value={time}
                            mode={'time'}
                            display='default'
                            is24Hour={false}
                            onChange={onTimeSelected}
                        />
                    )}

                    {!datePicker && (
                        <View style={{ margin: 10 }}>
                            <Button title="Show Date Picker" onPress={showDatePicker} />
                        </View>
                    )}

                    {!timePicker && (
                        <View style={{ margin: 10 }}>
                            <Button title="Show Time Picker" onPress={showTimePicker} />
                        </View>
                    )}
                </View>
            </SafeAreaView>

            <Button title='Home' onPress={rotaHome}/>
        </Container>
    );
}

const styleSheet = StyleSheet.create({

    MainContainer: {
    flex: 1,
    padding: 6,
    alignItems: 'center',
    backgroundColor: 'white'
    },

    text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center'
    },

});

