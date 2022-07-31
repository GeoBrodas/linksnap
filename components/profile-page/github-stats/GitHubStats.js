import {
  Divider,
  Heading,
  Stack,
  Stat,
  StatGroup,
  Text,
} from '@chakra-ui/react';
import StatBox from './StatBox';
import RepoDetails from './RepoDetails';

function GitHubStats({ stats }) {
  return (
    <Stack
      width={{ base: '87vw', md: '75vw', lg: '55vw' }}
      style={{
        marginTop: '5rem',
      }}
    >
      <Heading size={'lg'} fontWeight={'bold'} variant="orange">
        GitHub stats
      </Heading>

      <Divider />

      <StatGroup>
        <StatBox title="Username" data={`@${stats.username}`} />
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
          <Text
            fontWeight="semibold"
            fontSize={{ base: 'md', md: 'lg' }}
            color={'white'}
            marginY={'10px'}
          >
            Top repos
          </Text>

          <Stack
            style={{
              marginTop: '.4rem',
            }}
            flexDirection={'row'}
            spacing={0}
            justify="space-around"
            fontSize={{ base: 'md', md: 'lg' }}
            gap={4}
          >
            {stats.top_repos.map((repo, index) => (
              <RepoDetails repo={repo} key={index} />
            ))}
          </Stack>
        </Stat>
      </StatGroup>
    </Stack>
  );
}

export default GitHubStats;
