import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Tela1 } from '../screens/Tela';
import { Tela2 } from '../screens/Tela2';
import { Tela3 } from '../screens/Tela3';
import { Tela4 } from '../screens/Tela4';
import { Tela5 } from '../screens/Tela5';
import { Tela6 } from '../screens/Tela6';
import { Tela7 } from '../screens/Tela7';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {

    return (
        <Navigator
        initialRouteName='home'
        screenOptions={{
            headerShown: false,
            animation: "default",
            animationDuration: 1,

          }}>
            <Screen name='home' component={Home}/>

            <Screen name='tela1' component={Tela1}/>
            <Screen name='tela2' component={Tela2}/>
            <Screen name='tela3' component={Tela3}/>
            <Screen name='tela4' component={Tela4}/>
            <Screen name='tela5' component={Tela5}/>
            <Screen name='tela6' component={Tela6}/>
            <Screen name='tela7' component={Tela7}/>
        </Navigator>
    )

}
