import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import navigationHelper from '../helpers/data/navigation.helper';

const AppNavigation = () => {
    const Stack = createStackNavigator();
    const { routes } = navigationHelper();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {routes.map((route, index) => (
                    <Stack.Screen key={index} name={route.name} component={route.component} options={{ headerShown: false }} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;