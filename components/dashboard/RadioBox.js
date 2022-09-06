import { Box, useRadio } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

function RadioBox({ children, ...props }) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const { register } = useFormContext();

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box
      {...register('background', {
        value: props.user ? props.user.background : 'ocean',
      })}
      as="label"
    >
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {children}
      </Box>
    </Box>
  );
}

export default RadioBox;
