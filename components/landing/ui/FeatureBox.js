import { Box, Text } from '@chakra-ui/react';

function FeatureBox({ title, icon, description, gradient }) {
  return (
    <Box
      width={{
        base: '70vw',
        md: '40%',
        lg: '33%',
      }}
      height={{ base: 'auto', sm: '97%', lg: '100%' }}
      margin={'auto'}
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
      bgGradient={gradient}
      padding={'5px'}
      rounded={'xl'}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: 'scale(1.01)',
        transition: 'all 0.2s ease-in-out',
      }}
    >
      <Box
        rounded={'xl'}
        bgColor={'#0f0e17'}
        width={'auto'}
        height={'99%'}
        padding={'1rem'}
        justifyContent="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        {icon}

        <Text
          textAlign="center"
          color={'white'}
          fontWeight="bold"
          fontSize={'2xl'}
          style={{ marginTop: '1rem' }}
        >
          {title}
        </Text>

        <Text
          style={{ marginTop: '.7rem' }}
          color={'white'}
          fontSize={'lg'}
          fontWeight={'semibold'}
          textAlign="center"
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
}

export default FeatureBox;
