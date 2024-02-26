import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/layout';
import data from '../../data/vortraege.json'
import PageHeader from '../components/pagehaeder';
import ListComponent from '../components/listComponent';
import { Flex, Spacer, Text, Button } from '@chakra-ui/react';

const options = {
  title: 'Vorträge',
  description: '',
  filter: 'angebote',
  slug: '/angebote/beitraege'
}

export default function Beitraege() {

  const [inOrder, setInOrder] = useState(true);

  function reverse() {
    setInOrder(!inOrder);
  }

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Vorträge | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <PageHeader options={ options } />

      <Flex flexWrap='wrap'>
        { data && <Text mb='20px'>Ein Überblick über meine {data.length} Vorträge seit 1995:</Text> }
        <Spacer />
          <Button mb='40px' bg='#E0F1F4' onClick={reverse}>
            { inOrder ? 'Reihenfolge umdrehen ↑' : 'Reihenfolge von Geburt an ↓' }
          </Button>
       </Flex>

      { data && <ListComponent data={data} inOrder={inOrder} theme='der Vorträge' /> }

    </>
  
  )
}

Beitraege.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}