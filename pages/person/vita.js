import Head from 'next/head';
import { useState } from 'react';
import data from '../../data/vita.json'
import Layout from '../components/layout';
import { Button } from '@chakra-ui/react';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import ListComponent from '../components/listComponent';

const uid = new ShortUniqueId();

const options = {
  title: 'Lebenslauf',
  filter: 'person',
  slug: '/person/vita'
}

export default function Vita() {

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
      { data && <ListComponent data={data} inOrder={inOrder} theme='vom Lebenslauf' /> }
    </>
  
  )
}

Vita.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}