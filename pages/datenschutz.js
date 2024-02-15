import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Impressum ...',
  description: 'Auf dieser Seite finden Sie alle Angaben zum Datenschutz bzw. die Pflichtangaben gemäß DSGVO.',
  filter: 'datenschutz',
  slug: '/datenschutz'
}

const Datenschutz = () => {
  return <>
    <Head>
      <title>Datenschutz</title>
      <meta name="description" content="Datenschutz | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />   

    <Heading className='headingH2'>
      Datenschutzerklärung (nach DSGVO)
    </Heading>
    <Heading className='headingH4'>
      Name und Anschrift des Verantwortlichen
    </Heading>
    <Text>
      Prof. Dr. Ulrich Kaiser<br/>
      Birkenstr. 39c<br />
      85757 Karlsfeld<br/>
      Telefon: 089/289-27873<br/>
      Email: kontakt[at,]kaiser-ulrich.de
    </Text>
    <Heading className='headingH4'>
      Allgemeines zur Datenverarbeitung
    </Heading>
    <Text>
      <b>Umfang der Verarbeitung personenbezogener Daten</b><br/>
      Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.
    </Text>
    <Heading className='headingH4'>
      Bereitstellung der Website und Erstellung von Logfiles
    </Heading>
    <Text>
      <b>Beschreibung und Umfang der Datenverarbeitung</b><br/>
      Diese Seite wird über ein Hosting-Paket bei 1&1 bereitgestellt. Bei jedem Aufruf unserer Internetseite könnten von 1&1 folgende Daten in durch Serverlogfiles erhoben werden (die Angaben von 1und1 können Sie hier nachlesen):
    </Text>
    <ul style={{'margin': '20px 40px'}}>
      <li>IP-Adresse und Hostname</li>
      <li>Zugriffszeitpunkt</li>
      <li>vom Besucher verwendeter Browser</li>
      <li>vom Besucher verwendetes Betriebssystem</li>
      <li>Herkunftslink bzw. -URL</li>
      <li>Verweildauer</li>
      <li>Anzahl aufgerufener Seiten</li>
      <li>zuletzt geöffnete Seite vor dem Verlassen der Website</li>
      <li>Rechtsgrundlage für die Datenverarbeitung</li>
    </ul>
    <Text className=''>
      Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
    </Text>
    <Text className='mt20'>
      <b>Zweck der Datenverarbeitung</b><br/>
      Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung der Website an den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der Sitzung gespeichert bleiben.<br/>
      Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt.<br/>
      In diesen Zwecken liegt auch unser berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO.
    </Text>
    <Text className='mt20'>
      <b>Dauer der Speicherung</b><br/>
      Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung beendet ist.<br/>
      Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer gelöscht oder verfremdet, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.
    </Text>
    <Text className='mt20'>
      <b>Widerspruchs- und Beseitigungsmöglichkeit</b><br/>
      Die Erfassung der Daten zur Bereitstellung der Website und die Speicherung der Daten in Logfiles ist für den Betrieb der Internetseite zwingend erforderlich. Es besteht folglich seitens des Nutzers keine Widerspruchsmöglichkeit.
    </Text>
    <Text className='mt20'>
      <b>Verwendung von Cookies</b><br/>
      Beim Besuch dieser Website werden keine Cookies verwendet.
    </Text>    
  </>
}

Datenschutz.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false}>
      {page}
    </Layout>
  )
}

export default Datenschutz;