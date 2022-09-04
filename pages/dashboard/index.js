import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';
import Dashboard from '../../components/dashboard/Dashboard';

function DashboardPage({ user }) {
  return <Dashboard user={user} />;
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req: req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    };
  }

  const prisma = new PrismaClient();
  let user;
  // fetch data
  try {
    user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
  } catch (e) {
    console.log(e);
  } finally {
    prisma.$disconnect();
  }

  return {
    props: {
      session,
      user,
    },
  };
}

export default DashboardPage;
