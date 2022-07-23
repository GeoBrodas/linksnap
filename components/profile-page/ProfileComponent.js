import Head from 'next/head';
import ProfileLayout from '../../layouts/ProfileLayout';
import BgProfileImage from './BgProfileImage';
import GitHubStats from './github-stats/GitHubStats';
import NoGitHubStats from './github-stats/NoGitHubStats';
import SocialLinks from './SocialLinks';

function ProfileComponent({ user, gitHubData }) {
  return (
    <ProfileLayout>
      <Head>
        <title>{user.name}</title>
      </Head>

      {/* Bg, image component */}
      <BgProfileImage
        name={user?.name}
        country={user?.country}
        occupation={user?.occupation}
        img={user?.imgUrl}
      />

      {/* Social Links all - Twitter, Facebook, etc */}
      <SocialLinks
        twitter={user?.twitter}
        facebook={user?.facebook}
        linkedin={user?.linkedin}
        github={user?.github}
        devto={user?.devto}
        hashnode={user?.hashnode}
      />

      {/* GitHub stats - total repos, top repo, total stars, total forks recieved */}
      {gitHubData.message === 'Not Found' ? (
        <NoGitHubStats />
      ) : (
        <GitHubStats stats={gitHubData} />
      )}

      {/* Hashnode stats - total articles written, top article written, total likes and comments/views recieved */}

      {/* Dev to stats */}
    </ProfileLayout>
  );
}

export default ProfileComponent;
