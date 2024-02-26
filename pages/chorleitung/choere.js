import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import VideoWrapper from '../components/videoWrapper';
import { Text, Image, Heading, Divider, Flex, Box, HStack } from '@chakra-ui/react';

const options = {
  title: 'Consortium Musicum',
  description: 'Hier finden finden Sie Informationen zu den Chören Consortium Musicum Berlin, Ensemberlino Vocale, Artecanto, Chor des Jungen Ensembles Berlin, Männerchor der Bäcker-Innung Berlin-Nord und Gesangsverein TSV Gesundbrunnen, die ich zwischen 1981 und 2000 in Berlin geleitet habe.',
  filter: 'chorleitung',
  slug: '/chorleitung/choere'
}

const video = {
  url: '/medien/kaiser-das-kinderhauslied.mp4',
  posterUrl: '',
  title: '',
  description: 'Kinderchor',
  filter: 'projekte'
}

import style from './choere.module.css';
import { divide } from 'lodash';

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
          <Image src='/images/chor-consortium.jpg' width='100%' />
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
          <Image src='/images/chor-ensemberlino.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
          Das <a href='https://ensemberlino.de/' className='underline'>Ensemberlino Vocale</a> (Berlin) wurde 1991 von Ulrich Kaiser gegründet um Chorwerke aller Epochen zur Aufführung zu bringen. 1992 bestand der Chor aus 15 Sängerinnen und Sängern, z.T. mit abgeschlossener oder begonnener Gesangsausbildung. In dieser Zeit entstand eine CD mit Werken von Johannes Brahms (Liebesliederwalzer Op. 52, Op. 42, Op. 93a und Op. 104). Durch Konzert- sowie Rundfunkauftritte hat sich der Chor einen festen Platz im Berliner Musikleben erobern können. Nach seiner Berufung 1997 an die Hochschule für Musik und Theater in München legte Ulrich Kaiser die Leitung des Ensembles nieder.
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

      <Text as='b'>Hörbeispiele eines Gemeinschaftskonzerts von Consortium Musicum und Ensemberlino Vocale:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/kaiser-choere-bruckner-osjusti.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, Os iusti
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/kaiser-choere-bruckner-avemaria.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, Ave Maria
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/kaiser-choere-bruckner-locusiste.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, Locus iste
        </Box>
      </Flex>  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/kaiser-choere-bruckner-vexillaregis.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, Vexilla regis
        </Box>
      </Flex>  

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className="headingH4">
        Kinderchor des Kinderhauses Sankt Josef (Karlsfeld)
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
         <VideoWrapper video={video} />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
            <Divider mt='16px' h='0' bg='white' color='white' />
            Mit dem Kinderchor vom <a href='https://www.erzbistum-muenchen.de/pfarrei/pv-dachau-hl-kreuz-st-peter/KiTa-Verbund-Hl-Kreuz/Einrichtungen/kinderhaus-st-josef-karlsfeld' className='underline'>Kinderhaus Sankt Josef</a> verbindet mich nur ein kurzes Intermezzo (quasi als Gastdirigent). Da mein Sohn in diesem tollen ort war, hatte ich für dieses Ensemble der Kleinsten ein <a href='https://oer-musik.de/oer-das-kinderhauslied' className='underline'>Kinderhauslied</a> komponiert. Die Zusammenarbeit mit den Kindern war kurz, jedoch einprägsam und wunderschön! 
          </div>
        </div>
      </div>
      <Divider mt='20px' h='0' bg='white' />
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='/medien/kaiser-das-kinderhauslied.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Ulrich Kaiser, Das Kinderhauslied (= OpenBook 10), Karlsfeld 2015. Mix/Master: Daniel Scholz, Lizenz: CC BY. 
        </Box>
      </Flex>    

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className="headingH4">
        Artecanto
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <div className={style.chorText}>
            Der Chor Artecanto ist ein kleiner Projektchor aus 11 Sängerinnen und Sängern, den ich für Aufführung von Chorwerken in kleiner Besetzung 1999 gegründet habe und der einige (wenige) Konzert bestritten hat.  
          </div>
        </div>
      </div>    

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className="headingH4">
        Chor des Jungen Ensembles Berlin
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <Image src='/images/chor-des-jeb.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
            Den Chor des Jungen Ensemble Berlins habe ich zwischen 1989 und 1992 geleitet (das Orchester hatte zur gleichen Zeit Gereon Kremp übernommen). Dieser Chor war der erste und einzige Chor, bei dem man sich um das <i>Schleppen</i> (ein langsamer Singen als von der Leitung geplant) keine Sorgen machen musste. Denn der lebhafte Chor hatte damals die seltene Angewohnheit, beim Singen schneller Chorliteratur von alleine schneller zu werden (dem Ensemble verdanke ich daher einige der virtuosesten Aufführungen schneller Chormusik :)
          </div>
        </div>
      </div>    

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className="headingH4">
        Chor der Bäcker-Innung Berlin Nord und Sangesriege des TSVG
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <Image src='/images/chor-wedding.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
            Meine Chorleitungstätigkeiten begonnen habe ich mit mit 18 Jahren (1981) und der Übernahme der Männerchöre der Bäcker-Innung Berlin Nord und der Sangesriege des TSV Gesundbrunnen. Bei der Übernahme sangen in beiden Chöre noch über 60 Männer! Aufgrund der Altersstruktur und natürlicher Abgänge habe ich zuerst Frauenchöre aus den Ehefrauen gegründet und später dann alle Chöre zusammengelegt, um die Singefähigkeit zu erhalten. Diesen Chören verdanke ich viel, zum Beispiel Erfahrungen, Aufführungen von Eigenkompositionen, menschlich wertvolle Begegnungen und auch große Hilfsbereitschaft (der ich z.B. einen Großteil der Ausstattung meiner ersten eigenen Wohnung verdanke). Nach über acht Jahren musste ich diesen Chor aus beruflichen Gründen abgeben.  
          </div>
        </div>
      </div>    

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