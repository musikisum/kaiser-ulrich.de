import Head from 'next/head';
import Layout from './components/layout';
import HomeImage from './components/homeImage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Prof. Dr. Ulrich Kaiser</title>
        <meta name="description" content="Homepage von Prof. Dr. Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeImage />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={true}>
      {page}
    </Layout>
  )
}
