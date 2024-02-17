import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Link } from '@chakra-ui/react';

const options = {
  title: 'Zur Person',
  description: 'Auf dieser Seite finden Sie einige Informationen zu meinem künstlerischem und wissenschaftlichen Profil, das sich im Laufe meiner über 30-jährigen Arbeitzeit an den Musikhochschulen in Berlin und München verändert hat.',
  filter: 'person',
  slug: '/person/profil'
}

const Profil = () => {
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
      Seit meinem ersten Tutorium (Vorbereitung auf die Aufnhameprüfungen in den Lehramts- und Instrumentalpädagogischen Studiengängen 1987−1990) hat mit das Unterrichten von Musiktheorie und Gehörbildung sehr viel Freude bereitet. Das ist bis heute so geblieben, das Unterrichten ist daher eine wunderbare und feste Konstante in meinem Leben.
    </Text>
    <Heading as='h3' className="headingH3">
      Berlin
    </Heading>
    <Text>
      In Berlin galt mein Hauptinteresse der Chorleitung. Eine sehr intensive und über zehnjährige Zusammenarbeit verband mich in dieser Zeit mit dem <Link textDecoration={"underline"} href='/chorleitung/consortium'>Consortium Musicum</Link> und dem von mir gegründeten <Link textDecoration={"underline"} href='/chorleitung/ensemberlino'>Ensemberlino Vocale</Link>.
    </Text>
    <Text className='mt20'>
      Das Schreiben von Konzertprogrammheften für die in meinen Chorkonzerten aufgeführten Werke hat mich immer sehr interessiert. Die Herausforderung bestand darin, biographische und musikanalytische Informationen für ein interessiertes Laienpublikum verständlich aufzubereiten. 1993 erwuchs aus dem Interesse, Texte über Musik zu schreiben, eine intensive <Link textDecoration={"underline"} href='/publikationen/verlage'>Publikationstätigkeit für Verlage</Link> (z.B. für den den Bärenreiter-Verlag eine zweibändige Gehörbildung sowie die Anleitungen <i>Der vierstimmige Satz</i>, <i>Arrangieren und Instrumentieren</i> und für den Klett-Verlag die <i>Sonatenspiele</i> und das <i>Lamentobass</i>-Heft).
    </Text>
    <Text className='mt20'>
      Während - und auch noch kurz nach - meiner Chorleitungszeit in Berlin übernahm ich Verpflichtungen als <Link textDecoration={"underline"} href="/gesang/aufnahmen">Sänger (Tenor)</Link>. Doch aufgrund einer Kehlkopfverletzung (Sportunfall) sowie letztendlich einer für den Sängerberuf ungeeigneten psychischen Disposition habe ich heute an öffentlichen Auftritten als Sänger kein Interesse mehr.
    </Text>
    <Heading as='h3' className="headingH3">
      München
    </Heading>
    <Text>
      Seit meiner Arbeit in München haben sich meine Arbeitsschwerpunkte in den wissenschaftlichen und wissenschaftlich-pädagogischen Bereich verschoben (Promotion Musikwissenschaft 2007). Mein Fachverständnis prägt <Link textDecoration={"underline"} href='/unterricht'>Unterricht</Link>, <Link textDecoration={"underline"} href='/wissenschaft/betreuungen'>Betreuungen</Link> sowie <Link textDecoration={"underline"} href='/publikationen'>Publikations</Link>- sowie <Link textDecoration={"underline"} href='/angebote/fortbildungen'>Referententätigkeiten</Link> in gleicher Weise.
    </Text>
    <Text className='mt20'>
      In der Forschung beschäftige ich mich schwerpunktmäßig mit folgenden Themen: 
    </Text>
    <ul className='list2040'>
      <li>Wolfgang Amadé Mozart (insbesondere seine frühen Werke</li>
      <li>Wissenschaftstheorie und Modelle der Musiktheorie</li>
      <li>Pop-/Rockmusik</li>
      <li>Neue Medien und Didaktik der Musiktheorie</li>
    </ul>
    <Text className='mt20'>
      Über die Programmierung und das Publizieren von OpenBook bin ich schon weit vor Corona auf die Themen freie Lizenzen bzw. <i>Open Educational Resources</i> (OER) gestoßen. 2014 habe ich mein ersten OpenBook <a className='underline' href='https://github.com/musikisum/OpenBook-KostenloseSoftware'>Kostenlose Software für den Musikunterricht</a> als OER auf GitHub zur Verfügung gestellt. Seither engagiere ich mich für die Erstellung fachlich konsistenter Open Educational Resources, den Einsatz von Opensource-Programmen in der Musikausbildung (Notation, Soundbearbeitung, Desktop-Publishing, Bildbearbeitung, Office etc.) sowie für die Open Access Bewegung in Forschung und Lehre.
    </Text>
    <Text className='mt20'>
      Seit Corona (2020) sind zahlreiche staatliche Programme aufgelegt worden, in denen die Erstellung von OER und der Aufbau von Communities gefördert wird. Ein von der HMTM gestellter und von mir inhaltlich konzipierter Antrag zur Förderung des Aufbaus einer <Link href='/projekte//openmusicacademy'>Lernplattform für Musik (oer-lfm)</Link>) bei der <a className='underline' href='https://stiftung-hochschullehre.de/' target='_blank'>Stiftung Innovation in der Hochschullehre</a> war erfolgreich. Seither arbeite ich als Projektleiter am Aufbau der <a className='underline' href='https://openmusic.academy' target='_blank'>Open Music Academy</a>, wobei mich dieses Projekt voraussichtlich noch bis Ende 2025 umfassend beschäftigen wird.  
    </Text>
  </>
}

Profil.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false}>
      {page}
    </Layout>
  )
}

export default Profil;