import { Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

import styles from './landing.module.css';

import Container from './Container';
import AboutImage from '../../public/images/abt-img.png';

function About() {
  return (
    <Container id="about">
      <Stack
        alignItems={'center'}
        marginX={'auto'}
        flexDirection="row"
        justify={'space-between'}
      >
        {/* image */}

        <Stack
          bgColor={'white'}
          className={styles.aboutimg}
          width={'40%'}
          rounded={'xl'}
          display={{
            base: 'none',
            lg: 'block',
          }}
        >
          <Image
            alt="about-image"
            height={'50%'}
            width={'100%'}
            src={AboutImage}
            placeholder={'blur'}
            layout="responsive"
          />
        </Stack>

        {/* write-up */}
        <Stack width={{ base: 'full', lg: '50%' }}>
          <Heading variant="orange" size="xl">
            About
          </Heading>

          <Text variant="orange" fontSize={'xl'}>
            Linksnap is an alternative for developers to showcase their stats
            from their major platforms like GitHub, Hashnode, Dev.to (coming
            soon). All you need to give is the username used in the respective
            platform, and Linksnap will fetch all your stats and display them on
            your profile.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}

export default About;
