
import { ScrollView, VStack, Text, HStack } from "native-base";
import { CabecalhoLogin } from "../../components/cabecalho";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorProps } from "../../routes/auth.routes";


type Props = TouchableOpacityProps

export function LoginPage({ ...rest }: Props) {
  
    const navigation = useNavigation<AuthNavigatorProps>();

   // const navigation = useNavigation();

    function novaconta() {
        navigation.navigate('conta'); //especificando a rota da função definida
    }
    function recuperarsenha() {
        navigation.navigate('recuperarsenha')
    }
    function home() {
        navigation.navigate('home')
    }
    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

            <VStack >

                <CabecalhoLogin />

                <Text marginTop={6} px={6} fontSize={'md'} mb={2} >
                    E-mail
                </Text>

                <Input
                    keyboardType="email-address" //tipo de teclado
                    autoCapitalize="none"//para o texto não aparecer com letras maiusculas
                />

                <Text px={6} fontSize={'md'} mb={2} >
                    Senha
                </Text>

                <Input
                    secureTextEntry // para esconder a senha
                />
                <TouchableOpacity
                    onPress={recuperarsenha}
                    {...rest}
                >
                    <Text px={4} fontSize={'14'} mb={2} color={'blue.21'} >
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>


                <Button
                    title="Continuar"
                    variant={'outline'}
                    onPress={home}
                    
                />

                <HStack alignItems={'center'} justifyContent={'center'} mt={10} mb={10}>

                    <Text px={2} fontSize={'14'} color={'black'} >
                        Não tem uma conta?
                    </Text>
                    <TouchableOpacity
                        onPress={novaconta}

                        {...rest}
                    >
                        <Text fontSize={'14'} color={'blue.21'}>
                            Registrar-se.
                        </Text>
                    </TouchableOpacity>


                </HStack>

            </VStack>

        </ScrollView>




    );
}