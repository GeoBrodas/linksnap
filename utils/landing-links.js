import { BiStats } from 'react-icons/bi';

import { FaMobileAlt } from 'react-icons/fa';

import { FaPaperPlane } from 'react-icons/fa';

export const navlinks = {
  About: '#-about',
  Features: '/features',
  How_to_use: '/how-to',
};

export const footerLinks = {
  LinkedIn: 'https://www.linkedin.com/in/georgeyvb/',
  GitHub: 'https://github.com/GeoBrodas',
  Twitter: 'https://twitter.com/BrodasGeo',
  Hashnode: 'https://hashnode.com/@geobrodas',
};

export const featureData = {
  Stats: {
    title: 'Stats',
    description:
      'See your stats from your major platforms like GitHub, Hashnode, Dev.to (coming soon).',
    icon: <BiStats color="black" size={'50px'} style={{ margin: '0 auto' }} />,
  },

  crossplatform: {
    title: 'Cross-platform',
    description:
      'Linksnap is a cross-platform application, its responsive and works on all devices.',
    icon: (
      <FaMobileAlt color="black" size={'50px'} style={{ margin: '0 auto' }} />
    ),
  },

  share: {
    title: 'Profile Page',
    description:
      'Share a unique profile page with your friends, and on social handles',
    icon: (
      <FaPaperPlane color="black" size={'50px'} style={{ margin: '0 auto' }} />
    ),
  },
};

export const roadmap = {
  1: {
    title: 'Fetch Dev.to posts',
  },
  2: {
    title: 'Dynamic OG meta images while sharing',
  },
  3: {
    title: 'See Profile Insights',
  },
  4: {
    title: 'Modify Profile URL',
  },
  5: {
    title: 'Customizable theme for Profile Page',
  },
};
