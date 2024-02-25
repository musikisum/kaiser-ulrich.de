import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Heading, Text, Link } from '@chakra-ui/react';
import SitemapProvider from './components/sitemapBuilder';

import style from './404.module.css';

const options = {
  title: 'Sitemap',
  description: 'Hier können Sie sich einen Überblick über die Struktur meiner Homepage verschaffen und zu den entsprechenden Seiten navigieren.',
  filter: 'sitemap',
  slug: '/sitemap'
}

const siteMap = () => {
  return <>
      <div className={style.main}>
        <Head>
          <title>Sitemap</title>
          <meta name="description" content="Sitemap | Ulrich Kaiser" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/icon.png" />
        </Head>
        <PageHeader options={ options } />
        <SitemapProvider />
      </div>
    </>
}

siteMap.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={true} showheaven={true}>
      {page}
    </Layout>
  )
}

export default siteMap;