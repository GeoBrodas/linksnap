import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

function SocialInputElement({ icon, placeholder, label, marginLeft }) {
  const { register } = useFormContext({
    defaultValues: {
      github: 'GeoBrodas',
    },
  });

  // fetch session data and display on github input field

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
          disabled={label === 'GitHub' && true}
          {...register(label.toLowerCase())}
          bgColor={'gray.200'}
          variant={'filled'}
          placeholder={label === 'GitHub' ? 'GeoBrodas' : placeholder}
        />
      </InputGroup>
    </FormControl>
  );
}

export default SocialInputElement;
