import { useNavigation } from "@react-navigation/native";
import { VStack, HStack, Heading, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";


import notificar from '../../assets/notificacoes.svg';
import { AppNavigatorProps } from "../../routes/app.routes";


type props = TouchableOpacityProps;

export function Search({...rest}: props) {

    const navigation = useNavigation<AppNavigatorProps>();
    
    return (

        <VStack >
            <HStack bg={'white'} pt={16} px={8} alignItems={'center'}  justifyContent={'space-between'}>
                <Heading color={'black'} textAlign={'center'} fontFamily={'Roboto_400Regular'} fontSize={"3xl"} mb={3}>
                    Pesquisar Serviços
                </Heading>
                
            </HStack>
        </VStack>

    );
}