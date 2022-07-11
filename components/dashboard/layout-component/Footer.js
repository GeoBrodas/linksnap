import { Stack, Text } from '@chakra-ui/react';

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
      <Stack width={'60vw'} marginX={'auto'}>
        <Text color={'gray.500'}>
          ©{new Date().getFullYear()} DevTree. All rights reserved
        </Text>
        <Text color={'gray.500'} fontStyle={'italic'}>
          Built using Chakra-Ui💖 + PlanetScale🚀
        </Text>
      </Stack>
    </Stack>
  );
}

export default Footer;
