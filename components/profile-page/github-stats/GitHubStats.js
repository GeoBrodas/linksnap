import {
  Box,
  Stack,
  Stat,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import StatBox from './StatBox';

function GitHubStats({ stats }) {
  return (
    <Stack
      width={'55vw'}
      style={{
        marginTop: '5rem',
      }}
    >
      <StatGroup>
        <StatBox title="Username" data={stats.username} />
        <StatBox title="Public repos" data={stats.total_repos} />
      </StatGroup>
      <StatGroup>
        {/* Stars and forks  */}
        <StatBox title="GitHub Stars" data={stats.total_stars} />
        <StatBox title="GitHub Forks" data={stats.total_forks} />
      </StatGroup>

      <StatGroup>
        <StatBox title="Followers" data={stats.followers} />
        <StatBox title="Following" data={stats.following} />
      </StatGroup>

      {/* repos detials */}
      <StatGroup>
        <Stat>
          <Text fontWeight="bold" fontSize={'lg'} color={'white'}>
            Top repos
          </Text>

          <Stack
            style={{
              marginTop: '.1rem',
            }}
            flexDirection={'row'}
            spacing={0}
            justify="space-around"
          >
            {stats.top_repos.map((repo, index) => (
              <Box width={'50%'} key={index}>
                <StatLabel
                  fontWeight={'normal'}
                  fontSize={'lg'}
                  color={'white'}
                >
                  {repo.name}
                </StatLabel>
                <StatHelpText fontSize={'lg'} color={'white'}>
                  {repo.description}
                </StatHelpText>
              </Box>
            ))}
          </Stack>
        </Stat>
      </StatGroup>
    </Stack>
  );
}

export default GitHubStats;
