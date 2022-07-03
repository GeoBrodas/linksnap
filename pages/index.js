import Head from 'next/head';
import LandingLayout from '../layouts/LandingLayout';

import Landing from '../components/landing/landing';

export default function Home() {
  return (
    <LandingLayout>
      <Head>
        <title>DevTree</title>
        <meta name="description" content="PlanetScale Quickstart for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Landing />
    </LandingLayout>
  );
}

// export async function getStaticProps(context) {
//   const data = await prisma.product.findMany({
//     include: {
//       category: true,
//     },
//   });

//   //convert decimal value to string to pass through as json
//   const products = data.map((product) => ({
//     ...product,
//     price: product.price.toString(),
//   }));
//   return {
//     props: { products },
//   };
// }
