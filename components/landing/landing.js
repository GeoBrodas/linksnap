import { Stack } from '@chakra-ui/react';
import About from './About';
import Contributions from './Contributions';
import Features from './Features';
import Hero from './Hero';
import Roadmap from './Roadmap';

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

      <Features />

      <Roadmap />

      <Contributions />
    </Stack>
  );
}

export default Landing;
