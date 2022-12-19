import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Tela1 } from '../screens/Tela';
import { Tela2 } from '../screens/Tela2';
import { Tela3 } from '../screens/Tela3';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <Navigator
        initialRouteName='home'
        screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            animationDuration: 1,

          }}>
            <Screen name='tela1' component={Tela1}/>

            <Screen name='tela2' component={Tela2}/>

            <Screen name='tela3' component={Tela3}/>

            <Screen name='home' component={Home}/>
        </Navigator>
    )

}
