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
      Open Education
    </Heading>
    <Text>
      Seit meinem ersten Tutorium (Vorbereitung auf die Aufnahmeprüfungen in den Lehramts- und Instrumentalpädagogischen Studiengängen 1987−1990) lag mein Hauptinteresse auf dem Unterrichten von Musiktheorie und Gehörbildung. Auch wenn ich mir angesichts der aktuellen KI-Entwicklungen nicht sicher bin, in welcher Form das Fach Musiktheorie überlebensfähig sein wird, ist mir die Zusammenarbeit mit Musikstudierenden und Musiklehrenden auch heute noch ein zentrales Anliegen. Meinen aktuellen Unterricht beeinflussen allerdings zunehmend Fragen der Medienkompetenz (im Bereich der Musik) sowie der Medienethik.  
    </Text>
    <Text className='mt20'>
      Über die Programmierung und das Publizieren von OpenBooks bin ich seit 2011 auf die Themen freie Lizenzen bzw. <i>Open Educational Resources</i> (OER) gestoßen. 2014 habe ich dann erstmals eine Creative-Commons-Lizenz für mein OpenBook <a className='underline' href='https://oer-musik.de/oer-kostenlose-software-fuer-den-musikunterricht'>Kostenlose Software für den Musikunterricht</a> gewählt und die Publikation als Open Educational Resource (OER) auf <a href='https://github.com/musikisum/OpenBook-KostenloseSoftware' className='unerline'>GitHub zur Verfügung gestellt</a>. Seit der Corona-Pandemie bin ich ein überzeugter Anhänger einer umfassenden Open Educational Practise. Während das Thema in Deutschland und im Bereich der Musik nur sehr verhalten aufgenommen wird, finden meine Bemühungen mittlerweile internationale Anerkennung. 2024 wurde ich von <a href='https://www.oeglobal.org/' className='underline'>OE Global</a> für den <a href='https://awards.oeglobal.org/2024-finalists/' className='underline'>Open Education Award for Excellence 2024</a> in der Kategorie <i>Educator Award</i> nominiert. Meine Bewerbung können Sie auf meiner Seite zur <Link href='/person/oep-oer/' textDecoration={'underline'}>Open Education</Link> einsehen.
    </Text>
    <Text className='mt20'>
      Während und nach Corona (2020) sind zahlreiche staatliche Programme aufgelegt worden, in denen die Erstellung von OER und der Aufbau von OER-Communities gefördert wird. Ein von mir inhaltlich konzipierter und von der HMTM gestellter Antrag zur Förderung des Aufbaus einer <Link href='/projekte//openmusicacademy'>Lernplattform für Musik (oer-lfm)</Link>) bei der <a className='underline' href='https://stiftung-hochschullehre.de/' target='_blank'>Stiftung Innovation in der Hochschullehre</a> war erfolgreich. Seither arbeite ich als Projektleiter am Aufbau der <a className='underline' href='https://openmusic.academy' target='_blank'>Open Music Academy</a>, wobei mich dieses Projekt voraussichtlich noch bis Ende 2025 (und vielleicht noch darüber hinaus) vollkommen auslasten wird.  
    </Text>
    <Text className='mt20'>
      Neben meiner Begeisterung für eine Open Education im Bereich der Musik haben sich jedoch im Laufe meines Arbeitslebens die Arbeitsschwerpunkt verschoben. Im Folgenden können Sie dazu mehr erfahren.
    </Text>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />

    <Heading as='h3' className="headingH4">
      Berlin
    </Heading>
    <Text>
      In Berlin galt mein Hauptinteresse der Chorleitung und dem Gesang. Eine sehr intensive und über zehnjährige Zusammenarbeit verband mich in dieser Zeit mit dem <Link textDecoration={"underline"} href='/chorleitung/choere#consortiummusicum'>Consortium Musicum</Link> und dem von mir gegründeten <Link textDecoration={"underline"} href='/chorleitung/choere#ensemberlinovovale'>Ensemberlino Vocale</Link>.
    </Text>
    <Text className='mt20'>
      Während - und auch noch kurz nach - meiner Chorleitungszeit in Berlin übernahm ich Verpflichtungen als <Link textDecoration={"underline"} href="/gesang/">Sänger</Link> (Tenor). Doch aufgrund einer Kehlkopfverletzung (Sportunfall) sowie einer letztendlich für den Sängerberuf ungeeigneten psychischen Disposition hat sich mein Leben in eine andere Richtung entwickelt. Heute habe ich an öffentlichen Auftritten als Sänger kein Interesse mehr.
    </Text>
    <Text className='mt20'>
      Großes Interesse hatte ich dagegen am Schreiben von Programmheften meiner Konzerte, um dem Publikum Hintergrundinformationen zur aufgeführten Musik zu vermitteln. Die Herausforderung bestand darin, biographische und musikanalytische Informationen für ein interessiertes Laienpublikum verständlich aufzubereiten. 1993 erwuchs aus dem Interesse, Texte über Musik zu schreiben, eine intensive <Link textDecoration={"underline"} href='/publikationen/verlage'>Publikationstätigkeit für Verlage</Link> (z.B. für den den Bärenreiter-Verlag eine zweibändige Gehörbildung sowie die Anleitungen <i>Der vierstimmige Satz</i>, <i>Arrangieren und Instrumentieren</i>, für den Klett-Verlag die <i>Sonatenspiele</i> und das <i>Lamentobass</i>-Heft).
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
      <li>Didaktik der Musiktheorie</li>
    </ul>
  </>
}

Profil.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
