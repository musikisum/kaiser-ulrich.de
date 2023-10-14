import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { List, ListItem, ListIcon, Text, Heading } from '@chakra-ui/react';

import { sitemap } from '../../data/sitemap';

const uid = new ShortUniqueId();

const options = {
  title: 'Unterricht',
  description: 'Hier teste ich aktuell die Pfade meiner neuen sitmap.json Datei!'
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

const Unterricht = () => {
  return (
    <>
      <Head>
        <title>Artikel</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
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

Unterricht.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Unterricht