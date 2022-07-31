import { Divider, Heading, Stack, StatGroup, Text } from '@chakra-ui/react';

import StatBox from '../github-stats/StatBox';
import Post from './Post';

function HashnodeStats({ data }) {
  return (
    <Stack
      width={{ base: '87vw', md: '75vw', lg: '55vw' }}
      style={{
        marginTop: '5rem',
      }}
    >
      <Heading variant={'orange'} size={'lg'}>
        Hashnode stats
      </Heading>

      <Divider />

      <Text
        style={{
          marginTop: '1rem',
        }}
        fontWeight="semibold"
        fontSize={{ base: 'md', md: 'lg' }}
        color={'white'}
      >
        Top Posts
      </Text>
      <Stack flexDirection="row" spacing={0} justify={'space-evenly'} gap={4}>
        {/* Top posts */}
        {data.top_posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            brief={post.brief}
            responseCount={post.responseCount}
            totalReactions={post.totalReactions}
          />
        ))}
      </Stack>

      {/* Username, total Posts */}
      <StatGroup
        style={{
          marginTop: '1rem',
        }}
      >
        <StatBox title="Username" data={`@${data.username}`} />
        <StatBox title="Total Posts" data={data.total_posts} />
      </StatGroup>

      {/* Followers, following */}
      <StatGroup>
        <StatBox title="Followers" data={data.followers} />
        <StatBox title="Following" data={data.following} />
      </StatGroup>

      {/* Total reactions */}
      <StatGroup>
        <StatBox title="Total reactions" data={data.total_reactions} />
        <StatBox
          title="Date Joined"
          data={new Date(data.dateJoined).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        />
      </StatGroup>
    </Stack>
  );
}

export default HashnodeStats;
