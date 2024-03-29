import { BiStats } from 'react-icons/bi';

import { FaMobileAlt } from 'react-icons/fa';

import { FaPaperPlane } from 'react-icons/fa';

export const navlinks = {
  About: '#about',
  Features: '#features',
  Roadmap: '#roadmap',
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
    icon: <BiStats color="white" size={'50px'} style={{ margin: '0 auto' }} />,
    gradient: 'linear(to-r, green.200, pink.500)',
  },

  crossplatform: {
    title: 'Cross-platform',
    description:
      'Linksnap is a cross-platform application, its responsive and works on all devices.',
    icon: (
      <FaMobileAlt color="white" size={'50px'} style={{ margin: '0 auto' }} />
    ),
    gradient: 'linear(to-r, blue.200, purple.500)',
  },

  share: {
    title: 'Profile Page',
    description:
      'Share a unique profile page with your friends, and on social handles',
    icon: (
      <FaPaperPlane color="white" size={'50px'} style={{ margin: '0 auto' }} />
    ),
    gradient: 'linear(to-r, green.200, red.100)',
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
