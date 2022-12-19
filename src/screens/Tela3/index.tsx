import { Container } from './styles';
import { Text } from 'react-native';
import { Button } from './../../components/Button/index';
import { useNavigation } from '@react-navigation/native';
import { Input } from '../../components/Input';

export function Tela3() {
    const navigation = useNavigation();

    const rotaHome = () => {
        navigation.navigate("home");
    }

  return (
    <Container>
        <Text>Tela 3</Text>
        <Input keyboardType="email-address"/>
        <Button title='Home' onPress={rotaHome}/>
    </Container>
  );
}
