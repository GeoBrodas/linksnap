import { FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';

function EditBio() {
  return (
    <Stack
      style={{
        marginTop: '3rem',
      }}
      bgColor="white"
      rounded={'2xl'}
      padding={'1.4rem'}
    >
      <Text fontWeight={'bold'} fontSize={'xl'}>
        Basic Details
      </Text>
      <Stack flexDirection={'row'} spacing={0}>
        <FormControl>
          <FormLabel variant={'white'} htmlFor="Name">
            Widely recognised as
          </FormLabel>
          <Input
            bgColor={'gray.200'}
            variant={'filled'}
            placeholder="John Doe"
          />
        </FormControl>

        <FormControl
          style={{
            marginLeft: '1rem',
          }}
        >
          <FormLabel variant={'white'} htmlFor="occupation">
            Occupation
          </FormLabel>
          <Input
            type={'text'}
            bgColor={'gray.200'}
            variant={'filled'}
            placeholder="Professional Poker Player"
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default EditBio;
