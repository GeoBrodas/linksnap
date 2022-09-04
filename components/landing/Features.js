import { Heading, Stack } from '@chakra-ui/react';
import Container from './Container';
import FeatureBox from './ui/FeatureBox';

import { featureData } from '../../utils/landing-links';

function Features() {
  return (
    <Container height="auto">
      <Heading size="xl" fontWeight="bold" variant="orange">
        Features
      </Heading>
      <Stack
        style={{
          marginTop: '3rem',
        }}
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        width={{ base: 'full', md: '90%', lg: '80%' }}
        gap={9}
        spacing={0}
        height={{ base: 'auto', sm: 'auto', md: '17rem' }}
        alignItems="center"
      >
        {Object.keys(featureData).map((key) => (
          <FeatureBox
            key={key}
            title={featureData[key].title}
            icon={featureData[key].icon}
            description={featureData[key].description}
            gradient={featureData[key].gradient}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default Features;
