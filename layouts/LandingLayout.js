import { Heading, HStack, Stack, Button } from '@chakra-ui/react';
import { navlinks } from '../utils/landing-links';
import Link from 'next/link';

import { IoIosArrowForward } from 'react-icons/io';
import { useSession } from 'next-auth/react';
import Logo from '../components/Logo';

function LandingLayout({ children, ...props }) {
  const { data: session } = useSession();

  return (
    <Stack padding={'3rem'} bgColor="#0f0e17">
      {/* Navbar */}
      <HStack justify={'space-between'}>
        {/* Logo */}
        <Logo />

        {/* Links */}
        <HStack spacing={8}>
          {Object.keys(navlinks).map((link, index) => (
            <Link passHref key={index} href={link}>
              <Button variant={'link'} fontSize={'1.1rem'} color="#fffffe">
                {link.replace(/_/g, ' ')}
              </Button>
            </Link>
          ))}

          {/* Go to Dashboard */}
          {session?.user && (
            <Link passHref href="/dashboard">
              <Button
                rightIcon={<IoIosArrowForward />}
                variant={'outline'}
                color={'#fffffe'}
                _hover={{
                  bg: '#fffffe',
                  color: '#0f0e17',
                }}
              >
                Go to Dashboard
              </Button>
            </Link>
          )}
        </HStack>
      </HStack>

      {children}
    </Stack>
  );
}

export default LandingLayout;
