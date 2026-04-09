import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import VideoWrapper from '../components/videoWrapper';
import { Link, Text, Box, Image, Table, Tbody, Tr, Td, TableContainer, Heading, UnorderedList, ListItem, Divider } from '@chakra-ui/react';

import style from './index.module.css';

const options = {
  title: 'ELMU – eLearning Music',
  description: '',
  filter: 'projekte',
  slug: '/projekte/elmu'
}

const video = {
  url: 'https://kaiser-ulrich.de/medien/elmu-video.mp4',
  posterUrl: 'https://kaiser-ulrich.de/medien/elmu-poster.jpg',
  title: 'Explainer-Video für ELMU / 2018',
  description: ''
}

export default function Elmu() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="ELMU | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Box style={{'maxWidth': '200px'}} mb='20px' >
      <Image src='/images/card-images/projekte-Seite001.jpg' />
    </Box>

    <Heading as='h3' className='headingH3'>
      {options.title}
      <Text style={{fontSize: '16px !important', marginTop: '6px !important'}}>oder: Eine Wikipedia für Musik</Text>
    </Heading>
    
    <Text mb='40px'>
      Grundlage zum Start des Projekts (Arbeitstitel: OER-Musik) waren meine Materialien, die ich seit 2009 in privatem Engagement erstellt habe (seinerzeit verfügbar über die Domains <i>musik-openbooks.de</i>, ab 2012 dann unter der Domain <a href='https://oer-musik.de' className='underline'>oer-musik.de</a> und <i>musiktheorie-aktuell.de</i>, später erreichbar unter der Domain <a href='https://musikanalyse.net' className='underline'>musikanalyse.net</a>). Zu Vernschaulichung von Beispielen werden Musikaufnahmen aus den Beständen der <a href='https://hmtm.de' className='underline'>Hochschule für Musik und Theater München</a> (HMTM) genutzt, die ich in Zusammenarbeit mit der Bibliothek der HMTM digitalisiere. Digitalisiert werden Werke, die vor 1963 erstmalig aufgenommen worden sind aufgrund der Übergangsregeling <a href='https://www.gesetze-im-internet.de/urhg/__137m.html' className='underline'>UrhG § 137m</a> und keinem Urheberschutz mehr unterliegen (public domain).
    </Text>

    <Heading as='h3' className='headingH4' mt='40px' mb='40px'>
      Kurzbeschreibung des Vorhabens
    </Heading>
    <Text bg='#b9feb9' 
      pl='40px' 
      pr='40px' 
      pt='20px' 
      pb='20px' 
      style={{'borderRadius': '10px'}}>
        Ziel des ELMU-Projekts ist die Bündelung vorhandener sowie Erstellung neuer Open Educational Resources (kurz: OER). Ein weiteres Ziel ist es, ELMU zu einer gut sichtbaren, international ausgerichteten sowie langfristig erreichbaren Lernplattform zur Musik auszubauen. Die Bereitstellung der Materialien ist dabei für unterschiedliche Zielgruppen geplant: für Kinder und Jugendliche an Musikschulen, an allgemeinbildenden Schulen, für Studierende an Musikhochschulen sowie für Erwachsene im Sinne eines lebenslangen Lernens, wobei sich ELMU an dem erfolgreichen Konzept eines community-basierten Wikis orientiert. Der Unterschied zu vorhandenen Wikis liegt in einer fachwissenschaftlichen Redaktionsebene sowie in auf Musik abgestimmten technischen Möglichkeiten. Die Programmierung von ELMU steht unter der freien MIT-Lizenz und ist auf Github veröffentlicht.
    </Text>
    
    <Divider mt='60px' mb='40px' h='1px' bg='gray' />

    <Heading as='h4' className='headingH4' m='40px 0'>
      Genese des Projekts OER-Lernplattform für Musik <i>elmu</i>
    </Heading>

    <TableContainer className={style.omaTable}>
      <Table>
        <Tbody>
          <Tr>
            <Td>2015</Td>
            <Td>Antrag Bayerisches Staatsministerium für Bildung und Kultus, Wissenschaft und Kunst</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2017</Td>
            <Td>Antrag Hochschulleitung der Hochschule für Musik und Theater München (HMTM)</Td>
            <Td>Unterstützung zugesagt</Td>
          </Tr>
          <Tr bg='#eefdec'>
            <Td>2017</Td>
            <Td>Spenden aus Mitteln der Körperschaft der HMTM sowie der Gesellschaft Freunde der Hochschule für Musik und Theater München e.V.</Td>
            <Td>Realisierung des Prototyps der Lernplattform elmu.online</Td>
          </Tr>
          <Tr>
            <Td>2017</Td>
            <Td>Antrag Castringius Kinder- und Jugendstiftung</Td>
            <Td>Antrag bewilligt</Td>
          </Tr>
          <Tr>
            <Td>2018</Td>
            <Td>Bundeszentrale für politische Bildung</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr bg='#eefdec'>
            <Td>2018</Td>
            <Td>Gründung des Vereins ELMU Education e.V.</Td>
            <Td>Registergericht VR 208171</Td>
          </Tr>
          <Tr>
            <Td>2018</Td>
            <Td>Erika und Georg Dietrich Stiftung</Td>
            <Td>Antrag bewilligt</Td>
          </Tr>
          <Tr>
            <Td>2018</Td>
            <Td>Töpfer-Stiftung</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr bg='#eefdec'>
            <Td>2019</Td>
            <Td>Bescheid Finanzamt München</Td>
            <Td>Vereinssatzung entspricht Voraussetzungen nach §§ 51, 59, 60 und 61 AO</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Aqtivator</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Bayerisches Staatsministerium für Wissenschaft und Kunst</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Bayerisches Staatsministerium für Digitales</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Beisheim Stiftung</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>elobau Stiftung</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Mahle Stiftung</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>prototypefund</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag zurückgezogen</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Siemens Stiftung</Td>
            <Td><span style={{'color': 'maroon', 'marginRight': '6px' }}>X</span>Antrag abgelehnt</Td>
          </Tr>
          <Tr>
            <Td>2020</Td>
            <Td>Erika und Georg Dietrich Stiftung</Td>
            <Td>Antrag bewilligt</Td>
          </Tr>          
          <Tr>
            <Td>2020</Td>
            <Td>Goethe-Institut</Td>
            <Td>Antrag bewilligt</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>

    <Text mt='40px' mb='20px'>
      Bis 2021 konnten ca. 35.000 € an Spendengeldern in die Programmierung der Domain elmu.online investiert werden. Dieses sichtbare Angebot und der 2018 gegründete gemeinnützige Verein ELMU Education e.V. als Kooperationspartner dürften mit auschlaggebend dafür gewesen sein, dass der Projektantrag der HMTM zum Aufbau der <Link href='/projekte/openmusicacademy' className='underline'>Open Music Academy</Link> (OMA) erfolgreich gewesen ist. Das ELMU-Projekt wurde 2022 vollständig in die OMA überführt.   
    </Text>    
    <Text>
      2023 hat sich darüber hinaus der Verein <i>ELMU Educatioen e.V.</i> in <a href='https://openmusic.academy/docs/2PAKgPM44CL4VM5DbCvuLK/open-music-academy-education-ev' className='underline'>Open Music Academy Education e.V.</a>  umbenannt. Er unterstützt seither satzungsgemäß die Open Music Academy. Weitere Informationen zur Genese des Projekts finden Sie in dem Artikel <a href='https://de.wikipedia.org/wiki/Open_Music_Academy' className='underline'>Open Music Academy</a> in der Wikipedia.
    </Text>

    <Heading as='h4' className='headingH4' m='40px 0'>
      Explainer-Video
    </Heading>

    <VideoWrapper video={video}></VideoWrapper>

    <Heading as='h4' className='headingH4' mt='60px' mb='40px'>
      Antrag, Text & Interview
    </Heading>

    <UnorderedList ml='40px'>
      <ListItem>
        <Link href='https://github.com/musikisum/kaiser-ulrich.de/blob/main/public/files/kaiser-antrag-castringius.pdf' className='underline'>Antrag an die Castringius Kinder & Jugend Stiftung München</Link>
      </ListItem>
      <ListItem>
        <Link href='https://github.com/musikisum/kaiser-ulrich.de/blob/main/public/files/kaiser-elmu-projektbeschreibung.pdf' className='underline'>Projektbeschreibung (kurz)</Link>
      </ListItem>
      <ListItem>
        <Link href='https://github.com/musikisum/kaiser-ulrich.de/blob/main/public/files/kaiser-elmu-vortrag-gmth.pdf' className='underline'>Vortrag zum Projekt auf dem GMTH-Kongress in Bremen 2018</Link>
      </ListItem>
      <ListItem>
        <Link href='https://github.com/musikisum/kaiser-ulrich.de/blob/main/public/files/kaiser-elmu.pdf' className='underline'>elmu – Eine Plattform für digitale musikalische Bildung</Link>
      </ListItem>
    </UnorderedList>
  </>

}

Elmu.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
