import { PrismaClient } from '@prisma/client';
import ProfileComponent from '../components/profile-page/ProfileComponent';

function DevTreeProfilePage({ user }) {
  return <ProfileComponent user={user} />;
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();

  const users = await prisma.user.findMany();

  const paths = users.map((user) => ({
    params: {
      github: user.github,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { github } = context.params;

  const prisma = new PrismaClient();

  console.log('Running static props');

  const user = await prisma.user.findUnique({
    where: {
      github: github,
    },
  });

  return {
    props: {
      user,
    },
  };
}

export default DevTreeProfilePage;
