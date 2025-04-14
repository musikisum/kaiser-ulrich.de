/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text, Heading, Divider } from '@chakra-ui/react';

const options = {
  title: '',
  description: 'Hier wird demnächst ein Aufsatz zur musikalischen Analyse der Musik von Helene Fischer und W. A. Mozart veröffentlicht. Haben Sie noch ein klein wenig Geduld ...',
  filter: 'publikationen',
  slug: '/publikationen/fischer-mozart-musikwissenschaft'
}

export default function FischerMozartMusikwissenschaft() {
  return (
    <>
      <Head>
        <title>Helene Fischer, W. A. Mozart und die Subdominante im 5.Takt</title>
        <meta name="description" content="Wikimedia | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      {/* <Heading as='h1' className='headingH2'>Helene Fischer, W. A. Mozart und die Subdominante im 5. Takt</Heading>
      <Text>Oder: Musikalische Analyse als Spiegel für Vorurteile in der Musikwissenschaft.</Text>
      <Text mt='6px' fontSize='12px'>
       Dieser Beitrag
      </Text>
      <Text mt='6px' fontSize='12px'>
        Der folgende Beitrag wurde initiiert durch ein Referat auf dem 21. Kongress der GMTH in Basel mit dem Titel »Was passiert im 5. Takt«, in dem es um Strukturbeobachtungen zu Songs ging, die durch Helene Fischer und Beatrice Egli bekannt geworden sind. Die Beobachtungen bestanden darin, dass metaphorisch gesprochen in der Mitte von Taktgruppen dieser Musik – also beispielsweise im fünften Takt achttaktiger Einheiten – sehr häufig eine Subdominante erklingt. Überlegungen zur Formfunktion dieser Subdominante führten zur Melodiegestaltung und an dieser Stelle gerieten strukturelle Ähnlichkeit zwischen der untersuchten Schlagermusik und der Musik W. A. Mozarts in den Blick. Die unterschiedlichen Bewertungen von Schlagermusik auf der einen Seite und der Musik Mozarts auf der anderen sind geeignet, ästhetische Standpunkte der Analysierenden zu reflektieren.<a href='#fn1'><sup id="fz1">1</sup></a>
      </Text>
      <Text mt='6px' fontSize='12px'>
        The following contribution was initiated by a presentation at the 21st Congress of the GMTH in Basel entitled »What happens in the 5th bar?«, which dealt with structural observations on songs made famous by Helene Fischer and Beatrice Egli. The observations centered around the fact that, metaphorically speaking, in the middle of bar groups of this music, – for example, in the fifth bar of eight-bar units – a subdominant is heard very often. Considerations of the formal function of this subdominant led to the melodic design, and at this point structural similarities between the Schlagermusik studied and the music of W. A. Mozart came into view. The different evaluations of Schlagermusik on the one hand and Mozart’s music on the other are suitable for reflecting the aesthetic standpoints of the analysers.
      </Text>
      <Text mt='6px' fontSize='12px'>
        SCHLAGWORTE/KEYWORDS: Analyse; camparative music analysis, Helene Fischer; hit songs; Mozart; Schlager Musik
      </Text>
      <Divider mt='60px' mb='60px' h='1px' bg='gray' />
      
      <Heading as='h2' className='headingH4'>Vorbemerkungen</Heading>
      <Text mb='6px'>
        Dieser Beitrag ist in zwei Teile gegliedert: Im ersten Teil werden Schlagerkompositionen<a href='#fn2'><sup id="fz2">2</sup></a> und Kompositionen W. A. Mozarts unter weitgehender Vernachlässigung gattungsspezifischer Unterschiede untersucht (z. B. rhythmische und großformale Gestaltungen). Methodisch wird dabei auf ausgewählte Aspekte von Satzmodellen rekurriert. Um Missverständnisse zu vermeiden sei erwähnt, dass es keineswegs Ziel war, Satzmodelle in Popularmusik zu entdecken. Die konstruierten Modelle sind vielmehr als Idealtypen im Sinne des Soziologen Max Weber zu verstehen bzw. als »einseitige Steigerung eines oder einiger Gesichtspunkte […] zu einem einheitlichen Gedankenbilde. In seiner begrifflichen Reinheit ist dieses Gedankenbild nirgends in der Wirklichkeit empirisch vorfindbar […]«.<a href='#fn3'><sup id="fz3">3</sup></a> Modelle in diesem Sinne lassen sich als abstrakte Vergleichsgesichtspunkte einsetzen, von denen aus sich in den individuellen Kompositionen funktional äquivalente Gestaltungen bestimmen lassen. Im zweiten Teil der Arbeit werden dann vor dem Hintergrund der Analyseergebnisse des ersten Teils musikwissenschaftliche Aussagen zur Schlagermusik und Musik W. A. Mozarts untersucht. Die differenten musikwissenschaftlichen Bewertungen der funktional äquivalenten bzw. vergleichbaren Sachverhalte erlauben abschließend eine Analyse der ästhetischen Standpunkte der Analysierenden.
      </Text>

      <Heading as='h2' className='headingH4'>Satzmodelle und die Subdominante</Heading>
      <Text mb='6px'>
        Ausgangspunkt der Untersuchung ist die Beobachtung, dass in der Mitte musikalischer Phrasen sehr häufig eine grundstellige Subdominante erklingt. Im Folgenden werden hierzu einige Modelle erläutert und Beispiele aus dem frühen Schlagerrepertoire von Helene Fischer (bis 2017) und Beatrice Egli (als Referenzbeispiele) sowie Kompositionen Mozarts analysiert.
      </Text>
      <Heading as='h2' className='headingH4'>Schema und 4–1-Modell</Heading>
      <Text mb='6px'>
        Das erste Analysemodell besteht aus zwei Teilen. Der erste Teil zeigt harmonisch ein I-V-I-Pendel, der zweite Teil besteht aus einer IV–I- oder IV-V-Bewegung:
      </Text>
      <img className='scoreExample w50' src='/images/fischer-mozart/Modelle-1.svg' alt='Modell I-V-I und Kadenz' />
      <Text className='imageText'>Abbildung 1: I-V-I-Pendelmodell und IV-I- oder IV-V-Bewegung</Text>
      <Text mb='6px'>
        Das I-V-I-Pendel dient zum Beschreiben von ersten Taktgruppen (Anfängen), die durch ein Pendeln zwischen tonikalen und dominantischen Harmonien charakterisiert sind. Ausgeschlossen sind damit Anfänge, in denen die Subdominante eine tragende Rolle spielt. Das bekannteste Modell, das sich durch das I-V-I-Pendel referenzieren lässt, wäre das Schema (I-V-V-I) im Sinne Robert Gjerdingens<a href='#fn4'><sup id="fz4">4</sup></a> (Beispiel a), die Beispiele b) und c) lassen sich jedoch ebenfalls durch das Modell angemessen beschreiben:
      </Text>
      <img className='scoreExample w50' src='/images/fischer-mozart/Modelle-2.svg' alt='mögliche Harmoniefolgen I' />
      <Text className='imageText'>Abbildung 2: Mögliche Harmoniefolgen des I-V-I-Modells</Text>
      <Text>
        Als Ausnahme wird eine vor dem tonikalen Abschluss relativ kurz erklingende Subdominante im Rahmen des Schemas interpretiert (Beispiel d). Diese Wendung kommt in Schlagermusik recht häufig vor, wobei die Subdominante hier wie eine Prolongation der zweiten Dominantharmonie wirkt und deshalb als gattungstypische Erweiterung des Schemas aufgefasst wird.
      </Text>
      <Text truncate>
        Das Modell IV-I- bzw. IV-V-Bewegung ist recht abstrakt, da mit ihm Einheiten erfasst werden sollen, die mit einer IV. Stufe bzw. Subdominante beginnen und auf einer I. Stufe (als Ganzschluss) oder einer V. Stufe (als Halbschluss) enden. Die prominenteste Harmoniefolge, die sich mithilfe der IV-I-Bewegung beschreiben lässt, dürfte die IV-I-V-I-Pendelharmonik<a href='#fn5'><sup id="fz5">5</sup></a> sein, jedoch auch die unter b) bis d) gezeigten Harmonien verbinden mit entsprechender Stimmführung eine IV. Stufe mit einem Ganz- oder Halbschluss:
      </Text>
      <img className='scoreExample w50' src='/images/fischer-mozart/Modelle-3.svg' alt='mögliche Harmoniefolgen II' />
      <Text className='imageText'>Abbildung 3: Mögliche Harmoniefolgen des IV-I- bzw. IV-V-Modells</Text>
      <Text>
        Der Chorus des von Helene Fischer gesungenen Songs Tanz noch einmal mit mir des Albums Zaubermond (2008) lässt sich im Hinblick auf Syntax und Harmonik angemessen durch das Modell (I-V-I-Pendel und IV-I-Bewegung) verstehen. Die Sexte in den Backingvocals im ersten Takt wird dabei als Auffassungsdissonanz zur I. Stufe interpretiert (Abb. 4).
      </Text>

       <Divider mt='60px' mb='60px' h='1px' bg='gray' />
       <Heading as='h2' className='headingH4'>Fußnoten</Heading>
       <div>
        <ul style={{ listStyleType: 'none' }}>
          <li id="fn1"><a href='#fz1'>1.&nbsp;</a>Unter einer deutschsprachigen Musikwissenschaft werden hier alle Disziplinen subsumiert, die sich mit wissenschaftlichem Anspruch und in deutscher Sprache mit der Analyse von Musik beschäftigen, also die akademische Musikwissenschaft und Popularmusikforschung, die wissenschaftlich arbeitenden Bereiche der institutionellen Musiktheorie usw.</li>
          <li id="fn2"><a href='#fz2'>2.&nbsp;</a>Systematisch analysiert wurden die Songs der deutschsprachigen Studioalben von Helene Fischer bis 2017 (mit Ausnahme des Albums <i>Weihnachten</i>) sowie einige von Beatrice Egli gesungene Songs als Referenzbeispiele. Die Begrenzung der Alben bis 2017 ist dadurch motiviert, dass bis zu diesem Zeitpunkt Jean Frankfurter Stammkomponist des Schlagerrepertoires von Helene Fischer war. Ab dem Album Helene Fischer (2017) ändert sich das, im Album <i>Rausch</i> (2021) ist Frankfurter an keinem Titel mehr beteiligt. Mit den wechselnden Autorenteams des zuletzt genannten Albums klingen die Songs von Fischer musikalisch auch ganz anders als die Titel bis zum Album <i>Farbenspiel</i> (2013).</li>
          <li id="fn3"><a href='#fz3'>3.&nbsp;</a>Weber 1922, 191. Zum Modellbegriff und wissenschaftstheoretischen Kontext s. Kaiser 2016.</li>
          <li id="fn4"><a href='#fz4'>4.&nbsp;</a>Gjerdingen 1988.</li>
          <li id="fn5"><a href='#fz5'>5.&nbsp;</a>Zur Bedeutung der IV-I-V-I-Harmonik in der Formfunktion einer zweiten Taktgruppe in Musik des 18. Jahrhunderts vgl. Kaiser 2007, 179–185. In englischsprachigen Publikationen wird diese Harmonik unter dem Namen <i>Prinner</i> diskutiert, vgl. Gjerdingen 2007, 45 ff.</li>
        </ul>
       </div> */}
    </>
  )
}

FischerMozartMusikwissenschaft.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
