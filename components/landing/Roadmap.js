import { Heading, Stack, VStack } from '@chakra-ui/react';
import { roadmap } from '../../utils/landing-links';
import Container from './Container';
import RoadMapDetail from './ui/RoadMapDetail';

function Roadmap() {
  return (
    <Container>
      <VStack>
        <Heading size="xl" fontWeight="bold" variant="orange">
          Roadmap
        </Heading>

        {/* roadmap */}
        <Stack gap={5} style={{ marginTop: '2rem' }}>
          {Object.keys(roadmap).map((key) => (
            <RoadMapDetail key={key} index={key} title={roadmap[key].title} />
          ))}
        </Stack>
      </VStack>
    </Container>
  );
}

export default Roadmap;
