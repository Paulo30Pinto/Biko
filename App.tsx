import { StatusBar } from 'react-native'; //importação da statusbar
import { NativeBaseProvider } from 'native-base';//importação do provedor do nativebase
import { Loading } from './src/components/Loading';
import { useFonts } from 'expo-font';
import { RobotoSlab_400Regular } from '@expo-google-fonts/roboto-slab';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { THEME } from './src/theme'; // importação do tema


import { Routes } from './src/routes';


export default function App() {
  const [fontsloaded] = useFonts({ RobotoSlab_400Regular, Roboto_400Regular });
  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar
        //estilização da estatusbar
        barStyle="dark-content" // para que os itens estejam no tom escuro
        backgroundColor="transparent" // para que o fundo seja transparente
        translucent // para que o fundo possa ocupar toda tela 
      />

      {fontsloaded ? <Routes/> : <Loading /> // condição para que caso as fontes não carregem primeiro que a app ele apresente o componente de loading
      }


    </NativeBaseProvider>
  );
}


