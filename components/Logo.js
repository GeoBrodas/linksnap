import { Heading, Stack } from '@chakra-ui/react';

function Logo() {
  return (
    <Stack flexDirection={'row'} spacing={0}>
      <Heading variant="logo" color="#fffffe">
        LINK
      </Heading>
      <Heading variant="logo" color="orange.300">
        SNAP
      </Heading>
    </Stack>
  );
}

export default Logo;
