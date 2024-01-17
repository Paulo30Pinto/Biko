import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";// importação do stacknavigation para a navegação

import { LoginPage } from "../screens/Login_e_Cadastro/Login";
import { Conta } from "../screens/Login_e_Cadastro/Conta";
import { CadastroCliente } from "../screens/Login_e_Cadastro/CadastroCliente";
import { CadastroPrestador } from "../screens/Login_e_Cadastro/CadastroPrestador";
import { RecuperarSenha } from "../screens/Login_e_Cadastro/RecuperarSenha";
import { AppRoutes } from "./app.routes";

type AuthRoutes = {
login: undefined;
conta: undefined;
cliente: undefined;
prestador: undefined;
recuperarsenha: undefined;
home: undefined;

}

export type AuthNavigatorProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>(); // reenderização dos elementos "Navigator e Screen" do "createNativeStackNavigator()" usamos o navigator para o contexto de navegação e scren para renderizar as telas 

export function AuthRoutes (){
    return(

        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
            name="login"
            component={LoginPage}
            />
            <Screen
            name="conta"
            component={Conta}
            />
            <Screen
            name="cliente"
            component={CadastroCliente}
            />
            <Screen
            name="prestador"
            component={CadastroPrestador}
            />
            <Screen
            name="recuperarsenha"
            component={RecuperarSenha}
            />
            <Screen
            name="home"
            component={AppRoutes}
            />
        </Navigator>


    );
}