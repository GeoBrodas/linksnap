import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

// theme config for Chakra-UI
import theme from '../styles/theme';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
