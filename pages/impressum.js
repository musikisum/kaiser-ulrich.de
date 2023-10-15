import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Impressum ...',
  description: 'Auf dieser Seite finden Sie alle formalen Angaben sowie Möglichkeiten, mich zu kontaktieren.',
  filter: 'impressum',
  slug: '/impressum'
}

const Formales = () => {
  return <>
    <Head>
      <title>Formales</title>
      <meta name="description" content="Formales | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />   

    <Text>Hallo Impressum</Text>
    
  </>
}

Formales.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false}>
      {page}
    </Layout>
  )
}

export default Formales;