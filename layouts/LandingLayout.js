import { Heading, HStack, Stack, Button } from '@chakra-ui/react';
import { navlinks } from '../utils/landing-links';
import Link from 'next/link';

function LandingLayout({ children, ...props }) {
  return (
    <Stack padding={'3rem'} bgColor="#0f0e17">
      {/* Navbar */}
      <HStack justify={'space-between'}>
        {/* Logo */}
        <Heading color="#fffffe">DevTree</Heading>

        {/* Links */}
        <HStack spacing={8}>
          {Object.keys(navlinks).map((link, index) => (
            <Link passHref key={index} href={link}>
              <Button variant={'link'} fontSize={'1.1rem'} color="#fffffe">
                {link.replace(/_/g, ' ')}
              </Button>
            </Link>
          ))}
        </HStack>
      </HStack>

      {children}
    </Stack>
  );
}

export default LandingLayout;
