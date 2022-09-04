import { Button } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

function RepoCTA() {
  return (
    <a href="https://github.com/geobrodas" rel="noopener noreferrer">
      <Button
        width={'fit-content'}
        // style={{
        //   marginTop: '2rem',
        // }}
        rounded={'2xl'}
        variant={'orange'}
        fontSize={'1rem'}
        padding={{ base: '1.5rem', md: '1.8rem' }}
        iconSpacing={'1rem'}
        rightIcon={<SiGithub fontSize={'1.5rem'} />}
      >
        GitHub repository
      </Button>
    </a>
  );
}

export default RepoCTA;
