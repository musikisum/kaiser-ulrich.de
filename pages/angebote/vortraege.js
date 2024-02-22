import useSWR from 'swr';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import ListComponent from '../components/listComponent';

import { Button } from '@chakra-ui/react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const options = {
  title: 'Vorträge',
  filter: 'angebote',
  slug: '/angebote/vortraege'
}

export default function Vortraege() {

  const { data, error } = useSWR('/data/vortraege.json', fetcher);
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
      <Flex>
          { data && <Text>Ein Überblick über meine {data.length} Vorträge seit 1995:</Text> }
          <Spacer />
          <Button mb='40px' bg='#E0F1F4' onClick={reverse}>
            { inOrder ? 'Reihenfolge umdrehen ↑' : 'Reihenfolge von Geburt an ↓' }
          </Button>
        </Flex>
      { data && <ListComponent data={data} inOrder={inOrder} /> }
    </>
  
  )
}

Vortraege.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}