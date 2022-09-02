import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

function SignWithGitHub() {
  return (
    <Link href="/auth/sign-in" passHref>
      <Button
        width={'fit-content'}
        // style={{
        //   marginTop: '2rem',
        // }}
        rounded="xl"
        variant={'orange'}
        size="sm"
        fontSize={{ md: '.9rem', lg: '1rem' }}
        padding={{ base: '1.45rem', md: '1.65rem' }}
        iconSpacing={'1rem'}
        leftIcon={<SiGithub fontSize={'1.5rem'} />}
      >
        Sign Up with GitHub
      </Button>
    </Link>
  );
}

export default SignWithGitHub;
