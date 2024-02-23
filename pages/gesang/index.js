import Head from 'next/head';
import Layout from '../components/layout';
import { Text, Heading } from '@chakra-ui/react';
import PageHeader from '../components/pagehaeder';


const options = {
  title: 'Gesang',
  description: 'Auf dieser Seite finden Sie Informationen zu meinem Gesangsstudium und zu meinen Tätigkeiten als Sänger.',
  filter: 'gesang',
  slug: '/gesang'
}

const Gesang = () => {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Wissenschaft | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Heading className='headingH2'>
      Gesang (Tenor)
    </Heading>
    <Text>Hallo Tenor ...</Text>

  </>
}

Gesang.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Gesang;