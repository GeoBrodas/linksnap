import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BiPhoneIncoming } from 'react-icons/bi';

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
      <Stack flexDirection={'row'} spacing={0}>
        <FormControl>
          <FormLabel variant={'white'} htmlFor="email">
            Work Email
          </FormLabel>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              // eslint-disable-next-line react/no-children-prop
              children={<BiPhoneIncoming color="gray.300" />}
            />

            <Input
              bgColor={'gray.200'}
              variant={'filled'}
              placeholder="john@doe.com"
              type="email"
            />
          </InputGroup>
        </FormControl>

        <FormControl
          style={{
            marginLeft: '1rem',
          }}
        >
          <FormLabel variant={'white'} htmlFor="Country of origin">
            Country of origin
          </FormLabel>
          <Input
            type={'text'}
            bgColor={'gray.200'}
            variant={'filled'}
            placeholder="Wakanda"
          />
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default EditBio;
