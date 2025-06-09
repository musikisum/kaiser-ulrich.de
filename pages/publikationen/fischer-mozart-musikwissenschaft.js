/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text, Heading, Divider } from '@chakra-ui/react';

const options = {
  title: 'Publikationen',
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
      <Text mt='6px' fontSize='12px'>
       Dieser Beitrag ist erschienen in: ... Er wird hier in HTML-Form zur Verfügung gestellt, um einen Nachvollzug der Höbeispiele zu erleichtern. Die Noten skizzieren urheberrechtlich geschütztes Material, Melodien und die Auschnitte aus den Songs (Sounddateien) werden im Rahmen des <a href='https://www.gesetze-im-internet.de/urhg/__51.html' className='underline'>§ 51 UrHG</a> verwendet, sind gehostet auf dem Server der GMTH und wurden von der <a href='' className='underline'>Zeitschrift (Proceedings) der Gesellschaft für Musiktheorie</a> über Link eingebunden.
      </Text>
      {/* <Heading as='h1' className='headingH2'>Helene Fischer, W. A. Mozart und die Subdominante im 5. Takt</Heading>
      <Text>Oder: Musikalische Analyse als Spiegel für Vorurteile in der Musikwissenschaft.</Text>
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
      <Text>
        Ausgangspunkt der Untersuchung ist die Beobachtung, dass in der Mitte musikalischer Phrasen sehr häufig eine grundstellige Subdominante erklingt. Im Folgenden werden hierzu einige Modelle erläutert und Beispiele aus dem frühen Schlagerrepertoire von Helene Fischer (bis 2017) und Beatrice Egli (als Referenzbeispiele) sowie Kompositionen Mozarts analysiert.
      </Text>
      <Heading as='h2' className='headingH4'>Schema und 4–1-Modell</Heading>
      <Text>
        Das erste Analysemodell besteht aus zwei Teilen. Der erste Teil zeigt harmonisch ein I-V-I-Pendel, der zweite Teil besteht aus einer IV–I- oder IV-V-Bewegung:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Modelle-1.svg' alt='Modell I-V-I und Kadenz' />
      <Text className='urhgText'>Abbildung 1: I-V-I-Pendelmodell und IV-I- oder IV-V-Bewegung</Text>
      <Text className='mt36'>
        Das I-V-I-Pendel dient zum Beschreiben von ersten Taktgruppen (Anfängen), die durch ein Pendeln zwischen tonikalen und dominantischen Harmonien charakterisiert sind. Ausgeschlossen sind damit Anfänge, in denen die Subdominante eine tragende Rolle spielt. Das bekannteste Modell, das sich durch das I-V-I-Pendel referenzieren lässt, wäre das Schema (I-V-V-I) im Sinne Robert Gjerdingens<a href='#fn4'><sup id="fz4">4</sup></a> (Beispiel a), die Beispiele b) und c) lassen sich jedoch ebenfalls durch das Modell angemessen beschreiben:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Modelle-2.svg' alt='mögliche Harmoniefolgen I' />
      <Text className='urhgText'>Abbildung 2: Mögliche Harmoniefolgen des I-V-I-Modells</Text>
      <Text className='mt36'>
        Als Ausnahme wird eine vor dem tonikalen Abschluss relativ kurz erklingende Subdominante im Rahmen des Schemas interpretiert (Beispiel d). Diese Wendung kommt in Schlagermusik recht häufig vor, wobei die Subdominante hier wie eine Prolongation der zweiten Dominantharmonie wirkt und deshalb als gattungstypische Erweiterung des Schemas aufgefasst wird.<br />
        <span className='truncate' />Das Modell IV-I- bzw. IV-V-Bewegung ist recht abstrakt, da mit ihm Einheiten erfasst werden sollen, die mit einer IV. Stufe bzw. Subdominante beginnen und auf einer I. Stufe (als Ganzschluss) oder einer V. Stufe (als Halbschluss) enden. Die prominenteste Harmoniefolge, die sich mithilfe der IV-I-Bewegung beschreiben lässt, dürfte die IV-I-V-I-Pendelharmonik<a href='#fn5'><sup id="fz5">5</sup></a> sein, jedoch auch die unter b) bis d) gezeigten Harmonien verbinden mit entsprechender Stimmführung eine IV. Stufe mit einem Ganz- oder Halbschluss:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Modelle-3.svg' alt='mögliche Harmoniefolgen II' />
      <Text className='urhgText'>Abbildung 3: Mögliche Harmoniefolgen des IV-I- bzw. IV-V-Modells</Text>
      <Text className='mt36'>
        Der Chorus des von Helene Fischer gesungenen Songs Tanz noch einmal mit mir des Albums Zaubermond (2008) lässt sich im Hinblick auf Syntax und Harmonik angemessen durch das Modell (I-V-I-Pendel und IV-I-Bewegung) verstehen. Die Sexte in den Backingvocals im ersten Takt wird dabei als Auffassungsdissonanz zur I. Stufe interpretiert.
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-1.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-2.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-3.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-4.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <Text className='urhgText'>Abbildung 4: Notenskizze Tanz noch einmal mit mir (Chorus)</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_01.mp3'  />
      <Text className='urhgText'>Helene Fischer, »Tanz noch einmal mit mir«, <i>Zaubermond</i>, Track 7,<br/>Electrola 2277572, P 2008, Musik/Text: Jean Frankfurter, Tobias Reitz.</Text>
      <Text className='mt36'>
        Der harmonische Rhythmus in diesem Song verläuft ganztaktig, das Erreichen der I. Stufe am Ende wirkt ganzschlüssig und bildet zugleich den ersten Takt eines zweitaktigen Interludes, bevor der zweite Verse wieder (in a-Moll) einsetzt. Der folgende zweitaktige Gerüstsatz veranschaulicht den nach C-Dur transponierten harmonischen Verlauf sowie die Gerüsttöne der Melodiegestaltung.
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-1.svg' alt='Gerüstsatz für Tanz noch einmal mit mir' />
      <Text className='urhgText'>Abbildung 5: Gerüstsatz Tanz noch einmal mit mir (Chorus), original in A-Dur</Text>
      <Text className='mt36'>
        Motivisch entsprechen sich erster und dritter sowie zweiter und vierter Takt (Diminution abwärts- bzw. aufwärts gerichteter Sextintervalle). Das führt anfangs zur Wahrnehmung von Zweitaktgruppen, wobei ab der mittigen Subdominante bzw. dem Beginn der IV-I-V-I-Harmonik ein Beschleunigungseffekt eintritt, der durch einer eintaktige motivische Gestaltung bewirkt wird. Die Klammern über den Notensystemen zeigen die beschriebene Gliederung an.
      </Text>
      <Text>
        <span className='truncate' />Auch der Chorus-Verlauf des von Helene Fischer gesungenen Songs <i>Einmal berührt, für immer verführt</i> lässt sich angemessen durch das Modell (I-V-I-Pendel und IV-I-Bewegung) beschreiben. Interessant ist in diesem Song, dass die Harmonien der Folge I-V-V-I nicht ganztaktig, sondern zur jeweils zweiten Takthälfte des zweiten und vierten Taktes wechseln. Die abschließende I. Stufe des I-V-I-Pendelmodells erklingt daher nur im Wert einer halben Note und bereitet auf diese Weise ein harmonisches Accelerando bzw. die Stufenfolge IV-V-iii-vi-IV-V-I vor. Auch hier wirkt die Gestaltung des Abschlusses wie ein Ganzschluss und lässt sich als Takterstickung (bzw. Phrasenverschränkung) interpretieren.<a href='#fn6'><sup id="fz6">6</sup></a>
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Fischer-Einmal-berührt-Chorus-1.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Einmal-berührt-Chorus-2.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Einmal-berührt-Chorus-3.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Fischer-Einmal-berührt-Chorus-4.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <Text className='urhgText'>Abbildung 6: Einmal berührt, für immer verführt (Chorus)</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_02.mp3'  />
      <Text className='urhgText'>Helene Fischer, »Einmal berührt für immer verführt«, Helene Fischer – <i>So wie ich bin</i>,<br/>Track Nr. 9, Electrola 6879812, P 2009, Musik/Text: Jean Frankfurter, Kristina Bach.</Text>
      <Text className='mt36'>
        Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf, die Klammern über dem System veranschaulichen die Phrasengliederung:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-2.svg' alt='Gerüstsatz für Einmal berührt, für immer verführt' />
      <Text className='urhgText'>Abbildung 7: Gerüstsatz Einmal berührt, für immer verführt (Chorus), original in G-Dur</Text>
      <Text className='mt36'>
        Als Referenz für die Modelle I-V-I-Pendel und IV-V-Bewegung in den von Beatrice Egli gesungenen Songs lässt sich der Verse von <i>Vino und Amore</i> anführen:
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Egli-Vino-und-Amore-Verse-1.svg' alt='Song Egli - Vino und Amore' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Egli-Vino-und-Amore-Verse-2.svg' alt='Song Egli - Vino und Amore' />
      <Text className='urhgText'>Abbildung 8: Notenskizze Vino und Amore (Verse)</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_03.mp3'  />
      <Text className='urhgText'>Beatrice Egli, »Vino und Amore«, <i>Feuer und Flamme</i>,<br/>Track Nr. 13, Jabel 06025 2776663, P 2011, Musik/Text: Elmar Fürer, Charly Bereiter, Ursula Tobler.</Text>
      <Text className='mt36'>
        Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf sowie die Phrasengliederung:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-3.svg' alt='Gerüstsatz für Vino und Amore' />
      <Text className='urhgText'>Abbildung 9: Gerüstsatz Einmal berührt, für immer verführt (Chorus), original in G-Dur</Text>
      <Text className='mt36'>
        Vergleicht man die drei analysierten Formteile der Songs, entsprechen sich in den von Fischer gesungenen Songs die Verkürzungen der Phrasen, die latente Mehrstimmigkeit sowie eine Beschleunigung ab dem IV-I-Modell, wobei sich diese in <i>Tanz noch einmal mit mir</i> lediglich nur über die motivische Ausarbeitung, in <i>Einmal berührt, für immer verführt</i> auch über den harmonischen Rhythmus vermittelt. Bei dem von Beatrice Egli interpretierten Song <i>Vino und Amore</i> kommt zwar auch eine Phrasenverkürzung vor, diese setzt jedoch erst in den letzten drei Takten ein, und auch die latente Mehrstimmigkeit ist mit Ausnahme des zweiten Taktes weit weniger ausgeprägt als in den beiden von Helene Fischer gesungenen Songs.
      </Text>

      <Heading as='h2' className='headingH4'>Form</Heading>
      <Text>
        Aspekte der Songform werden in dieser Studie nur berücksichtigt, soweit diese im Hinblick auf die Forschungsfrage von Bedeutung sind. Motivische Ausarbeitungen zu einer Harmonik aus I-V-I-Pendel und IV-I- bzw. IV-V-Bewegung wie zum Beispiel in dem Song <i>Einmal berührt, für immer verführt</i> lassen sich als Satz im Sinne der Formenlehre interpretieren:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Periode-Satz-1.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 10: Formmodell Satz</Text>
      <Text className='mt36'>
        Findet keine für den Satz typische Entwicklung im Nachsatz statt, besteht über das von Walter Everett in den Diskurs eingebrachte SRDC-Schema<a href='#fn7'><sup id="fz7">7</sup></a> (Statement-Restatement-Departure-Conclusion) die Möglichkeit, entsprechende Taktgruppen als Einheit aufzufassen. An anderer Stelle habe ich vorgeschlagen,<a href='#fn8'><sup id="fz8">8</sup></a> das SRDC-Schema zu generalisieren, so dass sich alle denkbaren Ausarbeitungen vierteiliger Taktgruppen (und nicht nur Everetts Möglichkeiten aabc und aaba)<a href='#fn9'><sup id="fz9">9</sup></a> als Einheiten und kontingente Realisierungen auffassen lassen.
      </Text>
      <img className='scoreExample w80 mt36 mb24' src='/images/fischer-mozart/generalisierungen-Seite002.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 11: Generalisierung des SRDC-Modells</Text>
      <Text className='mt36'>
        In englischsprachigen Publikationen sind Formbegriffe oftmals mehrdeutig, weil sowohl der Sentence (Satz) als auch das SRDC-Schema auf verschiedenen Ebenen verwendet werden.<a href='#fn10'><sup id="fz10">10</sup></a>
      </Text>
      <img className='scoreExample w80 mt36 mb24' src='/images/fischer-mozart/generalisierungen-Seite003.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 12: Redundanz des Begriffs Prechorus</Text>
      <Text className='mt36'>
        Auf der Ebene der Formteile ist dabei der Begriff des Prechorus in vielen Fällen redundant, weil er häufig dann verwendet wird, wenn der Beginn des Nachsatzes (eines Satzes) oder der Departure-Abschnitt einer SRDC-Gestaltung<a href='#fn11'><sup id="fz11">11</sup></a> mit einer Änderung des Sounddesigns zusammenfällt. Aus diesem Grund wird in dieser Studie auf den Begriff Prechorus verzichtet, wenn es die Möglichkeit gibt, entsprechende Taktgruppen als Satz- oder SRDC-Struktur zu verstehen. Auch auf der Ebene der Songformen werden die Strukturen nur verwendet, wenn kein gängiger Formbegriff (wie in der Abb. 12 z. B. der Begriff Verse-Bridge-Form) zur Verfügung steht.<br/>
        <span className='truncate' />Darüber hinaus lassen sich in den von Helene Fischer gesungenen Songs viele Formteile angemessen als Periode bezeichnen. In diesen Fällen entsprechen sich üblicherweise Vorder- und Nachsatz mit Ausnahme der Schlussbildungen und des Textes. Das Korrespondieren des Öffnens und Schließens kann dabei sowohl über Kadenzwirkungen (Halb- und Ganzschluss) als auch über die Lage erreicht werden (z. B. eine öffnende Terzlage gegenüber einer schließenden Oktavlage, ein Schluss in hoher Lage gegenüber einem in tiefer Lage usw.). Periodische Formteile sind für diese Untersuchung insofern von Bedeutung, als sich das Forschungsinteresse in entsprechenden Gestaltungen auf Subdominanten richtet, die in der Mitte eines Vorder- oder Nachsatzes erklingen. Diese Subdominanten markieren daher nicht die Mitte von Formteilen, sondern die Mitte funktionaler Einheiten innerhalb der entsprechenden Formteile (Vordersatz bzw. Nachsatz).
      </Text>      

      <Heading as='h2' className='headingH4'>Chiffrierungen</Heading>
      <Text>
        Für die empirischen Vergleiche wird die Harmonik nicht in Stufen, sondern im untransponierten System (also in C-Dur bzw. a-Moll) chiffriert. Auf diese Weise lässt sich ein spezifisches Problem der Verwendung von Stufensymbolen in Verbindung mit Pop-/Rockmusik vermeiden. Denn beim Chiffrieren mit Stufensymbolen ist die Festlegung einer I. Stufe zwingend notwendig, wobei das Problem dadurch entsteht, dass sich eine I. Stufe in Pattern der Pop-/Rockmusik nicht immer ohne Willkür festlegen lässt. Die Harmonik im Verse von <i>Tanz noch einmal mit mir</i> (2008) veranschaulicht den Sachverhalt:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Problem-erste-Stufe-1.svg' alt='Formodell' />
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_04.mp3'  />
      <Text className='urhgText'>Abbildung 13: Pattern zur Veranschaulichung des Problems der Festlegung einer I. Stufe</Text>
      <Text className='mt36'>
        Die Harmoniefolge, die ein Standardpattern der Pop-/Rockmusik zeigt<a href='#fn12'><sup id="fz12">12</sup></a>, legt die Auffassung nahe, beim ersten Anhören den Anfangsakkord als i. Stufe aufzufassen. Insbesondere durch die Stimmführung (Terzlage in den C- und Quintlage in den G-Akkorden) wirken die C-G-Wendungen wie Halbschlüsse in C-Dur, wodurch man bei einer Wiederholung des Patterns den Anfangsakkord Am als Trugschluss bzw. vi. Stufe wahrnimmt. Die Flüchtigkeit eines häufig an dieser Stelle auftretenden chromatischen Durchgangs (g#) verstärkt dabei das Gefühl eines zwischendomi-nantisch erreichten Trugschlusses und erschwert die Wahrnehmung des zweiten Am-Akkords als i. Stufe. Werden anstelle der kontingenten Chiffrierungen i-VI-III-VII oder vi-IV-I-V absolute Akkordsymbole gewählt (Am-F-C-G), entfällt die Not-wendigkeit der Festlegung einer ersten Stufe (Am oder C), wodurch sich kontin-gente Hörweisen verdecken bzw. für die Forschung terminieren lassen. Werden schließlich alle Akkordfolgen im System ohne Vorzeichen notiert (d. h., im untrans-ponierten System bzw. alle Molltonarten in a-Moll und alle Durtonarten in C-Dur), werden Kongruenzen – auch beim Vorliegen unterschiedlicher Auffassungen bzw. Hörweisen – schnell ersichtlich und recherchierbar.
      </Text>
      <Text>
        In der folgenden Tabelle finden sich die drei besprochenen Songs sowie weitere Beispiele aus dem Schlagerrepertoire von Helene Fischer und Beatrice Egli auf die beschriebene Weise chiffriert:<a href='#fn13'><sup id="fz13">13</sup></a>
      </Text>

      <table mt='6' w='80%' style={{margin: 'auto'}}>
        <thead>
          <tr style={{borderBottom: '1px solid gray'}}>
            <td style={{width: '30%', padding: '20px 0'}}>
              <p>Titel</p>
            </td>
            <td style={{width: '10%'}}>
              <p>Formteil</p>
            </td>
            <td style={{width: '30%'}}>
              <p>I-V-I Pendel + IV-I oder IV-V-Bewegung</p>
            </td>
            <td style={{width: '30%'}}>
              <p>Album / Jahr / Interpretin</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingTop: '30px' }}>
              <p>Es gibt keinen Morgen danach</p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>G-C-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td>
              <p><i>Von hier bis unendlich</i> / 2006 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Fantasie hat Flügel</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-G-<b>C</b></p>
            </td>
            <td>
              <p><i>So nah wie du bist</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Mitten im Paradies</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-Dm-G-<b>C</b></p>
            </td>
            <td>
              <p><i>So nah wie du bist</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Ich glaub dir hundert Lügen</i>*</p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-F-G-<b>C</b></p>
            </td>
            <td>
              <p><i>So nah wie du bist</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Ewig ist manchmal zu lang</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-G-C-Am-F-Dm-<b>G</b></p>
            </td>
            <td>
              <p>Zaubermond / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Tanz noch einmal mit mir</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F-C-G-C</b></p>
            </td>
            <td>
              <p>Zaubermond / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Mal ganz ehrlich*</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-C-G-C-F-C-G-<b>C</b></p>
            </td>
            <td>
              <p>Zaubermond / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Hundert Prozent*</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-C-F-C-G-<b>C</b></p>
            </td>
            <td>
              <p>So wie ich bin / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Einmal berührt, für immer verführt</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-G-<b>C</b></p>
            </td>
            <td>
              <p>So wie ich bin / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Ist doch kein Wunder</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-G-<b>C</b></p>
            </td>
            <td>
              <p>So wie ich bin / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Die Sonne kann warten</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-G-C/E-F-Dm-G-<b>C</b></p>
            </td>
            <td>
              <p>So wie ich bin / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Bei Romeo war alles anders</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td>
              <p>Feuer und Flamme / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Ziit</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td>
              <p>Feuer und Flamme / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Diät</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td>
              <p>Feuer und Flamme / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Du bist ja nur ein Macho</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td>
              <p>Feuer und Flamme / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Liebe macht blind</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td>
              <p>Feuer und Flamme / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Vino und Amore</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td>
              <p>Feuer und Flamme / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Das mit dir*</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-Dm-F-<b>G</b></p>
            </td>
            <td>
              <p>Glücksgefühle / 2013 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Tausend Mal</i></p>
            </td>
            <td>
              <p>Chorus</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-Am-Dm-G-<b>C</b></p>
            </td>
            <td>
              <p>Glücksgefühle / 2013 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Total perfekt</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-C-Dm-F-<b>G</b></p>
            </td>
            <td>
              <p>Bis hierher und nicht weiter / 2014 / BE</p>
            </td>
          </tr>
          <tr>
            <td>
              <p><i>Drei Wünsche</i></p>
            </td>
            <td>
              <p>Verse</p>
            </td>
            <td>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-Dm-<b>G</b></p>
            </td>
            <td>
              <p>Bis hierher und nicht weiter / 2014 / BE</p>
            </td>
          </tr>
        </tbody>  
      </table>
      <Text className='urhgText' mt='6'>Tabelle 1: Referenzen auf Harmoniefolgen aus I-V-I-Pendel und IV-I-Bewegung (* = eingeschobene Subdominante im Schema vor dem tonikalen Abschluss, HF = Helene Fischer, BE = Beatrice Egli)</Text>

      <Text mt='6'>
        Die Tabelle 1 zeigt, dass Harmoniefolgen aus I-V-I-Pendel und IV-I- bzw. IV-V-Bewegung für Schlagermusik sehr charakteristisch sind.<a href='#fn14'><sup id="fz14">14</sup></a> Im Repertoire von Helene Fischer und Beatrice Egli finden sich entsprechende Gestaltungen auf den Alben des untersuchten Korpus in der Regel mehrfach.<br/>
        <span className='truncate' />Ebenso charakteristisch sind die bis hierhin besprochenen Harmoniefolgen für Musik des 18. Jahrhunderts. Robert Gjerdingen hat nachgewiesen, dass die Verwendung der I-V-V-I-Harmoniefolge in Verbindung mit den Melodietönen 1-7…4-3 um 1770 einen Höhepunkt erreicht hatte.<a href='#fn15'><sup id="fz15">15</sup></a> Unter den zahlreichen Bei-spielen Gjerdingens findet sich auch der Anfang (T. 1–4) der Klaviersonate in G-Dur KV 283 von W. A. Mozart:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Gjerdingen-kv283.png' alt='Formodell' />
      <Text className='urhgText'>Abbildung 14: KV 283/i, Analyse der Takte 1–4 von R. Gjerdingen 1988, 65.</Text>
      <Text mt='6'>
        Das folgende Notenbeispiel zeigt die Weiterführung dieses Anfangs bzw. die vollständige Formfunktion Hauptsatz im Kopfsatz der Klaviersonate KV 283:
      </Text>
      <img className='scoreExample w60 mt36' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-1.svg' alt='W. A. Mozart, Hauptsatz KV 283, Kopfsatz' />
      <img className='scoreExample w60 mt12' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-1.svg' alt='W. A. Mozart, Hauptsatz KV 283, Kopfsatz' />
      <img className='scoreExample w60 mt12 mb24' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-1.svg' alt='W. A. Mozart, Hauptsatz KV 283, Kopfsatz' />
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_05.mp3'  />
      <Text className='urhgText'>Abbildung 15: Sonate für Klavier in G-Dur KV 283, 1. Satz, Hauptsatz T. 1–16</Text>
      <Text mt='6'>
        Nicht nur der Beginn, sondern auch der weitere Verlauf bis zur Kadenz ist syntaktisch (Satz) und harmonisch (IV-I-V-I) mit dem Chorus des Songs <i>Tanz noch einmal mit mir</i> identisch (und zudem vielen weiteren Songs strukturell ähnlich). Gegenüber der Schlagermusik fallen die Akkordumkehrungen bei Mozart auf, die in der Klaviersonate Folge eines imperfizierten Außenstimmensatzes<a href='#fn16'><sup id="fz16">16</sup></a> sein dürften. Darüber hinaus sind die Abschlüsse verschieden, denn in der Schlagermusik entfaltet die IV-I-V-I-Taktgruppe am Ende eine Kadenzwirkung, während Mozart noch eine dreitaktige Kadenz als vorläufiges Ende der Formfunktion Hauptsatz komponiert.<a href='#fn17'><sup id="fz17">17</sup></a><br/>
        <span className='truncate' />Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf, die Klammern über dem System veranschaulichen die Phrasengliederung:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-3.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 16: Gerüstsatz Hauptsatz der Sonate KV 283/i, original in G-Dur.</Text>
      <Text mt='6'>
        Welches satztechnische Design ist verantwortlich dafür, dass die IV-I-Bewegung in der Schlagermusik Schlusskraft entfaltet, während sich diese bei Mozart erst in der nachfolgenden Kadenz vermittelt?<br/>
        <span className='truncate' />Entscheidend für die Schlusswirkung ist das Verhältnis von Oberstimme und Bass. Die Skizze (Abbildung 17) zeigt, dass am Ende der I-V-V-I-IV-I-V-I-Harmoniefolge zwischen Melodie und Bass eine Quinte erklingt (Quintlage), während zwischen diesen Stimmen am Ende des Chorus von Tanz noch einmal mit mir eine Oktave zu hören ist (Abbildung 4).<a href='#fn18'><sup id="fz18">18</sup></a> Diese Oktavlage erscheint in der Klaviersonate Mozarts erst am Ende der Kadenz.
      </Text>
      <Text mt='6'>
        Die Melodiebewegungen, die in den hemiolischen Kadenzen am Ende des Hauptsatzes der Klaviersonate KV 283 für die Schlusswirkung verantwortlich sind, haben einen beispielhaften Verlauf:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-Kadenz-1.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 17: Melodiestruktur in der ersten Kadenz im Kopfsatz der Klaviersonate in G-Dur KV 283.</Text>
      <Text mt='6'>
        Der Stufengang d-c-h-a-g vermag beim Hören seine Wirkung aufgrund der Prägnanz bzw. seiner ›guten Gestalt‹ entfalten und muss deswegen an dieser Stelle weder über metaphysische Mittel- und Hintergründe noch eine theoretische Dogmatik legitimiert werden. Man könnte einwenden, dass diese Wirkung durch den Oktavlagenwechsel abgeschwächt wird, jedoch setzt die Disposition der Toncharaktere in verschiedene Oktavlagen, um virtuosem Laufwerk Raum zu geben, die Formwirkung nicht vollständig außer Kraft. Interessant ist, dass sich mit einem entsprechenden Stufengang das Ende des I-V-I-Pendelmodells mit dem Ende der IV-I-Bewegung verbinden lässt (weiße Noten):
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-3.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 18: Stufengang 5-4-3-2-1 als Verbindung der Abschlüsse des I-V-I-Pendelmodells und der IV-I-Bewegung in C-Dur.</Text>
      <Text mt='6'>
        Eine entsprechende Realisierung zeigt das nächste Notenbeispiel, in dem die Ge-rüsttöne der Melodie des Verse aus dem Song <i>Ziit</i> zu sehen sind (nach C-Dur transponiert):
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-Kadenz-3.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 19: Stufengang der Gerüsttöne der von Beatrice Egli gesungenen Melodie des Verse in Ziit (original in Es-Dur).</Text>
      <Text mt='6'>
        Für die Harmonik I-V-V-I und IV-I-V-I lassen sich im Werk von W. A. Mozart unzählige weitere Beispiele anführen. Ein sehr bekanntes skizziert das folgende Notenbeispiel:
      </Text>
      <img className='scoreExample w60 mt36' src='/images/fischer-mozart/Mozart-Bildnis-Arie-1.svg' alt='W. A. Mozart, Bildnis-Arie Anfang' />
      <img className='scoreExample w60 mt12 mb24' src='/images/fischer-mozart/Mozart-Bildnis-Arie-2.svg' alt='W. A. Mozart, Bildnis-Arie Anfang' />
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_05.mp3'  />
      <Text className='urhgText'>Abbildung 20: Anfang der Bildnis-Arie des Tamino aus: Die Zauberflöte KV 620.</Text>
      <Text mt='6'>
        Die Bildnis-Arie des Tamino aus Mozarts Zauberflöte KV 620 beginnt mit dem Schema I-V-V-I, dem sich eine Gestaltung mithilfe der IV-I-V-I-Harmoniefolge anschließt. Formal lässt sich Mozarts Ausarbeitung als Satz interpretieren. Die vollkommene Schlusswirkung am Ende der IV-I-V-I-Harmoniefolge wird durch einen Sextakkord verhindert, wobei das Verfahren, die Schlusswirkung beim Er-reichen des Grundtons durch einen Sextakkord oder Trugschluss hinauszuzögern, sich auch gelegentlich in Schlagermusik beobachten lässt.<a href='#fn19'><sup id="fz19">19</sup></a> Der IV-I-V-I-Harmonik folgt in der Bildnis-Arie – wie in KV 283 – eine Kadenz (T. 10–15), die durch einen weiteren Trugschluss unterbrochen wird und den ersten Abschnitt der Arie mit einem Ganzschluss in der Ausgangstonart und einer Oktavlage in der Melodie beendet.<br/>
        <span className='truncate' />Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf und die satztypische Phrasengliederung vor der Kadenz:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-4.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 21: Gerüstsatz der Bildnis-Arie T. 3–10 aus Die Zauberflöte KV 620, original in Es-Dur</Text>
      <Text mt='6'>
        Nimmt man die Oberstimme ab der IV-I-V-I-Bewegung in den Blick, fällt eine weitere Melodiestruktur auf: der Stufengang a-g-f-e (6-5-4-3),<a href='#fn20'><sup id="fz20">20</sup></a> der eine Überterzung des bereits erörterten Stufengangs f-e-d-c (4-3-2-1) darstellt. Ein letztes Beispiel aus dem Werk W. A. Mozarts veranschaulicht die Bedeutung dieser beiden Strukturbewegungen:
      </Text>



       <Divider mt='60px' mb='60px' h='1px' bg='gray' />
       <Heading as='h2' className='headingH4'>Fußnoten</Heading>
       <div style={{margin: 'auto', margin: 'auto', padding: '0 40px', fontSize: '0.8em' }}>
        <ul className='footnoteList'>
          <li id="fn1"><a href='#fz1'>1.&nbsp;</a>
            Unter einer deutschsprachigen Musikwissenschaft werden hier alle Disziplinen subsumiert, die sich mit wissenschaftlichem Anspruch und in deutscher Sprache mit der Analyse von Musik beschäftigen, also die akademische Musikwissenschaft und Popularmusikforschung, die wissenschaftlich arbeitenden Bereiche der institutionellen Musiktheorie usw.
          </li>
          <li id="fn2"><a href='#fz2'>2.&nbsp;</a>
            Systematisch analysiert wurden die Songs der deutschsprachigen Studioalben von Helene Fischer bis 2017 (mit Ausnahme des Albums <i>Weihnachten</i>) sowie einige von Beatrice Egli gesungene Songs als Referenzbeispiele. Die Begrenzung der Alben bis 2017 ist dadurch motiviert, dass bis zu diesem Zeitpunkt Jean Frankfurter Stammkomponist des Schlagerrepertoires von Helene Fischer war. Ab dem Album Helene Fischer (2017) ändert sich das, im Album <i>Rausch</i> (2021) ist Frankfurter an keinem Titel mehr beteiligt. Mit den wechselnden Autorenteams des zuletzt genannten Albums klingen die Songs von Fischer musikalisch auch ganz anders als die Titel bis zum Album <i>Farbenspiel</i> (2013).
          </li>
          <li id="fn3"><a href='#fz3'>3.&nbsp;</a>
            Weber 1922, 191. Zum Modellbegriff und wissenschaftstheoretischen Kontext s. Kaiser 2016.
          </li>
          <li id="fn4"><a href='#fz4'>4.&nbsp;</a>
            Gjerdingen 1988.
          </li>
          <li id="fn5"><a href='#fz5'>5.&nbsp;</a>
            Zur Bedeutung der IV-I-V-I-Harmonik in der Formfunktion einer zweiten Taktgruppe in Musik des 18. Jahrhunderts vgl. Kaiser 2007, 179–185. In englischsprachigen Publikationen wird diese Harmonik unter dem Namen <i>Prinner</i> diskutiert, vgl. Gjerdingen 2007, 45 ff.
          </li>
          <li id="fn6"><a href='#fz6'>6.&nbsp;</a>
            Der achte Takt als harmonischer Abschluss fällt dabei mit dem ersten Takt des Interludes zusammen. Anders als im Bereich klassischer Kompositionen ist der Abschluss der Melodie vorgezogen, entfaltet aber die gleiche Schlusswirkung wie das Erreichen des Grundtons im Offbeat oder auf der ersten Zählzeit des Taktes.
          </li>
          <li id="fn7"><a href='#fz7'>7.&nbsp;</a>
            Everett 2009, 140. Everett referenziert mit diesem Modell die beiden Gestaltungen aabc und aaba: »One other phrase combination occurs quite often, enough so to give it a name and compare examples. This is a four-phrase pattern that we’ll refer to as SRDC, as its components always perform the functions of Statement – Restatement – Departure – Conclusion. The Restatement phrase may cadence the same as did the first Statement (Bobby Darin’s ‘Dream Lover’) or differently, and in fact the first two phrases may form a periodic subgrouping (as in Highwaymen’s ‘Cotton Fields’) or an open phrase group (as in the rooftop Singers ‘Walk Right In’ and Marvin Gayes ‘I Heard It through the Grapevine’). The fourth phrase may recap the opening material, for an aaba pattern (the Tutles’ ‘You Baby’), or may present new melodic ideas, aabc (the Bee Gees’ ‘(The Lights Went Out In) Massachusetts’). Often, an SRDC is the basis of a verse with refrain.«
          </li>
          <li id="fn8"><a href='#fz8'>8.&nbsp;</a>
            Beitrag auf musikanalyse.net: https://musikanalyse.net/tutorials/srdc/ (31.12.2022).
          </li>          
          <li id="fn9"><a href='#fz9'>9.&nbsp;</a>
            Die Möglichkeiten: aaaa, aaab, aaba, aabb, aabc, abaa, abab, abac, abba, abbb, abbc, abca, abcb, abcc und abcd.
          </li>
          <li id="fn10"><a href='#fz10'>10.&nbsp;</a>
            Als Expanded Sentence insbesondere in der Forschung zur Sonatenhauptsatzform bzw. Classical Form und Sonata Theory, vgl. Kaiser 2018, 30 ff.
          </li>
          <li id="fn11"><a href='#fz11'>11.&nbsp;</a>
            »The results sometimes carried the sentential strophe to the threshold of verse-chorus form. As the sentence is expanded, its parts begin to approximate the features of independent formal modules: s[tatement] and r[estatement] resemble a verse or verses; c[onclusion], which is often a refrain, breaks away as a chorus; and d[eparture] with its momentum-building characteristics, emerges as a prechorus.« Summach 2011.
          </li>
          <li id="fn12"><a href='#fz12'>12.&nbsp;</a>
            Diese Wendung charakterisiert z. B. den Chorus von <i>It’s My Life</i> (Bon Jovi), <i>I Was Born To Make You Happy</i> (Brittney Spears) u.v.a. Auf Wikipedia wird diese Harmoniefolge als Variante der Folge I-V-vi-IV geführt: https://en.wikipedia.org/wiki/I-V-vi-IV_progression (14.09.2022).
          </li>
          <li id="fn13"><a href='#fz13'>13.&nbsp;</a>
            Ein charakteristisches Merkmal der von Helene Fischer gesungenen Songs bis 2013 liegt in der Verwendung der gleichnamigen Moll- und Durtonarten im Verse und Chorus wie z. B. in <i>Komm tanz noch einmal mit mir</i> (2008) mit dem Verse in a-Moll und dem Chorus in A-Dur. Die Transposition der jeweiligen Formteile ins untransponierte System führt dazu, dass in diesem und vergleichbaren Fällen der Verse in a-Moll und der Chorus in C-Dur chiffriert werden muss, d. h., gleichnamige Moll-/Dur-Tonarten im Original werden zu Paralleltonarten in der Chiffrierung.
          </li>
          <li id="fn14"><a href='#fz14'>14.&nbsp;</a>
            Das I-V-I-Pendel mit nachfolgender IV-I-Bewegung findet sich darüber hinaus in Popmusik mit meist melodiösem Charakter wie z. B. im Verse von <i>Hey Jude</i> von <i>The Beatles</i>.
          </li>
          <li id="fn15"><a href='#fz15'>15.&nbsp;</a>
            Gjerdingen 1988, 102.
          </li>
          <li id="fn16"><a href='#fz16'>16.&nbsp;</a>
            Bis auf die Quinte im ersten Takt und zum Beginn der Kadenz im 8. Takt sowie die Oktave im Schlusstakt erklingen bei Mozart auf den Takteinsen auschließlich imperfekte Konsonanzen bzw. Terzen und eine Sexte.
          </li>
          <li id="fn17"><a href='#fz17'>17.&nbsp;</a>
            Die Dreitaktigkeit resultiert aus einer hemiolischen Dehnung in den Takten 8–9 bzw. einem auskomponierten Ritardando. Die Takte 5–10 (Nachsatz) werden anschließend variierend (Registerwechsel) wiederholt.
          </li>
          <li id="fn18"><a href='#fz18'>18.&nbsp;</a>
            Auch im Chorus von <i>Einmal berührt, für immer verführt</i> hört man am Ende zwischen Gesang und Bass eine schließende Oktavlage, obgleich der Melodieschluss auf leichter Zählzeit erklingt und die instrumentale Melodie des Interludes auf der nachfolgenden Takteins in Terzlage einsetzt.
          </li>
          <li id="fn19"><a href='#fz19'>19.&nbsp;</a>
            Z. B. in den Chorus-Formteilen der von Helene Fischer gesungenen Songs <i>Wo das Leben tanzt</i> (2007), <i>Jeden Morgen wird die Sonne neu gebor’n</i> (2008) und <i>Frag’ nicht wo und wann</i> (2008). Die häufig anzutreffende innere Erweiterung des letzten Chorus wird dagegen in der Regel durch eine einfache oder variierte Wiederholung der letzten Taktgruppe realisiert wie z. B. in <i>Auf der Reise ins Licht</i> (2006), <i>Fantasie hat Flügel</i> (2007), <i>Du hast mein Herz berührt</i> (2007) u.v.a.
          </li>
          <li id="fn20"><a href='#fz20'>20.&nbsp;</a>
            Der Stufengang wird durch die trugschlüssige Wendung in den Sextakkord (T. 10) unterbrochen. Dadurch löst sich die exponierte Septime (T. 9) erst am Beginn der Schlusskadenz (T. 13) auf und verbindet diese klanglich mit dem Vorangegangenen.
          </li>
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
