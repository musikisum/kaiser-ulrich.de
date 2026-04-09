import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import VideoWrapper from '../components/videoWrapper';
import { Text, Image, Heading, Divider, Flex, Box } from '@chakra-ui/react';

const options = {
  title: 'Chöre',
  description: 'Hier finden finden Sie Informationen zu den Chören Consortium Musicum Berlin, Ensemberlino Vocale, Artecanto, Chor des Jungen Ensembles Berlin, Männerchor der Bäcker-Innung Berlin-Nord und Gesangsverein TSV Gesundbrunnen, die ich zwischen 1981 und 2000 in Berlin geleitet habe.',
  filter: 'chorleitung',
  slug: '/chorleitung/choere'
}

const video = {
  url: 'https://cdn.openmusic.academy/media-library/kaiser-das-kinderhauslied-LY9owLmDzW6TfLrJ79obAE.mp4',
  posterUrl: 'https://cdn.openmusic.academy/media-library/vorschaubild-ELeBq75XXMeSzuo5UaF7ME.jpg',
  title: '',
  description: 'Kinderchor',
  aspectRatio: '4/3'
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

      <Heading id='consortiummusicum' as='h3' className="headingH4">
        Consortium Musicum
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <Image src='/images/chor-consortium.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
            Das <a href='https://wp.consortium-musicum-berlin.de/' className='underline'>Consortium Musicum Berlin</a> wurde als Schulchor gegründet. Nach Ingo Ingensand und Franz Riemer übernahm ich 1988 die Leitung des Ensembles. Unter meiner Leitung habe ich mit den <i>Consorten</i> mehr als 20 verschiedene Programme (»a capella« und mit Orchester) erarbeitet und in mehr als 50 Konzerten aufgeführt. Wegen des beruflich veranlassten Umzugs nach München musste ich im Jahr 2000 die künstlerische Leitung des Ensembles niederlegen.
          </div>
        </div>
      </div>
      <Divider m='10px'/>
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/cmb-mozart.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Wolfgang Amadeus Mozart, <i>Requiem</i> KV 626 (Anfang)
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/cmb-bach.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johann Sebastian Bach, Kantate <i>Gloria in excelsis Deo</i> BWV 191 (Ausschnitt)
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/cmb-michael.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Tobias Michael, Motette <i>Unser Trübsal</i>
        </Box>
      </Flex>  

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />  

      <Heading id='ensemberlinovocale' as='h3' className="headingH4">
        Ensemberlino Vocale
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div className={style.chorItem}>
          <Image src='/images/chor-ensemberlino.jpg' width='100%' />
        </div>
        <div className={style.chorItem}>
          <div className={style.chorText}>
          Das <a href='https://ensemberlino.de/' className='underline'>Ensemberlino Vocale</a> (Berlin) habe ich 1991 gegründet, um Chorwerke aller Epochen zur Aufführung zu bringen. 1992 bestand der Chor aus 15 Sängerinnen und Sängern, z.T. mit abgeschlossener oder begonnener Gesangsausbildung. In dieser Zeit entstand eine CD mit Werken von Johannes Brahms (Liebesliederwalzer Op. 52, Op. 42, Op. 93a und Op. 104). Durch Konzert- sowie Rundfunkauftritte konnte sich der Chor einen festen Platz im Berliner Musikleben erobern. Nach seiner Berufung 1997 an die Hochschule für Musik und Theater in München habe ich die Leitung des Ensembles niedergelegt.
          </div>
        </div>
      </div>
      <Divider m='10px'/>
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/ev-brahms-op52-11.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johannes Brahms, Liebesliederwalzer op. 52, Nr. 11, <i>Nein es ist nicht auszukommen mit den Leuten</i>
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/ev-brahms-op104-5.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johannes Brahms, weltliche Chorlieder op.104, Nr. 5, <i>Im Herbst</i>
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/ev-schuetz-also.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Heinrich Schütz, Geistliche Chormusik 1648, <i>Also hat Gott die Welt geliebt</i> SWV 380
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/ev-lechner-gott.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Leonhard Lechner, <i>Gott b'hüte dich</i>
        </Box>
      </Flex>

      <Divider mt='40px' mb='40px' h='1px' bg='gray' /> 

      <Text as='b'>Hörbeispiele eines Gemeinschaftskonzerts der Chöre Consortium Musicum Berlin und Ensemberlino Vocale:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/kaiser-choere-bruckner-osjusti.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, <i>Os iusti</i>
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/kaiser-choere-bruckner-avemaria.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, <i>Ave Maria</i>
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/kaiser-choere-bruckner-locusiste.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, <i>Locus iste</i>
        </Box>
      </Flex>  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/kaiser-choere-bruckner-vexillaregis.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Anton Bruckner, <i>Vexilla regis</i>
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
            Mit dem Kinderchor vom <a href='https://www.erzbistum-muenchen.de/pfarrei/pv-dachau-hl-kreuz-st-peter/KiTa-Verbund-Hl-Kreuz/Einrichtungen/kinderhaus-st-josef-karlsfeld' className='underline'>Kinderhaus Sankt Josef</a> verbindet mich nur ein sehr kurzes Intermezzo (quasi als Gastdirigent). Da mein Sohn in diesem tollen Hort war, hatte ich für dieses Ensemble der Kleinsten ein <a href='https://oer-musik.de/oer-das-kinderhauslied' className='underline'>Kinderhauslied</a> komponiert. Die Zusammenarbeit mit den Kindern war kurz, einprägsam und wunderschön! 
          </div>
        </div>
      </div>
      <Divider mt='20px' h='0' bg='white' />
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/kaiser-das-kinderhauslied.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Ulrich Kaiser, <i>Das Kinderhauslied</i> (= OpenBook 10), Karlsfeld 2015. Mix/Master: Daniel Scholz, Lizenz: CC BY. 
        </Box>
      </Flex>    

      <Divider mt='40px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className="headingH4">
        Artecanto
      </Heading>

      <Divider mt='20px' mb='20px' h='0' bg='white' />

      <div className={style.chorContainer}>
        <div>
          Der Chor Artecanto war ein kleiner Projektchor aus 11 Sängerinnen und Sängern, den ich für Aufführung von Chorwerken in kleiner Besetzung 1999 gegründet habe und der nur einige (wenige) Konzerte bestritten hat. Mein Umzug nach München hat die Fortführung dieses Projekts leider verhindert.  
        </div>
      </div>
      <Divider mt='20px' mb='10px'/>
      <Text as='b'>Hörbeispiele:</Text>
      <Flex flexWrap='wrap' mt='20px'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/artecanto-schuetz-verleih-uns-frieden-prima-pars.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Heinrich Schütz, <i>Verleih uns Frieden</i> (prima pars)«
        </Box>
      </Flex>                  
      <Flex flexWrap='wrap'>
        <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
          <audio src='https://kaiser-ulrich.de/medien/artecanto-schein-da-jacob.mp3' controls></audio>
        </Box>
        <Box flex='1' pt='24px'>
          Johann Hermann Schein, <i>Da Jacob die Rede vollende hatte</i> (aus dem ›Israelisbrünnlein‹)
        </Box>
      </Flex>          

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
            Den Chor des Jungen Ensemble Berlins habe ich zwischen 1989 und 1992 geleitet (die Leitung des Orchesters hatte zur gleichen Zeit Gereon Kremp übernommen). Dieser Chor war der erste und einzige Chor, bei dem man sich um das <i>Schleppen</i> (das langsamer Singen als von der Leitung geplant) keine Sorgen machen musste. Denn dieser energiereiche und lebhafte Chor junger Sänerinnen und Sänger hatte damals die seltene Angewohnheit, beim Singen schneller Chorliteratur von ganz alleine schneller zu werden (dem Ensemble verdanke ich daher einige sehr virtuose Aufführungen :)
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
            Meine Chorleitungstätigkeiten begonnen habe ich mit 18 Jahren (1981) und der Übernahme der Männerchöre der Bäcker-Innung Berlin Nord und der Sangesriege des TSV Gesundbrunnen. Bei der Übernahme sangen in beiden Chöre noch über 60 Männer! Aufgrund der Altersstruktur und natürlicher Abgänge habe ich zuerst zwei Frauenchöre aus den Ehefrauen gegründet und später dann alle Chöre zusammengelegt, um die vierstimmige Singefähigkeit zu erhalten. Diesen Chören verdanke ich sehr viel, zum Beispiel Erfahrungen, Aufführungen von Eigenkompositionen, menschlich wertvolle Begegnungen und auch große Hilfsbereitschaft (z.B. den Großteil der Ausstattung meiner ersten eigenen Wohnung in Berlin-Wedding). Nach über acht Jahren musste ich die die Leitung der Chöre aus beruflichen Gründen abgeben.
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