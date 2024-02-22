import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text } from '@chakra-ui/react';


const options = {
  title: 'Open Music Academy (OMA)',
  description: 'About OMA ....',
  filter: 'projekte',
  slug: '/projekte/openmusicacademy'
}

const OpenMusicAcademy = () => {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Open Music Academy | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Text>Hier kommt etwas zur OMA hin ...</Text>
  </>
}

OpenMusicAcademy.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default OpenMusicAcademy;