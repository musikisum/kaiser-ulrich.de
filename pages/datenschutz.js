import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Impressum ...',
  description: 'Auf dieser Seite finden Sie alle Angaben zum Datenschutz bzw. die Pflichtangaben gemäß DSGVO.',
  filter: 'datenschutz',
  slug: '/datenschutz'
}

const Datenschutz = () => {
  return <>
    <Head>
      <title>Datenschutz</title>
      <meta name="description" content="Datenschutz | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />   

    <Text>Hallo Datenschutz</Text>
    
  </>
}

Datenschutz.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false}>
      {page}
    </Layout>
  )
}

export default Datenschutz;