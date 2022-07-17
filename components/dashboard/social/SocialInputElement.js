import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

function SocialInputElement({ icon, placeholder, label, marginLeft, value }) {
  const { register } = useFormContext();

  return (
    <FormControl
      style={{
        marginLeft: marginLeft ? '1rem' : '0',
      }}
    >
      <FormLabel variant="white" htmlFor="github-link">
        {label}
      </FormLabel>
      <InputGroup>
        <InputLeftElement>{icon}</InputLeftElement>
        <Input
          {...register(label.toLowerCase(), {
            required: label === 'GitHub' ? 'Enter your github username' : false,
            value: value ? value : '',
          })}
          bgColor={'gray.200'}
          variant={'filled'}
          placeholder={placeholder}
        />
      </InputGroup>
    </FormControl>
  );
}

export default SocialInputElement;
