import { Container } from './styles';
import { useState } from 'react';
import { Text, ToastAndroid } from 'react-native';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

export function Tela2() {
    const navigation = useNavigation();

    const [testeInput, setTesteInput] = useState('');

    const rotaHome = () => {
        navigation.navigate("home");
    }

    function showToast() {
        ToastAndroid.show(testeInput, ToastAndroid.SHORT);
    }

  return (
    <Container>
        <Text>Tela 2</Text>
        <Input keyboardType='numeric' onChangeText={setTesteInput} placeholder="Campo númerico" />
        <Button title='toast' onPress={showToast}/>
        <Button title='Home' onPress={rotaHome}/>
    </Container>
  );
}
