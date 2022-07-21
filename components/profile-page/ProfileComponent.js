import Head from 'next/head';
import ProfileLayout from '../../layouts/ProfileLayout';
import BgProfileImage from './BgProfileImage';
import SocialLinks from './SocialLinks';

function ProfileComponent({ user }) {
  return (
    <ProfileLayout>
      <Head>
        <title>
          {user.name} - {user.occupation}
        </title>
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

      {/* Hashnode stats - total articles written, top article written, total likes and comments/views recieved */}

      {/* Dev to stats */}
    </ProfileLayout>
  );
}

export default ProfileComponent;
