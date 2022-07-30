import { HStack, Link, Stack, Text } from '@chakra-ui/react';

import { SiHashnode } from 'react-icons/si';
import { footerLinks } from '../../../utils/landing-links';

function Footer() {
  return (
    <Stack
      style={{
        margin: '6rem 0 0',
        width: '100%',
      }}
      bgColor={'#fffffe'}
      paddingY={'2rem'}
    >
      <Stack
        width={{ base: '90vw', md: '60vw' }}
        marginX={'auto'}
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <Stack justify={'center'}>
          <Text color={'gray.500'}>
            ©{new Date().getFullYear()} Linksnap. All rights reserved
          </Text>
          <HStack>
            <Text color={'gray.500'} fontStyle={'italic'}>
              Built using{' '}
              <Link
                href="https://chakra-ui.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Chakra-Ui💖
              </Link>{' '}
              +{' '}
              <Link
                href="https://planetscale.com/"
                target={'_blank'}
                rel="noopener noreferrer"
              >
                PlanetScale🚀
              </Link>{' '}
            </Text>
          </HStack>
          <HStack style={{ marginTop: '1rem' }}>
            <SiHashnode color="blue" />
            <Link
              href="https://hashnode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text color={'gray.500'} fontStyle={'italic'}>
                Hashnode
              </Text>
            </Link>
          </HStack>
        </Stack>

        {/* Links */}
        <Stack style={{ marginTop: '2rem' }} textAlign={{ md: 'right' }}>
          <Text fontWeight={'semibold'} fontSize={'lg'}>
            Find me on
          </Text>
          {Object.keys(footerLinks).map((key) => (
            <Link
              key={key}
              href={footerLinks[key]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text color={'gray.500'}>{key}</Text>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
