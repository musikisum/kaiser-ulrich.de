import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text } from '@chakra-ui/react';

const options = {
  title: 'Dies & das ...',
  filter: 'chorleitung',
  slug: '/chorleitung/dies-und-das'
}

export default function DiesUndDas() {

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Dies & das ... | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      <Text>Hallo dies und das ...</Text>
    </>
  
  )
}

DiesUndDas.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}