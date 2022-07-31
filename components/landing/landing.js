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

      <section id="about">
        <About />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="roadmap">
        <Roadmap />
      </section>

      <Contributions />
    </Stack>
  );
}

export default Landing;
