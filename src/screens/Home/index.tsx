import { Container, ViewButton } from './styles';
import { Button, Text } from "@react-native-material/core";
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

    const rotaTela9 = () => {
        navigation.navigate("tela9");
    }

    return (
    <Container>
        <Text variant="h4">Home</Text>

        <ViewButton>
            <Button title='Tela 1-Route Params' onPress={rotaTela1}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 2-Input number' onPress={rotaTela2}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 3-Material UI' onPress={rotaTela3}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 4-RadioGroup' onPress={rotaTela4}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 5-CheckBox' onPress={rotaTela5}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 6-SelectList' onPress={rotaTela6}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 7-Date/Time Picker' onPress={rotaTela7}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 8-OpenUrl' onPress={rotaTela8}/>
        </ViewButton>

        <ViewButton>
            <Button title='Tela 9-Consultar' onPress={rotaTela9}/>
        </ViewButton>
    </Container>
    );
}

