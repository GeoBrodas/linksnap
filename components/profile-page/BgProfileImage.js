import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

// icons
import { HiLocationMarker } from 'react-icons/hi';
import { color } from './bgcolor';

import styles from './profile.module.css';

function BgProfileImage({ name, country, occupation, img, bgVariant }) {
  function getBgVariant(variant) {
    return Object.keys(color).includes(variant) ? variant : 'ocean';
  }

  console.log(color[getBgVariant(bgVariant)].backgroundImage);

  return (
    <Stack
      width={{ base: '85vw', md: '80vw', lg: '60vw' }}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Stack
        width={'full'}
        position={'relative'}
        height={'14rem'}
        marginY={'1rem'}
      >
        {/* gradient bg */}
        <Stack
          rounded={'xl'}
          width="100%"
          height="10rem"
          bgGradient={color[getBgVariant(bgVariant)].backgroundImage}
        />

        {/* Image on top */}
        <Stack
          width={{ base: '120px', md: '140px' }}
          height={{ base: '120px', md: '140px' }}
          position={'absolute'}
          bottom={{ base: '1rem', md: '0' }}
          left={{ base: '1rem', md: '2rem' }}
        >
          <Image
            src={img}
            alt={name}
            width={140}
            height={140}
            className={styles.bgimage}
            style={{
              borderRadius: '100%',
            }}
            layout="responsive"
          />
        </Stack>
      </Stack>

      <Stack width={{ base: '80vw', md: '75vw', lg: '55vw' }}>
        <Stack flexDirection={'row'} alignItems={'center'} spacing={0}>
          <Text fontWeight={'bold'} fontSize={'xl'} variant="orange">
            {name}
          </Text>

          <Stack
            style={{
              marginLeft: '1rem',
            }}
            flexDirection={'row'}
            spacing={0}
            alignItems={'center'}
          >
            <HiLocationMarker color="#a2a2be" />
            <Text
              style={{
                marginLeft: '0.1rem',
              }}
              variant="orange"
              fontSize={'lg'}
            >
              {country}
            </Text>
          </Stack>
        </Stack>
        <Text fontSize={'lg'} variant={'orange'}>
          {occupation}
        </Text>
      </Stack>
    </Stack>
  );
}

export default BgProfileImage;
