import { Stack, Heading, Text } from '@chakra-ui/react';
import Atropos from 'atropos/react';
import { useSession } from 'next-auth/react';

import HeroImage from '../../public/images/screely-new.png';
import Image from 'next/image';

import Container from './Container';
import RepoCTA from './ui/RepoCTA';
import SignWithGitHub from './ui/SignWithGitHub';

import styles from './landing.module.css';

function Hero() {
  const { data: session } = useSession();

  return (
    <Container>
      <Stack
        alignItems={'center'}
        flexDirection="row"
        justify={'space-around'}
        gap={5}
        width={'100%'}
      >
        <Stack width={{ base: 'full', lg: '50%' }}>
          <Heading color="#fffffe">All your links at one place</Heading>

          {/* Para */}
          <Text color="#a7a9be" fontSize={'1.3rem'}>
            Free, Open Source, and built for the community.
          </Text>
          {/* Button */}
          {!session ? <SignWithGitHub /> : <RepoCTA />}
        </Stack>

        {/* Hero-Image */}

        <Atropos className={styles.heroimage}>
          <Stack rounded={'xl'}>
            <Image
              alt="hero-image"
              src={HeroImage}
              placeholder="blur"
              width={120}
              height={60}
              layout="responsive"
            />
          </Stack>
        </Atropos>
      </Stack>
    </Container>
  );
}

export default Hero;
