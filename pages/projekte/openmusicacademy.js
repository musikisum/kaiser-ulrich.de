import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import VideoWrapper from '../components/videoWrapper';
import { Text, Flex, Image, Table, Tbody, Tr, Td, TableContainer, Heading, Spacer, Link } from '@chakra-ui/react';

import style from './index.module.css';

const options = {
  title: 'Open Music Academy (OMA)',
  description: '',
  filter: 'projekte',
  slug: '/projekte/openmusicacademy'
}

const video = {
  url: 'https://cdn.openmusic.academy/media-library/oma-explainer-vs1-0-pDjYtJexVC91WfrtWnu6hh.mp4',
  posterUrl: '/medien/oma-poster.jpg',
  title: 'Explainer-Video für die OMA / 2022',
  description: 'Eine Idee und Gemeinschaftsarbeit des OMA-Teams (2022) / Lizenz: CC0. Grafik und Video: Mani Vieregg; Sprecherin: Franziska Ball; Musik und FX-Sounds: Ulrich Kaiser (unter Mitarbeit von Johannes Brahms und Ludwig van Beethoven).',
  filter: 'projekte'
}

export default function OpenMusicAcademy() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Open Music Academy | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />

    <Flex minWidth='max-content' alignItems='center' mb='20px'>
      <Image mt='-30px' height='100px' src='https://stiftung-hochschullehre.de/wp-content/uploads/2022/07/logo_stiftung_hochschullehre_screenshot.jpg' />
      <Spacer />
      <Image height='100px' src='/images/logo-subline.svg' />
    </Flex>

    <Heading as='h3' className='headingH3'>
      Das Projektvorhaben
    </Heading>
    <Text mb='10'>
      2019 bat mich der damalige Präsident der <a href='https:/hmtm.de' className='underline'>Hochschule für Musik und Theater München</a> (HMTM), ein <Link className='underline' href='/files/Kaiser_Digitale-Innovation-in-der-Lehre.pdf'>Konzept zur digitalen Lehre</Link> zu entwickeln. Nach den Erfahrungen der Corona-Pandemie habe ich das Konzept noch einmal grundlegend überarbeitet und mit <Link href='/projekte/elmu/' className='underline'>ELMU Education e.V.</Link> als Kooperationspartner ist es von der HMTM im Rahmen der Förderbekanntmachung 2020 Hochschullehre durch Digitalisierung stärken der <a href='https://stiftung-hochschullehre.de/' className='underline'>Stiftung Innovation in der Hochschullehre</a> (StIL) unter dem Projektnamen <i>OER-Lernplattform für Musik</i> (oer-lfm) vorgeschlagen worden. 2021 wurde das <a href='https://stiftung-hochschullehre.de/projekt/oer-lfm/' className='underline'>Projekt zur Förderung ausgewählt</a>, seither und bis Ende 2025 wird von der StIL gefördert, um Präsenzlehre und digitales Lehren und Lernen innovativ weiterzudenken, zu erproben und strukturell in den Studiengängen der HMTM zu verankern.
    </Text>

    <TableContainer className={style.omaTable}>
      <Table>
        <Tbody>
          <Tr>
            <Td>Förderzeitraum:</Td>
            <Td>01.01.2021 − 31.07.2024</Td>
          </Tr>
          <Tr>
            <Td>Fördersumme:</Td>
            <Td>1.764.000 EUR</Td>
          </Tr>
          <Tr>
            <Td>Titel des Projekts:</Td>
            <Td>OER-Lernplattform für Musik (oer-lfm)</Td>
          </Tr>
          <Tr>
            <Td>Name der Plattform:</Td>
            <Td>Open Music Academy</Td>
          </Tr>
          <Tr>
            <Td>Projektleitung:</Td>
            <Td>Prof. Dr. Ulrich Kaiser</Td>
          </Tr>
          <Tr>
            <Td>Fördersumme Projekterweiterung (FBM2020 plus):</Td>
            <Td>25.000 EUR</Td>
          </Tr>
          <Tr>
            <Td>Projektverlängerung:</Td>
            <Td>01.08.2024 – 31.12.2025</Td>
          </Tr>
          <Tr>
            <Td>Fördersumme Projektverlängerung:</Td>
            <Td>n.n.</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>

    <Heading as='h3' className='headingH4' mt='40px' mb='40px'>
      Kurzbeschreibung des Projektvorhabens (aus dem Antrag)
    </Heading>
    <Text bg='#b9feb9' 
      pl='40px' 
      pr='40px' 
      pt='20px' 
      pb='20px' 
      style={{'borderRadius': '10px'}}>
        Die Hochschule für Musik und Theater München (HMTM) bildet begabte Studierende durch qualitativ hochwertige und individuelle Förderung für vielfältige künstlerische, wissenschaftliche und pädagogische Berufsfelder aus. Für diese finanziell anspruchsvolle Ausbildung werden dringend hochwertige Open Educational Resources benötigt, die leicht zugänglich sind und ein chancengerechtes, inklusives und effektives Lernen auch im Bereich der Musik ermöglichen. Die Innovationsidee des Projekts liegt in der Entwicklung einer digitalen Lernplattform unter offener Lizenz (MIT) für die kollaborative Zusammenarbeit von Lehrenden und Lernenden an hochwertigen Materialien zum Musiklernen. Im Gegensatz zu bisher existierenden Lösungen wird diese Lernplattform ganz speziell auf die Bedürfnisse des Musiklernens zugeschnitten sein (Online-Notation und spezielle Audio- und Video-Features). Das Projekt kann auf bisherige Maßnahmen (sehr gute technische Infrastruktur und Förderung einer Basissoftware unter MIT-Lizenz) aufbauen, soll einen offenen Bereich für OER sowie einen internen Bereich für spezifische Belange der Studiengänge an der HMTM aufweisen und sich aufgrund der freien Lizenzen (MIT, CC BY-SA) zur Skalierung in besonderer Weise eignen.
    </Text>

    <Heading as='h4' className='headingH4' m='60px 0'>
      Explainer-Video
    </Heading>

    <VideoWrapper video={video}></VideoWrapper>
    
    <Text mt='40px'>
      Die OER-Plattform für Musik (oer-lfm) ist seit Februar 2022 unter dem Namen <a href='https://openmusic.academy' className='underline'>Open Music Academy</a> online. Der Kooperationspartner des Projekts hat sich 2022 in <a href='https://openmusic.academy/docs/2PAKgPM44CL4VM5DbCvuLK/open-music-academy-education-ev' className='underline'>Open Music Academy Education e.V.</a> umbenannt. Weitere Informationen finden Sie in dem Artikel <a href='https://de.wikipedia.org/wiki/Open_Music_Academy' className='underline'>Open Music Academy</a> in der Wikipedia.
    </Text>    
  </>
}

OpenMusicAcademy.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
