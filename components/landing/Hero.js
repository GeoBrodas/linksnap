import { Stack, Heading, Text, HStack } from '@chakra-ui/react';
import Atropos from 'atropos/react';
import { useSession } from 'next-auth/react';

import HeroImage from '../../public/images/screely-new.png';
import Image from 'next/image';

import Container from './Container';
import RepoCTA from './ui/RepoCTA';
import SignWithGitHub from './ui/SignWithGitHub';

import styles from './landing.module.css';
import PH from '../ui/PH';

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
        <Stack
          width={{ base: 'full', lg: '50%' }}
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          <Heading color="#fffffe">All your links at one place</Heading>

          {/* Para */}
          <Text color="#a7a9be" fontSize={'1.3rem'}>
            Free, Open Source, and built for the community.
          </Text>

          <Stack
            flexDirection={{ base: 'column', md: 'row' }}
            gap={5}
            spacing={0}
            style={{ marginTop: '2rem' }}
            margin={{
              base: '4rem auto',
              sm: '2rem auto 0',
            }}
            alignItems={'center'}
            justify={{ base: 'center', sm: 'start' }}
          >
            {/* Button */}
            {!session ? <SignWithGitHub /> : <RepoCTA />}

            <PH />
          </Stack>
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
