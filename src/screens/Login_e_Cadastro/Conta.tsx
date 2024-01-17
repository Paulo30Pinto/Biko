import { VStack, Icon, Image, Text, HStack } from "native-base";
import { StatusBar, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorProps } from "../../routes/auth.routes";

import VoltarIcon from '../../assets/voltar.svg';
import Trabalhadores2 from '../../assets/trabalhadores2.png';
import UserIcon from '../../assets/User.svg';

type Props = TouchableOpacityProps

export function Conta({ ...rest }: Props) {
    const navigation = useNavigation<AuthNavigatorProps>();

    function contacliente() {
        navigation.navigate('cliente')
    }
    function contaprestador() {
        navigation.navigate('prestador')
    }
    function voltar() {
        navigation.goBack();
    }

    return (
        <VStack pt={12} >

            <StatusBar
                //estilização da estatusbar
                barStyle="dark-content" // para que os itens estejam no tom claro
                backgroundColor="transparent" // para que o fundo seja transparente
                translucent // para que o fundo possa ocupar toda tela 
            />
            <TouchableOpacity
                onPress={voltar}
                {...rest}
            >
                <Icon as={VoltarIcon} px={10} />
            </TouchableOpacity>

            <Image
                source={Trabalhadores2}
                defaultSource={Trabalhadores2}
                alt="trabalhadores pagina conta"
                marginLeft={3}
                mt={5}


            />

            <Text fontSize={'3xl'} fontWeight={'bold'} marginLeft={5} mt={6} textTransform={"uppercase"} fontFamily={'Roboto_400Regular'}>
                escolha o tipo de conta
            </Text>

            <HStack justifyContent={'space-between'} mt={19} px={10}>
                <TouchableOpacity
                    onPress={contacliente}

                    {...rest}>
                    <Icon as={UserIcon} />
                    <Text mt={5} fontSize={'lg'} textAlign={'center'} fontFamily={'RobotoSlab_400Regular'} > Clinte </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={contaprestador}

                    {...rest}
                >
                    <Icon as={UserIcon} />
                    <Text
                        mt={5}
                        fontFamily={'RobotoSlab_400Regular'}
                        fontSize={'lg'}
                        numberOfLines={2}
                        style={{ flexDirection: 'column' }}
                        textAlign={'center'}
                    >
                        Prestador de {'\n'}Serviço

                    </Text>
                </TouchableOpacity>

            </HStack>





        </VStack>


    );
}