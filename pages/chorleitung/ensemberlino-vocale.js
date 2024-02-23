import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text } from '@chakra-ui/react';

const options = {
  title: 'Ensemberlino Vocale',
  filter: 'chorleitung',
  slug: '/chorleitung/ensemberlino-vocale'
}

export default function EnsemberlinoVocale() {

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Ensemberlino Vocale | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      <Text>Hallo Ensemberlino Vocale ...</Text>
    </>
  
  )
}

EnsemberlinoVocale.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}