import { Stack, Text } from '@chakra-ui/react';

function NoGitHubStats({ title }) {
  return (
    <Stack
      style={{
        marginTop: '5rem',
      }}
      width={{ base: '80vw', md: '75vw', lg: '55vw' }}
      rounded={'lg'}
      padding={'3rem 0'}
      bgColor={'white'}
    >
      <Text marginX={'auto'}>{title}</Text>
    </Stack>
  );
}

export default NoGitHubStats;
