import { getSession } from 'next-auth/react';
import SignIn from '../../components/auth/SignIn';

function SignInPage() {
  return <SignIn />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false, // if we want to permanently redirect to auth page or not ?
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default SignInPage;
