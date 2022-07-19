import ProfileLayout from '../../layouts/ProfileLayout';
import BgProfileImage from './BgProfileImage';

function ProfileComponent({ user }) {
  return (
    <ProfileLayout>
      {/* Bg, image component */}
      <BgProfileImage
        name={user?.name}
        country={user?.country}
        occupation={user?.occupation}
        img={user?.imgUrl}
      />

      {/* Place, occupation, github.bio component */}

      {/* Social Links all - Twitter, Facebook, etc */}

      {/* GitHub stats - total repos, top repo, total stars, total forks recieved */}

      {/* Hashnode stats - total articles written, top article written, total likes and comments/views recieved */}

      {/* Dev to stats */}
    </ProfileLayout>
  );
}

export default ProfileComponent;
