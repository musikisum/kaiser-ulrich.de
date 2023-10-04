import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Wissenschaftliches Profil',
  description: 'Auf dieser Seite finden Sie Informationen zu meinem Wissenschaftsverständnis und meinen Forschungsschwerpunkten.',
  filter: 'wissenschaft',
  slug: '/wissenschaft/profil'
}

export default function Profil() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />
      <div>Hallo Profil!</div>
    </>
  )
}

Profil.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}