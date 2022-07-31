import Head from 'next/head';
import LandingLayout from '../layouts/LandingLayout';

import Landing from '../components/landing/landing';

export default function Home() {
  return (
    <LandingLayout>
      <Head>
        <title>Linksnap - One place for your links</title>
        <meta
          name="description"
          content="Free, Open source alternative for sharing links"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Linksnap - One place for your links" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:///linksnap.vercel.app" />
        <meta
          property="og:title"
          content="Linksnap - One place for your links"
        />
        <meta
          property="og:description"
          content="Free, Open source alternative for sharing links"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1659271314/LINKSNAP_doy7wr.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://linksnap.vercel.app" />
        <meta
          property="twitter:title"
          content="Linksnap - One place for your links"
        />
        <meta
          property="twitter:description"
          content="Free, Open source alternative for sharing links"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dapafwlvo/image/upload/v1659271314/LINKSNAP_doy7wr.png"
        />
      </Head>

      <Landing />
    </LandingLayout>
  );
}
