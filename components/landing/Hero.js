import { Stack, Heading, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';

import Container from './Container';
import RepoCTA from './ui/RepoCTA';
import SignWithGitHub from './ui/SignWithGitHub';

function Hero() {
  const { data: session } = useSession();

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
      {!session ? <SignWithGitHub /> : <RepoCTA />}
    </Container>
  );
}

export default Hero;
