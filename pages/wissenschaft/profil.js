import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { UnorderedList, ListItem, Heading, Text, Divider, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Wissenschaftliches Profil',
  description: 'Auf dieser Seite finden Sie Informationen zu meinem Wissenschaftsverständnis und meinen Forschungsschwerpunkten.',
  filter: 'wissenschaft',
  slug: '/wissenschaft/profil'
}

export default function Profil() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />
      <Heading as='h3' className="headingH3">
        Anmerkungen zum Wissenschaftsverständnis
      </Heading>
      <Text className={style.mtDefault}>
        In der ersten Phase meines wissenschaftlichen Arbeitens war ich mich noch stark von älteren Spielarten musikwissenschaftlicher Hermeneutik beeinflusst. Seit 2005 hat mich dann verstärkt das Denken anderer Disziplinen wie der Informatik und der Soziologie interessiert. Wichtig war für mich insbesondere, die eigene Forschungsperspektive beständig zu reflektiert sowie die Erkenntnis, dass die Erforschung psychischer Vorgänge (Stichwort: <i>Komponistenintension</i>) immer auf nicht verifizierbare Spekulationen angewiesen ist. Für meine eigenen Arbeiten haben solche Fragestellungen daher ihre Bedeutung verloren. In meiner Monografie (Dissertation) zum jungen Mozart habe ich mich erstmals intensiv mit methodischen Fragen der musikalischen Analyse auseinandergesetzt und z.B. für die Werke des Wunderkindes eine <b><i>synoptische Notenanalyse</i></b> vorgeschlagen:  
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><Link href='https://mozartforschung.de/downloads/kaiser_notenbuechermozarts-kassel-2007.pdf' isExternal><i>Die Notenbücher der Mozarts als Grundlage der Analyse von W. A. Mozarts Kompositionen 1761−1767</i> <ExternalLinkIcon /></Link>, Kassel 2007.</ListItem>
      </UnorderedList>
      <Text className={style.mtDefault}>
        In dem Kapitel »Musikalische Modelle« dieser Monografie findet sich auch ein erster Versuch, das Design musiktheoretischer Modelle an die <b>Objektorientierung der Programmierung</b> anzulehnen. In diesem Sinne lassen sich Modelle als Abstraktionen von Objekten verstehen, die über Klassen oder Prototypen repräsentiert werden, welche durch Attribute (Eigenschaften) und Funktionen (Methoden) charakterisiert sind. Sowohl für den allgemeinen Modellbegriff als auch für die Programmierung gilt dabei, daß je abstrakter das Modell ist, desto kleiner und ärmer wird sein Inhalt (und umgekehrt). Meine Bemühungen der Übertragung habe ich in dem folgenden Beitrag dargelegt:
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><Link href='https://storage.gmth.de/zgmth/pdf/261' isExternal>»Was ist ein musikalisches Modell?« <ExternalLinkIcon /></Link>, in: <i>Zeitschrift der Gesellschaft für Musiktheorie</i> 4/3 (2007), S. 275–289</ListItem>
      </UnorderedList>
      <Text className={style.mtDefault}>
        Allerdings habe ich bemerkt, dass sich die Probleme der Modellbestimmung auf andere Weise eleganter lösen lassen. Als besonders hilfreich für meine musikanalytische Forschung hat sich dabei die <b><i>Funktionale Analyse</i></b> erwiesen. Diese Forschungsmethode ist keiner Theorie explizit verpflichtet, obgleich sie in aktuell Ausprägungen auf konstruktivistischen Prämissen aufbaut und in der Systemtheorie von Niklas Luhmann (1927−1998) eine tragende Rolle spielt. Von einer Übertragung <b>systemtheoretischer Ideen nach N. Luhmann</b> auf den Bereich der musikalischen Analyse handelt der folgende Aufsatz:        
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><Link href='https://storage.gmth.de/zgmth/pdf/865' isExternal>»Vom Satzmodell zum Modell« <ExternalLinkIcon /></Link>, in: <i>Carl Dahlhaus und die Musiktheorie</i>, ZGMTH Sonderausgabe 2016.</ListItem>
      </UnorderedList>
      <Text className={style.mtDefault}>        
        Dabei lassen sich die <b>hermeneutische und funktionale Analyse als komplementäre Formen des Verstehens</b> auffassen. Denn man kann ein musikalisches Modell als Idealtypus (im Sinne von Max Weber) verstehen, wobei sich über die Differenz von Idealtypus und musikalischer Gestaltung das Individuelle einer musikalischen Komposition beschreiben lässt. Eine solche Verwendung ist für eine hermeneutische Perspektive charakteristisch, die auf ein Verständnis der Individualität des Analysegegenstands zielt. Die hermeneutische Perspektive erfordert eine 1:1-Beziehung zwischen Modell und referenziertem Objekt. Musikalische Modelle können jedoch auch als konstanter Vergleichsgesichtspunkt dienen, der es ermöglicht, funktional äquivalente Gestaltungen zu erkennen. Für die funktionale Perspektive ist eine 1:n-Beziehung zwischen Modell und referenzierten Objekten kennzeichnend. Auf diesen Erkenntnissen baut mein umfangreichster Aufsatz zur Theorie der Sonatenform im ausgehenden 18. Jahrhundert auf:        
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><Link href='https://www.gmth.de/zeitschrift/artikel/956.aspx' isExternal>»Formfunktionen der Sonatenform. Ein Beitrag zur Sonatentheorie auf der Grundlage einer Kritik an William E. Caplins Verständnis von Formfunktionen« <ExternalLinkIcon /></Link>, in: <i>ZGMTH 15/1</i> (in der PDF-FAssung S. 29–79).</ListItem>
      </UnorderedList>

      <Divider mt='40px' mb='40px' height='2px' bgColor='gray' />

      <Heading as='h3' className="headingH3">
        Meine Forschungsschwerpunkte
      </Heading>
      <Text className={style.mtDefault}>
       In meiner Forschung haben sich drei Schwerpunkte herausgebildet, mit denen ich mich regelmäßig beschäftige: 
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}>
          <b>Theorie der Sonatenform im 18. und frühen 19. Jahrhundert.</b> Seit meiner Dissertation zu der Musik Mozarts habe ich mich gefragt, wie eine zeitgemäße Sonatentheorie aussehen müsste, die sich zur Analyse eines größeren Repertoires eignet. Dabei lasse ich mich durch historische Ideen inspirieren (z.B. Kadenzen frei nach H. Chr. Koch, Regolla dell&rsquo;ttava usw.) und kombiniere die Gedanken mit systematischen Überlegungen (z.B. der Bedeutung von Satzmodellen und forschungsgelenkten Modellbildungen) zur musikalischen Analyse.
        </ListItem>
      </UnorderedList>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}>
          <b>Pop- und Rockmusik.</b> An diesem Thema interessiert mich insbesondere die Musik und die musikalische Analyse, die Entwicklung angemessener Analysemethoden sowie die Klärung musikalischer Fachtermini (schwerpunktmäßig für die Popularmusik zwischen 1950 und 1990 sowie neuere Ausprägungen der Pop- und Rockmusik).
        </ListItem>
      </UnorderedList>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}>
          <b>Didaktik der Musiktheorie und Neuen Medien.</b> Hier verfolge ich Forschungen zu grundlegenden Fragen des Lernens und beschäftige mich mit der Frage, auf welche Weise sich <i>Neue Medien</i> (also elektronische Kommunikationsmedien, die über das Internet vernetzbar sind) in den Hochschulfächern <i>Musiktheorie</i> und <i>Musikwissenschaft</i> sinnvoll einsetzen lassen. Den Themen <i>Blended Learning</i> und <i>Open Educational Practises</i> räume ich im letzten Drittel meiner Berufspraxis dabei höchste Priorität ein. Ein besonderes Anliegen ist mir die Erstellung fachlich hochwertiger <i>Open Educational Resources</i> zum Musiklernen sowie der Einsatz von Opensource-Programmen in der Lehre (Notation, Soundbearbeitung, Desktop-Publishing, Bildbearbeitung etc.). Diese Überlegungen haben mit zu dem Projekt <Link href='https://openmusic.academy' isExternal>Open Music Academy <ExternalLinkIcon /></Link> geführt.
        </ListItem>
      </UnorderedList>
    </>
  )
}

Profil.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}