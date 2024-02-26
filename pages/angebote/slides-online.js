import useSWR from 'swr';
import Head from 'next/head';
import Iframe from 'react-iframe'
import Layout from '../components/layout';
import { useState, useEffect } from 'react';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import data from '../../data/vortraege-online.json';
import { Button, Flex, Text, Card, CardBody, CardHeader, Heading, Box } from '@chakra-ui/react';

const uid = new ShortUniqueId();

const options = {
  title: 'Slides (online)',
  description: '',
  filter: 'angebote',
  slug: '/angebote/slides-online'
}

export default function SlidesOnline() {

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

      <Card mb='60px'>
        <CardHeader>
          <Heading className='headingH3'>
            Aktuell verfügbare Vorträge zum Anschauen:  
          </Heading>
        </CardHeader>

        <CardBody>          
          { data && <Flex flexWrap='wrap' spacing='4'>
              {
                data.map(item => {
                return (
                  <Box key={uid.seq()} flex='1' m='10px' style={{'maxWidth': '180px'}}> 
                    <Button 
                      onClick={onValueChangeClick} 
                      value={item.url}
                      bg='white'
                      pl='10px'
                      >
                      Vortrag anzeigen ...
                    </Button>
                    <Text pl='10px'>
                      {item.description}
                    </Text>
                  </Box>)
                })
              }            
            </Flex>
          }
        </CardBody>
      </Card>

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

SlidesOnline.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}