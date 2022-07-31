import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
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
        width={{ base: '85vw', sm: '70vw', md: '45vw', lg: '35vw' }}
      >
        <Text fontSize={'3xl'} fontWeight={'bold'}>
          Sign-In
        </Text>

        <Text fontSize={'lg'} marginTop={'1rem'}>
          Linksnap is a simple tool for developers to share their links. It
          fetches all you&apos;re GitHub, Hashnode stats and displays it on
          you&apos;re Linksnap profile.
        </Text>

        <Text marginTop={'1rem'} fontStyle={'italic'}>
          Linksnap never shares its data with anyone.
        </Text>

        <VStack>
          <Button
            onClick={() => signIn('github')}
            leftIcon={<SiGithub />}
            variant={'orange'}
            size={'md'}
            marginTop={'1.5rem'}
            padding={'1.4rem'}
            width={'15rem'}
          >
            Sign Up with GitHub
          </Button>

          <Link href="/" passHref>
            <Button
              variant={'outline'}
              borderColor={'orange'}
              size={'md'}
              width={'15rem'}
              marginTop={'1.5rem'}
              padding={'1.4rem'}
            >
              Go Back
            </Button>
          </Link>
        </VStack>
      </Box>
    </VStack>
  );
}

export default SignIn;
