import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

function SocialInputElement({
  icon,
  placeholder,
  label,
  marginLeft,
  disabled,
}) {
  const { register } = useFormContext();

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
          value={label === 'GitHub' ? 'GeoBrodas' : ''}
          disabled={disabled}
          {...register(label.toLowerCase(), {
            required: label === 'GitHub' ? true : false,
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
