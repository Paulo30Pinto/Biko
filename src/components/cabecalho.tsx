import { VStack, Image } from "native-base";

import CabecalhoImg from '../assets/cabecalhologin.png';
import TrabalhadoresImg1 from '../assets/trabalhadores1.png';

export function CabecalhoLogin() {
    return (

        <VStack>

            <Image
                source={CabecalhoImg}
                alt="imagem do cabeçalho de login"
                defaultSource={CabecalhoImg}
                width={415}
                height={215}
            />

            <Image
                source={TrabalhadoresImg1}
                defaultSource={TrabalhadoresImg1}
                alt="imagem dos trabalhadores no login"
                width={403}
                height={122}

            />

        </VStack>
    );
}