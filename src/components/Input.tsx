import { Input as NativeBaseInput, IInputProps, VStack, } from "native-base";

export function Input({ variant ,...rest}: IInputProps) {
    return (

        <VStack px={4}>
            <NativeBaseInput
                bg={"input.21"}
                px={4}
                rounded={5}
                borderWidth={0}// para tirar as linhas das bordas do input
                fontSize={"sm"}
                color={"black"}
                marginBottom={4}// para dar uma margem ao input, para que o texto não fique colados ao input
                placeholderTextColor={"gray.300"}// cor do texto padrão do text holder

                _focus={{ // foco ao clicar no input
                    bg: "transparent",
                    borderWidth: "1", //espessura das bordas
                    borderColor: "blue.2003"// cor da borda

                }}

                {...rest}


            />
        </VStack>


    );
}