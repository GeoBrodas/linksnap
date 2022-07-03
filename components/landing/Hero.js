import { Stack, Heading, Text, VStack, Button } from '@chakra-ui/react';

function Hero() {
  return (
    <Stack
      flexDirection={'column'}
      justifyContent={'center'}
      height={'70vh'}
      width={'80%'}
      margin={'auto'}
      paddingY={'4rem'}
    >
      <Stack width={'50%'} spacing={5}>
        <Heading color="#fffffe">LinkTree for developers</Heading>

        {/* Para */}
        <Text color="#a7a9be" fontSize={'1.3rem'}>
          LinkTree is a simple tool for developers to share their links. Its
          fetches all you&apos;re GitHub, Dev, Hashnode stats and displays it on
          you&apos;re DevTree profile.
        </Text>
      </Stack>

      {/* Button */}
      <Button
        width={'fit-content'}
        style={{
          marginTop: '2rem',
        }}
      >
        Sign Up with GitHub
      </Button>
    </Stack>
  );
}

export default Hero;
