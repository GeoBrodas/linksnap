import { extendTheme } from '@chakra-ui/react';

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
  },
});

export default theme;
