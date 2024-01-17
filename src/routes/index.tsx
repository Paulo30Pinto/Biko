import { NavigationContainer } from "@react-navigation/native";// importação do componente navigationcontainer, onde estarão envolvidas as nossas rotas.
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { Telas } from "./abrirapp";

export function Routes() {
    return (

        <NavigationContainer >
            <AuthRoutes />
        </NavigationContainer>

    );
}