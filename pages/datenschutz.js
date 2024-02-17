import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Impressum ...',
  description: 'Auf dieser Seite finden Sie alle die Datenschutzerklärung bzw. Pflichtangaben gemäß DSGVO.',
  filter: 'datenschutz',
  slug: '/datenschutz'
}

const Datenschutz = () => {
  return <>
    <Head>
      <title>Datenschutzerklärung</title>
      <meta name="description" content="Datenschutzerklärung | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />   

    <Heading className='headingH2'>
      Datenschutzerklärung (nach DSGVO)
    </Heading>
    <Heading className='headingH4'>
      Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:
    </Heading>
    <Text>
      Prof. Dr. Ulrich Kaiser<br/>
      Birkenstr. 39c<br />
      85757 Karlsfeld<br/>
      Telefon: 089/289-27873<br/>
      E-Mail: kontakt[at,]kaiser-ulrich.de
    </Text>
    <Heading className='headingH4'>
      Allgemeines zur Datenverarbeitung
    </Heading>
    <Text>
      <b>Umfang der Verarbeitung personenbezogener Daten</b><br/>
      Diese Website wird von einem Webhosting-Anbieter mit Sitz in Deutschland angeboten, Daten der Nutzung werden nur erhoben, soweit diese zur Bereitstellung der funktionsfähigen Website erforderlich sind.
    </Text>
    <Heading className='headingH4'>
      Bereitstellung der Website und Erstellung von Logfiles
    </Heading>
    <Text>
      <b>Beschreibung und Umfang der Datenverarbeitung</b><br/>
      Diese Seite wird über ein Hosting-Paket bei 1&1 bereitgestellt. Bei jedem Aufruf unserer Internetseite könnten von 1&1 folgende Daten in durch Serverlogfiles erhoben werden (die Angaben von 1und1 können Sie <Link href='https://www.ionos.de/digitalguide/online-marketing/web-analyse/logfile-analyse-user-statistiken-dank-server-log/'>hier</Link> nachlesen):
    </Text>
    <ul className='list2040'>
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
      Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen uns die Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen Systeme. Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt. ein berechtigtes Interesse an der Datenverarbeitung nach Art. 6 Abs. 1 lit. f DSGVO vor.
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
    <Text className='mt20'>
      <b>E-Mail-Kontakt</b><br/>
      Auf dieser Internetseite gibt es kein Kontaktformular.<br />
      Wenn Sie mir eine E-Mail über die angegebene Adresse senden, so werden die daraus ersichtlichen Informationen an mich übermittel und von mir für die Dauer der Konservation gespeichert. In diesem Zusammenhang erfollgt selbstverständlich keine Weitergabe dieser Daten an Dritte. Die Daten werden ausschließlich zur Korresponenz mit Ihnen verwendet.
    </Text>    
    <Text className='mt20'>
      <b>Rechtsgrundlage für die Datenverarbeitung</b><br/>
      Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO.
    </Text>
    <Text className='mt20'>
      <b>Zweck der Datenverarbeitung</b><br/>
      Die Verarbeitung der personenbezogenen Daten aus einer E-Mail dient allein zur Bearbeitung der Kontaktaufnahme, und hierin liegt auch das erforderliche berechtigte Interesse an der Verarbeitung der Daten.
    </Text>    
    <Text className='mt20'>
      <b>Dauer der Speicherung</b><br/>
      Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind. Beendet ist die Konversation dann, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist. Schreiben gesetzlichen Regelungen und eine Datenspeicherung vor, haben gesetzliche Vorgaben Vorang.
    </Text>      
    <Text className='mt20'>
      <b>Widerspruchs- und Beseitigungsmöglichkeit</b><br/>
      Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen Daten zu widerrufen. Haben Sie per E-Mail Kontakt zu mir aufgenommen, so können Sie der Speicherung der personenbezogenen Daten jederzeit widersprechen. In diesem Fall werde ich alle personenbezogenen Daten löschen, die Konversation kann deswegen nicht fortgeführt werden.
    </Text>

    <Heading className='headingH4'>
      Rechte der betroffenen Person
    </Heading>
    <Text className='mt20'>
      Werden personenbezogene Daten von Ihnen verarbeitet, sind Sie Betroffener i.S.d. DSGVO und es stehen Ihnen folgende Rechte gegenüber dem Verantwortlichen zu:
    </Text>
    <Text className='mt20'>
      <b>Auskunftsrecht</b>
    </Text>
    <ul className='list2040'>
      <li>die Zwecke, zu denen die personenbezogenen Daten verarbeitet werden</li>
      <li>die Kategorien von personenbezogenen Daten, welche verarbeitet werden</li>
      <li>die Empfänger bzw. die Kategorien von Empfängern, gegenüber denen die Sie betreffenden personenbezogenen Daten offengelegt wurden oder noch offengelegt werden</li>
      <li>die geplante Dauer der Speicherung der Sie betreffenden personenbezogenen Daten oder, falls konkrete Angaben hierzu nicht möglich sind, Kriterien für die Festlegung der Speicherdauer</li>
      <li>das Bestehen eines Rechts auf Berichtigung oder Löschung der Sie betreffenden personenbezogenen Daten, eines Rechts auf Einschränkung der Verarbeitung durch den Verantwortlichen oder eines Widerspruchsrechts gegen diese Verarbeitung</li>
      <li>das Bestehen eines Beschwerderechts bei einer Aufsichtsbehörde</li>
      <li>alle verfügbaren Informationen über die Herkunft der Daten, wenn die personenbezogenen Daten nicht bei der betroffenen Person erhoben werden</li>
      <li>das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling gemäß Art. 22 Abs. 1 und 4 DSGVO und – zumindest in diesen Fällen – aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen einer derartigen Verarbeitung für die betroffene Person.</li>
    </ul>
    <Text className='mt20'>
      Ihnen steht das Recht zu, Auskunft darüber zu verlangen, dass Ihre Daten nicht an ein Drittland oder an eine internationale Organisation übermittelt werden.
    </Text>
    <Text className='mt20'>
      <b>Recht auf Berichtigung</b><br/>
      Sie haben ein Recht auf Berichtigung und/oder Vervollständigung gegenüber dem Verantwortlichen, sofern die verarbeiteten personenbezogenen Daten, die Sie betreffen, unrichtig oder unvollständig sind. Ich werde die Berichtigung dann unverzüglich vorzunehmen.
    </Text>
    <Text className='mt20'>
      <b>Recht auf Einschränkung der Verarbeitung</b><br/>
      Unter den folgenden Voraussetzungen können Sie die Einschränkung der Verarbeitung der Sie betreffenden personenbezogenen Daten verlangen:
    </Text>
    <ul className='list2040'>
      <li>
        wenn Sie die Richtigkeit der Sie betreffenden personenbezogenen für eine Dauer bestreiten, die es dem Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen Daten zu überprüfen,
      </li>
      <li>
        die Verarbeitung unrechtmäßig ist, Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung der Nutzung der personenbezogenen Daten verlangen,
      </li>
      <li>
        der Verantwortliche die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie diese jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen oder
      </li>
      <li>
        wenn Sie Widerspruch gegen die Verarbeitung gemäß Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen.
      </li>
    </ul>
    <Text className='mt20'>
      Wurde die Verarbeitung der Sie betreffenden personenbezogenen Daten eingeschränkt, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Union oder eines Mitgliedstaats verarbeitet werden.<br/>
      Wurde die Einschränkung der Verarbeitung nach den o.g. Voraussetzungen eingeschränkt, werden Sie von dem Verantwortlichen unterrichtet bevor die Einschränkung aufgehoben wird.
    </Text>
    <Text className='mt20'>
      <b>Recht auf Löschung</b><br/>
      a) Löschungspflicht<br/>
      Sie können von dem Verantwortlichen verlangen, dass die Sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, und der Verantwortliche ist verpflichtet, diese Daten unverzüglich zu löschen, sofern einer der folgenden Gründe zutrifft:
    </Text>
    <ul className='list2040'>
      <li>
        Die Sie betreffenden personenbezogenen Daten sind für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig.
      </li>
      <li>
        Sie widerrufen Ihre Einwilligung, auf die sich die Verarbeitung gem. Art. 6 Abs. 1 lit. a oder Art. 9 Abs. 2 lit. a DSGVO stützte, und es fehlt an einer anderweitigen Rechtsgrundlage für die Verarbeitung.
      </li>
      <li>
        Sie legen gem. Art. 21 Abs. 1 DSGVO Widerspruch gegen die Verarbeitung ein und es liegen keine vorrangigen berechtigten Gründe für die Verarbeitung vor, oder Sie legen gem. Art. 21 Abs. 2 DSGVO Widerspruch gegen die Verarbeitung ein.
      </li>
      <li>
        Die Sie betreffenden personenbezogenen Daten wurden unrechtmäßig verarbeitet.
      </li>
      <li>
        Die Löschung der Sie betreffenden personenbezogenen Daten ist zur Erfüllung einer rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
      </li>
      <li>
        Die Sie betreffenden personenbezogenen Daten wurden in Bezug auf angebotene Dienste der Informationsgesellschaft gemäß Art. 8 Abs. 1 DSGVO erhoben.
      </li>
    </ul>
    <Text className='mt20'>
      b) Ausnahmen<b/>
      Das Recht auf Löschung besteht nicht, soweit die Verarbeitung erforderlich ist
    </Text>
    <ul className='list2040'>
      <li>
        zur Ausübung des Rechts auf freie Meinungsäußerung und Information,
      </li>
      <li>
        zur Erfüllung einer rechtlichen Verpflichtung, die die Verarbeitung nach dem Recht der Union oder der Mitgliedstaaten, dem der Verantwortliche unterliegt, erfordert, oder zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde,
      </li>
      <li>
        aus Gründen des öffentlichen Interesses im Bereich der öffentlichen Gesundheit gemäß Art. 9 Abs. 2 lit. h und i sowie Art. 9 Abs. 3 DSGVO,
      </li>
      <li>
        für im öffentlichen Interesse liegende Archivzwecke, wissenschaftliche oder historische Forschungszwecke oder für statistische Zwecke gem. Art. 89 Abs. 1 DSGVO, soweit das unter Abschnitt a) genannte Recht voraussichtlich die Verwirklichung der Ziele dieser Verarbeitung unmöglich macht oder ernsthaft beeinträchtigt oder
      </li>
      <li>
        zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
      </li>
    </ul>   
    <Text className='mt20'>
      <b>Widerspruchsrecht</b><br/>
      Sie haben das Recht, Ihre datenschutzrechtliche Einwilligungserklärung jederzeit zu widerrufen. Durch den Widerruf der Einwilligung wird die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung nicht berührt.
    </Text>
    <Text className='mt20'>
      <b>Recht auf Beschwerde bei einer Aufsichtsbehörde</b><br/>
      Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.<br/>
      Die Aufsichtsbehörde, bei der die Beschwerde eingereicht wurde, unterrichtet den Beschwerdeführer über den Stand und die Ergebnisse der Beschwerde einschließlich der Möglichkeit eines gerichtlichen Rechtsbehelfs nach Art. 78 DSGVO.
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