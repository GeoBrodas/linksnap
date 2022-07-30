import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import Container from './Container';

import { BsGithub } from 'react-icons/bs';

function Contributions() {
  return (
    <Container>
      <Stack
        gap={5}
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        justify={{
          base: 'center',
          md: 'space-evenly',
        }}
        width={{
          base: '100%',
          md: '80%',
        }}
      >
        {/* para */}
        <Stack
          width={{
            base: '100%',
            md: '60%',
          }}
        >
          <Heading size="xl" fontWeight="bold" variant="orange">
            We are Open Source🎉
          </Heading>

          <Text variant="orange" fontSize={'xl'}>
            Linksnap is open source and has a long way to go. It would be great
            to see you contribute to the project. For more information, visit
            the repository for Contribution guidelines.
          </Text>
        </Stack>

        {/* CTA */}
        <Stack justify={{ md: 'center' }} align={{ md: 'center' }}>
          <a
            href="https://github.com/GeoBrodas/linksnap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size={'lg'}
              variant={'outline'}
              color={'white'}
              _hover={{
                bg: 'white',
                color: 'black',
              }}
              leftIcon={<BsGithub />}
            >
              GitHub Repository
            </Button>
          </a>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Contributions;
