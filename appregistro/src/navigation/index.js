import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import InicialScreen from "../screens/InicialScreen";


const Stack = createNativeStackNavigator();
export default function RootNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen
                    name="Inicial"
                    component={NavInicial}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const BottomTab = createBottomTabNavigator();

function NavInicial() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="BemVindo"
                component={InicialScreen}
            />
            <BottomTab.Screen
                name="Sobre"
                component={InicialScreen}
            />
            <BottomTab.Screen
                name="Publicacoes"
                component={InicialScreen}
            />
        </BottomTab.Navigator>
    )
}

