import { Stack, VStack } from '@chakra-ui/react';

function Container({ children }) {
  return (
    <Stack
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'70vh'}
      width={{ base: '100%', md: '80%' }}
      margin={'auto'}
      paddingY={'4rem'}
    >
      {children}
    </Stack>
  );
}

export default Container;
