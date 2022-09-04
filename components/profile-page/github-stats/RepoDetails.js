import { Box, Stack, StatHelpText, StatLabel, Text } from '@chakra-ui/react';

// icons
import { FaRegStar } from 'react-icons/fa';
import { TbGitFork } from 'react-icons/tb';

import styles from '../profile.module.css';

function RepoDetails({ repo }) {
  const statsText = {
    base: 'md',
    md: 'lg',
  };

  return (
    <Box
      width={'50%'}
      border={'2px'}
      borderColor={'gray.200'}
      padding={{ base: '.8rem', md: '1rem' }}
      rounded={'xl'}
      className={styles.repo}
    >
      <StatLabel
        fontWeight={'medium'}
        fontFamily={'monospace'}
        fontSize={statsText}
        color={'white'}
      >
        {repo.name}
      </StatLabel>

      <StatHelpText fontSize={statsText} color={'white'}>
        {repo.description}
      </StatHelpText>

      <Stack
        width={'full'}
        flexDirection={'row'}
        spacing={0}
        alignItems={'center'}
      >
        <Stack flexDirection={'row'} spacing={0} alignItems={'center'}>
          <FaRegStar color={'white'} />
          <Text
            id="stats-font"
            variant="orange"
            style={{
              marginLeft: '4px',
            }}
          >
            {repo.stars > 1000
              ? `${(repo.stars / 1000).toFixed(1)}k`
              : repo.stars}
          </Text>
        </Stack>
        <Stack
          flexDirection={'row'}
          spacing={0}
          alignItems={'center'}
          style={{
            margin: '0 0 0 10px',
          }}
        >
          <TbGitFork color={'white'} />
          <Text
            id="stats-font"
            variant="orange"
            style={{
              marginLeft: '4px',
            }}
          >
            {repo.forks > 1000
              ? `${(repo.forks / 1000).toFixed(1)}k`
              : repo.forks}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}

export default RepoDetails;
