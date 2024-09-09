import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import VideoWrapper from '../components/videoWrapper';
import { Heading, Text, Link, Divider } from '@chakra-ui/react';

const options = {
  title: 'Open Education',
  filter: 'person',
  slug: '/person/oep-oer'
}

const video = {
  url: '/medien/video-kaiser-oer-aktivist-fullhd.mp4',
  posterUrl: '',
  title: '',
  description: 'Video zu meinen OER-Publikationstätigkeiten / 2024'
}

export default function OepOer() {
  return <>
    <Head>
      <title>Open Education</title>
      <meta name="description" content="OEP & OER | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />
    <Text>
      Anhand meiner Bewerbung für den <a href='https://awards.oeglobal.org/' className='underline'>Open Education Awards for Excellence</a> 2024 in der Kategorie <i>Educator Award</i> von <a href="https://www.oeglobal.org/" className='underline'>OE Global</a> können Sie einiges über mein Engagement für Open Educational Practise und Open Educational Resources erfahren. Der Ausschreibungstext:    
    </Text>
    <Text bg='#b9feb9' pl='40px' pr='40px' pt='20px' pb='20px' style={{ borderRadius: '10px', marginTop: '20px' }}>
      <b>Educator Award</b><br />
      »This award honors an innovative teacher/professor who has published and/or used a significant body of Open Resources and/or applied Open Practices over a sustained period (at least one year) in their teaching practice. This individual’s open course materials and professional practices have been recognized for impacting student learning and influencing peers to share more openly.«
    </Text>
    <Text className='mt20'>
      Zu meiner aufrichtigen, großen Freude wurde ich unter 112 Bewerbungen aus 28 Ländern für die <a href='https://awards.oeglobal.org/2024-finalists/' className='underline'>Shortlist</a> des Educator Award ausgewählt. Meine Kolleginnen und Kollegen auf dieser Shortlist sind: Kiranjot Kaur (Conestoga College, Canada), Fatih Yegul (Conestoga College, Canada) und Maria Luisa Zorrilla (Universidad Autonoma del Estado de Morelos, Mexico). 
    </Text>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />
    
    <Heading as='h3' className="headingH3">
      Open Educational Practices
    </Heading>
    <Text>
      Mein Leben ist dem dem Lernen und Lehren gewidmet, seit etwas mehr als 10 Jahren habe ich meine berufliche Lehrtätigkeit auf Open Educational Practices (OEP) und Open Educational Resources (OER) ausgerichtet. Bis 2009 verliefen mein Lernen und Lehren im Hinblick auf meinen Beruf konventionell. Das heißt: Ich habe viele Bücher gekauft, gelesen und für Verlage auch geschrieben.<sup id="01"><a href="#fn-01">1</a></sup>
    </Text>
    <Text className='mt20'>
      2002 hat mich ein ehemaliger Schüler mit der Idee der Free/Libre-Software-Programmierung bekannt gemacht. Auf der Grundlage dieser Idee begann ich damit, auf selbst programmierten Webseiten für meine Studierenden Tutorials kostenlos zur Verfügung zu stellen.<sup id="02"><a href="#fn-02">2</a></sup> Das digitale Angebot setze ich in der Lehre für Blended-Learning- und Flipped-Classroom-Szenarien ein. Chancen und Probleme dieser Praxis habe ich wissenschaftlich reflektiert,<sup id="03"><a href="#fn-03">3</a></sup> von den Studierenden wurde das Angebot von Anfang an begeistert aufgenommen.<sup id="04"><a href="#fn-04">4</a></sup>
    </Text>
    <Text className='mt20'>
      Seit über 10 Jahren produziere ich Open Educational Resources (bisher 25 OpenBooks und über 200 Tutorials) zum Musiklernen an Musikhochschulen, Musikschulen und allgemeinbildenden Schulen. Trotz strukturell bedingter Widerstände gegen OER im Bereich der Musik (geistiges Eigentum ./. freie Bildung), hat mein jahrelanger Einsatz für OER und OEP viele Menschen berühren und von der Community-Arbeit überzeugen können. Mit Überführung meiner OER in die <a href="https://openmusic.academy" className='underline'>Open Music Academy</a> sind meine Materialien nachhaltig und langfristig für alle Interessierten verfügbar.
    </Text>
    <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />
    <ol style={{margin: '20px', listStyleType: 'none'}}>
      <li id="fn-01">
        <a href='#01'>1.</a> <Link className='underline' href='/publikationen/verlage'>s. Verlagspublikationen</Link>
      </li>
      <li id="fn-02">
      <a href='#02'>2.</a> <Link className='underline' href='/publikationen/tutorials/'>s. Tutorials</Link>
      </li>
      <li id="fn-03">
      <a href='#03'>3.</a> <a className='underline' href='https://storage.gmth.de/proceedings/articles/270/pdf/gmth-proceedings-artikel-270.pdf'>Ulrich Kaiser, »Blended Learning im Musiktheorieunterricht«, GMTH Proceedings 2019.</a>
      </li>
      <li id="fn-04">
      <a href='#04'>4.</a> <a className='underline' href='https://musikanalyse.net/feedback/'>s. Feedbach auf musikanalyse.net</a>
      </li>
    </ol>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />

    <Heading as='h3' className="headingH4">
      Open Education Resources
    </Heading>
    <Text>
      2009 begann ich nach dem Vorbild des Rheinberg-Verlags<sup id="05"><a href="#fn-05">1</a></sup> damit, OpenBooks zur Musik und für den Unterricht an allgemeinbildenden Schulen kostenlos zur Verfügung zu stellen.<sup id="06"><a href="#fn-06">2</a></sup> Die Rückmeldungen aus der Praxis waren zahlreich und überaus motivierend,<sup id="07"><a href="#fn-07">3</a></sup> in wenigen Jahren wurden über 1.000.000 OpenBooks heruntergeladen. Meine Angebote waren bis zu diesem Zeitpunkt kostenlos (›free beer‹), jedoch nicht wirklich frei (›free speech‹) und zudem an meine Person gebunden (nicht nachhaltig). Deswegen beschloss ich, freie Lizenzen zu verwenden. 2014 stellte ich mein erstes OpenBook unter freier Lizenz (CC BY-SA) auf GitHub zur Verfügung.<sup id="08"><a href="#fn-08">4</a></sup> Seit dieser Zeit verwende ich ausschließlich Creative-Commons-Lizenzen (früher CC BY-SA, aktuell CC BY) und zum Erstellen der Materialien Free/Libre-Software (z.B. MuseScore, Scribus, Gimp, Inkscape, Shotcut).
    </Text>
    <Text className='mt20'>
      Für viele meiner Kolleg:innen und Studierenden war die Hürde für eine Nachnutzung meiner Open Educational Resources trotz (oder gerade wegen) der Verwendung von Open-Source-Software recht hoch. Oft fehlten Medienkompetenzen, um OER adaptieren oder erweitern zu können. Mit Wikipedia als Vorbild und überzeugt von der Kraft und Leistungsfähigkeit von Communities, gelang mir 2017 der Aufbau eines Musik-Wikis (ELMU | eLearning music).<sup id="09"><a href="#fn-09">5</a></sup> Ermöglicht wurde ELMU durch die Unterstützung der Hochschulleitung der HMTM sowie Spenden. Darüber hinaus gründete ich mit Kolleg:innen einen gemeinnützigen Verein, um das Vorhaben abzusichern.<sup id="10"><a href="#fn-10">6</a></sup> 2021 arbeitete ich zur Skalierung der Plattform für die HMTM einen Antrag für die Stiftung Innovation in der Hochschullehre (StIL) aus.<sup id="11"><a href="#fn-11">7</a></sup> Das Projekt wird seither gefördert und aus ELMU wurde OMA (Open Music Academy).<sup id="12"><a href="#fn-12">8</a></sup> Ziel der OMA ist es, allen Musiklehrenden und -lernenden ein Tool an die Hand zu geben, das leicht und intuitiv zu bedienen und ganz auf die Anforderungen des Musiklehrens und -lernens zugeschnitten ist. Allen Interessierten wird so die Mitarbeit an OER zur Musik ermöglicht.
    </Text>
    <Text className='mt20'>
      Sofern mir die Arbeit als Projektleiter der OMA die Zeit dazu lässt, überführe ich derzeit alle Materialien meiner Domains sowie Bücher unter freier Lizenz auf die OMA und arbeite an neuen Materialien (die Ideen dazu gehen mir nicht aus 😊). 2023 habe ich das OpenBook ›Chorsingen? Easy-Peasy! 12 einfache Chorsätze zum Loslegen‹<sup id="13"><a href="#fn-13">9</a></sup> für Kinder veröffentlicht, in diesem Jahr den ›Konzertsatz für Violine solo und Orchester in G-Dur‹ für Laienorchester.<sup id="14"><a href="#fn-14">10</a></sup>
    </Text>
    <Text className='mt20'>
      In der Hochschule arbeite ich an einer Optimierung der Verbindung von analoger und digitaler Lehre. Das Feedback meiner Studierenden ist sehr motivierend.<sup id="15"><a href="#fn-15">11</a></sup> Das Spektrum meiner unter CC-Lizenz verfügbaren Arbeiten umfasst Spezialthemen wie das Schreiben von Passacaglien,<sup id="16"><a href="#fn-16">12</a></sup> Fugen,<sup id="17"><a href="#fn-17">13</a></sup> Sonaten,<sup id="18"><a href="#fn-18">14</a></sup> Arrangements,<sup id="19"><a href="#fn-19">15</a></sup> Popmusik,<sup id="20"><a href="#fn-20">16</a></sup> Filmmusik<sup id="21"><a href="#fn-21">17</a></sup> und Seminare,<sup id="22"><a href="#fn-22">18</a></sup> Vorlesungen,<sup id="23"><a href="#fn-23">19</a></sup> Materialien für den Schulunterricht<sup id="24"><a href="#fn-24">20</a></sup> sowie den Musikunterricht an Musikschulen.<sup id="25"><a href="#fn-25">21</a></sup>
    </Text>
    <Text className='mt20'>
      Ich bedauere sehr, dass es meine Materialien nur auf Deutsch gibt. Die Schuld daran trage ich, weil ich mir nie die Zeit genommen habe zu lernen, mich in einer anderen Sprache als meiner Muttersprache differenziert auszudrücken. Ich hoffe sehr, dass Menschen mit entsprechenden Fähigkeiten meine Materialien entdecken, schätzen, adaptieren und übersetzen werden, »damit die gesamte Gesellschaft davon profitiert«.<sup id="26"><a href="#fn-26">22</a></sup> Die OMA ist für Mehrsprachigkeit eingerichtet und dazu in besonderer Weise geeignet.
    </Text>    
    <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />
    <ol style={{margin: '20px', listStyleType: 'none'}}>
      <li id="fn-05">
        <a href='#05'>1.</a> <a className='underline' href='https://www.rheinwerk-verlag.de/openbook/'>OpenBooks des Rheinberg-Verlags</a>
      </li>
      <li id="fn-06">
      <a href='#06'>2.</a> <a className='underline' href='https://oer-musik.de'>oer-musik.de</a>
      </li>
      <li id="fn-07">
      <a href='#07'>3.</a> <a className='underline' href='https://oer-musik.de/feedback'>s. Feedback auf oer-musik.de</a>
      </li>
      <li id="fn-08">
      <a href='#08'>4.</a> <a className='underline' href='https://github.com/musikisum/OpenBook-KostenloseSoftware'>Kostenlose Software für den Musikunterricht (OpenBook auf GitHub)</a>
      </li>
      <li id="fn-09">
      <a href='#09'>5.</a> <Link className='underline' href='/projekte/elmu/'>ELMU</Link>
      </li>
      <li id="fn-10">
      <a href='#10'>6.</a> <a className='underline' href='https://openmusic.academy/docs/2PAKgPM44CL4VM5DbCvuLK/'>Open Music Academy Education e.V.</a>
      </li>
      <li id="fn-11">
      <a href='#11'>7.</a> <a className='underline' href='https://stiftung-hochschullehre.de/projekt/oer-lfm/'>Förderprojekt oer-lfm</a>
      </li>
      <li id="fn-12">
      <a href='#12'>8.</a> Wikipedia: <a className='underline' href='https://de.wikipedia.org/wiki/Open_Music_Academy'>Open Music Academy</a>
      </li>
      <li id="fn-13">
      <a href='#13'>9.</a> <a className='underline' href='https://openmusic.academy/docs/Px7epURXWsBLoE4fKzFBsW'>Chorsingen? Easy-Peasy! 12 einfache Chorsätze zum Loslegen</a>
      </li>
      <li id="fn-14">
      <a href='#14'>10.</a> <a className='underline' href='https://openmusic.academy/docs/C3fuWU92TigMJ3223QNqsZ/'>Konzertsatz für Violine solo und Orchester in G-Dur</a>
      </li>
      <li id="fn-15">
      <a href='#15'>11.</a> <Link className='underline' href='/unterricht/evaluation/'>Unterrichtsevaluationen</Link>
      </li>
      <li id="fn-16">
      <a href='#16'>12.</a> <a className='underline' href='https://openmusic.academy/docs/GHp8kL9WtnMn9HT2AiMVT9/'>Stilübung Passacaglia</a>
      </li>
      <li id="fn-17">
      <a href='#17'>13.</a> <a className='underline' href='https://openmusic.academy/docs/4oCz9X7581kEccgwj9iRrb/'>Stilübung Fuge</a>
      </li>
      <li id="fn-18">
      <a href='#18'>14.</a> <a className='underline' href='https://openmusic.academy/docs/4EBjvWEufifccdAvMAsSdP/'>Stilübung Sonate</a>
      </li>
      <li id="fn-19">
      <a href='#19'>15.</a> <a className='underline' href='https://openmusic.academy/docs/sjTb3MtmVUPK9bYByf3q6d/'>Arrangieren und Instrumentieren (zusammen mit Carsten Gerlitz)</a>
      </li>
      <li id="fn-20">
      <a href='#20'>16.</a> <a className='underline' href='https://openmusic.academy/docs/NqLXD6BYkvsxyJzdxHmbb5/'>Pop-Arranging. Ein Arbeitsheft</a>
      </li>
      <li id="fn-21">
      <a href='#21'>17.</a> <a className='underline' href='https://openmusic.academy/docs/p76VikS5Lp3w7L3BZXsfJk/'>Cycle it up! Schnipselmusik im Film</a> und <a href='https://openmusic.academy/docs/NvCYdJuLSa7wFXBs1xf9k8'>Filmmusik</a>
      </li>      
      <li id="fn-22">
      <a href='#22'>18.</a> <a className='underline' href='https://openmusic.academy/docs/SJQ9zuqxZx9VKG3r5phEzo/'>Popformeln – Formen und Begriffe der Popularmusik</a>
      </li>      
      <li id="fn-23">
      <a href='#23'>19.</a> <a className='underline' href='https://openmusic.academy/docs/mQ8WGsQtwqucwWepfFkUGC/'>Harmonielehre und Form im ausgehenden 18. Jahrhundert</a>
      </li>   
      <li id="fn-24">
      <a href='#24'>20.</a> z.B. <a className='underline' href='https://openmusic.academy/docs/QaEJiCa4TJDj9b6bj9B3bW/'>Barock</a>, <a href='https://openmusic.academy/docs/6LgrpdXuPYrGmhGCZU4EFK/'>Klassik</a>,&nbsp;<a href='https://openmusic.academy/docs/wp7Mssv5YA1qJ8aVwxq8A8/'>Romantik</a> u.a.
      </li>         
      <li id="fn-25">
      <a href='#25'>21.</a> <a className='underline' href='https://openmusic.academy/docs/94gVe33nDa6qCjmEAqoHx9/'>Walzer Op. 39 von Johannes Brahms</a>, <a href='https://openmusic.academy/docs/qbTvWPnFEEWPRMuStHHoqf/'>Variationen über Happy Birthday to You für zwei Melodieinstrumente</a> u.v.a.
      </li>            
      <li id="fn-26">
      <a href='#26'>22.</a> <a href='https://www.gnu.org/philosophy/free-sw'>»Die Freiheit, das Programm zu verbessern und diese Verbesserungen der Öffentlichkeit freizugeben, damit die gesamte Gesellschaft davon profitiert« (Freiheit 3).</a>
      </li>   
    </ol>
    
    <Divider mt='60px' mb='60px' h='1px' bg='gray' />

    <Heading id="bewerbungsvideo" as='h3' className="headingH4">
      Video
    </Heading>
    <VideoWrapper video={video}></VideoWrapper>
  </>
}

OepOer.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
