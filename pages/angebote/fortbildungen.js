import useSWR from 'swr';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import ListComponent from '../components/listComponent';
import { Flex, Spacer, Text } from '@chakra-ui/react';

import { Button } from '@chakra-ui/react';

const uid = new ShortUniqueId();
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const options = {
  title: 'Fortbildungen',
  description: 'Auf dieser Seite finden Sie meine ein- oder mehrtägigen Fortbildungen für Lehrerinnen und Lehrer an allgemeinbildenden Schulen oder Musikschulen. Falls Sie mich kontaktieren möchten, weil Sie eine Fortbildung zu Themen der Musiktheorie und/oder des digitalen Lehren und Lernens planen, kontaktieren Sie mich bitte über eine meiner im Impressum angegebene Adressen.',
  filter: 'angebote',
  slug: '/angebote/fortbildungen'
}

export default function Fortbildungen() {

  const { data, error } = useSWR('/data/fortbildungen.json', fetcher);
  const [inOrder, setInOrder] = useState(true);

  function reverse() {
    setInOrder(!inOrder);
  }

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Fortbildungen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      <div style={{'textAlign': 'right'}}>
        <Flex>
          { data && <Text>Ein Überblick über meine {data.length} Fortbildungsveranstaltungen seit 2002:</Text> }
          <Spacer />
          <Button mb='40px' bg='#E0F1F4' onClick={reverse}>
            { inOrder ? 'Reihenfolge umdrehen ↑' : 'Reihenfolge von Geburt an ↓' }
          </Button>
        </Flex>
      </div>
      { data && <ListComponent data={data} inOrder={inOrder} /> }
    </>
  
  )
}

Fortbildungen.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}