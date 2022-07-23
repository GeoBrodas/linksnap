import { extendTheme, theme as base } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        orange: {
          bg: '#ff8906',
          color: '#fffffe',
          borderRadius: '0',
          fontWeight: 'bold',
          padding: '2rem',
        },
      },
    },
    Text: {
      variants: {
        orange: {
          color: '#a7a9be',
        },
      },
    },
    Heading: {
      variants: {
        orange: {
          color: '#fffffe',
        },
        logo: {
          fontFamily: `'Varela Round' , sans-serif`,
        },
      },
    },
    FormLabel: {
      variants: {
        orange: {
          color: '#a7a9be',
        },
        white: {
          color: '#0f0e17',
          fontWeight: 'normal',
        },
      },
    },
    Stat: {
      variants: {
        orange: {
          color: 'white',
        },
      },
    },
  },

  styles: {
    global: (StyleFunctionProps) => ({
      body: {
        bg: '#0f0e17',
      },
    }),
  },
});

export default theme;
