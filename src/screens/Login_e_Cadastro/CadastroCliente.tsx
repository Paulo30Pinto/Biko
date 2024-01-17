import { HStack, Text, VStack, ScrollView } from "native-base";
import { CabecalhoSignUp } from "../../components/CabecalhoSignUp";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorProps } from "../../routes/auth.routes";

type Props = TouchableOpacityProps

export function CadastroCliente({...rest}: Props) {
    const navigation = useNavigation<AuthNavigatorProps>();
    function login() {
        navigation.navigate('login')
    }
    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack >
                <CabecalhoSignUp />
                <Text px={6} fontSize={'3xl'} mb={2} fontFamily={"Roboto_400Regular"} textTransform={"uppercase"} fontWeight={'black'}>
                    Criar conta
                </Text>

                <VStack>

                    <HStack px={5} mb={2}>
                        <Text flex={1} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Nome
                        </Text>
                        <Text flex={1} marginLeft={10} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Apelido
                        </Text>
                    </HStack>
                    <HStack justifyContent={'space-around'}>
                        <Input
                            width={180}
                            height={41}
                            placeholder="Digite o seu nome..."

                        />
                        <Input
                            width={180}
                            height={41}
                            placeholder="Digite o seu apelido..."
                        />
                    </HStack>

                    <HStack px={5} mb={2}>
                        <Text flex={1} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            E-mail
                        </Text>
                        <Text flex={1} marginLeft={10} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Data de Nascimento
                        </Text>
                    </HStack>
                    <HStack justifyContent={'space-around'}>
                        <Input
                            width={180}
                            height={41}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholder="Digite o seu e-mail..."
                        />
                        <Input
                            width={180}
                            height={41}
                            keyboardType="numeric"

                        />
                    </HStack>

                    <HStack px={5} mb={2}>
                        <Text flex={1} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Nº Telefone
                        </Text>
                        <Text flex={1} marginLeft={10} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Gênero
                        </Text>
                    </HStack>
                    <HStack justifyContent={'space-around'}>
                        <Input
                            width={180}
                            height={41}
                            keyboardType="number-pad"
                            placeholder="(+244) "
                        />
                        <Input
                            width={180}
                            height={41}
                            placeholder="Masculino"
                        />
                    </HStack>


                    <HStack px={5} mb={2}>
                        <Text flex={1} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Senha
                        </Text>
                        <Text flex={1} marginLeft={10} fontSize={'md'} fontFamily={'RobotoSlab_400Regular'}>
                            Confirmar Senha
                        </Text>
                    </HStack>
                    <HStack justifyContent={'space-around'}>
                        <Input
                            width={180}
                            height={41}
                            secureTextEntry
                            placeholder="Digite uma senha..."
                        />
                        <Input
                            width={180}
                            height={41}
                            secureTextEntry
                            placeholder="Confirme a sua senha..."

                        />
                    </HStack>

                    <Button
                        title="CRIAR CONTA"
                        variant={'outline'}
                    />

                    <HStack alignItems={'center'} justifyContent={'center'} mt={10} mb={10}>

                        <Text px={2} fontSize={'15'} color={'black'} >
                        Já tem uma conta?
                        </Text>
                        <TouchableOpacity 
                        onPress={login}
                        {...rest}>
                            <Text fontSize={'15'} color={'blue.21'}>
                            Iniciar sessão
                            </Text>
                        </TouchableOpacity>


                    </HStack>
                </VStack>




            </VStack>
        </ScrollView>


    );
}