import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { SiGithub } from 'react-icons/si';

function SignIn() {
  return (
    <VStack
      justify={'center'}
      style={{
        backgroundImage: 'url(/Meteor.svg)',
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
      }}
    >
      <Head>
        <title>Sign In</title>
      </Head>

      <Box
        textAlign={'center'}
        rounded={'lg'}
        padding={'4rem'}
        bgColor={'white'}
        width={'35vw'}
      >
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          Sign-In
        </Text>

        <Text fontSize={'lg'} marginTop={'1rem'}>
          DevTree is a simple tool for developers to share their links. Its
          fetches all you&apos;re GitHub, Dev, Hashnode stats and displays it on
          you&apos;re DevTree profile. DevTree never shares its data with
          anyone.
        </Text>

        <Button
          onClick={() => signIn('github')}
          leftIcon={<SiGithub />}
          variant={'orange'}
          size={'md'}
          marginTop={'1.5rem'}
          padding={'1.4rem'}
        >
          Sign Up with GitHub
        </Button>
      </Box>
    </VStack>
  );
}

export default SignIn;
