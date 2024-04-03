import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import VideoWrapper from '../components/videoWrapper';
import { Link, Text, Box, Image, Center, Heading, Divider, Img } from '@chakra-ui/react';

import style from './index.module.css';

const options = {
  title: 'Generation Zukunft Musik (GeZuMu)',
  description: '',
  filter: 'projekte',
  slug: '/projekte/gezumu'
}

export default function Gezumu() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="GeZuMu | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Box style={{'maxWidth': '200px'}} mb='20px' >
      <Img src='/images/card-images/projekte-Seite003.jpg' />
    </Box>

    <Heading as='h3' className='headingH3'>
      {options.title}
    </Heading>
    <Text mb='40px'>
      Die Idee des Projektvorhabens ›Generation Zukunft Musik-OER‹ (GeZuMu) basiert auf den Erfahrungen des <Link href='/projekte/openmusicacademy'>OMA-Projekts</Link>. Dort hat sich gezeigt, dass der Aufbau einer Community für die gemeinsame Arbeit an Open Educational Resources zur Musik in älteren Generationen schwierig ist, weil entsprechende Personen oftmals etablierte Veröffentlichungswege bevorzugen und sich aufgrund ihrer Haltung als <i>Kreativschaffende</i> bzw. ihrer Verpflichtungen gegenüber dem Wirtschaftssystem nicht mehr für die gemeinsame Arbeit an freien Lehr- und Lernmaterialien gewinnen lassen. Demgegenüber waren die Erfahrungen mit Studierenden an und mit OER ausgesprochen positiv. Leider wurde der Antrag abgelehnt, doch die Projektidee lebt weiter ... 
    </Text>
    
    <Divider mt='60px' mb='40px' h='1px' bg='gray' />

    <Heading as='h3' className='headingH4' mt='40px' mb='40px'>
      Der Anfang der Projektbeschreibung aus dem Antrag:
    </Heading>
    <Text bg='#b9feb9' 
      pl='40px' 
      pr='40px' 
      pt='20px' 
      pb='20px' 
      style={{'borderRadius': '10px'}}>
        Ziel des Projektvorhabens ›Generation Zukunft Musik-OER‹ (GeZuMu) der Hochschule für Musik und Theater München (HMTM) ist der Aufbau einer nachhaltig arbeitenden Community für den Bereich des Musiklehrens und -lernens, in der bundesweit Musikstudierende der professionellen Musikausbildungsinstitute sowie Lehramtsanwärter:innen im Vorbereitungsdienst Musik zusammenarbeiten. Das Vorhaben richtet sich an jüngere Generationen, deren digitales Profil aufs engste mit Social-Media-Communities und flachen Hierarchien verknüpft ist und die – auch aufgrund ihrer späteren Berufspraxis – dem Community-Gedanken und der Idee von OEP bzw. der Adaption von OER offen gegenüberstehen. Als starker Projektpartner für den Netzwerkaufbau wurde der Bundesverband Musikunterricht e.V. (BMU) gewonnen, der die musikalische Bildung an Schulen sowie eine qualifizierte Ausbildung von Musiklehrkräften aller Schularten, -formen und -stufen fördert [...]
    </Text>

    <Heading as='h4' className='headingH4' m='40px 0'>
      Zum Antrag <i>GeZuMu</i>
    </Heading>
    
    <Text mb='40px'>
      Der Antrag wurde für die <a href='https://www.bundesanzeiger.de/pub/publication/N2zALx7zNrO4Ah3VOeb/content/N2zALx7zNrO4Ah3VOeb/BAnz%20AT%2008.05.2023%20B2.pdf?inline'>Richtlinie</a> des Bundesministeriums für Bildung und Forschung <i>zur Förderung von Projekten zur Stärkung, Erweiterung und Vernetzung von OER-Communities – Schwerpunkt innerhalb der OER-Strategie zur Realisierung eines nachhaltigen OER-förderlichen Ökosystems in der digitalen Bildung</i> ausgearbeitet und fristgerecht eingereicht. In der Projektskizze wurde »grundsätzlich Potenzial für eine Förderung gesehen« und die Projektidee auf eine Warteliste gesetzt. Im März 2024 erhielten wir dann die Nachricht, dass die »finale Priorisierung durch das Bundesministerium für Bildung und Forschung« ergeben hat, dass die Projektskizze »im Rahmen der Richtinie zur Förderung von Projekten zur Stärkung, Erweiterung und Vernetzung von OER-Communities leider nicht berücksichtigt werden kann«.
    </Text>

    <Center>
      <Img src='/images/skizze-Seite001.jpg' w='60%' />
    </Center>
  </>

}

Gezumu.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
