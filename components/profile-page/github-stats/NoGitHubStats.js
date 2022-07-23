import { Stack, Text } from '@chakra-ui/react';

function NoGitHubStats() {
  return (
    <Stack
      style={{
        marginTop: '5rem',
      }}
      width={'55vw'}
      rounded={'lg'}
      padding={'3rem 0'}
      bgColor={'white'}
    >
      <Text marginX={'auto'}>
        No GitHub stats found. Please check your GitHub username and try again
      </Text>
    </Stack>
  );
}

export default NoGitHubStats;
