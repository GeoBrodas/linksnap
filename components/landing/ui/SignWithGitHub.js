import Link from 'next/link';
import { Button } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si';

function SignWithGitHub() {
  return (
    <Link href="/auth/sign-in" passHref>
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
        Sign Up with GitHub
      </Button>
    </Link>
  );
}

export default SignWithGitHub;
