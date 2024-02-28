import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Link, Divider } from '@chakra-ui/react';

const options = {
  title: 'Zur Person',
  filter: 'person',
  slug: '/person/profil'
}

export default function Profil() {
  return <>
    <Head>
      <title>Zur Person</title>
      <meta name="description" content="Zur Person | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />
    <Heading as='h3' className="headingH3">
      Der rote Faden ...
    </Heading>
    <Text>
      Seit meinem ersten Tutorium (Vorbereitung auf die Aufnhameprüfungen in den Lehramts- und Instrumentalpädagogischen Studiengängen 1987−1990) hat mit das Unterrichten von Musiktheorie und Gehörbildung immer sehr viel Freude bereitet. Das ist bis heute so geblieben, so dass die Vermittlung von Wissen (sowohl im Lehren als auch im Lernen) eine wunderbare und feste Konstante in meinem Leben ist.
    </Text>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />

    <Heading as='h3' className="headingH4">
      Berlin
    </Heading>
    <Text>
      In Berlin galt mein Hauptinteresse der Chorleitung und dem Gesang. Eine sehr intensive und über zehnjährige Zusammenarbeit verband mich in dieser Zeit mit dem <Link textDecoration={"underline"} href='/chorleitung/choere#consortiummusicum'>Consortium Musicum</Link> und dem von mir gegründeten <Link textDecoration={"underline"} href='/chorleitung/choere#ensemberlinovovale'>Ensemberlino Vocale</Link>.
    </Text>
    <Text className='mt20'>
      Während - und auch noch kurz nach - meiner Chorleitungszeit in Berlin übernahm ich Verpflichtungen als <Link textDecoration={"underline"} href="/gesang/">Sänger (Tenor)</Link>. Doch aufgrund einer Kehlkopfverletzung (Sportunfall) sowie letztendlich einer für den Sängerberuf ungeeigneten psychischen Disposition hat sich mmein Leben anders entwickelt, so dass ich heute an öffentlichen Auftritten als Sänger kein Interesse mehr habe.
    </Text>
    <Text className='mt20'>
      Großes Interesse hatte ich am Schreiben von Programmheften meiner Konzerte, um dem Publikum Hintergrundinformationen zur aufgeführten Musik zu vermitteln. Die Herausforderung bestand darin, biographische und musikanalytische Informationen für ein interessiertes Laienpublikum verständlich aufzubereiten. 1993 erwuchs aus dem Interesse, Texte über Musik zu schreiben, eine intensive <Link textDecoration={"underline"} href='/publikationen/verlage'>Publikationstätigkeit für Verlage</Link> (z.B. für den den Bärenreiter-Verlag eine zweibändige Gehörbildung sowie die Anleitungen <i>Der vierstimmige Satz</i>, <i>Arrangieren und Instrumentieren</i> und für den Klett-Verlag die <i>Sonatenspiele</i> und das <i>Lamentobass</i>-Heft).
    </Text>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />

    <Heading as='h3' className="headingH4">
      München
    </Heading>
    <Text>
      Seit meiner Arbeit in München haben sich meine Arbeitsschwerpunkte in den wissenschaftlichen und wissenschaftlich-pädagogischen Bereich verschoben (Promotion im Fach Musikwissenschaft 2007). Mein Fachverständnis prägt <Link textDecoration={"underline"} href='/unterricht'>Unterricht</Link>, <Link textDecoration={"underline"} href='/wissenschaft/betreuungen'>Betreuungen</Link>, <Link textDecoration={"underline"} href='/publikationen'>Publikations</Link>- und <Link textDecoration={"underline"} href='/angebote/fortbildungen'>Referententätigkeiten</Link> in gleicher Weise.
    </Text>
    <Text className='mt20'>
      In der Forschung beschäftige ich mich schwerpunktmäßig mit folgenden Themen: 
    </Text>
    <ul className='list2040'>
      <li>Wolfgang Amadé Mozart (insbesondere mit seinen frühen Werken)</li>
      <li>Wissenschaftstheorie und Analysemodelle der Musiktheorie</li>
      <li>Pop-/Rockmusik</li>
      <li>Neue Medien und Didaktik der Musiktheorie</li>
    </ul>
    <Text className='mt20'>
      Über die Programmierung und das Publizieren von OpenBook bin ich schon seit 2011 auf die Themen freie Lizenzen bzw. <i>Open Educational Resources</i> (OER) gestoßen. 2014 habe ich dann erstmals eine Creative-Commons-Lizenz für mein OpenBook <a className='underline' href='https://oer-musik.de/oer-kostenlose-software-fuer-den-musikunterricht'>Kostenlose Software für den Musikunterricht</a> gewählt und die Publikation als Open Educational Resource (OER) auf <a href='https://github.com/musikisum/OpenBook-KostenloseSoftware' className='unerline'>GitHub zur Verfügung gestellt</a>. Seither engagiere ich mich für die Erstellung fachlich konsistenter OER, den Einsatz von Open-Source-Programmen in der Musikausbildung (Notation, Soundbearbeitung, Desktop-Publishing, Bildbearbeitung etc.) sowie für die Open Access Bewegung in Forschung und Lehre.
    </Text>
    <Text className='mt20'>
      Während und nach Corona (2020) sind zahlreiche staatliche Programme aufgelegt worden, in denen die Erstellung von OER und der Aufbau von OER-Communities gefördert wird. Ein von mir inhaltlich konzipierter und von der HMTM gestellter Antrag zur Förderung des Aufbaus einer <Link href='/projekte//openmusicacademy'>Lernplattform für Musik (oer-lfm)</Link>) bei der <a className='underline' href='https://stiftung-hochschullehre.de/' target='_blank'>Stiftung Innovation in der Hochschullehre</a> war erfolgreich. Seither arbeite ich als Projektleiter am Aufbau der <a className='underline' href='https://openmusic.academy' target='_blank'>Open Music Academy</a>, wobei mich dieses Projekt voraussichtlich noch bis Ende 2025 (und vielleicht noch darüber hinaus) vollkommen auslasten wird.  
    </Text>
  </>
}

Profil.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
