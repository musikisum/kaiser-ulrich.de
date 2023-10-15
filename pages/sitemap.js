import Head from 'next/head';
import ShortUniqueId from 'short-unique-id';
import Layout from '/pages/components/layout';
import PageHeader from '/pages/components/pagehaeder';
import { List, ListItem, Text } from '@chakra-ui/react';

import { sitemap } from '../data/sitemap';

const uid = new ShortUniqueId();

const options = {
  title: 'Sitemap',
  description: 'Hier teste ich aktuell die Pfade meiner neuen sitmap.json Datei!',
  filter: 'sitemap',
  slug: '/sitemap'
}

function getUrls() {
  const domain = sitemap.protocol + sitemap.domain;
  const urls = sitemap.pages.reduce((akku, current) => {
    for (const [key, value] of Object.entries(current)) {
      const adress = domain + key;
      akku.push(adress);
      for (const index in value) {
        akku.push(adress + value[index]);
      }
    }
    return akku;
  }, []);
  return [...new Set(urls)];;
}

const Sitemap = () => {
  return (
    <>
      <Head>
        <title>Sitemap</title>
        <meta name="description" content="Sitemap | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={options} />
      <List>
        {
          getUrls().map(entry => {
            return (
              <ListItem key={uid.seq()}>
                <Text>{entry}</Text>
              </ListItem>
            )
          })
        }
      </List>
    </>
  );
}

Sitemap.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Sitemap