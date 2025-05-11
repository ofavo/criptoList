import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CriptoList from './criptoList';
import Cripto from './cripto';

const Stack = createNativeStackNavigator();
const RouterScreen =  () => {

    return (
        <NavigationContainer>
          <Stack.Navigator >
          <Stack.Screen name="Home" component={CriptoList} />
          <Stack.Screen name="Detail" component={Cripto} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    
}

export default RouterScreen;