import { Stack, Text } from '@chakra-ui/react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';
import { FaDev } from 'react-icons/fa';
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
          placeholder="leerob"
          label="GitHub"
        />
        <SocialInputElement
          marginLeft={true}
          icon={<BsTwitter />}
          placeholder="@elonmusk"
          label="Twitter"
        />
      </Stack>
      <Stack flexDirection="row" spacing={0}>
        <SocialInputElement
          icon={<BsLinkedin />}
          placeholder="Tanmay Bhat"
          label="LinkedIn"
        />
        <SocialInputElement
          marginLeft={true}
          icon={<BsFacebook />}
          placeholder="markzuckerberg"
          label="Facebook"
        />
      </Stack>
      <Stack flexDirection="row" spacing={0}>
        <SocialInputElement
          icon={<SiHashnode />}
          placeholder="@eleftheriabatsou"
          label="Hashnode"
        />
        <SocialInputElement
          marginLeft={true}
          icon={<FaDev />}
          placeholder="thepracticaldev"
          label="Dev.to"
        />
      </Stack>
    </Stack>
  );
}

export default SocialLinks;
