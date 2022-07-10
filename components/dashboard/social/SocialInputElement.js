import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

function SocialInputElement({ icon, placeholder, label, marginLeft }) {
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
          bgColor={'gray.200'}
          variant={'filled'}
          placeholder={placeholder}
        />
      </InputGroup>
    </FormControl>
  );
}

export default SocialInputElement;
