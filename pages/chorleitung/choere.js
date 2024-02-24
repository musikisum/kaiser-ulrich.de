import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text, Image, Spacer, Container, Heading, Divider, Flex, Box, HStack } from '@chakra-ui/react';

const options = {
  title: 'Consortium Musicum',
  description: 'Hier finden finden Sie Informationen zu den Chören Consortium Musicum Berlin, Ensemberlino Vocale, Artecanto, Chor des Jungen Ensembles Berlin, Bächer-Gesangverein Berlin-Nord und Gesangsverein TSV Gesundbrunnen, die ich zwischen 1981 und 2000 in Berlin geleitet habe.',
  filter: 'chorleitung',
  slug: '/chorleitung/choere'
}

import style from './choere.module.css';

export default function Choere() {

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Consortium Musicum | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />      

      <Heading as='h3' className="headingH4">
        Consortium Musicum
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <Image src='/images/consortium.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
            Das <a href='https://wp.consortium-musicum-berlin.de/' className='underline'>Consortium Musicum Berlin</a> wurde als Schulchor gegründet. Nach Ingo Ingensand und Franz Riemer übernahm Ulrich Kaiser 1988 die Leitung des Ensembles. Unter seiner Leitung wurden mehr als 20 verschiedene Programme (»a capella« und mit Orchester) in mehr als 50 Konzerten aufgeführt. Wegen des beruflich veranlassten Umzugs nach München legte Ulrich Kaiser 2000 die künstlerische Leitung des Ensembles nieder.
          </div>
        </div>
      </div>
      <Divider m='10px'/>
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/cmb-mozart.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Wolfgang Amadeus Mozart, Requiem KV 626, 2. Satz, »Kyrie«  (Ausschnitt)
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/cmb-bach.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johann Sebastian Bach, Kantate BWV 191, »Et in terra pax hominibus« (Ausschnitt)
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/cmb-michael.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Tobias Michael, Motette »Unser Trübsal« (Anfang)
        </Box>
      </Flex>  

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />  

      <Heading as='h3' className="headingH4">
        Ensemberlino Vocale
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <Image src='/images/ensemberlino.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
          Das <a href='https://ensemberlino.de/' className='underline'>Ensemberlino Vocale</a> (Berlin) wurde 1991 von Ulrich Kaiser gegründet um Chorwerke aller Epochen zur Aufführung zu bringen. 1992 bestand der Chor aus 15 Sängerinnen und Sängern, z.T. mit abgeschlossener oder begonnener Gesangsausbildung. In dieser Zeit entstand die CD mit Werken von Johannes Brahms (Liebesliederwalzer op.52, op.42, op.93a und op.104). Durch Konzert- sowie Rundfunkauftritte hat sich der Chor einen festen Platz im Berliner Musikleben erobern können. Nach seiner Berufung 1997 an die Hochschule für Musik und Theater in München legte Ulrich Kaiser die Leitung des Ensembles nieder.
          </div>
        </div>
      </div>
      <Divider m='10px'/>
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/ev-brahms-op52-11.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johannes Brahms, Liebesliederwalzer op. 52, Nr. 11, »Nein es ist nicht auszukommen mit den Leuten«
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/ev-brahms-op104-5.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johannes Brahms, weltliche Chorlieder op.104, Nr. 5, »Im Herbst«
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/ev-schuetz-also.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Heinrich Schütz, Geistliche Chormusik 1648, »Also hat Gott die Welt geliebt« SWV 380
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/ev-lechner-gott.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Leonhard Lechner, »Gott b'hüte dich«
        </Box>
      </Flex>

      <Divider mt='40px' mb='40px' h='1px' bg='gray' /> 

    </>
  
  )
}

Choere.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}