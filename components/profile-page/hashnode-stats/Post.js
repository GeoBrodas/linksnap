import { Box, HStack, Text } from '@chakra-ui/react';
import { BiComment } from 'react-icons/bi';
import { MdCelebration } from 'react-icons/md';

function Post({ title, brief, responseCount, totalReactions }) {
  return (
    <Box
      width={'50%'}
      bgColor={'white'}
      padding={{ base: '.7rem', md: '1rem' }}
      rounded={'lg'}
    >
      <Text fontWeight={'semibold'} color={'black'}>
        {title}
      </Text>
      <Text fontWeight={'normal'} marginY={'5px'} color={'black'}>
        {`${brief.substring(0, 150)}...`}
      </Text>
      <HStack gap={2} marginY={'10px'}>
        <HStack>
          <MdCelebration color={'black'} />
          <Text>{totalReactions}</Text>
        </HStack>
        <HStack>
          <BiComment color={'black'} />
          <Text>{responseCount}</Text>
        </HStack>
      </HStack>
    </Box>
  );
}

export default Post;
