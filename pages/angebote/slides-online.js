import useSWR from 'swr';
import Head from 'next/head';
import Iframe from 'react-iframe'
import Layout from '../components/layout';
import { useState, useEffect } from 'react';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import data from '../../data/vortraege-online.json';
import VideoWrapper from '../components/videoWrapper';
import { Button, Flex, Text, Card, CardBody, CardHeader, Heading, Box, Divider } from '@chakra-ui/react';

const uid = new ShortUniqueId();

const options = {
  title: 'Slides (online)',
  description: '',
  filter: 'angebote',
  slug: '/angebote/slides-online'
}

const video = {
  url: '/medien/video-kaiser-keynote.mp4',
  posterUrl: '',
  title: '',
  description: 'Keynote-Vortrag zum GMTH-Kongress 2024'
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

      <Heading id="bewerbungsvideo" as='h3' className="headingH4">
        Musiktheorie in der Glaskugel<br/>
        Kontexte einer Musiktheorie im digitalen Wandel
      </Heading>
      <Text>
        Keynote-Vortrag auf dem 24. Jahreskongress der <i>Gesellschaft für Musiktheorie</i> an der <i>Brandenburgischen Technischen Universität Cottbus-Senftenberg</i>, Einführung in die Sektion II: »Post-pandemic era, Internationalisierung und Digitalisierung, Herausforderungen der Musiktheorie in aktueller Forschung und Lehre« am 4. Oktober 2024.
      </Text>
      <Text>
        <b>Abstract:</b> Anhand eines Rückblicks auf ausgewählte digitale und bildungspolitische Ereignisse der letzten 40 Jahre werden Entwicklungen der letzten vier Jahre reflektiert. Welche Leistungen kann Musiktheorie in Lehre und Forschung angesichts der Krise im Lehramtsbereich, den Wandlungen des Musikmarktes sowie der erstaunlichen Ergebnisse von Deep-Learning-Projekten wie ChatGPT, Udio & Co. noch erbringen? Werden wir als Einzelpersonen und als Gesellschaft die ungewisse Zukunft mitgestalten können oder liefern wir lediglich das Wissen zum Füttern der Maschinen? Ein Keynote zur Sektion II (Post-pandemic era, Internationalisierung und Digitalisierung. Herausforderungen der Musiktheorie in aktueller Forschung und Lehre) mit Fragen und Visionen ...
      </Text> 

      <Divider mt='60px' mb='60px' h='1px' bg='gray' />

      <VideoWrapper video={video}></VideoWrapper>

      <Card mb='60px'>
        <CardHeader>
          <Heading className='headingH3'>
            Aktuell verfügbare Online-Vorträge (Folien) zum Anschauen:  
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