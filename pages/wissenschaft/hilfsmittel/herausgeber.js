import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { Heading, Container, Text, Alert, AlertIcon, Divider, Code } from '@chakra-ui/react';

import style from '../index.module.css'

const options = {
  title: 'Anmerkungen zum Herausgeber',
  description: 'Häufig werde ich gefragt, warum in in den von mir bevorzugten Zitationsstilen auf die Angabe einer Herausgeberin oder eine Herausgebers verzichte. Die Begründung dafür finden Sie hier.',
  filter: 'wissenschaft/hilfsmittel',
  slug: '/wissenschaft/hilfsmittel/herausgeber'
}

export default function Herausgeber() {
  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Anmerkungen zum Herausgeber | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />

      <Heading as='h3' className='headingH3'>
        {options.title}
      </Heading>

      <Container maxW='75%' mt='10' p='6' bg='green.100' borderRadius='20'>
        <i>"Publikationen sind gleichsam das Zahlungsmittel der Wissenschaft [...] Nur mit Hilfe von Publikationen werden wissenschaftliche Resultate zitierfähig [...]"</i>
        
        <Text mt='2' textAlign='right' fontSize='sm'>
          aus: Niklas Luhmann, Die Wissenschaft der Gesellschaft, Frankfurt am Main 1990, S. 432.          
        </Text>
      </Container>

      <Text mt='40px'>
        So klar wie von Niklas Luhmann kann man es selten lesen: Kluge Gedanken, bestechende Ideen und eine gelehrte Rede gehören (im strengen Sinne) nicht zu dem, was Wissenschaft im Kern ausmacht. Das Zahlungsmittel der Wissenschaft bilden die verschriftlichten Forschungsergebnisse (also zum Beispiel Bücher, Aufsätze usw.), an die andere anschließen können, indem sie diese Beiträge lesen und die darin befindlichen Aussagen bestätigen oder widerlegen. Dass Luhmann nur die Schriftlichkeit gelten und die Mündlichkeit außen vor lässt, kann man sich an einem alltäglichen Szenario leicht veranschaulichen: Einer sagt etwas, ein anderer bezieht sich darauf, woraufhin der erste behauptet, er habe das so ja gar nicht gesagt und sei darüber hinaus missverstanden worden. Man kann sich irgendwie immer herausreden, schreibt man dagegen etwas auf, muss man dazu stehen, auch wenn es falsch ist.
      </Text>
      <Text mt='20px'>
        Ist Schriftlichkeit das Zahlungsmittel der Wissenschaften, muss das Zahlungsmittel verwendet werden können, muss ein schneller Zugang möglich sein. Hierfür benötigt man wiederum Angaben darüber, wo sich eine bestimmte Aussage finden lässt, also in welchem Buch oder Aufsatz man sie nachschlagen kann. Auch sollten diese Angaben in hohem Maße standardisiert und für alle im Wissenschaftsbetrieb Arbeitenden schnell und eindeutig verständlich sein. Solche standardisierten Angaben werden auch bibliographische Informationen genannt, der Vorgang des Verweisens selbst im Rahmen einer wissenschaftlichen Arbeit heißt Zitieren.
      </Text>
      <Text mt='20px'>
        Die Standards für das Zitieren im wissenschaftlichen Kontext kann man sich wie Spielregeln eines Spiels vorstellen: Sie sind nicht an allen Orten gleich (die Doppelkopf-Regeln in Berlin und Nordrhein−Westfalen unterscheiden sich beispielsweise ebenso wie die Zitierstile verschiedener Zeitschriften), und Regeln sind auch nicht unveränderbar (gelegentlich werden sie ganz offiziell "angepasst"). Wenn Sie sich also an einen "Spieltisch" setzen, um nach den im Wissenschaftsbetrieb geltenden Regeln "zu spielen" (zum Beispiel eine Bachelor- oder Zulassungsarbeit schreiben möchten), müssen Sie sich also als erstes informieren, welche Spielregeln an Ihrem Tisch gelten (am besten, Sie fragen hierzu Ihren örtlichen "Spielleiter", also in der Regel die Betreuerin oder den Betreuer Ihrer Arbeit).
      </Text>
      <Text mt='20px'>
        Wie bereits erwähnt, haben die Regeln wissenschaftlichen Zitierens den Sinn, die in einer Arbeit verwendeten Quellen offenzulegen, so dass jede Leserin und jeder Leser die angegebenen Quellen auffinden, einsehen und damit wissenschaftliche Aussagen überprüfen kann. Auf dem Weg, dieses Ziel zu erreichen, muss allerdings nicht immer alles gleich sinnvoll sein. Zum Beispiel ist es momentan in der Musikforschung (vgl. hierzu die Autorenrichtlinien) üblich, Autoren im bibliographischen Verzeichnis nach dem Schema ›Vorname‹ / ›Nachname‹ anzugeben, obwohl die Einträge im Literaturverzeichnis nach dem Nachnamen alphabetisch sortiert werden. Stellen Sie sich also vor, Sie würden im Literaturverzeichnis einen bestimmten Autor suchen. Dann müssten Sie in den bibliographischen Angaben immer auf den ersten Buchstaben des zweiten Wortes achten, was aufwendiger ist, als wenn die alphabetisch sortierten Nachnamen gleich am Anfang einer jeden Zeile ins Auge fallen würden. In anderen Zitierstilen wird das auch so gemacht, nur im Moment halt nicht am "Spieltisch" der Musikforschung.
      </Text>
      <Text mt='20px'>
        Eine umstrittene Frage ist es, ob neben dem Urheber auch der Herausgeber eines Werkes angegeben werden muss. Hier dürften die Meinungen auseinander gehen. Versuchen wir, die Kontroverse zu verstehen.
      </Text>
      <Alert status='success' mt='20px'>
        <AlertIcon />
        »Ja, die Herausgeber müssen angegeben werden.«
      </Alert>
      <Text mt='20px'>
        Zur Begründung dieser Aussage ließe sich anführen, dass eine Herausgeberschaft jede Menge Arbeit bedeutet, die im Dienste der Wissenschaften geleistet wird und die entsprechend anerkannt werden sollte. Vielleicht bemerkt Herr XYZ, dass es zu einem spezifischen Thema noch sehr wenig Veröffentlichungen gibt (man sagt dann auch: "Dieses Thema ist ein Desiderat der Forschung"). Anschließend müssen kompetente Autoren zu diesem Thema ausgewählt und angesprochen, die Beiträge eingesammelt und formal lektoriert sowie die Bedingungen mit dem Verlag ausgehandelt werden usw. Der kleine Vermerk "hrsg. von XYZ" trägt dieser Arbeit Rechnung, denn ohne einen Herausgeber könnten wir die Leistungen von herausgegebenen Urhebern ja überhaupt nicht lesen (denn dann wären sie ja gar nicht veröffentlicht).
      </Text>
      <Alert status='error' mt='20px'>
        <AlertIcon />
        »Nein, die Herausgeber müssen nicht angegeben werden.«
      </Alert>
      <Text mt='20px'>
        Hierfür spricht, dass es ungleich schwieriger ist, ein Buch zu schreiben als es herauszugeben. Denn die primäre Leistung des Autors besteht in einer langwierigen inhaltlichen Auseinandersetzung mit einem Thema (das heißt, in der Erforschung eines Gegenstandes), die des Herausgebers hingegen in der formalen Arbeit (Auswählen der Autoren, formales Lektorieren, Gespräche mit dem Verlag etc.).
      </Text>

      <Divider mt='6' />

      <Text mb='6' mt='6'>
        Der erste Punkt (verpflichtende Angabe des Herausgebers) ist einleuchtend und scheint gewichtiger zu sein als der zweite, der die Akteure lediglich auf semantisch unterschiedlichen Ebenen ansiedelt. Doch schauen wir uns hierzu ein Beispiel an: Frau Prof. Dr. Silke Leopold ist eine bekannte Musikwissenschaftlerin und unter anderem eine Spezialistin für Claudio Monteverdi. Über Monteverdi hat sie ein Buch verfasst:
      </Text>

      <Container bg='gray.100' maxW='75%' p='15px'>
        Silke Leopold, <i>Claudio Monteverdi und seine Zeit</i> (= Große Komponisten und ihre Zeit), Laaber 1982.
      </Container>

      <Text mt='6' mb='6'>
        Im Internet findet man nun auch noch ein weiteres Buch dieser Autorin zum Thema, das sie anscheinend zusammen mit einem Co-Autor geschrieben hat. In einem Online-Shop lesen sich die bibliographischen Angaben zu diesem Titel wie folgt:
      </Text>

      <Container bg='gray.100' maxW='75%' p='15px'>
        Silke Leopold und Joachim Steinheuer, <i>Claudio Monteverdi und die Folgen</i>, Kassel 1998.
      </Container>

      <Text mt='6' mb='6'>
        Silke Leopold und Joachim Steinheuer werden aufgrund des Datensatzes, der Online-Händlern zur Verfügung steht, explizit als Autoren (also als Urheber) genannt. Nimmt man das Buch allerdings in die Hand und blättert zur Seite 3, bekommt man ein ganz anderes Bild. Nach diesen Angaben müsste es im bisher gepflegten Zitierstil heißen:
      </Text>

      <Container bg='gray.100' maxW='75%' p='15px'>
        <i>Claudio Monteverdi und die Folgen. Bericht über das Internationale Symposium Detmold 1993</i>, hrsg. von Silke Leopold und Joachim Steinheuer, Kassel 1998.
      </Container>

      <Text mt='20px'>
        In dem Buch finden sich Beiträge von 23 Autoren, Joachim Steinheuer ist als Autor vertreten, Silke Leopold hat aber in diesem Buch gar nichts geschrieben (außer ein Vorwort zusammen mit Herrn Dr. Steinheuer).
      </Text>

      <Text mb='6'>
        In vielen Reihen werden auf diese Art Herausgeber mitgeschleppt, die schon lange nichts mehr für eine Herausgabe getan haben. Zum Beispiel bin ich Herausgeber der Reihe Lernprogramme, die wiederum eine Unterreihe der Reihe Bärenreiter Studienbücher Musik ist. Das erste Buch dieser Reihe habe ich selbst geschrieben, das zweite Buch mit einem Co-Autor zusammen. Soweit, so gut. Als drittes Buch habe ich mir ein Lehrwerk zur Musik des 20. Jahrhunderts in dieser Reihe gewünscht, und mein Kollege Prof. Dr. Christoph Wünsch ist (nicht nur) auf diesem Gebiet äußerst kompetent. Also habe ich ihn gefragt, ob er das Buch schreiben würde und anschließend im Bärenreiter-Verlag angerufen, ob sie ein solches Buch lektorieren und drucken würden. Dreimal "ja" und die Sache war perfekt. Danach hatte ich mit dem Buch eigentlich nichts mehr zu tun (heute arbeite ich allerdings gerne damit, Christoph hat es mir geschenkt). Rechtfertigt meine ungefähr 30-minütige Tätigkeit, dass auf das Buch von Christoph Wünsch wie folgt verwiesen werden muss:
      </Text>

      <Container bg='gray.100' maxW='75%' p='15px'>
        Christoph Wünsch, <i>Satztechniken im 20. Jahrhundert</i> (= Lernprogramme 3, hrsg. von Ulrich Kaiser, in: Bärenreiter Studienbücher Musik 16, hrsg. von Jutta Schmoll-Barthel und Silke Leopold), Kassel 2009.
      </Container>

      <Text mt='6' mb='6'>
        Oder wäre die folgende Angabe dem Autor gegenüber nicht fairer:
      </Text>

      <Container bg='gray.100' maxW='75%' p='15px'>
        Christoph Wünsch, <i>Satztechniken im 20. Jahrhundert</i> (= Bärenreiter Studienbücher Musik 16), Kassel 2009.
      </Container>

      <Text mt='20px'>
        Durch Verweis auf die Reihe (= Bärenreiter Studienbücher Musik 16) kann man das Buch jedenfalls auch im Verlagskatalog schnell ausmachen, durch die Angabe der Herausgeber findet man es nicht schneller. Ein Verzicht auf die Herausgeberschaften könnte verhindern, dass in Datensätzen Namen als Autoren für Publikationen erscheinen, die von ihnen gar nicht geschrieben worden sind (oder für die ihr Beitrag sehr überschaubar war). Die Tatsache, dass es große Herausgeber-Leuchten gibt, die nur kleine Autoren-Lichter sind, wird letztendlich die Kehrseite der Medaille bleiben, auf deren Vorderseite die Arbeit einer seriösen Herausgeberschaft in einer bibliographischen Angabe gewürdigt wird.
      </Text>

      <Text>
        Ganz ähnlich verhält es sich in der Frage, ob die Verlagsangabe verzichtbar ist oder nicht. Früher war eine solche Angabe von Bedeutung, damit man eine Hilfe hatte, wo man das Buch bestellen kann. Heute hingegen − im Zeitalter der Online-Shops − dürfte diese Angabe entbehrlich sein. Es verwundert daher wenig, dass die Verlagsangabe auch als verzichtbare Werbung angesehen und in bibliographischen Angaben weggelassen wird. Zumindest am Spieltisch der Musikforschung ist das so, an anderen Spieltischen ist es anders. Am schlauesten war in dieser Hinsicht der Laaber-Verlag. Er hat sich so genannt, wie der Ort, in dem er angesiedelt ist. Und da Ortsangaben im Gegensatz zu Verlagsangaben obligatorisch sind, weiß man immer gleich, wer's gedruckt hat, wenn man beispielsweise liest "Laaber 1993" (dagegen wissen nur Insider, dass man in "Kassel" den Bärenreiter-Verlag, in "Mainz" den Schott-Verlag und in "Hildesheim" den Olms-Verlag findet).
      </Text>
    </>
  )
}

Herausgeber.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false}  showheaven={true}>
      {page}
    </Layout>
  )
}