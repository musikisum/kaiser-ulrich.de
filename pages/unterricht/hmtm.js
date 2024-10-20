import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Link, Divider } from '@chakra-ui/react';

const options = {
  title: 'Lehrverständnis (HMTM)',
  filter: 'unterricht',
  slug: '/unterricht/hmtm'
}

export default function Hmtm() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="OEP & OER | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />
    <Text>
      Auf einen Vorschlag der Studierenden der HMTM habe ich mich im Jahr 2023 für den vom Bayerischen Staatsministerium für Wissenschaft und Kunst ausgelobten <i>Preis für gute Lehre</i> beworben. Hier finden Sie Materialien zu dieser Bewerbung. 
    </Text>
    <Text bg='#b9feb9' pl='40px' pr='40px' pt='20px' pb='20px' style={{ borderRadius: '10px', marginTop: '20px' }}>
      <b>Studentische Vorschlagsbegründung</b><br /><br />
      <i>Herr Prof. Dr. Kaiser forscht auf höchstem Niveau über die Theorie der Sonatenhauptsatzform, aber auch im Feld der Pop/Rock/Schlager Musik, was ein außergewöhnlich breites Spektrum der Musikgeschichte und Gegenwart abdeckt. Aber noch wichtiger: er möchte das Musiklernen allen frei zugänglich, und erreichbar machen. Deshalb arbeitet er seit Jahrzehnten an Lehrbüchern aller Stufen, Open  Educational Ressources (OER), Blended Learning, und baut seit einigen Jahren die Open Music Academy (früher ELMU Education e.V. genannt). Diese Online-Plattform sammelt und veröffentlicht originale Beiträge zu nahezu allen Aspekten des Musiklernens.<br/>
      Sein enormes Wissen, seine Begeisterung und sein innovatives Denken schafft er sowohl in seinen Vorlesungen und Seminaren, als auch in seinen Publikationen, in ansteckender Form, herüberzubringen!<br/>
      Es würde mich freuen, wenn seine außergewöhnlichen Leistung besonders anerkannt wäre, wie z.B. durch den Preis ›gute Lehre‹.</i>
    </Text>
    <Text className='mt20'>
      Von der Hochschulleitung der <a href='https://hmtm.de/' className='underline'>Hochschule für Musik und Theater München</a> für den Lehrpreis 2023 nominiert wurde mein Kollege <a href='https://hmtm.de/personen/prof-christian-wissel/' className='underline'>Prof. Christian Wissel</a>, gewonnen hat den Preis meine Kollegin <a href='https://www.hfm-nuernberg.de/personenverzeichnis/profil/maren-wilhelm' className='underline'>Prof. Maren Wilhelm</a> der <a href='https://www.hfm-nuernberg.de/' className='underline'>HMTM Nürnberg</a>.   
    </Text>
    <Text className='mt20'>
      2024 wurde ich für mein Lehrengagement für die <Link href='/person/oep-oer'>Shortlist</Link> des internationalen <a href='https://awards.oeglobal.org/2024-finalists' className='underline'>Open Education Award for Excellence‹ 2024</a> von OE Global in der Kategorie ›Educator Award‹ nominiert. In dieser Ausschreibung hat die Open Music Academy der Kategorie <i>Open Infrastructure</i> den <a href='https://awards.oeglobal.org/awards/2024/open-infrastructure/open-music-academy/' className='underline'>Open Education Award for Excellence‹ 2024</a> gewonnen.
    </Text>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />
    
    <Heading as='h3' className="headingH3">
      Bewerbungstext (Exposé)
    </Heading>
    <Text>
      Vor gut 25 Jahren, als ich an die Hochschule für Musik und Theater München berufen wurde (1997), gab es weder Google noch Wikipedia, seit 15 Jahren verändern Smartphones und aktuell Artificial Intelligence (z.B. ChatGPT) unsere Lebenswelt. Angesichts des Tempos gesellschaftlicher Veränderungen durch digitale Innovationen verstehe ich exzellente Lehre heute als einen im hohen Maße dynamischen Prozess. Dieser Prozess gleicht einem neuronalen Netz, in dem Studierende und Lehrende wie Neuronen über Kommunikation miteinander verbunden sind. Das Lernen findet dabei immer parallel und auf verschiedenen Ebenen statt. Studierende lernen an Musikhochschulen idealerweise anhand von Fachinhalten und durch künstlerische Praxis, Lehrpersonen lernen in Unterrichtssituationen, durch künstlerische Vorhaben oder wissenschaftliche Forschung. Nach diesem Bild lässt sich exzellente Lehre nicht über statische Eigenschaften wie ein fachlich ausgearbeitetes Curriculum oder Materialien beschreiben, sondern nur als eine dynamische Qualität verstehen.
    </Text>
    <Text className='mt20'>
      Als Dozent in der Lehramtsausbildung für Musik liegt mein Fokus darauf, Studienanwärter*innen zu gewinnen und Studierende zu fördern, ihre Persönlichkeit und individuellen Kompetenzen in Bezug auf die sich stetig verändernde Berufswelt zu entwickeln. Dies erfordert von allen Beteiligten eine kontinuierliche Selbstreflexion. Denken z.B. klassisch ausgebildete Musikstudierende der Lehramtsstudiengänge über den Musikunterricht der Zukunft an allgemeinbildenden Schulen nach, spielt darin wahrscheinlich Popularmusik eine bedeutende Rolle. Für die Studierenden erfordert das ggf. eine Arbeit an ihrer eigenen Musikpräferenz sowie an den für dieses Thema erforderlichen Kompetenzen. Meine Aufgabe sehe ich darin, für diese Studierenden ein innovatives Angebot zu einem Thema zu erstellen, das es in meiner eigenen Berufsausbildung noch nicht gab. Dieses Angebot kann dann ggf. auf Studierende treffen, die im Bereich der Popularmusik bereits semiprofessionell arbeiten. In solchen und entsprechenden Kontexten ist exzellente Lehre nur als konstruktive Zusammenarbeit möglich, die vorhandene Fähigkeiten sichtbar macht und stärkt, Desiderate identifiziert und Problemlösungen fokussiert. Darüber hinaus gibt es Themen, für die ich in Forschung oder Praxis hochspezialisiert bin (z.B. Vokalmusik des 16. und 19. Jahrhunderts, Instrumentalmusik des 18. Jahrhunderts, etc.). Zu diesen Themen, die sich im aktuellen Lehrplan für das bayerische Gymnasium finden und deshalb im Studium curricular verankert sind, haben Musikstudierende heute oftmals kaum mehr eine Beziehung. In diesen Fällen sehe ich meine Aufgabe darin, eine Begegnung mit den Feinheiten dieser Musik zu ermöglichen und gemeinsam mit den Studierenden zu reflektieren, welche Aspekte für das ästhetische Erleben bedeutsam sind und welche Aspekte in Schulen auf welche Weise vermittelbar sein könnten.
    </Text>
    <Text className='mt20'>
      Die oben genannten Beispiele verdeutlichen die Notwendigkeit eines agilen Unterrichts, der auf die sich von Studienjahr zu Studienjahr ändernden Bedingungen flexibel reagieren kann. Darüber hinaus müssen Studienstrukturen berücksichtigt werden, die Kontinuität und wöchentlichem Unterrichtsbesuch entgegenstehen. Damit ich dennoch eine exzellente Lehre anbieten kann, favorisiere ich seit ungefähr 15 Jahren Open Educational Resources (OER) in Verbindung mit dem Konzept des Blended Learning (bis hin zum Flipped Classroom). Am Anfang stand lediglich der Gedanke, die Reichweite meiner Arbeit zu erhöhen. Hierzu wollte ich meinen ehemaligen Studierenden und darüber hinaus allen Musiklehrenden meine Verlagspublikationen (Bärenreiter, Klett, Schott) kostenfrei im Internet zur Verfügung stellen. Gleichzeitig sollten Studierende die Möglichkeit haben, sich unabhängig von meinen Präsenzveranstaltungen valides Fach- und Prüfungswissen im Internet aneignen zu können. Hierzu habe ich mich mit der Programmierung beschäftigt (C#, HTML/JS), um die erforderlichen Webangebote selbst erstellen und pflegen zu können (oer-musik.de, musikanalyse.net). Da an eine einzelne Person gebundene Materialien aus verschiedenen Gründen nicht nachhaltig sind, habe ich mich anschließend mit dem Community-Gedanken auseinandergesetzt, der Wikipedia und der Open-Source-Bewegung zu ihrer erstaunlichen Karriere verholfen hat. Bereits vor Corona ist es mir mit Unterstützung der Hochschulleitung sowie Spendengeldern gelungen, den Prototyp einer speziell auf das Musiklernen ausgerichteten OER-Plattform programmieren zu lassen (elmu.online). Der Nutzen dieser Plattform während Corona hat mich dann motiviert, einen an die Stiftung Innovation in der Hochschullehre (StIL) gerichteten Förderantrag auszuarbeiten. Die Bewilligung einer siebenstelligen Fördersumme erlaubte es mir als Leiter des Projekts, die OER-Plattform zu skalieren und professionell zur Open Music Academy (OMA) auszubauen. Diese Plattform (openmusic.academy) ist heute für Musiklernende und -lehrende frei zugänglich. Sie vereint einen äußeren Bereich bzw. öffentliches Wiki zum Musiklernen mit einem privaten (internen) Bereich, der Studierenden und Lehrenden ein vollwertiges und speziell auf Musikvermittlung ausgerichtetes Lernmanagement-System (LMS) zur Verfügung stellt. Meinen eigenen Unterricht konnte ich mithilfe der OMA weiterentwickeln und flexibilisieren. Die Open Music Academy ermöglicht sowohl eine unterrichtsbegleitende Absicherung eines traditionellen Präsenzunterrichts als auch Flipped-Classroom-Szenarien, um individuelle Lernbegleitungen in den Blick nehmen zu können.
    </Text>
    <Text className='mt20'>
      Was ich an meiner Lehre für den Bereich der Musik als innovativ bezeichnen würde, ist die Adaption der Idee des Community-Driven Contents (OER) für den Bereich des Musiklernens und -lehrens. Der Zuspruch durch Studierende, die aufgrund ihrer Social-Media-Aktivitäten im gemeinschaftlichen Teilen und in hierarchieloser Kommunikation geübt sind, ist dabei außerordentlich motivierend. Darüber hinaus sind die zahlreichen Rückmeldungen von Personen und Verbänden aus der schulmusikalischen Berufspraxis sehr vielversprechend.
    </Text>
    <Text className='mt20'>
      Ein Großteil meiner digitalen Ausarbeitungen ist offen zugänglich und über Forschungsbeiträge dokumentiert.<sup id="01"><a href="#fn-01">1</a></sup> Das Angebot reicht dabei von einer öffentlichen Vorlesung und einem öffentlichen Proseminar zur Popularmusik über neue Ansätze zur Filmmusik im Musikunterricht, Lehrgänge zu klassischen Themen (wie z.B. zur Mottete des 16. Jahrhunderts, barocken Fuge und Passacaglia, klassischen Sonate sowie zum romantischen Lied mit Klavierbegleitung), Hilfen zur Prüfungsvorbereitung und zur Allgemeinen Musiklehre bis hin zu Themen wie Musizieren im Chor und mit Instrumenten. Seit zwei Jahren habe ich darüber hinaus die Möglichkeit, Studierenden in Interdisziplinären Modulen dabei zu helfen, eigene OER-Ideen für die spätere Berufspraxis zu entwickeln und zu realisieren. Das Verhältnis zwischen digitaler Lehre und traditionellem Präsenz¬unterricht ist dabei – wie im Vorangegangenen ausgeführt – in stetiger Bewegung, denn es wird von den jeweiligen Studierenden, ihren Interessen und kreativen Ideen bestimmt. Diese Dynamik hilft mir, meine persönliche Überzeugung konstant zu halten, dass die kollaborative Zusammenarbeit an sowie das gemeinsame Gestalten von Musik einen wichtigen Beitrag für den Zusammenhalt in unserer Gesellschaft zu leisten vermag.
    </Text>

    <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />

    <ol style={{margin: '20px', listStyleType: 'none'}}>
      <li id="fn-01">
        <a href='#01'>1.</a> <a className='underline' href='https://storage.gmth.de/proceedings/articles/270/pdf/gmth-proceedings-artikel-270.pdf'>»Blended Learning im Musiktheorieunterricht«</a>, in: Zeitschrift der Gesellschaft für Musiktheorie (Proceedings, Erscheinungstermin voraussichtlich noch 12/2023); »Fachdidaktik zwischen Komplexität und Reduktionen. Oder: Das Altern der neuen Musiktheorie«, Zeitschrift der Gesellschaft für Musiktheorie, Ausgabe Fachdidaktik, 21/1.
      </li>
    </ol>

    <Divider mt='60px' mb='60px' h='1px' bg='gray' />

    <Heading as='h3' className="headingH5">
      Referenzen für die im Exposé genannten Beispiele:
    </Heading>
    <ul style={{margin: '20px', listStyleType: 'none'}}>
      <li>Domains: <a className='underline' href='https://oer-musik.de'>oer-musik.de</a> und <a className='underline' href='https://musikanalyse.net '>musikanalyse.net</a> (Inhalte dieser Domains werden fortlaufend auf die Open Music Academy migriert.)</li>
    </ul>

    <Heading as='h3' className="headingH5">
      Öffentliche Lehrveranstaltungen:
    </Heading>

    <ul style={{margin: '20px', listStyleType: 'none'}}>
      <li><a className='underline' href='https://openmusic.academy/docs/mQ8WGsQtwqucwWepfFkUGC/'>Harmonielehre und Form im ausgehenden 18. Jahrhundert (Vorlesung)</a></li> 
      <li><a className='underline' href='https://openmusic.academy/docs/SJQ9zuqxZx9VKG3r5phEzo/'>Popformeln – Formen und Begriffe der Popularmusik (Proseminar)</a></li>
    </ul>
    
    <Heading as='h3' className="headingH5">
      Seminarbegleitung und Prüfungsvorbereitungen:
    </Heading>

    <ul style={{margin: '20px', listStyleType: 'none'}}>
      <li><a className='underline' href='https://oer-musik.de/oer-harmonielehre-reloaded-eine-praktische-anleitung-fuer-musikerinnen-und-musiker'>Harmonielehre mit der Oktavregel</a> (<a href='https://openmusic.academy/docs/od3D8QmzHrQL3Bj96mTm8M/'>Migration begonnen</a>)</li>
      <li><a className='underline' href='https://openmusic.academy/docs/uURMfvbKUZFTtFiWNW5v5z/'>Stilübung Motette (Teilaufgabe Staatsexamen Tonsatz)</a></li>
      <li><a className='underline' href='https://openmusic.academy/docs/4EBjvWEufifccdAvMAsSdP/'>Stilübung Sonate (Teilaufgabe Staatsexamen Tonsatz)</a></li>
      <li><a className='underline' href='https://openmusic.academy/docs/uURMfvbKUZFTtFiWNW5v5z#kontrapunkt-im-generalbasszeitalter'>Fuge und Invention</a> (Teilaufgabe Staatsexamen Tonsatz, Modulprüfungen)</li>
      <li><a className='underline' href='https://openmusic.academy/docs/wp7Mssv5YA1qJ8aVwxq8A8/'>Romantisches Kunstlied (Materialien zum Hauptseminar)</a></li>
      <li><a className='underline' href='https://openmusic.academy/docs/NqLXD6BYkvsxyJzdxHmbb5/'>Pop-/Rock-Song (Teilaufgabe Staatsexamen Tonsatz)</a></li>
      <li><a className='underline' href='https://openmusic.academy/docs/mrArxaHb65eBNR2dZDhaEP/'>Analyse Rockmusik (Teilaufgabe Staatsexamen Analyse)</a></li>
    </ul>

    <Heading as='h3' className="headingH5">
      Themen für den Musikunterricht in allgemeinbildenden Schulen (Auswahl)
    </Heading>

    <ul style={{margin: '20px', listStyleType: 'none'}}>
      <li><a className='underline' href='https://openmusic.academy/docs/6LgrpdXuPYrGmhGCZU4EFK/'>Sonate und Sinfonie in der Schule</a></li>
      <li><a className='underline' href='https://openmusic.academy/docs/vpjRtqgsatwAFJkhiRF4/'>Filmmusik im Musikunterricht (Kollektionen OpenBook und Cycle It Up!)</a></li>
      <li><a className='underline' href=': https://oer-musik.de/oer-lamentobass-musik-aus-vier-jahrhunderten'>Lamentobass. Musik aus vier Jahrhunderten</a> (Migration begonnen)</li>
      <li><a className='underline' href='https://oer-musik.de/oer-formenlehre-der-musik/'>Formenlehre</a> (<a href='https://openmusic.academy/docs/kBLyJ7fSpuyTv13Arpi8Ue/' className='underline'>Migration begonnen</a>)</li>
    </ul>

    <Heading as='h3' className="headingH5">
      Themen für die Musikpraxis an allgemeinbildenden Schulen (Auswahl)
    </Heading>

    <ul style={{margin: '20px', listStyleType: 'none'}}>
      <li>Band-Impulse für die Band-Klasse (vier Unterrichtshefte) (<a className='underline' href='https://openmusic.academy/search?query=bandklasse&tags=&type=document&sorting=relevance&direction=desc&page=1&pageSize=10'>Migration begonnen</a>)</li>
      <li><a className='underline' href='https://openmusic.academy/docs/Px7epURXWsBLoE4fKzFBsW/chorsingen-easy-peasy'>Chorsingen? Easy-Peasy! 12 einfache Chorsätze gleiche Stimmen </a></li>
    </ul>
  </>
}

Hmtm.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
