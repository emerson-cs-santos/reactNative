import { ButtonContainer, Title } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
    title: string
}

const Button: React.FC<Props> = ( { title, ... rest } ) => {
    return (
        <ButtonContainer { ... rest }>
            <Title>{title}</Title>
        </ButtonContainer>
    );
}

export { Button };
