import { Stack } from '@chakra-ui/react';
import About from './About';
import Hero from './Hero';

function Landing() {
  return (
    <Stack
      style={{
        marginTop: '3rem',
        alignItems: 'center',
      }}
    >
      <Hero />

      <About />
    </Stack>
  );
}

export default Landing;
