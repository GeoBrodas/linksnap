import { FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';

function EditProfileForm() {
  return (
    <Stack
      style={{
        marginTop: '2rem',
      }}
    >
      <FormControl>
        <FormLabel variant={'orange'} htmlFor="Name">
          Widely recognised as
        </FormLabel>
        <Input placeholder="John Doe" />
      </FormControl>
    </Stack>
  );
}

export default EditProfileForm;
