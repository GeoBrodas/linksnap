import { Button } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

function RepoCTA() {
  return (
    <a href="https://github.com/geobrodas" rel="noopener noreferrer">
      <Button
        width={'fit-content'}
        style={{
          marginTop: '2rem',
        }}
        variant={'orange'}
        fontSize={'1rem'}
        iconSpacing={'1rem'}
        leftIcon={<SiGithub fontSize={'1.5rem'} />}
      >
        GitHub Repo (Show Stars)
      </Button>
    </a>
  );
}

export default RepoCTA;
