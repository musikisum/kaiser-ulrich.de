import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Iframe from 'react-iframe'
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { Button, Divider, List, ListItem, Text } from '@chakra-ui/react';

import style from '../publikationen/index.module.css';

const uid = new ShortUniqueId();
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const options = {
  title: 'Vorträge (online)',
  description: '',
  filter: 'angebote',
  slug: '/angebote/vortraege-online'
}

function onContentChangeClick(event) {
  alert(event.target.value)
}

export default function VortraegeOnline() {

  const { data, error } = useSWR('/data/vortraege-online.json', fetcher);

  const [url, setUrl] = useState()
  const [currentUrl, setCurrentUrl] = useState();

  const onValueChangeClick = (event) => {
    setUrl(event.target.value);
  }

  useEffect(() => {
    setCurrentUrl(url);
  }, [url])

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Vorträge (online) | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />

      <Text>
        Wählen Sie einen Vortrag aus der Liste durch Anklicken aus.
      </Text>

      <Divider mt='60px' mb='60px' h='1px' bg='gray' />

      { data && <List m='12px 12px' spacing={3} listStyleType='square' style={{'listStylePosition': 'inside'}}>
        {
          data.map(item => {
          return (
            <ListItem key={uid.seq()}>
              <Button onClick={onValueChangeClick} value={item.url}>{item.description}</Button>
            </ListItem>
          )
        })
      }
        </List>
      }
      
      <Divider mt='60px' mb='60px' h='1px' bg='gray' />

      { data && <Iframe url={currentUrl}
          position="relative"
          width="100%"
          id="myId"
          height="648x"
          styles={{backgroudColor: 'white'}}
        />
      }
    </>  
  )
}

VortraegeOnline.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}