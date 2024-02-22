import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text } from '@chakra-ui/react';


const options = {
  title: 'ELMU',
  description: 'Elmu ...',
  filter: 'projekte',
  slug: '/projekte/elmu'
}

const Elmu = () => {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="ELMU | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Text>Hier kommt etwas zu elmu hin ...</Text>
  </>
}

Elmu.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Elmu;