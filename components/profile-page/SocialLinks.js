import { Stack, theme } from '@chakra-ui/react';
import {
  BsFacebook,
  BsGithub,
  BsLinkedin,
  BsQuestion,
  BsTwitter,
} from 'react-icons/bs';
import { FaDev } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import styles from './profile.module.css';

function SocialLinks({ twitter, facebook, linkedin, github, devto, hashnode }) {
  // make an object of the props
  const socialLinks = {
    Twitter: twitter,
    Facebook: facebook,
    LinkedIn: linkedin,
    GitHub: github,
    DevTo: devto,
    Hashnode: hashnode,
  };

  function displayIcon(icon) {
    switch (icon) {
      case 'Twitter':
        return (
          <BsTwitter
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
      case 'Facebook':
        return (
          <BsFacebook
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
      case 'LinkedIn':
        return (
          <BsLinkedin
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
      case 'GitHub':
        return (
          <BsGithub
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
      case 'DevTo':
        return (
          <FaDev
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
      case 'Hashnode':
        return (
          <SiHashnode
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
      default:
        return (
          <BsQuestion
            color={'white'}
            className={styles.logo}
            style={{
              marginRight: '1rem',
            }}
          />
        );
    }
  }

  function urlGenerator(url) {
    switch (url) {
      case 'Twitter':
        return `https://twitter.com/${socialLinks.Twitter}`;

      case 'Facebook':
        return `https://facebook.com/${socialLinks.Facebook}`;

      case 'LinkedIn':
        return `https://linkedin.com/in/${socialLinks.LinkedIn}`;

      case 'GitHub':
        return `https://github.com/${socialLinks.GitHub}`;

      case 'DevTo':
        return `https://dev.to/${socialLinks.DevTo}`;

      case 'Hashnode':
        return `https://hashnode.com/@${socialLinks.Hashnode}`;

      default:
        return `https://www.google.com/`;
    }
  }

  return (
    <Stack
      style={{
        marginTop: '1.3rem',
      }}
      flexDirection="row"
      spacing={0}
      justify={'flex'}
      width={'55vw'}
    >
      {Object.keys(socialLinks).map((key) => {
        if (socialLinks[key]) {
          return (
            <a
              key={key}
              href={urlGenerator(key)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {displayIcon(key)}
            </a>
          );
        }
      })}
    </Stack>
  );
}

export default SocialLinks;
