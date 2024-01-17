
import { Button as NativeBaseBtn, IButtonProps, Text, Center } from "native-base";// importação dos elementos utilizados
import { color } from "native-base/lib/typescript/theme/styled-system";

//tipagem das propriedades do botão e do titulo
type Props = IButtonProps & {
    title: string;
}
// usamos "variant" para dar variação do botão de acordo as propriedades de variação do mesmo
export function Button({ title, variant, ...rest }: Props) {
    return (

        <Center paddingTop={10}>
            <NativeBaseBtn //nome alternativo para o "Button"
            
                width={171}
                height={'container'}
                bg={variant === "outline" ? "transparent" : "blue.2003"}// o background do botão será por padrão na cor green.700, mas caso o botão tiver uma variação com a propriedade "outline" ele será transparente 
                borderWidth={variant === "outline" ? 2 : 0}// a borda do botão terá uma espessura de 0 por padrão, mas caso tiver uma variação com a propriedade "outline" ele terá 1
                borderColor="blue.2003"// cor da borda no botão
                rounded={5}// radious
                _pressed={{ 
                    bgColor: variant === "outline" ? "2107" : "blue.2003", //ao ser precionado o botão terá uma cor de fundo padrão de gree.500, mas se tiver uma variação com a propriedade "outline" ele terá o fundo de green.500
                    
                }} 
                

                {...rest} //OBS: essa propriedade é sempre a ultima a ser digitada
            >
                <Text
                    color={variant === "outline" ? "blue.2003" : "white"} // a cor do texto padrão sera de "white", mas se tiver uma variação com a propriedade "outline" ele terá a cor gree.500
                    fontFamily={'RobotoSlab_400Regular'}
                    fontSize={13}   
                >

                    {title}

                </Text>
            </NativeBaseBtn>
        </Center>

    );
}