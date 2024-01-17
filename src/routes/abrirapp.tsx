import { NavigationContainer } from "@react-navigation/native";// importação do componente navigationcontainer, onde estarão envolvidas as nossas rotas.
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";


const Stack = createNativeStackNavigator();

export function Telas() {
    return (

        <Stack.Navigator>
        <Stack.Screen 
                name="Login"
                component={AuthRoutes}
                options={{headerShown: false}}
            />
        <Stack.Screen 
                name="Home"
                component={AppRoutes}
                options={{headerShown: false}}
            />
            
        </Stack.Navigator>

    );
}