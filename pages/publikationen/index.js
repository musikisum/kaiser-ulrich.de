import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, Text, Heading } from '@chakra-ui/react';

import style from './index.module.css';

import sitemap from "../../data/sitemap.json";

const options = {
  title: 'Publikationen',
  description: 'Hier finden Sie eine thematische Ordnung meiner Publikationen, z.B. eigenständige Publikationen in Verlagen, Artikel in Zeitschriften und Broschüren, OpenBooks, Open Educational Resources (Text, Bild, Video), Interviews usw.',
  filter: 'publikationen',
  slug: '/publikationen'
}

// import musicData from '../../data/musik.json';
// import booksData from '../../data/verlage.json';
// import musikanalyseNet from '../../data/summary.json';
// import onlineData from '../../data/gelegenheiten.json';

function CompareDates(date1, date2) {
  const d1 = Date.parse(date1)
  const d2 = Date.parse(date2)
  if(d1 > d2) {
    return 1
  } else if(d2 > d1) {
    return -1
  } else {
    return 0
  }
}

const Index = () => {
  return (
    <>
      <Head>
        <title>Publikationen</title>
        <meta name="description" content="Publikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <div>
        <Heading>Hallo Publikationen!</Heading>
      </div>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout text='Prof. Dr. Ulrich Kaiser – OER / Musiktheorie / Multimedia'>
      {page}
    </Layout>
  )
}

export default Index;
