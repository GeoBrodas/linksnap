import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  FormHelperText,
} from '@chakra-ui/react';
import { BiPhoneIncoming } from 'react-icons/bi';
import { useFormContext } from 'react-hook-form';

function EditBio({ user }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      <Stack flexDirection={{ base: 'column', md: 'row' }} spacing={0} gap={5}>
        <FormControl>
          <FormLabel variant={'white'} htmlFor="Name">
            Widely recognised as
          </FormLabel>
          <Input
            {...register('name', {
              required: 'Name is required',
              value: user ? user.name : '',
            })}
            bgColor={'gray.200'}
            variant={'filled'}
            placeholder="John Doe"
          />
          {errors.name && (
            <FormHelperText>{errors.name.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <FormLabel variant={'white'} htmlFor="occupation">
            Occupation
          </FormLabel>
          <Input
            {...register('occupation', {
              required: 'Occupation is required',
              value: user ? user.occupation : '',
            })}
            type={'text'}
            bgColor={'gray.200'}
            variant={'filled'}
            placeholder="Professional Poker Player"
          />

          {errors.occupation && (
            <FormHelperText>{errors.occupation.message}</FormHelperText>
          )}
        </FormControl>
      </Stack>

      <Stack flexDirection={{ base: 'column', md: 'row' }} spacing={0} gap={5}>
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
              {...register('email', {
                required: 'This field is required',
                value: user ? user.email : '',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Enter valid email id',
                },
              })}
              bgColor={'gray.200'}
              variant={'filled'}
              placeholder="john@doe.com"
              type="email"
            />
          </InputGroup>
          {errors.email && (
            <FormHelperText>{errors.email.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl>
          <FormLabel variant={'white'} htmlFor="Country of origin">
            Country of origin
          </FormLabel>
          <Input
            {...register('country', {
              required: 'Please enter your country of origin',
              value: user ? user.country : '',
            })}
            type={'text'}
            bgColor={'gray.200'}
            variant={'filled'}
            placeholder="Wakanda"
          />
          {errors.country && (
            <FormHelperText>{errors.country.message}</FormHelperText>
          )}
        </FormControl>
      </Stack>
    </Stack>
  );
}

export default EditBio;
