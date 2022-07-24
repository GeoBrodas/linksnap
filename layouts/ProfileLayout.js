import { Button, Stack, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Logo from '../components/Logo';
import Footer from '../components/dashboard/layout-component/Footer';

import { BsGithub } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';

function ProfileLayout({ children }) {
  const { data: session } = useSession();

  return (
    <VStack padding={'1rem 0 0'}>
      <Stack
        margin={'2rem 0'}
        width={{ base: '90vw', md: '85vw', lg: '70vw' }}
        flexDirection={'row'}
        spacing={'0'}
        justify="space-between"
      >
        {/* Go Back to Landing page */}

        <Logo />

        {/* Dashboard / Sign-Up? */}
        {session ? (
          <Link href="/dashboard" passHref>
            <Button
              variant={'outline'}
              color={'white'}
              size={'md'}
              _hover={{
                color: 'black',
                bgColor: 'white',
              }}
              rightIcon={<HiArrowNarrowRight />}
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/auth/sign-in" passHref>
            <Button
              variant={'outline'}
              color={'white'}
              size={'lg'}
              _hover={{
                color: 'black',
                bgColor: 'white',
              }}
              leftIcon={<BsGithub size={'20px'} />}
            >
              Sign Up
            </Button>
          </Link>
        )}
      </Stack>

      <Stack
        width={{ base: '90vw', sm: '80vw', md: '60vw' }}
        alignItems={'center'}
      >
        {children}
      </Stack>
      <Footer />
    </VStack>
  );
}

export default ProfileLayout;
