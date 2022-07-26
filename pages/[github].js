import { PrismaClient } from '@prisma/client';
import ProfileComponent from '../components/profile-page/ProfileComponent';
import { fetchGitHubStats, fetchHashnodeStats } from '../helpers/fetch-stats';

function DevTreeProfilePage({ user, gitHubData, hashnodeData }) {
  let githubstats = JSON.parse(gitHubData);
  let hashnodestats = JSON.parse(hashnodeData);

  console.log(hashnodestats);

  return (
    <ProfileComponent
      user={user}
      gitHubData={githubstats}
      hashnodeData={hashnodestats}
    />
  );
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

  prisma.$disconnect();

  let gitHubData = await fetchGitHubStats(github);

  let hashnodeData = await fetchHashnodeStats(user.hashnode);

  return {
    props: {
      user,
      gitHubData: JSON.stringify(gitHubData),
      hashnodeData: JSON.stringify(hashnodeData),
    },
  };
}

export default DevTreeProfilePage;
