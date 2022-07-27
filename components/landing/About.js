import { Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import { IoMdAdd } from 'react-icons/io';
import { SiDevdotto, SiGithub, SiHashnode } from 'react-icons/si';
import Container from './Container';

function About() {
  return (
    <Container id="about">
      <Stack
        alignItems={'center'}
        marginX={'auto'}
        flexDirection="row"
        justify={'space-evenly'}
      >
        {/* image */}
        <Stack
          display={{ base: 'none', lg: 'inline-flex' }}
          width={{ base: 'full', lg: '50%' }}
        >
          <VStack gap={8}>
            {/* Hashnode */}
            <SiHashnode color={'white'} size={'6rem'} />
            <IoMdAdd color={'white'} size={'2rem'} />
            <HStack alignItems={'center'} gap={20}>
              {/* dev and github */}
              <SiDevdotto color={'white'} size={'6rem'} />
              <SiGithub color={'white'} size={'6rem'} />
            </HStack>
          </VStack>
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
