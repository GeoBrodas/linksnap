import {
  Stack,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import StatBox from './StatBox';

function GitHubStats({ stats }) {
  return (
    <Stack
      width={'55vw'}
      style={{
        marginTop: '5rem',
        borderColor: 'whitesmoke',
      }}
      border={'2px'}
      borderRadius={'lg'}
      padding={'1rem'}
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
    </Stack>
  );
}

export default GitHubStats;
