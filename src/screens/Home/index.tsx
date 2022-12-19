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

    return (
    <Container>
        <Text>Home</Text>
        <Button title='Tela 1' onPress={rotaTela1}/>
        <Button title='Tela 2' onPress={rotaTela2}/>
        <Button title='Tela 3' onPress={rotaTela3}/>
    </Container>
    );
}

