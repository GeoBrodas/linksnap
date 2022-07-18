import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
        @font-face {
            font-family: 'Varela';
            font-style: normal;
            font-weight: normal;
            src: url(/public/fonts/VarelaRound-Regular.ttf) format('ttf');
        }
        `}
  />
);

export default Fonts;
