import { HStack, Heading, Icon, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import VoltarIcon from '../../assets/voltar.svg'

import { useNavigation } from "@react-navigation/native";


type Props = TouchableOpacityProps;


export function Notificacoes({ ...rest }: Props) {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack(); // Isso vai voltar para a tela anterior na pilha de navegação.
    }
   
    return (

        <VStack>
            <HStack bg={'white'} pt={16} px={8} alignItems={'center'}>
                <TouchableOpacity
                onPress={handleGoBack} 

                    {...rest}
                >
                    <Icon
                        as={VoltarIcon}
                    />
                </TouchableOpacity>

                <Heading color={'black'} textAlign={'center'} fontFamily={'Roboto_400Regular'} fontSize={"4xl"} px={8}>
                    Notificações
                </Heading>
            </HStack>
        </VStack>

    );
}