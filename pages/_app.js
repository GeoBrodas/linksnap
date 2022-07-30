import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';

// theme config for Chakra-UI
import theme from '../styles/theme';
import '../styles/styles.css';
import 'atropos/css';
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <NextNProgress
          height={3}
          options={{ showSpinner: false }}
          color="#ff8906"
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
