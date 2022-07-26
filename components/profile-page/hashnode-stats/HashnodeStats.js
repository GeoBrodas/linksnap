import {
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  StatLabel,
  Text,
} from '@chakra-ui/react';

import { BiComment } from 'react-icons/bi';
import { MdCelebration } from 'react-icons/md';

function HashnodeStats({ data }) {
  return (
    <Stack
      width={{ base: '80vw', md: '75vw', lg: '55vw' }}
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
          <Box
            key={index}
            width={'50%'}
            bgColor={'white'}
            padding={'1rem'}
            rounded={'lg'}
          >
            <Text fontWeight={'normal'} color={'black'}>
              {post.title}
            </Text>
            <HStack gap={2}>
              <HStack>
                <MdCelebration color={'black'} />
                <Text>{post.totalReactions}</Text>
              </HStack>
              <HStack>
                <BiComment color={'black'} />
                <Text>{post.responseCount}</Text>
              </HStack>
            </HStack>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}

export default HashnodeStats;
