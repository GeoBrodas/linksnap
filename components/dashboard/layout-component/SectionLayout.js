import { Stack } from '@chakra-ui/react';

function SectionLayout({ children }) {
  return (
    <Stack
      style={{
        marginTop: '3rem',
      }}
      bgColor="white"
      rounded={'2xl'}
      padding={'1.4rem'}
    >
      {children}
    </Stack>
  );
}

export default SectionLayout;
