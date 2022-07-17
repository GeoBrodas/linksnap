import Head from 'next/head';
import LandingLayout from '../layouts/LandingLayout';

import Landing from '../components/landing/landing';

export default function Home() {
  return (
    <LandingLayout>
      <Head>
        <title>Linksnap: Gotta catch&apos;em all</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </LandingLayout>
  );
}
