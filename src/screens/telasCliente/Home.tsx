import { HStack, Heading, Icon, Center, VStack } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import notificar from '../../assets/notificacoes.svg';
import { AppNavigatorProps } from "../../routes/app.routes";


type Props = TouchableOpacityProps;

export function Home({...rest}: Props) {

    const navigation = useNavigation<AppNavigatorProps>();

    function telanotif(){
        navigation.navigate('notificacoes')
    }

    return (

        <VStack>

            <HStack bg={'white'} pt={16} px={8} alignItems={'center'} justifyContent={'space-between'}>

                <Center flex={1}>

                    <Heading color={'blue.2003'} textAlign={'center'} fontFamily={'RobotoSlab_400Regular'} fontSize={"5xl"} fontWeight={"medium"}>
                        BIKO
                    </Heading>

                </Center>

                <TouchableOpacity 
                onPress={telanotif}
                {...rest}>
                    <Icon
                        as={notificar}
                    />
                </TouchableOpacity>

            </HStack>

            



        </VStack>

    );
}