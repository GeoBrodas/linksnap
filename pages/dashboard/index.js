import { getSession } from 'next-auth/react';
import Dashboard from '../../components/dashboard/Dashboard';

function DashboardPage() {
  return <Dashboard />;
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default DashboardPage;
