import { Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

// icons
import { HiLocationMarker } from 'react-icons/hi';

function BgProfileImage({ name, country, occupation, img }) {
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
          bgGradient="linear(to-br, #b6cded, #97b3dc, #799aca, #5a81b9, #3969a8)"
        />

        {/* Image on top */}
        <Stack position={'absolute'} bottom={'0'} left={'2rem'}>
          <Image
            src={img}
            alt={name}
            width={140}
            style={{
              borderRadius: '100%',
            }}
            height={140}
            layout="fixed"
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
