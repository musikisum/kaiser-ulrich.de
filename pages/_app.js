import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css'


export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}