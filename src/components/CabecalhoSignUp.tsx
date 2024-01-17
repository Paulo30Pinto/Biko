import { VStack, Icon, Image, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import TrabalhadoresImg1 from '../assets/trabalhadores1.png';
import VoltarIcon from '../assets/voltar.svg'
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorProps } from "../routes/auth.routes";



export function CabecalhoSignUp() {
    const navigation = useNavigation<AuthNavigatorProps>();
    function voltar() {
        navigation.goBack();
    }
    return (

        <VStack pt={12}>

            <StatusBar
                //estilização da estatusbar
                 style="dark"
                backgroundColor="white" // para que o fundo seja transparente
                translucent // para que o fundo possa ocupar toda tela 
                
            />
            <TouchableOpacity onPress={voltar}>
                <Icon as={VoltarIcon} px={8} mb={17} />
            </TouchableOpacity>

            <Image
                source={TrabalhadoresImg1}
                defaultSource={TrabalhadoresImg1}
                alt="imagem dos trabalhadores"
                marginBottom={10}
                width={403}
                height={122}
            />

        </VStack>


    );
}