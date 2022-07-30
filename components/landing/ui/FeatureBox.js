import { Box, Text } from '@chakra-ui/react';

function FeatureBox({ title, icon, description }) {
  return (
    <Box
      width={{
        base: '70vw',
        md: '33%',
      }}
      height={{ base: 'auto', md: '100%' }}
      padding={'1rem'}
      margin={'auto'}
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      bgColor={'white'}
    >
      {icon}

      <Text
        textAlign="center"
        color={'black'}
        fontWeight="bold"
        fontSize={'xl'}
        style={{ marginTop: '1rem' }}
      >
        {title}
      </Text>

      <Text
        style={{ marginTop: '.7rem' }}
        color={'black'}
        fontWeight={'semibold'}
        textAlign="center"
      >
        {description}
      </Text>
    </Box>
  );
}

export default FeatureBox;
