import { Stack, Heading, Text, Button } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';
import { signIn } from 'next-auth/react';

import Container from './Container';

function Hero() {
  return (
    <Container>
      <Stack width={{ base: 'full', lg: '50%' }} spacing={5}>
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
        onClick={() => signIn('github', { redirect: true })}
        width={'fit-content'}
        style={{
          marginTop: '2rem',
        }}
        variant={'orange'}
        fontSize={'1rem'}
        iconSpacing={'1rem'}
        leftIcon={<SiGithub fontSize={'1.5rem'} />}
      >
        Sign Up with GitHub
      </Button>
    </Container>
  );
}

export default Hero;
