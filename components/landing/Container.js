import { Stack } from '@chakra-ui/react';

function Container({ children, ...props }) {
  return (
    <Stack
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      height={props.height || '70vh'}
      width={{ base: '100%', md: '94%', lg: '80%' }}
      margin={'auto'}
      paddingY={'4rem'}
    >
      {children}
    </Stack>
  );
}

export default Container;
