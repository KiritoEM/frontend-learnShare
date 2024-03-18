import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/auth/Login';
import navigationHelper from '../helpers/data/navigation.helper';

const appNavigation = () => {
    const Stack = createStackNavigator();
    const { routes } = navigationHelper();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {routes.map((route, index) => (
                    <Stack.Screen key={index} name={route.name} component={route.component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default appNavigation;