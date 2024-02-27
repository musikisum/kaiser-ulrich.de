import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import data from '../../data/fortbildungen.json';
import PageHeader from '../components/pagehaeder';
import ListComponent from '../components/listComponent';
import { Flex, Spacer, Text, Divider, Button } from '@chakra-ui/react';

const uid = new ShortUniqueId();

const options = {
  title: 'Fortbildungen',
  description: '',
  filter: 'angebote',
  slug: '/angebote/fortbildungen'
}

export default function Fortbildungen() {

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
      
      <Text>
        Auf dieser Seite finden Sie meine ein- oder mehrtägigen Fortbildungen für Lehrerinnen und Lehrer an allgemeinbildenden Schulen oder Musikschulen.
      </Text>
      <Text mt='10px'>
        Falls Sie mich kontaktieren möchten, weil Sie eine Fortbildung zu Themen der Musiktheorie und/oder des digitalen Lehren und Lernens planen, kontaktieren Sie mich bitte über meine im Impressum angegebene Adresse.
      </Text>

      <Divider mt='60px' mb='40px' h='1px' bg='gray' />

      <div style={{'textAlign': 'right'}}>
        <Flex flexWrap='wrap'>
          { data && <Text mb='20px'>Ein Überblick über meine {data.length} Fortbildungsveranstaltungen seit 2002:</Text> }
          <Spacer />
          <Button mb='40px' bg='#E0F1F4' onClick={reverse}>
            { inOrder ? 'Reihenfolge umdrehen ↑' : 'Reihenfolge von Geburt an ↓' }
          </Button>
        </Flex>
      </div>
      { data && <ListComponent data={data} inOrder={inOrder} theme='in den Fortbildungen' /> }
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