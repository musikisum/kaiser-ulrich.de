/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text, Heading, Divider } from '@chakra-ui/react';

const options = {
  title: 'Publikationen',
  description: '',
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
       Dieser Beitrag ist erschienen in den Proceedings <a href='https://www.gmth.de/proceedings/artikel/334.aspx' className='underline'>Tonsysteme und Stimmungen. 21. Jahreskongress der Gesellschaft für Musiktheorie (GMTH Proceedings 2021)</a>. Er wird an dieser Stelle in HTML-Form zur Verfügung gestellt, um einen Nachvollzug der Hörbeispiele zu erleichtern. Die Noten skizzieren urheberrechtlich geschütztes Material, Melodien und die Auschnitte aus den Songs (Sounddateien) werden im Rahmen des <a href='https://www.gesetze-im-internet.de/urhg/__51.html' className='underline'>§ 51 UrHG</a> (Zitatrecht) verwendet. Die urheberrechlich geschützten Sounddateien liegen auf dem Server der Gesellschaft für Musiktheorie und werden hier über Deeplinking referenziert.
      </Text>
      <Heading as='h1' className='headingH2'>Helene Fischer, W. A. Mozart und die Subdominante im 5. Takt</Heading>
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
        Dieser Beitrag ist in zwei Teile gegliedert: Im ersten Teil werden Schlagerkompositionen<a href='#fn2'><sup id="fz2">2</sup></a> und Kompositionen W. A. Mozarts unter weitgehender Vernachlässigung gattungsspezifischer Unterschiede untersucht (z.B. rhythmische und großformale Gestaltungen). Methodisch wird dabei auf ausgewählte Aspekte von Satzmodellen rekurriert. Um Missverständnisse zu vermeiden sei erwähnt, dass es keineswegs Ziel war, Satzmodelle in Popularmusik zu entdecken. Die konstruierten Modelle sind vielmehr als Idealtypen im Sinne des Soziologen Max Weber zu verstehen bzw. als »einseitige Steigerung eines oder einiger Gesichtspunkte […] zu einem einheitlichen Gedankenbilde. In seiner begrifflichen Reinheit ist dieses Gedankenbild nirgends in der Wirklichkeit empirisch vorfindbar […]«.<a href='#fn3'><sup id="fz3">3</sup></a> Modelle in diesem Sinne lassen sich als abstrakte Vergleichsgesichtspunkte einsetzen, von denen aus sich in den individuellen Kompositionen funktional äquivalente Gestaltungen bestimmen lassen. Im zweiten Teil der Arbeit werden dann vor dem Hintergrund der Analyseergebnisse des ersten Teils musikwissenschaftliche Aussagen zur Schlagermusik und Musik W. A. Mozarts untersucht. Die differenten musikwissenschaftlichen Bewertungen der funktional äquivalenten bzw. vergleichbaren Sachverhalte erlauben abschließend eine Analyse der ästhetischen Standpunkte der Analysierenden.
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
        Das I-V-I-Pendel dient zum Beschreiben von ersten Taktgruppen (Anfängen), die durch ein Pendeln zwischen tonikalen und dominantischen Harmonien charakterisiert sind. Ausgeschlossen sind damit Anfänge, in denen die Subdominante eine tragende Rolle spielt. Das bekannteste Modell, das sich durch das I-V-I-Pendel referenzieren lässt, wäre das <i>Schema</i> (I-V-V-I) im Sinne Robert Gjerdingens<a href='#fn4'><sup id="fz4">4</sup></a> (Beispiel a), die Beispiele b) und c) lassen sich jedoch ebenfalls durch das Modell angemessen beschreiben:
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
        Der Chorus des von Helene Fischer gesungenen Songs <i>Tanz noch einmal mit mir</i> des Albums <i>Zaubermond</i> (2008) lässt sich im Hinblick auf Syntax und Harmonik angemessen durch das Modell (I-V-I-Pendel und IV-I-Bewegung) verstehen. Die Sexte in den Backingvocals im ersten Takt wird dabei als Auffassungsdissonanz zur I. Stufe interpretiert.
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-1.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-2.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-3.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Fischer-Komm-Tanz-noch-einmal-mit-mir-Chorus-4.svg' alt='Song Fischer – Tanz noch einmal mit mir' />
      <Text className='urhgText'>Abbildung 4: Notenskizze Tanz noch einmal mit mir (Chorus)</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_01.mp3'  />
      <Text className='urhgText'>Helene Fischer, <i>Tanz noch einmal mit mir</i>, <i>Zaubermond</i>, Track 7,<br/>Electrola 2277572, P 2008, Musik/Text: Jean Frankfurter, Tobias Reitz.</Text>
      <Text className='mt36'>
        Der harmonische Rhythmus in diesem Song verläuft ganztaktig, das Erreichen der I. Stufe am Ende wirkt ganzschlüssig und bildet zugleich den ersten Takt eines zweitaktigen Interludes, bevor der zweite Verse wieder (in a-Moll) einsetzt. Der folgende zweitaktige Gerüstsatz veranschaulicht den nach C-Dur transponierten harmonischen Verlauf sowie die Gerüsttöne der Melodiegestaltung.
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-1.svg' alt='Gerüstsatz für Tanz noch einmal mit mir' />
      <Text className='urhgText'>Abbildung 5: Gerüstsatz <i>Tanz noch einmal mit mir</i> (Chorus), original in A-Dur</Text>
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
      <Text className='urhgText'>Abbildung 6: <i>Einmal berührt, für immer verführt</i> (Chorus)</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_02.mp3'  />
      <Text className='urhgText'>Helene Fischer, <i>Einmal berührt für immer verführt</i>, Helene Fischer – <i>So wie ich bin</i>,<br/>Track Nr. 9, Electrola 6879812, P 2009, Musik/Text: Jean Frankfurter, Kristina Bach.</Text>
      <Text className='mt36'>
        Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf, die Klammern über dem System veranschaulichen die Phrasengliederung:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-2.svg' alt='Gerüstsatz für Einmal berührt, für immer verführt' />
      <Text className='urhgText'>Abbildung 7: Gerüstsatz <i>Einmal berührt, für immer verführt</i> (Chorus), original in G-Dur</Text>
      <Text className='mt36'>
        Als Referenz für die Modelle I-V-I-Pendel und IV-V-Bewegung in den von Beatrice Egli gesungenen Songs lässt sich der Verse von <i>Vino und Amore</i> anführen:
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Egli-Vino-und-Amore-Verse-1.svg' alt='Song Egli - Vino und Amore' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Egli-Vino-und-Amore-Verse-2.svg' alt='Song Egli - Vino und Amore' />
      <Text className='urhgText'>Abbildung 8: Notenskizze <i>Vino und Amore</i> (Verse)</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_03.mp3'  />
      <Text className='urhgText'>Beatrice Egli, <i>Vino und Amore</i>, <i>Feuer und Flamme</i>,<br/>Track Nr. 13, Jabel 06025 2776663, P 2011, Musik/Text: Elmar Fürer, Charly Bereiter, Ursula Tobler.</Text>
      <Text className='mt36'>
        Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf sowie die Phrasengliederung:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-3.svg' alt='Gerüstsatz für Vino und Amore' />
      <Text className='urhgText'>Abbildung 9: Gerüstsatz <i>Einmal berührt, für immer verführt</i> (Chorus), original in G-Dur</Text>
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
        Die Harmoniefolge, die ein Standardpattern der Pop-/Rockmusik zeigt,<a href='#fn12'><sup id="fz12">12</sup></a> legt die Auffassung nahe, beim ersten Anhören den Anfangsakkord als i. Stufe aufzufassen. Insbesondere durch die Stimmführung (Terzlage in den C- und Quintlage in den G-Akkorden) wirken die C-G-Wendungen wie Halbschlüsse in C-Dur, wodurch man bei einer Wiederholung des Patterns den Anfangsakkord Am als Trugschluss bzw. vi. Stufe wahrnimmt. Die Flüchtigkeit eines häufig an dieser Stelle auftretenden chromatischen Durchgangs (g#) verstärkt dabei das Gefühl eines zwischendominantisch erreichten Trugschlusses und erschwert die Wahrnehmung des zweiten Am-Akkords als i. Stufe. Werden anstelle der kontingenten Chiffrierungen i-VI-III-VII oder vi-IV-I-V absolute Akkordsymbole gewählt (Am-F-C-G), entfällt die Notwendigkeit der Festlegung einer ersten Stufe (Am oder C), wodurch sich kontingente Hörweisen verdecken bzw. für die Forschung terminieren lassen. Werden schließlich alle Akkordfolgen im System ohne Vorzeichen notiert (d. h., im untransponierten System bzw. alle Molltonarten in a-Moll und alle Durtonarten in C-Dur), werden Kongruenzen – auch beim Vorliegen unterschiedlicher Auffassungen bzw. Hörweisen – schnell ersichtlich und recherchierbar.
      </Text>
      <Text>
        <span className='truncate' />In der folgenden Tabelle finden sich die drei besprochenen Songs sowie weitere Beispiele aus dem Schlagerrepertoire von Helene Fischer und Beatrice Egli auf die beschriebene Weise chiffriert:<a href='#fn13'><sup id="fz13">13</sup></a>
      </Text>

      <table style={{width: '80%', marginTop: '6px', margin: 'auto'}}>
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
            <td style={{ paddingTop: '20px', verticalAlign: 'top' }}>
              <p>Es gibt keinen Morgen danach</p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top' }}>
              <p>Chorus</p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top' }}>
              <p><b>G-C-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top' }}>
              <p><i>Von hier bis unendlich</i> / 2006 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Fantasie hat Flügel</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Mitten im Paradies</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-Dm-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Ich glaub dir hundert Lügen</i>*</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-F-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Ewig ist manchmal zu lang</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-G-C-Am-F-Dm-<b>G</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Tanz noch einmal mit mir</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Mal ganz ehrlich*</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-C-G-C-F-C-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Hundert Prozent*</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-C-F-C-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So wie ich bin</i> / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Einmal berührt, für immer verführt</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So wie ich bin</i> / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Ist doch kein Wunder</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-G-Em-Am-F-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So wie ich bin</i> / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Die Sonne kann warten</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-G-C/E-F-Dm-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So wie ich bin</i> / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Bei Romeo war alles anders</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Ziit</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-G-C</b> | <b>F</b>-C-G-<b>C</b></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Diät</i></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p>Verse</p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Du bist ja nur ein Macho</i></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p>Verse</p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Liebe macht blind</i></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p>Verse</p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Vino und Amore</i></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p>Verse</p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><b>C-G-G-C</b> | <b>F</b>-C-D-<b>G</b></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
          <tr>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Das mit dir*</i></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p>Chorus</p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><b>C-G-G-C</b> | <b>F</b>-C-Dm-F-<b>G</b></p>
            </td>
            <td style={{verticalAlign: 'top'}}>
              <p><i>Glücksgefühle</i> / 2013 / BE</p>
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
              <p><i>Glücksgefühle</i> / 2013 / BE</p>
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
              <p><i>Bis hierher und nicht weiter</i> / 2014 / BE</p>
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
              <p><i>Bis hierher und nicht weiter</i> / 2014 / BE</p>
            </td>
          </tr>
        </tbody>  
      </table>      
      <Text className='urhgText' mt='6'>
        Tabelle 1: Referenzen auf Harmoniefolgen aus I-V-I-Pendel und IV-I-Bewegung (* = eingeschobene Subdominante im Schema vor dem tonikalen Abschluss, HF = Helene Fischer, BE = Beatrice Egli)
      </Text>

      <Text mt='6'>
        Die Tabelle 1 zeigt, dass Harmoniefolgen aus I-V-I-Pendel und IV-I- bzw. IV-V-Bewegung für Schlagermusik sehr charakteristisch sind.<a href='#fn14'><sup id="fz14">14</sup></a> Im Repertoire von Helene Fischer und Beatrice Egli finden sich entsprechende Gestaltungen auf den Alben des untersuchten Korpus in der Regel mehrfach.<br/>
        <span className='truncate' />Ebenso charakteristisch sind die bis hierhin besprochenen Harmoniefolgen für Musik des 18. Jahrhunderts. Robert Gjerdingen hat nachgewiesen, dass die Verwendung der I-V-V-I-Harmoniefolge in Verbindung mit den Melodietönen 1-7…4-3 um 1770 einen Höhepunkt erreicht hatte.<a href='#fn15'><sup id="fz15">15</sup></a> Unter den zahlreichen Beispielen Gjerdingens findet sich auch der Anfang (T. 1–4) der Klaviersonate in G-Dur KV 283 von W. A. Mozart:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Gjerdingen-kv283.png' alt='Formodell' />
      <Text className='urhgText'>Abbildung 14: KV 283/i, Analyse der Takte 1–4 von R. Gjerdingen 1988, 65.</Text>
      <Text mt='6'>
        Das folgende Notenbeispiel zeigt die Weiterführung dieses Anfangs bzw. die vollständige Formfunktion Hauptsatz im Kopfsatz der Klaviersonate KV 283.
      </Text>
      <img className='scoreExample w60 mt36' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-1.svg' alt='W. A. Mozart, Hauptsatz KV 283, Kopfsatz' />
      <img className='scoreExample w60 mt12' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-2.svg' alt='W. A. Mozart, Hauptsatz KV 283, Kopfsatz' />
      <img className='scoreExample w60 mt12 mb24' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-3.svg' alt='W. A. Mozart, Hauptsatz KV 283, Kopfsatz' />
      <Text className='urhgText'>Abbildung 15: Sonate für Klavier in G-Dur KV 283, 1. Satz, Hauptsatz T. 1–16</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_05.mp3'  />
      <Text className='urhgText'>
        Mozart, Les Sonates pour le Forte-Piano sur instrument d’epoque. Paul Badura-Skoda,<br/>fortepiano Johann Schantz, Vienne ca. 1790, Auvidis-Astrée E 8685, P 1985, Track Nr. 4.
      </Text>
      <Text mt='6'>
        Nicht nur der Beginn, sondern auch der weitere Verlauf bis zur Kadenz ist syntaktisch (Satz) und harmonisch (IV-I-V-I) mit dem Chorus des Songs <i>Tanz noch einmal mit mir</i> identisch (und zudem vielen weiteren Songs strukturell ähnlich). Gegenüber der Schlagermusik fallen die Akkordumkehrungen bei Mozart auf, die in der Klaviersonate Folge eines imperfizierten Außenstimmensatzes<a href='#fn16'><sup id="fz16">16</sup></a> sein dürften. Darüber hinaus sind die Abschlüsse verschieden, denn in der Schlagermusik entfaltet die IV-I-V-I-Taktgruppe am Ende eine Kadenzwirkung, während Mozart noch eine dreitaktige Kadenz als vorläufiges Ende der Formfunktion Hauptsatz komponiert.<a href='#fn17'><sup id="fz17">17</sup></a><br/>
        <span className='truncate' />Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf, die Klammern über dem System veranschaulichen die Phrasengliederung:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-3.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 16: Gerüstsatz Hauptsatz der Sonate KV 283/i, original in G-Dur.</Text>
      <Text mt='6'>
        Welches satztechnische Design ist verantwortlich dafür, dass die IV-I-Bewegung in der Schlagermusik Schlusskraft entfaltet, während sich diese bei Mozart erst in der nachfolgenden Kadenz vermittelt?<br/>
        <span className='truncate' />Entscheidend für die Schlusswirkung ist das Verhältnis von Oberstimme und Bass. Die Skizze (Abbildung 17) zeigt, dass am Ende der I-V-V-I-IV-I-V-I-Harmoniefolge zwischen Melodie und Bass eine Quinte erklingt (Quintlage), während zwischen diesen Stimmen am Ende des Chorus von Tanz noch einmal mit mir eine Oktave zu hören ist (Abbildung 4).<a href='#fn18'><sup id="fz18">18</sup></a> Diese Oktavlage erscheint in der Klaviersonate Mozarts erst am Ende der Kadenz.<br/>
        <span className='truncate' />Die Melodiebewegungen, die in den hemiolischen Kadenzen am Ende des Hauptsatzes der Klaviersonate KV 283 für die Schlusswirkung verantwortlich sind, haben einen beispielhaften Verlauf:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-Kadenz-1.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 17: Melodiestruktur in der ersten Kadenz im Kopfsatz der Klaviersonate in G-Dur KV 283.</Text>
      <Text mt='6'>
        Der Stufengang d-c-h-a-g vermag beim Hören seine Wirkung aufgrund der Prägnanz bzw. seiner ›guten Gestalt‹ entfalten und muss deswegen an dieser Stelle weder über metaphysische Mittel- und Hintergründe noch eine theoretische Dogmatik legitimiert werden. Man könnte einwenden, dass diese Wirkung durch den Oktavlagenwechsel abgeschwächt wird, jedoch setzt die Disposition der Toncharaktere in verschiedene Oktavlagen, um virtuosem Laufwerk Raum zu geben, die Formwirkung nicht vollständig außer Kraft. Interessant ist, dass sich mit einem entsprechenden Stufengang das Ende des I-V-I-Pendelmodells mit dem Ende der IV-I-Bewegung verbinden lässt (weiße Noten):
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-3.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 18: Stufengang 5-4-3-2-1 als Verbindung der Abschlüsse des I-V-I-Pendelmodells und der IV-I-Bewegung in C-Dur.</Text>
      <Text mt='6'>
        Eine entsprechende Realisierung zeigt das nächste Notenbeispiel, in dem die Gerüsttöne der Melodie des Verse aus dem Song <i>Ziit</i> zu sehen sind (nach C-Dur transponiert):
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Mozart-Sonate-in-G-KV-283-Kadenz-3.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 19: Stufengang der Gerüsttöne der von Beatrice Egli gesungenen Melodie des Verse in Ziit (original in Es-Dur).</Text>
      <Text mt='6'>
        Für die Harmonik I-V-V-I und IV-I-V-I lassen sich im Werk von W. A. Mozart unzählige weitere Beispiele anführen. Ein sehr bekanntes skizziert das folgende Notenbeispiel:
      </Text>
      <img className='scoreExample w60 mt36' src='/images/fischer-mozart/Mozart-Bildnis-Arie-1.svg' alt='W. A. Mozart, Bildnis-Arie Anfang' />
      <img className='scoreExample w60 mt12 mb24' src='/images/fischer-mozart/Mozart-Bildnis-Arie-2.svg' alt='W. A. Mozart, Bildnis-Arie Anfang' />
      <Text className='urhgText'>Abbildung 20: Anfang der Bildnis-Arie des Tamino aus: <i>Die Zauberflöte</i> KV 620.</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_06.mp3'  />
      <Text className='urhgText'>
        Wolfgang Amadeus Mozart, Die Zauberflöte, Part 1, Track 6 – Arie: Dies Bildnis ist bezaubernd schön,<br/>Track 10 Brilliant Classics 92633/41, P 1991. 
      </Text>
      <Text mt='6'>
        Die Bildnis-Arie des Tamino aus Mozarts Zauberflöte KV 620 beginnt mit dem Schema I-V-V-I, dem sich eine Gestaltung mithilfe der IV-I-V-I-Harmoniefolge anschließt. Formal lässt sich Mozarts Ausarbeitung als Satz interpretieren. Die vollkommene Schlusswirkung am Ende der IV-I-V-I-Harmoniefolge wird durch einen Sextakkord verhindert, wobei das Verfahren, die Schlusswirkung beim Erreichen des Grundtons durch einen Sextakkord oder Trugschluss hinauszuzögern, sich auch gelegentlich in Schlagermusik beobachten lässt.<a href='#fn19'><sup id="fz19">19</sup></a> Der IV-I-V-I-Harmonik folgt in der Bildnis-Arie – wie in KV 283 – eine Kadenz (T. 10–15), die durch einen weiteren Trugschluss unterbrochen wird und den ersten Abschnitt der Arie mit einem Ganzschluss in der Ausgangstonart und einer Oktavlage in der Melodie beendet.<br/>
        <span className='truncate' />Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf und die satztypische Phrasengliederung vor der Kadenz:
      </Text>
      <img className='scoreExample w60 mt36 mb12' src='/images/fischer-mozart/Geruestsatzmodelle-4.svg' alt='Formodell' />
      <Text className='urhgText'>Abbildung 21: Gerüstsatz der Bildnis-Arie T. 3–10 aus Die Zauberflöte KV 620, original in Es-Dur</Text>
      <Text mt='6'>
        Nimmt man die Oberstimme ab der IV-I-V-I-Bewegung in den Blick, fällt eine weitere Melodiestruktur auf: der Stufengang a-g-f-e (6-5-4-3),<a href='#fn20'><sup id="fz20">20</sup></a> der eine Überterzung des bereits erörterten Stufengangs f-e-d-c (4-3-2-1) darstellt. Ein letztes Beispiel aus dem Werk W. A. Mozarts veranschaulicht die Bedeutung dieser beiden Strukturbewegungen:
      </Text>
      <img className='scoreExample w60 mt36' src='/images/fischer-mozart/Mozart-Sonate-in-C-KV-545-1.svg' alt='W. A. Mozart, Hauptsatz KV 545, Kopfsatz' />
      <img className='scoreExample w60 mt12' src='/images/fischer-mozart/Mozart-Sonate-in-C-KV-545-2.svg' alt='W. A. Mozart, Hauptsatz KV 545, Kopfsatz' />
      <img className='scoreExample w60 mt12' src='/images/fischer-mozart/Mozart-Sonate-in-C-KV-545-3.svg' alt='W. A. Mozart, Hauptsatz KV 545, Kopfsatz' />
      <img className='scoreExample w60 mt12 mb24' src='/images/fischer-mozart/Mozart-Sonate-in-C-KV-545-4.svg' alt='W. A. Mozart, Hauptsatz KV 545, Kopfsatz' />
      <Text className='urhgText'>Abbildung 22: W. A. Mozart, 1. Satz der Sonate facile für Klavier KV 545</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_07.mp3'  />
      <Text className='urhgText'>
        Mozart, Les Sonates pour le Forte-Piano sur instrument d’epoque. Paul Badura-Skoda, fortepiano Johann Schantz, Vienne ca. 1790,<br/>Auvidis-Astrée E 8681, P 1990, Track Nr. 13, Sonata Nr. 16 in C-Dur KV 545, 1. Satz, Exposition
      </Text>
      <Text mt='6'>
        Den Anfang bzw. die Takte 1–4 der Facile-Sonate gestaltet Mozart harmonisch mithilfe eines I-V-I-Pendels und einer sich anschließenden IV-I-V-I-Bewegung. Die strukturelle Oberstimme in den Takten 3–4 entspricht dem im vorangegangenen besprochenen Stufengang 6-5-4-3. Ab Takt 5 erklingt eine Wiederholung der IV-I-V-I-Harmoniefolge, allerdings in einer anderen Inszenierung bzw. mit einem auffällig unterschiedenen satztechnischen Design.<a href='#fn21'><sup id="fz21">21</sup></a> Die Wiederholung der Harmoniefolge ist ebenfalls durch die Oberstimmenstruktur 6-5-4-3 geprägt, die Unterterzen bzw. der Stufengang 4-3-2-1 erklingt rhythmisiert im Bass. Der Ausarbeitung der IV-I-V-I-Bewegung im rauschenden Charakter folgt eine Kadenz bzw. ein Halbschluss, der in T. 12 den ersten größeren Abschnitt des Kopfsatzes dieser Sonate mit einem Halbschluss in der Ausgangstonart beendet. Die IV-I-V-IHarmonik in Verbindung mit einem rauschenden Charakter ist dabei keineswegs eine Erfindung Mozarts gewesen, sondern lässt sich als ein Standard in der Musiksprache des 18. Jahrhunderts bezeichnen, was beispielsweise eine Passage aus einer Klaviersonate Sonate in B-Dur von Fulgentino Peroti veranschaulicht:<a href='#fn22'><sup id="fz22">22</sup></a>
      </Text>
      <img className='scoreExample w60 mt36 mb24' src='/images/fischer-mozart/Peroti-1.svg' alt='F. Peroti, Sonate in B-Dur, Überleitung transponiert' />
      <Text className='urhgText'>Fulgentino Peroti, Sonate in B-Dur, 3. Satz, T. 5–8, original in B-Dur, Klavier: Kilian Sprau, Lizenz</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_08.mp3' />
      <Text className='urhgText'>Klavier: Kilian Sprau, Lizenz: CC BY-SA</Text>
      <Text mt='6'>
        Zusammenfassend lässt sich sagen, dass Gestaltungen auf der Grundlage eines IV-I-Pendels und einer sich anschließenden IV-I-Bewegung sowohl für Schlagermusik als auch für die Musik W. A. Mozarts von substantieller Bedeutung und außerordentlich charakteristisch sind. Unterschieden hingegen sind die Gestaltungen der Abschlüsse, da Mozart im Anschluss an die IV-I-V-I-Harmonik in der Regel noch eine Kadenz komponiert, während sich die Schlusswirkung in der Schlagermusik aufgrund einer spezifischen Melodieführung bereits am Ende der IV-I-V-I-Harmoniefolge einstellt.
      </Text>

      <Heading as='h2' className='headingH4'>Parallelismus (›Pachelbel-Modell‹)</Heading>
      <Text>
        Als Parallelismus (›Pachelbel‹-Modell) wird ein Harmoniemodell (I-V-vi-iii-IV-I) bezeichnet, das in der Literatur üblicherweise um eine Kadenz erweitert wird. In der Mitte dieser Harmoniefolge erklingt eine Subdominante:
      </Text>
      <img className='scoreExample w50 mt36 mb12' src='/images/fischer-mozart/Abb-25_Modelle-4-600.svg' alt='Parallelismu-Modell mit Ganz- oder Halbschluss' />
      <Text className='urhgText'>Abbildung 24: Der Parallelismus im Vorder- und Nachsatz periodischer Gestaltungen</Text>
      <Text mt='6'>
        Der Chorus von Lieb mich (2009) lässt sich als Periode verstehen, wobei sich sowohl der Vorder- als auch der Nachsatz durch das oben skizzierte Modell beschreiben lassen. Die Kadenzen im vierten und achten Takt korrespondieren im Sinne der Charakteristik einer Periode (des Öffnens und Schließens):
      </Text>

      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Fischer-Lieb-mich-Chorus-1.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Lieb-mich-Chorus-2.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Fischer-Lieb-mich-Chorus-3.svg' alt='Song Fischer – Einmal berührt, für immer verführt' />
      <Text className='urhgText'>Abbildung 25: <i>Chorus aus Lieb mich (2009), original in Des-Dur</i></Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_09.mp3'  />
      <Text className='urhgText'>Helene Fischer, <i>Lieb mich</i>, Helene Fischer – <i>So wie ich bin</i>,<br/>Track Nr. 8, Electrola 6879812, P 2009, Musik/Text: Jean Frankfurter, Tobias Reiz.</Text>
      <Text mt='6'>
        Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf der periodischen Chorus-Gestaltung: 
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Geruestsatzmodelle-6.svg' alt='Gerüstsatzanalyse zu Lieb mich von Helene Fischer' />
      <Text className='urhgText'>Abbildung 26: Parallelismusharmonik in Lieb mich (Chorus).</Text>
      <Text mt='6'>
        Auch in diesen Fällen ist interessant, dass sich die formalen Wirkungen wie öffnend (Halbschluss) und schließend (Ganzschluss) an charakteristischen Melodiebewegungen festmachen lassen. Während das Öffnen eines dominantischen Halbschlusses in der Regel an eine auf dem zweiten Ton der Tonart endenden Bewegung gekoppelt ist (im Beispiel oben 5-4-3-2), ist für das Schließend eines Ganzschlusses eine Bewegung in den Grundton charakteristisch (im Beispiel oben 3-2-1).<br/>
        <span className='truncate' />Die folgende Tabelle 2 (Seite 22) zeigt weitere Referenzen zum Vorkommen der Parallelismus-Harmonik (mit mindestens fünf Akkorden) im untersuchten Korpus.
      </Text>

      <table style={{width: '80%', marginTop: '6px', margin: 'auto'}}>
        <thead>
          <tr style={{borderBottom: '1px solid gray'}}>
            <td style={{width: '30%', padding: '20px 0'}}>
              <p>Titel</p>
            </td>
            <td style={{width: '10%'}}>
              <p>Formteil</p>
            </td>
            <td style={{width: '30%'}}>
              <p>Parallelismus-Harmonik</p>
            </td>
            <td style={{width: '30%'}}>
              <p>Album / Jahr / Interpretin</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p><i>Solang dein Herz noch für mich schlägt</i></p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p>Chorus</p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p>C-Em-<b>Am-Em-F-C-Dm</b>-G-C<br/>C-Em-<b>Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p><i>Von hier bis unendlich</i> / 2006 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Auf der Reise ins Licht</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Am-G-Am-C-F-G<br/>Am-G-Am-C-F-G<br/><b>Am-Em-F-C-Dm</b>-F-E</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Von hier bis unendlich</i> / 2006 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Fantasie hat Flügel</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>C-Em-F-G<br/>C-Em-F-G<br/><b>Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Du fängst mich auf und lässt mich fliegen</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>C-G-Dm-G-C<br/><b>Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Mut zum Gefühl</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F-C-Dm</b>-G<br/><b>C-G-Am-Em-F-C-Dm</b>-G<br/>F-G-C/E-F-Dm-G</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Mut zum Gefühl</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F-C-Dm</b>-G<br/><b>C-G-Am-Em-F</b>-G<br/>F-G-C/E-F-Dm-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Das Karussell in meinem Bauch</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>C-F-G-C-F-<b>G-Am-Em-F-C-Dm</b>-G<br/>C-F-G-C-F-<b>G-Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Einmal berührt, für immer verführt</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>C-F-C-G<br/>C-F-Am-G<br/><b>Am-Em-F-C</b>-C-G-F-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Willkommen in meinen Träumen</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Verse</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>C-Em-<b>Am-Em-F-C-Dm</b>-G<br/>C-Em-<b>Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>          
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Das absolute Herzgefühl</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Bridge</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F-C</b>-G</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Lieb mich</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F-C-Dm</b>-G<br/><b>C-G-Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>So wie ich bin</i> / 2009 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Lass diese Nacht nie mehr enden</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F-C-Dm</b>-G<br/><b>C-G-Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Für einen Tag</i> / 2011 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Phänomen</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F-C-Dm</b>-G<br/><b>C-G-Am-Em-F-C-Dm</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Für einen Tag</i> / 2011 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Für immer ist nicht lang genug</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Intro und Interlude</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><b>C-G-Am-Em-F</b>-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Feuer und Flamme</i> / 2011 / BE</p>
            </td>
          </tr>
        </tbody>  
      </table>
      <Text className='urhgText' mt='6'>
        Tabelle 2: Vorkommen der Parallelismus-Harmonik mit mindestens fünf Akkorden
      </Text>

      <Text mt='6'>
        Diese Tabelle gibt darüber Auskunft, dass die Parallelismus-Harmonik in von Helene Fischer gesungener Schlagermusik ungefähr ebenso häufig vorkommt wie die Kombination von I-V-I-Pendel und IV-I- bzw. IV-V-Bewegung. Dagegen ist eine Parallelismus-Harmonik für die von Beatrice Egli gesungenen Songs im untersuchten Zeitraum nicht charakteristisch.<br/>
        <span className='truncate' />Modifikationen bzw. klangliche Erweiterungen (Prolongationen) der Parallelismus-Harmonik sind in Schlagermusik sehr selten, lassen sich jedoch in dem von Helene Fischer gesungenen Repertoire beobachten. Das Beispiel der Abbildung 27 (Seite 23) zeigt im oberen System einen Melodieausschnitt aus dem von Helene Fischer gesungenen Song Hab‘ den Himmel berührt, darunter die in Terzen geführten Oberstimmen des Parallelismus, darunter den Zick-Zack-Bass des Modells (mit möglichen Verfärbungen bzw. Chromatisierungen) und im untersten System die Fundament- bzw. Grundtöne der Akkorde, die durch die oberen Stimmen skizziert werden.
      </Text>
       <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Parallelismus-prolongiert-1.svg' alt='Parallelismus prolongiert und chromatisiert' />
       <Text className='urhgText'>
        Abbildung 27: Chromatisierung des Parallelismus (Ausprägung mit Zwischendominanten)
      </Text>
      <Text mt='6'>
        Im Falle eines Parallelismus und seiner Variationen stehen terzweise fallende Hörereignisse im Vordergrund (entweder ein terzweise sequenzierter Quintstieg oder ein terzweise sequenzierter Quintfall wie in der Abbildung oben E-a / C-F / A-d).<a href='#fn23'><sup id="fz23">23</sup></a> Ohne zwischendominante Verfärbung prägt diese Harmoniefolge den Chorus von Hab‘ den Himmel berührt. Das folgende Notenbeispiel skizziert in den oberen drei Systemen den Vordersatz der periodischen Chorus-Gestaltung.
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Fischer-Hab-den-Himmlerberührt-1.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
       <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Hab-den-Himmlerberührt-2.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Fischer-Hab-den-Himmlerberührt-3.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
      <Text className='urhgText'>
        Abbildung 28: Vordersatz des Chorus aus <i>Hab den Himmel berührt</i>
      </Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_10.mp3'  />
      <Text className='urhgText'>Helene Fischer, <i>Hab den Himmel berührt</i>, Helene Fischer – <i>Zaubermond</i>,<br/>Track Nr. 8, Electrola 2277572, P 2008, Musik/Text: Jean Frankfurter, Christina Bach.</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_11.mp3'  />
      <Text className='urhgText'>Procol Harum, <i>A Whiter Shade of Pale</i>, P 1967, auf: <i>Jahre Rock!</i> CD 1, Track Nr. 5, BMG 82876 59869 2</Text>

      <Text mt='6'>
        Unter der dreistimmigen Skizze (Melodie, Bass und Schlagzeug) sind im kleineren Notenstich Melodie und Bass des Songs A Whiter Shade Of Pale abgebildet, der durch die Band Procol Harum sowie durch einen Rechtsstreit zwischen Gary Brooker (Komponist) und Matthew Fisher (Organist) bekannt geworden ist. Die Ähnlichkeit der Melodien hat ihre Ursache in einem identischen Harmoniemodell und dem allgemeinen Klangprinzip eines imperfizierten Außenstimmensatzes, der für die Musik des 18. Jahrhunderts charakteristisch ist.<br/>
        <span className='truncate' />Die folgende Tabelle zeigt Referenzen zum untersuchten Korpus und chiffriert die jeweiligen Harmoniefolgen:<a href='#fn24'><sup id="fz24">24</sup></a>
      </Text>

      <table style={{width: '80%', marginTop: '6px', margin: 'auto'}}>
        <thead>
          <tr style={{borderBottom: '1px solid gray'}}>
            <td style={{width: '30%', padding: '20px 0'}}>
              <p>Titel</p>
            </td>
            <td style={{width: '10%'}}>
              <p>Formteil</p>
            </td>
            <td style={{width: '30%'}}>
              <p>Parallelismus-Harmonik</p>
            </td>
            <td style={{width: '30%'}}>
              <p>Album / Jahr / Interpretin</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p><i>Zwischen Himmel und Erde</i></p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p>Chorus</p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p>C-C/E-F-G-Am-Dm-Em-F-G-C (F-G)<br/>C-C/E-F-G-Am-Dm-Em-F-C-G-C</p>
            </td>
            <td style={{ paddingTop: '20px', verticalAlign: 'top'}}>
              <p><i>So nah wie du</i> / 2007 / HF</p>
            </td>
          </tr>
          <tr>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Hab’ den Himmel berührt C</i></p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>Chorus</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p>C-Em-Am-C-F-Am-Dm-G-F-Em-G-C<br/>C-Em-Am-C-F-Am-Dm-G-F-Em-G-C</p>
            </td>
            <td style={ {verticalAlign: 'top'} }>
              <p><i>Zaubermond</i> / 2008 / HF</p>
            </td>
          </tr>
        </tbody>  
      </table>
      <Text className='urhgText' mt='6'>
        Tabelle 3: Modifikationen (Prolongationen) der Parallelismusharmonik
      </Text>

      <Text mt='6'>
        Ausschnitte aus der Parallelismus-Harmonik aufwärts sind in dem von Helene Fischer gesungenen Repertoire selten,<a href='#fn25'><sup id="fz25">25</sup></a> abwärts hingegen können entsprechende Harmoniefolgen als ein Standard bezeichnet werden.<a href='#fn26'><sup id="fz26">26</sup></a><br/>
        <span className='truncate' />In Kompositionen Mozarts kommt die Parallelismus-Harmonik häufig und syntaktisch auch in vergleichbarer Weise vor. Das folgende Beispiel skizziert eine Vertonung des Textes »Drei Knaben, jung, schön, hold und weise umschweben euch auf eurer Reise« aus Mozarts <i>Zauberflöte</i>:
      </Text>
       <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Mozart-Parallelismus-3-Knaben-1.svg' alt='W. A. Mozart, Parallelismus in Drei Knaben, jung, schön, hold und weise' />
      <Text className='urhgText'>
        Abbildung 29: W. A. Mozart, die drei Damen im 1. Akt der Zauberflöte
      </Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_12.mp3'  />
      <Text className='urhgText'>Wolfgang Amadeus Mozart, <i>Die Zauberflöte</i>, Part 1,<br/>Track 10 – Quintett: Hm! hm! hm! hm! (Papageno, Tamino, drei Damen), Brilliant Classics 92633/41, P 1991.</Text>
      <Text mt='6'>
        Der Einsatz des Parallelismus an dieser Stelle entspricht exakt dem Einsatz der Harmoniefolge in der Schlagermusik, denn auch Mozart kombiniert die Harmonik des Parallelismus mit einem Halb- und Ganzschluss zur Gestaltung einer periodischen Taktgruppe. Die prolongiert-chromatisierten Gestaltungen hingegen verwendet Mozart allerdings in anderen formalen Kontexten.<a href='#fn27'><sup id="fz27">27</sup></a><br />
        <span className='truncate' />In der Abbildung 39 verweist die tiefste Stimme des Beispiels auf ein weiteres Satzmodell, das in der Musik und Didaktik des 18. Jahrhunderts von herausragender Bedeutung gewesen ist und das sich auch in Schlagermusik beobachten lässt: Die Regola dell’ottava (›Oktavregel‹).
      </Text>


      <Heading as='h2' className='headingH4'>Regola dell‘ottava (›Oktavregel‹)</Heading>
      <Text>
        Eine Parallelismus-Harmonisierung in Verbindung mit einer auffälligen Tonleiterbewegung im Bass charakterisiert den Chorus des von Helene Fischer gesungenen Songs <i>Das ist unser Tag</i>.
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Fischer-Das-ist-unser-Tag-Chorus-1.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Das-ist-unser-Tag-Chorus-2.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
      <img className='scoreExample w50 mt12' src='/images/fischer-mozart/Fischer-Das-ist-unser-Tag-Chorus-3.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
      <img className='scoreExample w50 mt12 mb24' src='/images/fischer-mozart/Fischer-Das-ist-unser-Tag-Chorus-4.svg' alt='Helene Fischer - Hab den Himmel berührt (Parallelismus)' />
      <Text className='urhgText'>
        Abbildung 30: Periodische Gestaltung in <i>Unser Tag</i> (Chorus)
      </Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_13.mp3'  />
      <Text className='urhgText'>Helene Fischer, <i>Unser Tag</i>, Helene Fischer – <i>Farbenspiel</i>,<br/>Track Nr. 15, Polydor 3752323, P 2013, Musik/Text: Peter Plate, Ulf Leo Sommer, Christopher Applegate.</Text>
      <Text mt='6'>
        Das folgende Notenbeispiel skizziert den transponierten harmonisch-melodischen Verlauf und die Phrasengliederung des Vordersatzes der periodischen ChorusGestaltung.
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Geruestsatzmodelle-7.svg' alt='Helene Fischer - Gerüstsatz Das ist unser Tag' />
      <Text className='urhgText'>Abbildung 31: Gerüstsatz <i>Das ist unser Tag</i> (Chorus)</Text>
      <Text mt='6'>
        Auch in den von Helen Fischer gesungenen Songs in Moll kommen funktionale Abschnitte vor, die sich mithilfe der Okatvregel verstehen lassen.<a href='#fn28'><sup id="fz28">28</sup></a><br />
        <span className='truncate' />Die Bedeutung der Regola dell’ottava für die Musikerziehung des 18. Jahrhunderts spiegelt sich einerseits in gedruckten und handschriftlichen Generalbassanleitungen, andererseits lässt sich der harmonische Verlauf zahlreicher Kompositionen der Zeit über die Regola dell’ottava verstehen.<a href='#fn29'><sup id="fz29">29</sup></a> Auch für W. A. Mozarts Lernweg war die Oktavregel bedeutsam. Das folgende Notenbeispiel zeigt die Takte 1–8 sowie 17–24 aus dem Menuett I der Sonate für Klavier und Violine in B-Dur KV 8, das der junge Mozart (spätestens) in seinem neunten Lebensjahr (1764) komponiert hatte.
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Mozart-Beispiele_KV8-1.svg' alt='W. A. Mozart, Menuett KV 8' />
      <Text className='urhgText'>Abbildung 32: W. A. Mozart, Takte 1–8 sowie 17–24 aus dem Menuett I aus KV 8</Text>
      <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_14.mp3'  />
      <Text className='urhgText'>Wolfgang Amadeus Mozart, Violin Sonatas KV 6–9, Part 1,<br/>Track 10 – Violin Sonate KV 8, Menuet I (A-Teil und Reprise), Brilliant Classics 92628/8, P 2001.</Text>
      <Text mt='6'>
        Die ersten acht Takte lassen sich als Ausarbeitung der Oktavregel verstehen, die im Sinne eines Vordersatzes halbschlüssig endet. Ab Takt 17 desselben Menuetts findet sich eine Wiederkehr dieser Gestaltung, die im Sinne eines Nachsatzes ganzschlüssig abgeschlossen wird. Während Vorder- und Nachsatz in Das ist unser Tag zur Gestaltung eines Chorus eingesetzt werden, zeigt Mozart mit diesem Menuett, wie sich diese Abschnitte zur Gestaltung einer ABA-Reprisenform einsetzen lassen.
      </Text>
       <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Diagramm-Chorus-Menuett.svg' alt='Diagramm Chorus - Menuett' />
      <Text mt='6' className='urhgText'>Abbildung 33: Vorder- und Nachsatz zur formalen Gestaltung</Text>

      <p style={{ fontSize: '1.3em', color: 'GrayText' }}><i>Exkurs Oktavregel</i></p>
      <Text mt='6'>
        Vielen Quellen lässt sich entnehmen, dass für den vierten Basston der Oktavregel abwärts im 18. Jahrhundert eine Sekundharmonisierung üblich war:
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Mattheson-Kleine-Generalbasssschule.png' alt='Mattheson Kleine Generalbasschule' />
      <Text mt='6' className='urhgText'>Abbildung 34: Johann Mattheson, Kleine Generalbassschule, S. 251.</Text>
      <Text mt='6'>
        Generalbassaufzeichnungen Mozarts, einer Generalbassanleitung im süddeutschen Raum sowie zahlreichen Kompositionen allerdings lässt sich entnehmen, dass nach einer dominantischen Harmonisierung des vierten Skalentons auch eine grundstellige Subdominante erklingen konnte:
      </Text>
      <img className='scoreExample w30 mt36' src='/images/fischer-mozart/02a Nauss_1751.png' alt='Nauß Generalbassbeispiel' />
      <Text mt='6' className='urhgText'>Abbildung 35: Johann Xaver Nauß, Gründlicher Unterricht, den General-Bass recht zu erlernen, S. 26.</Text>
      <Text mt='6'>
        Gegenüber diesen Harmonisierungen ist für eine Oktavregel im Kontext der Popularmusik eine Quartsextakkordharmonisierung des fünften Skalentons wie in <i>Das ist unser Tag</i> charakteristisch:
      </Text>
      <img className='scoreExample w50 mt36' src='/images/fischer-mozart/Oktavregel-1.svg' alt='Charakteristische Oktavregelharmonisierung in Popmusik' />
      <Text mt='6' className='urhgText'>Abbildung 36: Charakteristische Oktavregelharmonisierung in Popmusik</Text>


      <Heading as='h2' className='headingH4'>Bewertungen</Heading>
      <Text>
        Die vergleichenden Analysen haben in Bezug auf Melodiegestaltung und Harmonik große strukturelle Gemeinsamkeiten zwischen dem von Helene Fischer gesungenen Schlagerrepertoire (bis 2017) und Kompositionen Mozarts offengelegt. Ein Unterschied besteht lediglich darin, dass in Schlagermusik musikalische Abschlüsse in die erörterten Harmoniefolgen integriert werden, während Mozart für Schlusswirkungen kadenzielle Erweiterungen komponiert. Die Gemeinsamkeiten der analytischen Befunde werden im Folgenden aus verschiedenen Perspektiven reflektiert sowie divergierende Bewertungen erörtert, die mit diesen Perspektiven einhergehen.<br/>
        <span className='truncate' />Im Handbuch zu <i>Mozarts Klavier- und Kammermusik</i> schreibt Joachim Brügge:
      </Text>
      <Text className='citation'>
        Johann Peter Abraham Schulz berühmtes vom ›Schein des Bekannten‹ ist öfters auch auf die Wiener Klassik, etwa die Instrumentalmusik Joseph Haydns, als besondere melodischfaßliche Qualität bezogen worden. Bei den Klaviersonaten Mozarts beansprucht wohl der Kopfsatz der Sonate in A-Dur KV 331 wie kein anderer das Attribut, als besonders ›mozart typisch‹ zu gelten. Dabei ist vor allem dessen Thema ein exemplarisches Beispiel für eine an sich (dem äußeren Befund nach) eher konventionell gebende Gestalt, die sich schon nach den ersten Tönen als ›echter‹ Mozart zu erkennen gibt […]<a href='#fn30'><sup id="fz30">30</sup></a>
      </Text>
      <Text>
        Und zur Klaviersonate KV 545 heißt es:
      </Text>
      <Text className='citation'>
        Der paradigmatische Beginn des ersten Satzes, mit seiner elementaren Dreiklangsbildung und den diatonischen Skalenläufen, verkörpert dabei eine der musikalischen ›Visitenkarten‹ der Wiener Klassik schlechthin, wobei gerade die Kürze zur sparsamen Darstellung und Beschränkung der musikalischen Mittel auffordert <span style={{ fontStyle: 'normal' }}>[…]</span> In ihrer Etüden-Diktion nimmt KV 545 einen großen Teil an ›Spielliteratur‹ der pädagogischen Klaviermusik im Stile von Clementi vorweg und übertrumpft diese in der geistreichen Gestaltung.<a href='#fn31'><sup id="fz31">31</sup></a>
      </Text>
      <Text>
        Brügges Äußerungen zeigen, dass der »Schein des Bekannten«, die »besondere melodisch-faßliche Qualität« trotz »eher konventionell gebende[r] Gestalt« als Qualität gesehen werden kann, die als besonders »mozarttypisch« gelten darf. Elementare Dreiklangsbildungen und diatonische Skalenläufe sind dabei keineswegs Attribute minderwertiger Musik, sondern fordern lediglich »zur sparsamen Darstellung und Beschränkung der musikalischen Mittel« auf. Das kunstfertig Einfache als Antagonist des Artifiziellen ist ein Narrativ, das im Französischen auf Michel de Montagne (»poësie populaire«), im Englischen auf Thomas Percy (»popular song«) und im Deutschen auf Johann Gottfried Herder und Johann Abraham Peter Schulz zurückgeführt wird. Nach diesem Narrativ ist das Einfache eine besondere Qualität, auf die im Zusammenhang mit zahlreichen Werken Mozarts von der Klaviermusik bis hin zur Zauberflöte gerne verwiesen wird.<br/>
        <span className='truncate' />Im Gegensatz dazu hat sich im Kontext der Analyse von Schlagermusik ein Narrativ der Akzeptanzgewinnung durch Distanzvermeidung etabliert. Peter Wicke führt hierzu aus:
      </Text>
      <Text className='citation'>
        Als formbildende und damit gattungsspezifisch relevante Konstante erweist sich jedoch die Ästhetik dieser Form des populären Liedes, die unabhängig von kulturellem Kontext, zeitgeschichtlichem Bezug und modischem Stilgewand einem Prinzip verpflichtet bleibt, das als Akzeptanzgewinnung durch Distanzvermeidung beschrieben werden kann. Die Distanz zwischen dem Schlager als ästhetischem Objekt und dem Hörer als Subjekt seiner Rezeption und Konsumtion wird mit allen zu Gebote stehenden Mitteln so gering wie möglich gehalten. Schlager passen sich möglichst nahtlos dem Alltag ihrer Hörer und den darin hervorgebrachten multifunktionalen Ansprüchen an. Sie bewegen sich im Rahmen von deren Hörgewohnheiten, die sie ebenso prägen wie sie sie bestätigen. Standardisierung und Stereotypisierung des musikalischen Ablaufs umgeben diese alltagsbegleitenden Lieder daher stets mit dem Schein der Bekanntheit, ohne freilich den aufmerksamkeitserheischenden Effekt der Neuheit dadurch zu untergraben <span style={{ fontStyle: 'normal' }}>[…]</span> Das gilt auch für den formalen Aufbau, der mit der Bindung an den achttaktigen Periodenbau, schnell erfaßbaren und leicht erinnerbaren Strophenbau nach dem Vers-Refrain-Prinzip zwar einem relativ feststehenden Reglement folgt, darin aber keineswegs starr und schematisch bleibt.<a href='#fn32'><sup id="fz32">32</sup></a>
      </Text>
      <Text>
        Auch bei Wicke ist vom »Schein des Bekannten« zur Erläuterung der Akzeptanzgewinnung durch Distanzvermeidung die Rede. Anders als der Mozartforscher kann der Popularmusikforscher allerdings darin kein Kennzeichen für Qualität und Kunstfertigkeit erkennen: 
      </Text>
      <Text className='citation'>
        Zwangsläufig spiegeln sich damit im Schlager ebenso ungebrochen wie ungefiltert kulturelle Mentalität, Befindlichkeit und Geisteshaltung von Majoritäten, die in ihrer konkreten Form nicht dem Zustand der Kunst, sondern dem Gesellschaftszustand geschuldet sind. Zudem ist der Schlager als Bestandteil der Alltagskultur, in der er seinen Platz übrigens weitgehend unabhängig von Bildung, Status und Beruf behauptet (lediglich Alter ist ein signifikantes Differenzierungskriterium), gewiß kein Instrument der Aufklärung <span style={{ fontStyle: 'normal' }}>[…]</span> Mit einem wie immer auch gearteten Kunstbegriff ist das nicht zu fassen. Vielmehr verweist diese Form des populären Liedes darauf, daß das Musikalische im Kontext medienvermittelter Alltagskultur über die Grenzen des Kunsthaften und die Bindung an das autonom gesetzte Kunstwerk weit hinausgewachsen ist.
      </Text>
      <Text>
        Für Wicke ist der ›Schein des Bekannten‹ vielmehr Indiz für die »Geisteshaltung von Majoritäten«, wobei das Musikalische »über die Grenzen des Kunsthaften und die Bindung an das autonom gesetzte Kunstwerk weit hinausgewachsen« sei. Aus dieser Perspektive lassen sich allerdings auch Kompositionen des 18. Jahrhunderts beobachten. So ist es beispielsweise nicht schwer, bei J. A. P. Schulz, dem wir so unsterbliche Melodien wie »Der Mond ist aufgegangen« und »Ihr Kinderlein kommet« verdanken, ein Verwertungsinteresse auszumachen, das einer Industrie globaler Musikverwertung in einer medienvermittelten Alltagskultur den Weg bereitet hat:
      </Text>
      <Text className='citation'>
        Zu dem Ende habe ich <span style={{ fontStyle: 'normal' }}>[…]</span> mich in den Melodien selbst der höchsten Simplicität und Faßlichkeit beflissen, ja auf alle Weise den Schein des Bekannten dareinzubringen gesucht, weil ich aus Erfahrung weiß, wie sehr dieser Schein […] zu seiner schnellen Empfehlung dienlich, ja nothwendig ist. In diesem Schein des Bekannten liegt das ganze Geheimniß <span style={{ fontStyle: 'normal' }}>[…]</span> Denn nur durch <span style={{ fontStyle: 'normal' }}>[…]</span> eine Melodie, <span style={{ fontStyle: 'normal' }}>[…]</span> die außerdem in sehr sangbaren Intervallen, in einem, allen Stimmen angemeßenen Umfang, und in den allerleichtesten Modulationen fortfließt; und endlich durch die höchste Vollkommenheit der Verhältnisse aller ihrer Theile, wodurch eigentlich der Melodie diejenige Rundung gegeben wird, die jedem Kunstwerk aus dem Gebiete des Kleinen so unentbehrlich ist, erhält das Lied den Schein <span style={{ fontStyle: 'normal' }}>[…]</span> des Ungesuchten, des Kunstlosen, des Bekannten, <span style={{ fontStyle: 'normal' }}>[…]</span> wodurch es sich dem Ohr so schnell und unaufhörlich zurückkehrend, einprägt. Und das ist doch der Endzweck des Liedercomponisten <span style={{ fontStyle: 'normal' }}>[…]</span><a href='#fn33'><sup id="fz33">33</sup></a>
      </Text>
      <Text>
        Im Hinblick auf Mozart ist der Konflikt zwischen musikalischer Individuation und Publikumsgeschmack über die vielzitierte Mahnung des Vaters bekannt geworden:
      </Text>
      <Text className='citation'>
        Ich empfehle dir Beÿ deiner Arbeit nicht einzig und allein für das musikalische, sondern auch für das ohnmusikalische Publikum zu denken, – du weist es sind 100 ohnwissende gegen 10 wahre Kener, – vergiß also das so genannte populare nicht <span style={{ fontStyle: 'normal' }}>[…]</span><a href='#fn34'><sup id="fz34">34</sup></a>
      </Text>
      <Text>
        Woraufhin der junge Mozart erwidert:
      </Text>
      <Text className='citation'>
        – wegen dem sogenan[n]ten Popolare sorgen sie nichts, den[n], in meiner Oper ist Musick für aller Gattung leute; –<a href='#fn35'><sup id="fz35">35</sup></a>
      </Text>
      <Text>
        Darüber hinaus ist es eine historische Tatsache, dass Musik bereits im 18. Jahrhundert »nicht mehr nur für einen zeitlich und räumlich begrenzten Nutzungskontext produziert«, sondern dass sie »mit Blick auf das breite Publikum produziert, angeboten und beworben« worden ist.<a href='#fn36'><sup id="fz36">36</sup></a><br/>
        <span className='truncate' />Die bisherigen Ausführungen zeigen, dass die Bewertung musikalischer Gestaltungen, die sich »dem Ohr so schnell und unaufhörlich zurückkehrend« einprägen, kontingent ist. Je nachdem, ob der Fokus auf der musikalischen Struktur oder auf ihrer Rezeption liegt, kann entsprechender Musik eine besondere Qualität oder auch eine massentaugliche Distanzlosigkeit zugeschrieben werden. Vor diesem Hintergrund ist interessant, in welchen Kontexten Schlagermusik negativ bewertet wird. In der deutschsprachigen Musikwissenschaft dürfte es seit Carl Dahlhaus common sense sein, jene Gruppennormen, auf denen der Erfolg von Schlagerkompositionen beruht, negativ zu beurteilen. Carl Dahlhaus schrieb 1970 in seiner Schrift <i>Analyse und Werturteil</i>:
      </Text>
      <Text className='citation'>
        Daß die ›Gruppennorm‹, auf Grund derer ein Schlager als Inbegriff von Musik und eine Beethoven-Symphonie als leeres Getön erscheint, das gleiche ästhetische Daseinsrecht habe wie die entgegengesetzte ›Gruppennorm‹, ist insofern eine Täuschung, als die Sachurteile, die den ›Gruppennormen‹ zugrundeliegen, nicht gleich fundiert sind. Denn ein Hörer, der einer Beethoven-Symphonie gerecht zu werden vermag, ist im allgemeinen auch fähig, die musikalischen Sachverhalte in einem Schlager zu durchschauen, aber nicht umgekehrt. Nicht, daß dem Hochmut der Eingeweihten das Wort geredet werden soll. Daß jedoch niemand das Recht hat, es musikalischen Analphabeten zum Vorwurf zu machen, daß sie es sind, ändert nichts daran, daß der Analphabetismus ein brüchiges Fundament für ästhetische Urteile ist.<a href='#fn37'><sup id="fz37">37</sup></a>
      </Text>
      <Text>
        Referenzpunkt für die Aussagen zur Minder- oder Höherwertigkeit von Sachurteilen ist eine wie auch immer geartete Qualität. In ihrem Beitrag »Analyse des Werturteils – Analysen, wer urteilt?«<a href='#fn38'><sup id="fz38">38</sup></a> schreibt Nina Noeske:
      </Text>
      <Text className='citation'>
        2014 kommt Adam Szymczyk, damals designierter künstlerischer Leiter der documenta 14 (2017, Kassel und Athen) und Direktor der Kunsthalle Basel, in einem Gespräch auf den Begriff ›Qualität‹ zu sprechen: Qualität in der Kunst (hier verstanden im wertenden Sinne) sei für ihn »eine leere Kategorie«, die unterstelle, es gebe in ihr als sicher und feststehend bezeugte, messbare, gewissermaßen objektive Werte; tatsächlich sei Qualität aber »immer die Qualität von jemand anderem«. Wo demnach von ihr die Rede ist, werden, dieser Argumentation zufolge, Maßstäbe angelegt, die dem jeweiligen Kunstwerk äußerlich sind; entsprechend, so die Botschaft, solle man es unterlassen, die Kunst damit zu traktieren.
      </Text>
      <Text>
        Akzeptiert man zudem die Prämissen der konstruktivistischen Systemtheorie nach Niklas Luhmann, lässt sich Qualität auch aus wissenschaftstheoretischer Sicht nur im Beobachten erster Ordnung bestimmen. Ein Beobachten zweiter Ordnung beschäftigt dagegen die Frage, wie und durch wen Qualität erzeugt wird »und wie lange die Illusion hält«.<a href='#fn39'><sup id="fz39">39</sup></a><br/>
        <span className='truncate' />Qualität, auf die Carl Dahlhaus in seinem vielzitierten Text rekurriert, lässt sich daher in Ideologiekritik und Wissenschaftstheorie auflösen. Und auch sein Argument, dass »verständige Beethoven-Hörer« musikalische Sachverhalte in einem Schlager durschauen könnten, steht auf wackeligen Füßen. Das wird schnell ersichtlich, wenn man sich der musikalischen Analyse von Schlagermusik zuwendet. Denn zum einen gibt es ausgesprochen wenig wissenschaftliche Literatur zu aktueller Schlagermusik, zum anderen setzt sich die wenige Literatur,<a href='#fn40'><sup id="fz40">40</sup></a> die es gibt, in der Regel nicht fundiert mit der klingenden Musik auseinander. Rainer Moritz, Schlagerexperte, Literaturkritiker und Autor, resümiert beispielsweise in seiner Publikation zum Schlager:
      </Text>
      <Text className='citation'>
        Zum Erstaunlichen ihres Erfolges gehört übrigens, dass ihre Schlager einschließlich der CD Helene Fischer (2017) selbst von hoher Konventionalität sind. Ihr Produzent und Komponist Jean Frankfurter, ein Branchen-Urgestein, baut auf eingängige, zeitgemäß poppig arrangierte Rhythmen von oft stampfender Eintönigkeit. Auch ihre Texte – viele aus der Feder der altbewährten Irma Holder oder Kristina Bach – sind durch die Bank uninspiriert und setzen auf ein vertrautes Setting. Flammende Herzen, Paradiese, Lust zu fliegen, am besten atemlos durch die Nacht zu den Sternen und Wolken, bunte Träume, orkanartige Gefühle – das ist der geschmacksarme Metaphern- und Liebessalat der Helene Fischer, der Andrea Bergs deutlich schmerzempfindlichere Lieder fast realitätsnah erscheinen lässt.<a href='#fn41'><sup id="fz41">41</sup></a>
      </Text>
      <Text>
        Gleichgültig, welchen Pfaden (populär-)wissenschaftlicher Äußerungen man folgt, ob die Musik von Helene Fischer unter dem Titel »kitschig, verklemmt und kleinbürgerlich«<a href='#fn42'><sup id="fz42">42</sup></a> analysiert wird oder ob die Attacken wechselweise der Musik oder dem Publikum gelten<a href='#fn43'><sup id="fz43">43</sup></a>: Im Mittelpunkt steht die kritische Auseinandersetzung mit Schlagertexten. Sollen allerdings Äpfel nicht mit Birnen verglichen werden, müssten sich Analysen des klassischen Repertoires dann auch ernsthaft mit Textzeilen wie »Stürze zu Boden, schwülstige Stolze«, »ein Weib tut wenig, plaudert viel« oder »Weia! Waga! Woge, du Welle! Walle zur Wiege« beschäftigen.<br/>
        <span className='truncate' />Dass der <i>primary text</i> bzw. Musik als Musik zumindest in der deutschsprachigen musikwissenschaftlichen Forschung zu kurz kommt, wird in der Popularmusikforschung als Desiderat benannt:
      </Text>
      <Text className='citation'>
        In der Regel wird die konkrete Klanglichkeit – man kann sie auch Materialität, Struktur oder Gestaltung nennen – von individuellen Materialien populärer Musik wie Songs, Tracks, Alben, DJ-Sets oder Improvisationen weitestgehend vernachlässigt. Kurz: In den PMS <span style={{ fontStyle: 'normal' }}>[Popular Music Studies]</span> wird populäre Musik als Musik kaum erforscht.<a href='#fn44'><sup id="fz44">44</sup></a>
      </Text>
      <Text>
        Auch wenn in den letzten zwei Jahrzehnten im Bereich der deutschsprachigen Popularmusikforschung einige analytische Beiträge zur Popularmusik erschienen sind: Eine musikanalytische Auseinandersetzung mit der Musik des Schlagers sucht man selbst dort vergebens. Es mag abwegig erscheinen, sich im Bemühen um eine analytische Auseinandersetzung mit Schlagermusik ausgerechnet auf Theodor W. Adorno zu berufen,<a href='#fn45'><sup id="fz45">45</sup></a> doch seine Anmerkungen zum musikalischen Material sind progressiv und weitreichend:
      </Text>
      <Text className='citation'>
        Der Inhalt ist nicht außerhalb der musikalischen Zeit sondern ihr wesentlich und sie ihm: er ist alles, was in der Zeit stattfindet. Material dagegen ist, womit die Künstler schalten: was an Worten, Farben, Klängen bis hinauf zu Verbindungen jeglicher Art bis zu je entwickelten Verfahrungsweisen fürs Ganze ihnen sich darbietet: insofern können auch Formen Material werden; also alles ihnen Gegenübertretende, worüber sie zu entscheiden haben. Die unter unreflektierten Künstlern verbreitete Vorstellung von der Wählbarkeit des Materials ist insofern problematisch, als sie den Zwang des Materials und zu spezifischem Material ignoriert, der in den Verfahrungsweisen und ihrem Fortschritt waltet. Auswahl des Materials, Verwendung und Beschränkung in seiner Anwendung, ist ein wesentliches Moment der Produktion.<a href='#fn46'><sup id="fz46">46</sup></a>
      </Text>
      <Text>
        Demnach gehören zur materiellen Ebene der Musik des Schlagers Kompressoren, Filter, VST-Plug-ins, Auto-Tune, elektronische Klänge usw. und angesichts musikwissenschaftlicher Curricula der professionellen Musikausbildungsstätten darf mit Recht bezweifelt werden, dass Musikwissenschaftlerinnen und Musikwissenchaftler im 21. Jahrhundert noch über die Kompetenz verfügen, die »musikalischen Sachverhalte in einem Schlager zu durchschauen«.
      </Text>


      <Heading as='h2' className='headingH4'>Zusammenfassung</Heading>
      <Text>
        In diesem Beitrag wurden Harmonik und Melodieführung in Songs aus dem frühen Schlagerrepertoire von Helene Fischer (bis 2017) analysiert und die Analyseergebnisse Kompositionen Mozarts gegenübergestellt. Mithilfe satztechnischer Modelle wurden zahlreiche Gemeinsamkeiten in der musikalischen Gestaltung nachgewiesen, die trotz unterschiedlicher Stilistiken eine vergleichbare musikalische Wirkung entfalten (Liedhaftigkeit, Sangbarkeit, periodische bzw. symmetrische Gestaltung, Einprägsamkeit, usw.). Abschließend standen musikwissenschaftliche Bewertungen im Fokus, wobei Divergenzen durch kontingente Perspektiven geprägt sind bzw. auf verschiedenen Interessen an der Struktur oder Rezeption von Musik beruhen. Darüber hinaus wurden Vorurteile in der Musikwissenschaft offengelegt und die Beschäftigung mit Schlagermusik <i>als Musik</i> bzw. einem gehörten, ästhetischen Gegenstand als Desiderat der Musikforschung bestimmt.
      </Text>


      <Divider mt='60px' mb='60px' h='1px' bg='gray' />
      <Heading as='h2' className='headingH4'>Fußnoten</Heading>
       <div style={{margin: 'auto', margin: 'auto', padding: '0 40px', fontSize: '0.8em' }}>
        <ul className='footnoteList'>
          <li id="fn1"><a href='#fz1'>1.&nbsp;</a>
            Unter einer deutschsprachigen Musikwissenschaft werden hier alle Disziplinen subsumiert, die sich mit wissenschaftlichem Anspruch und in deutscher Sprache mit der Analyse von Musik beschäftigen, also die akademische Musikwissenschaft und Popularmusikforschung, die wissenschaftlich arbeitenden Bereiche der institutionellen Musiktheorie usw.
          </li>
          <li id="fn2"><a href='#fz2'>2.&nbsp;</a>
            Systematisch analysiert wurden die Songs der deutschsprachigen Studioalben von Helene Fischer bis 2017 (mit Ausnahme des Albums <i>Weihnachten</i>) sowie einige von Beatrice Egli gesungene Songs als Referenzbeispiele. Die Begrenzung der Alben bis 2017 ist dadurch motiviert, dass bis zu diesem Zeitpunkt Jean Frankfurter Stammkomponist des Schlagerrepertoires von Helene Fischer war. Ab dem Album <i>Helene Fischer</i> (2017) ändert sich das, im Album <i>Rausch</i> (2021) ist Frankfurter an keinem Titel mehr beteiligt. Mit den wechselnden Autorenteams des zuletzt genannten Albums klingen die Songs von Fischer musikalisch auch ganz anders als die Titel bis zum Album <i>Farbenspiel</i> (2013).
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
            Als <i>Expanded Sentence</i> insbesondere in der Forschung zur Sonatenhauptsatzform bzw. Classical Form und Sonata Theory, vgl. Kaiser 2018, 30 ff.
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
          <li id="fn21"><a href='#fz21'>21.&nbsp;</a>
            Der Satzbildwechsel T. 4/5 bzw. ›rauschende‹ Charakter der nachfolgenden Takte legt es nahe, den ersten Abschnitt als Abfolge von zwei Formfunktionen zu verstehen: Hauptsatz und Überleitung. Vgl. hierzu Brügge 2006, 129 f., Kaiser 2018, 47 ff.
          </li>
          <li id="fn22"><a href='#fz22'>22.&nbsp;</a>
            Hinweise auf diese Komposition wurden zeitgleich publiziert in Gjerdingen 2007, 361 und Kaiser 2007, S. 183–184.
          </li>
          <li id="fn23"><a href='#fz23'>23.&nbsp;</a>
            Vgl. z.B. New York State Of Mine von Billy Joel, Gestaltung des Verse.
          </li>
          <li id="fn24"><a href='#fz24'>24.&nbsp;</a>
            Zur Herleitung der Harmonik aus dem Parallelismus vgl. Kaiser 2016, 136.
          </li>
          <li id="fn25"><a href='#fz25'>25.&nbsp;</a>
            Z. B. im Verse von Copilot (2011): Am-C-Dm-G-Am-C-Dm-G-E-Am-G-C-Dm-F-E
          </li>
          <li id="fn26"><a href='#fz26'>26.&nbsp;</a>
            Auch in kleineren Einheiten wie z. B. mit vier verschiedenen Akkorden in: <i>Gefühle wie Feuer und Eis</i> (Verse) u.a.
          </li>
          <li id="fn27"><a href='#fz27'>27.&nbsp;</a>
            Aufgrund der sequenziellen Harmonik und in Verbindung mit rauschendem Charakter sind entsprechende Gestaltungen in Kompositionen Mozarts für die Formfunktion Durchführung typisch wie z.B. in der Durchführung der Sonate für Violine und Klavier KV 377, T. 87 ff. oder im Credo der Krönungsmesse KV 317, T. 25 ff.
          </li>
          <li id="fn28"><a href='#fz28'>28.&nbsp;</a>
            So z.B. Verse und Chorus in <i>Adieu</i>, dem letzten Titel des Albums Helene Fischer (2017). Gleichzeitig veranschaulicht dieser von Martin Fliegenschmidt [Pseudonym: Martin Fly] komponierte und produzierte Song zusammen mit <i>Sonne auf der Haut</i> (Komponistin Christina Bach), <i>Wenn du lachst</i> (Komponisten Simon Triebel, Tobias Reitz, Ali Zuckowski und David Gold) und anderen Titeln den sich mit diesem Album ändernden musikalischen Stil der von Helene Fischer interpretierten Lieder
          </li>
          <li id="fn29"><a href='#fz29'>29.&nbsp;</a>
            Paradigmatisch z.B. das Präludium in C-Dur BWV 846, T. 5–19 im ersten Teil des Wohltemperierten Klavier, aber auch die Präludien in c-Moll BWV 847, T. 5–11, in D-Dur BWV 850, T. 3–20 und 22–25 u.v.a.
          </li>
          <li id="fn30"><a href='#fz30'>30.&nbsp;</a>
            Brügge 2006, 128.
          </li>
          <li id="fn31"><a href='#fz31'>31.&nbsp;</a>
            Brügge 2006, 129.
          </li>
          <li id="fn32"><a href='#fz32'>32.&nbsp;</a>
            Brügge 2016.
          </li>
          <li id="fn33"><a href='#fz33'>33.&nbsp;</a>
            Schulz 1785, Vorbericht.
          </li>
          <li id="fn34"><a href='#fz34'>34.&nbsp;</a>
            Stiftung Mozarteum Salzburg, Mozart Briefe und Dokumente – Online-Edition,http://dme.mozarteum.at/DME/briefe/letter.php?mid=1124&cat=3 (Leopold Mozart an Wolfgang Amadé Mozart in München, Salzburg, 11. Dezember 1780).
          </li>
          <li id="fn35"><a href='#fz35'>35.&nbsp;</a>
            Stiftung Mozarteum Salzburg, Mozart Briefe und Dokumente – Online-Edition, http://dme.mozarteum.at/DME/briefe/letter.php?mid=1129&cat=3 (Wolfgang Amadé Mozart an Leopold Mozart in Salzburg, München, 16. Dezember 1780)
          </li>
           <li id="fn36"><a href='#fz36'>36.&nbsp;</a>
            Zaunstöck 2007, 138.
          </li>
           <li id="fn37"><a href='#fz37'>37.&nbsp;</a>
            Dahlhaus 1970, S. 14.
          </li>
          <li id="fn38"><a href='#fz38'>38.&nbsp;</a>
            Noeske 2020, 81–82.
          </li>
           <li id="fn39"><a href='#fz39'>39.&nbsp;</a>
            Luhmann 1997, 156–157: »Das Beobachten zweiter Ordnung hat, auf seine Wirkungen hin beobachtet, offenbar toxische Qualität. Es verändert den unmittelbaren Weltkontakt. Es zersetzt die gleichwohl beibehaltene Einstellung erster Ordnung. Es durchsetzt die Lebenswelt (im Sinne Husserls) mit einem Verdacht gegen sich selbst, ohne sie verlassen zu können. Während der Beobachter erster Ordnung die Hoffnung hegen konnte, mit durchdringendem Blick die sich zeigende Oberfläche überwinden und in die Tiefe eindringen und vom Schein zum Sein vordringen zu können, wird dem Beobachter zweiter Ordnung auch diese Intention der »Philosophie« suspekt. Er liebt die Weisheit und das Können und das Wissen nicht, er versucht zu verstehen, wie es und durch wen es erzeugt wird und wie lange die Illusion hält. Für ihn ist das Sein ein »Ontologie« produzierendes Beobachtungsschema, und Natur wird dann nur noch ein Begriff sein, der ein beruhigendes Ende verheißt und damit weitere Fragen stoppt. Toxisch ist auch, daß der Beobachter zweiter Ordnung die »Sinnfrage« stellt, etwa hundert Jahre von der Mitte des 19. bis zur Mitte des 20. Jahrhunderts sich damit berauscht - nur um schließlich auch dies noch als Spezialität einer bestimmten Epoche beobachten zu müssen.«
          </li>          
          <li id="fn40"><a href='#fz40'>40.&nbsp;</a>
            Übersichten finden sich bei Wulff 2012 und Kornberger 2018, 49–63.
          </li>         
          <li id="fn41"><a href='#fz41'>41.&nbsp;</a>
            Rainer Moritz, Schlager. 100 Seiten, Ditzingen 2017, zit. n. d. 2. aktualisierten Aufl. 2019, 38.
          </li>   
          <li id="fn42"><a href='#fz42'>42.&nbsp;</a>
            Grau 2014.
          </li>
          <li id="fn43"><a href='#fz43'>43.&nbsp;</a>
            So z. B. von Anja Caspary (Musikchefin radioeins) in einem Interview mit Holger Lachmann (Musikchef Antenne Brandenburg), die der Musik von Helene Fischer jede handwerkliche Qualität abspricht (»Genau, weil das ist keine Kunst […]« bzw. dem Publikum Kompetenz und fehlenden Musikgeschmack vorwirft (»[…] mich irritiert es eher, dass, dass so viele Menschen sich wegballern wollen mit so ’ner Belanglosigkeit, vielleicht können die gar nichts anderes mehr hören [...]« und »das ist ‘was für Leute, die keine Ahnung von Musik haben, würde ich behaupten, sondern die einfach nur Gedudel wollen, das nicht wehtun darf, das sie nicht zum Nachdenken bringt«). Da die Veröffentlichung bei Twitter nicht mehr verfügbar ist, können Sie den Ausschnitt aus dem Interview hier hören: <audio controls className='scoreExampleAudio' src='https://storage.gmth.de/proceedings/articles/334/attachments/334_audio_15.mp3'  /> 
          </li>
          <li id="fn44"><a href='#fz44'>44.&nbsp;</a>
            Gálvez 2021, 6.
          </li>
          <li id="fn45"><a href='#fz45'>45.&nbsp;</a>
            Vgl. hierzu Großmann/Hanáček 2016, 59 und Gálvez 2021, 10
          </li>
          <li id="fn46"><a href='#fz46'>46.&nbsp;</a>
            Zit. nach Adorno 1998, 222.
          </li>          
        </ul>
       </div>

      <Divider mt='60px' mb='60px' h='1px' bg='gray' />
      <Heading as='h2' className='headingH4'>Literatur</Heading>
      <ul className='list2040'>
        <li>
	        Adorno, Theodor W. (1998), Ästhetische Theorie, in: Theodor W. Adorno. Gesammelte Schriften, Bd. 9, Lizenzausgabe Wissenschaftliche Buchgesellschaft: Suhrkamp (Erstausgabe Frankfurt a.M. 1970).
        </li>
        <li>
          Brügge, Joachim (2006), »Solowerke für Klavier«, in: Mozarts Klavier- und Kammermusik (= Das Mozart-Handbuch 2), hg. von Matthias Schmidt, Laaber: Laaber.
        </li>
        <li>
          Caspary, Anja (2018), Interview mit Holger Lachmann im INFOradio am 4. September 2018, transkripiert nach einem Mitschnitt auf Twitter, https://mobile.twitter.com/rbb24Inforadio/status/1036884678895173633?lang=ar-x-fm) (29.12.2022).
        </li>
        <li>
          Walter Everett (2009), The Foundation of Rock, New York: Oxford University Press.
        </li>
        <li>
          Gálvez, José (2021), »Normativität ohne Normen – Geschichte ohne Vergangenheit. Ästhetische Paradoxa populärer Musik«, in: Das verdächtig Populäre in der Musik. Warum wir mögen, wofür wir uns schämen, hg. von Marina Schwarz: Springer VS.
        </li>
        <li>
          Gjerdingen, Robert (1988), A Classic Turn of Phrase. Music and the Psychology of Convention, Philadelphia: University of Pennsylvania Press.
        </li>
        <li>
          Gjerdingen, Robert O. (2007), Music in the Galant Style, New York: Oxford University Press.
        </li>
        <li>
          Großmann, Rolf und Maria Hanáček (2016), »Sound as Musical Material: Three Approaches to a Material Perspective on Sound and Music«, in: Sound as Popular Culture. A Research Companion, hg. von Gerrit Papenburg und Holger Schulze, Cambridge: MIT Press.
        </li>
        <li>
          Kaiser, Ulrich (2007), Die Notenbücher der Mozarts als Grundlage der Analyse von W. A. Mozarts Kompositionen 1761-1767, Kassel: Bärenreiter, https://mozartforschung.de/downloads/kaiser_notenbuechermozarts-kassel-2007.pdf.
        </li>
        <li>
          Kaiser, Ulrich (2016): »Vom Satzmodell zum Modell«, Zeitschrift der Gesellschaft für Musiktheorie 13/Sonderausgabe [Special Issue], 135–153. https://doi.org/10.31751/865
        </li>
        <li>
          Kaiser, Ulrich (2018), »Formfunktionen der Sonatenform. Ein Beitrag zur Sonatentheorie auf der Grundlage einer Kritik an William E. Caplins Verständnis von Formfunktionen«, Zeitschrift der Gesellschaft für Musiktheorie 15/1 (2018), 29–79.
        </li>
        <li>
          Kaiser, Ulrich (2023), »Models for Mozart’s Transitions: A Transatlantic Exchange (A reply on a short essay by Nathan John Martin)«, in: Music Theory Spectrum (mtad012 - no open access).
        </li>
        <li>
          Kornberger, Monika (2018), »Einmal sang die Liebe uns ein Lied«. Deutscher Schlager der Zwischenkriegszeit und seine Protagonisten in Wien, Dissertation zur Erlangung des Doktorgrades der Philosophie an der Karl-Franzens-Universität Graz, https://unipub.uni-graz.at/obvugrhs/content/titleinfo/2945896/full.pdf
        </li>
        <li>
          Luhmann, Niklas (1997), Die Kunst der Gesellschaft (= suhrkamp taschenbuch Wissenschaft 1303), Frankfurt a.M. 1997: Suhrkamp (gebundene Erstausgabe ebd. 1995).
        </li>
        <li>
          Noeske, Nina (2020), »Analyse des Werturteils – Analysen, wer urteilt? ›Qualität‹ und Qualitätsmaßstäbe in der Musikforschung«, Zeitschrift der Gesellschaft für Musiktheorie 17/1, 81–102. https://doi.org/10.31751/1028.
        </li>
        <li>
          Schulz, Johann Abraham Peter (1785), Lieder im Volkston bey dem Claviere zu singen, zweite verb. Aufl., Berlin: Georg Kakob Decker.
        </li>
        <li>
          Summach, Jay (2011), »The Structure, Function, and Genesis of the Prechorus, in: MTO 17/3, https://mtosmt.org/issues/mto.11.17.3/mto.11.17.3.summach.html
        </li>
        <li>
          Weber, Max (1922), »Die ›Objektivität‹ sozialwissenschaftlicher und sozialpolitischer Erkenntnis« [1904], in: Max Weber: Gesammelte Aufsätze zur Wissenschaftslehre, Tübingen: MohrSiebeck, 146–214.
        </li>
        <li>
          Wicke, Peter (2021), Art. Schlager, in: MGG Online, hg. von Laurenz Lütteken, Kassel, Stuttgart, New York 2016 ff., https://www-1mgg-2online-1com-1jvd8i9co0003.emedia1.bsbmuenchen.de/mgg/stable/404035
        </li>
        <li>
          Wulff, Hans Jürgen (2012), Schlager, Schlagerfilm, Schlagerforschung. Ein bibliographisches Dossier (= Medienwissenschaft: Berichte und Papiere 134), Hamburg: Institut für Germanistik https://doi.org/10.25969/mediarep/12766.
        </li>
        <li>
          Zaunstöck, Holger (2007), »Populäre Musikkultur im 18. Jahrhundert? Die Genese popkultureller Praxis im Spannungsfeld von Aufklärung und Stadtraum«, Jahrbuch für Kommunikationsgeschichte, Bd. 9, 130-149. https://www.jstor.org/stable/20852517
        </li>
      </ul>

      <Heading as='h2' className='headingH4'>Diskographie</Heading>
      <ul className='list2040'>
        <li>
          <i>Von hier bis unendlich</i> (2006), Electrola 3543702 (EMI) / EAN 0094635437027 (Fischer).
        </li>
        <li>
          <i>So nah wie du</i> (2007), Electrola 3969462 (EMI) / EAN 0094639694624 (Fischer).
        </li>
        <li>
          <i>Zaubermond</i> (2008), Electrola 2277572 (EMI) / EAN 5099922775726 (Fischer).
        </li>
        <li>
          <i>Wenn der Himmel es so will</i> (2008), Solymar 28292 / EAN 7619999282927 (Egli).
        </li>
        <li>
          <i>Helene Fischer – So wie ich bin</i> (2009), Electrola 6879812 (EMI) / EAN 5099968798123 (Fischer).
        </li>
        <li>
          <i>Für einen Tag</i> (2011), Electrola 6806752 (EMI) / EAN 5099968067526 (Fischer).
        </li>
        <li>
          <i>Feuer und Flamme</i> (2011), Jabel 06025 2776663 (UMG) / EAN 0602527766638 (Egli).
        </li>
        <li>
          <i>Farbenspiel</i> (2013), Polydor 3752323 (UMG) / EAN 0602537523238 (Fischer).
        </li>
        <li>
          <i>Glücksgefühle</i> (2013), Polydor 06025 3739825 (UMG) / EAN 0602537398256 (Egli).
        </li>
        <li>
          <i>Pure Lebensfreude</i> (2013), Polydor 3762187 (UMG) / EAN 0602537621873 (Egli).
        </li>
        <li>
          <i>Bis hierher und viel weiter</i> (2014), Polydor 3796913 (UMG) / EAN 0602537969135 (Egli).
        </li>
        <li>
          <i>Kick im Augenblick</i> (2016), Polydor 4784126 (UMG) / EAN 0602547841261 (Egli).
        </li>
        <li>
          <i>Helene Fischer</i> (2017), Polydor 06025 5745659 (UMG) / EAN 0602557456592 (Fischer).
        </li>
        <li>
          <i>Wohlfühlgarantie</i> (2018), Polydor 06025 6706276 (UMG) / EAN 0602567062769 (Egli).
        </li>
        <li>
          <i>Natürlich!</i> (2019), Electrola 0602577541575 (UMG) / EAN 0602577541575 (Egli).
        </li>
        <li>
          <i>Rausch</i> (2021), Polydor 060243829076 (UMG) / EAN 0602438290765 (Fischer).
        </li>
        <li>
          <i>Alles was du brauchst</i> (2021), Polydor 060243833260 (UMG) / EAN 0602438332601 (Egli).
        </li>
      </ul>

      <Text mt='6'>
        <i>
          [In dieser HTML-Version des Beitrags sind die verpflichtenden Angaben der Audiozitate (§ 51 Zitate) direkt unter den Audioplayern angegeben worden. Bei Fragen zum Urheberrecht wenden Sie sich bitte an die Verantwortlichen der wissenschaftlichen Zeitschrift.]
        </i>
      </Text>
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
