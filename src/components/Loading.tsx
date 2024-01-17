//criamos um componente de spinner, para ser reutilizado em outras telas.

import { Spinner, Center } from "native-base";// importação dos elementos utilizados

export function Loading() {
    return (
        <Center flex={1}>

            <Spinner />

        </Center>

    );
}