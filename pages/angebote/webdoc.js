import useSWR from 'swr';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import ListComponent from '../components/listComponent';

import { Button } from '@chakra-ui/react';

const uid = new ShortUniqueId();
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const options = {
  title: 'Lebenslauf',
  filter: 'person',
  slug: '/person/vita'
}

export default function WebDoc() {

  const { data, error } = useSWR('/data/vita.json', fetcher);
  const [inOrder, setInOrder] = useState(true);

  function reverse() {
    setInOrder(!inOrder);
  }

  return (
    <>
      <Head>
        <title>Lebenslauf</title>
        <meta name="description" content="Lebenslauf | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      <div style={{'textAlign': 'right'}}>
        <Button mb='40px' mr='10%' bg='#E0F1F4' onClick={reverse}>
          { inOrder ? 'Reihenfolge umdrehen ↑' : 'Reihenfolge von Geburt an ↓' }
        </Button>
      </div>
      { data && <ListComponent data={data} inOrder={inOrder} /> }
    </>
  
  )
}

WebDoc.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}