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

    return (
    <Container>
        <Text>Home</Text>
        <Button title='Tela 1' onPress={rotaTela1}/>
        <Button title='Tela 2' onPress={rotaTela2}/>
        <Button title='Tela 3' onPress={rotaTela3}/>
        <Button title='Tela 4' onPress={rotaTela4}/>
        <Button title='Tela 5' onPress={rotaTela5}/>
        <Button title='Tela 6' onPress={rotaTela6}/>
    </Container>
    );
}

