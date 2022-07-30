import { Box, HStack, Stack, Text } from '@chakra-ui/react';

function RoadMapDetail({ index, title }) {
  return (
    <HStack>
      <Stack alignItems="center" justifyContent="center" justify={'center'}>
        <Box
          bgColor={'white'}
          padding=".5rem"
          rounded="full"
          width="40px"
          height="40px"
        >
          <Text fontWeight="bold" textAlign={'center'}>
            {index}
          </Text>
        </Box>
      </Stack>

      <Text
        style={{ marginLeft: '20px' }}
        fontSize={'xl'}
        color={'white'}
        fontWeight="semibold"
      >
        {title}
      </Text>
    </HStack>
  );
}

export default RoadMapDetail;
