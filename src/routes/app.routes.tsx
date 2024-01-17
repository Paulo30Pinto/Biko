import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";



import { Home } from "../screens/telasCliente/Home";
import { Search } from "../screens/telasCliente/Search";
import { Mensagens } from "../screens/telasCliente/Mensagens";
import { Solicitacoes } from "../screens/telasCliente/Solicitacoes";
import { UserPerfil } from "../screens/telasCliente/UserPerfil";
import { Platform } from "react-native";

import Homesvg from '../assets/home.svg';
import Searchsvg from '../assets/search.svg';
import Mensagenssvg from '../assets/sms.svg';
import Solicitacoessvg from '../assets/solicitacoes.svg';
import Perfilsvg from '../assets/perfil.svg';
import { useTheme } from "native-base";
import { Notificacoes } from "../screens/telasCliente/notificacoes";

//export type AppStakNavigation = NativeStackNavigationProp<AppRoutes>



export type AppNavigatorProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

type AppRoutes = {
    home: undefined;
    search: undefined;
    mensagens: undefined;
    solicitacoes: undefined;
    perfil: undefined;
    notificacoes: undefined;
}

export function AppRoutes() {
    const { colors, sizes } = useTheme();
    return (

        <Navigator
            screenOptions={{

                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#084D6E',
                tabBarInactiveTintColor: '#707070',
                tabBarStyle: {
                    height: Platform.OS === 'android' ? 'auto' : 96,
                    paddingBottom: sizes[9],
                    paddingTop: sizes[7]
                },



            }} >
            <Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Homesvg stroke={color} />
                    )
                }}

            />

            <Screen
                name="search"
                component={Search}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Searchsvg stroke={color} />
                    )
                }}

            />

            <Screen
                name="mensagens"
                component={Mensagens}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Mensagenssvg stroke={color} />
                    )
                }}
            />

            <Screen
                name="solicitações"
                component={Solicitacoes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Solicitacoessvg stroke={color} />
                    )
                }}
            />

            <Screen
                name="perfil"
                component={UserPerfil}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Perfilsvg stroke={color} />
                    )
                }}
            />

            <Screen
                name="notificações"
                component={Notificacoes}
                options={{
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                }}
            />

        </Navigator>

    );


    
}
