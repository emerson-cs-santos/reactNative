import { Container } from './styles';
import { Text } from 'react-native';
import { Button } from '../../components/Button/index';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation();

    const rotaTela1 = () => {
        navigation.navigate("tela1", { param1: "Parametro vindo da home"} );
    }

    const rotaTela2 = () => {
        navigation.navigate("tela2");
    }

    const rotaTela3 = () => {
        navigation.navigate("tela3");
    }

    const rotaTela4 = () => {
        navigation.navigate("tela4");
    }

    const rotaTela5 = () => {
        navigation.navigate("tela5");
    }

    const rotaTela6 = () => {
        navigation.navigate("tela6");
    }

    const rotaTela7 = () => {
        navigation.navigate("tela7");
    }

    const rotaTela8 = () => {
        navigation.navigate("tela8");
    }


    return (
    <Container>
        <Text>Home</Text>
        <Button title='Tela 1-Route Params' onPress={rotaTela1}/>
        <Button title='Tela 2-Input number' onPress={rotaTela2}/>
        <Button title='Tela 3-Material UI' onPress={rotaTela3}/>
        <Button title='Tela 4-RadioGroup' onPress={rotaTela4}/>
        <Button title='Tela 5-CheckBox' onPress={rotaTela5}/>
        <Button title='Tela 6-SelectList' onPress={rotaTela6}/>
        <Button title='Tela 7-Date/Time Picker' onPress={rotaTela7}/>
        <Button title='Tela 8-OpenUrl' onPress={rotaTela8}/>
    </Container>
    );
}

