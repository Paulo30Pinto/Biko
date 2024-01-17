import { Text, VStack, ScrollView, Image, Icon } from "native-base";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorProps } from "../../routes/auth.routes";

import passrecup from '../../assets/password.png';
import VoltarIcon from '../../assets/voltar.svg';

type Props = TouchableOpacityProps

export function RecuperarSenha({ ...rest }: Props) {
    const navigation = useNavigation<AuthNavigatorProps>();
    function voltar() {
        navigation.goBack();
    }
    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack pt={12}>
                <TouchableOpacity onPress={voltar}>
                    <Icon as={VoltarIcon} px={10} />
                </TouchableOpacity>

                <Image
                    source={passrecup}
                    defaultSource={passrecup}
                    alt="recuperação de senha"
                    marginLeft={10}
                    mt={10}
                    mb={5}
                />
                <Text px={8} textAlign={'center'} fontFamily={'RobotoSlab_400Regular'}>
                    Digite seu endereço de e-mail abaixo e enviaremos um link para redefinir sua senha.
                </Text>

                <Text mt={41} px={5} fontFamily={'RobotoSlab_400Regular'} mb={2}>
                    E-mail
                </Text>

                <Input
                    placeholder="Digite o seu e-mail..."
                />

                <Button
                    title="REDEFINIR SENHA"
                    variant={'outline'}
                />




            </VStack>
        </ScrollView>


    );
}