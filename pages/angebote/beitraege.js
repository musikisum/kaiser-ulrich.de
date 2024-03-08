import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/layout';
import data from '../../data/vortraege.json'
import PageHeader from '../components/pagehaeder';
import ListComponent from '../components/listComponent';
import { Flex, Spacer, Text, Button } from '@chakra-ui/react';

const options = {
  title: 'Vorträge',
  description: 'Auf dieser Seite finden Sie eine Auflistung über meine Vorträge, die aktuell in Vorbereitung sind bzw. die bereits stattgefunden haben.',
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
        { data && <Text mb='20px'>Die {data.length} Vorträge im Überblick:</Text> }
        <Spacer />
          <Button mb='40px' bg='#E0F1F4' onClick={reverse}>
            { inOrder ? 'Reihenfolge umdrehen ↑' : 'Reihenfolge von 1995 an ↓' }
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