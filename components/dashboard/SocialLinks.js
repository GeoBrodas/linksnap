import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from '@chakra-ui/react';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import SocialInputElement from './social/SocialInputElement';

function SocialLinks() {
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
        Social Links
      </Text>

      <Stack flexDirection="row" spacing={0}>
        <SocialInputElement
          icon={<BsGithub />}
          placeholder="America Chavez"
          label="GitHub"
        />
        <SocialInputElement
          marginLeft={true}
          icon={<BsTwitter />}
          placeholder="Elon Musk"
          label="GitHub"
        />
      </Stack>
    </Stack>
  );
}

export default SocialLinks;
