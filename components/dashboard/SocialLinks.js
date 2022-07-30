import { Stack, Text } from '@chakra-ui/react';
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { SiHashnode } from 'react-icons/si';
import { FaDev } from 'react-icons/fa';
import SocialInputElement from './social/SocialInputElement';

function SocialLinks({ user }) {
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

      <Stack flexDirection={{ base: 'column', md: 'row' }} spacing={0} gap={5}>
        <SocialInputElement
          icon={<BsGithub />}
          placeholder="leerob"
          label="GitHub"
          value={user?.github}
        />
        <SocialInputElement
          icon={<BsTwitter />}
          placeholder="@elonmusk"
          label="Twitter"
          value={user?.twitter}
        />
      </Stack>
      <Stack flexDirection={{ base: 'column', md: 'row' }} spacing={0} gap={5}>
        <SocialInputElement
          icon={<BsLinkedin />}
          placeholder="Tanmay Bhat"
          label="LinkedIn"
          value={user?.linkedin}
        />
        <SocialInputElement
          icon={<BsFacebook />}
          placeholder="markzuckerberg"
          label="Facebook"
          value={user?.facebook}
        />
      </Stack>
      <Stack flexDirection={{ base: 'column', md: 'row' }} spacing={0} gap={5}>
        <SocialInputElement
          icon={<SiHashnode />}
          placeholder="@eleftheriabatsou"
          label="Hashnode"
          value={user?.hashnode}
        />
        <SocialInputElement
          icon={<FaDev />}
          placeholder="thepracticaldev"
          label="Devto"
          value={user?.devto}
        />
      </Stack>
    </Stack>
  );
}

export default SocialLinks;
