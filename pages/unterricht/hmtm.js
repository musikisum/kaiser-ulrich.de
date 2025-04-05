import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Heading, Flex, Box, Spacer, Image, Text, Link, Divider, Button } from '@chakra-ui/react';

const options = {
  title: 'Auszeichnungen',
  filter: 'unterricht',
  slug: '/unterricht/hmtm'
}

export default function Hmtm() {

  const [isContainer2024Visible, setContainer2024Visible] = useState(false);
  const [isContainer2025Visible, setContainer2025Visible] = useState(false);

  const toggleContainer2024 = () => {
    setContainer2024Visible(!isContainer2024Visible);
  };
  const toggleContainer2025 = () => {
    setContainer2025Visible(!isContainer2025Visible);
  };

  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="OEP & OER | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />

    <Heading as='h3' className="headingH3">
      Nominierung für den ›Open Education Award for Excellence‹
    </Heading>
    <Text mb='10'>
      Im Jahr 2024 wurde ich für mein Lehrengagement mithilfe von Open Educational Resources für die <Link href='/person/oep-oer'>Shortlist</Link> des internationalen <a href='https://awards.oeglobal.org/2024-finalists' className='underline'>Open Education Award for Excellence 2024</a> von OE Global nominiert (Kategorie ›Educator Award‹). In derselben Ausschreibung erhielt die Open Music Academy in der Kategorie <i>Open Infrastructure</i> den <a href='https://awards.oeglobal.org/awards/2024/open-infrastructure/open-music-academy/' className='underline'>Open Education Award for Excellence 2024</a>.
    </Text>

    <Divider mt='10' mb='10' h='1px' bg='gray' />

    <Heading as='h3' className="headingH3">
      Preis für gute Lehre 2024
    </Heading>
    <Flex mb='0'>      
      <Box w='48%' mb='5' direction={'row'}>
        <a href='https://www.bmu-musik.de/projekte/medienpreis/preistraeger-2022/'>
          <Image src='/images/kaiser-urkunde.jpg' alt='Urkunde' mb='2' style={{border: '1px solid gray'}} />
        </a>
        <Text style={{ color: 'gray', fontSize: '0.8em', lineHeight: '1' }}>
          Bilder rechts: Wissenschaftsminister Blume und der Präsident der Universität Würzburg mit den Preisträgerinnen und Preisträgern (© Axel König/StMWK)
        </Text>
      </Box>
      <Spacer />
      <Box w='48%' direction={'row'}>
        <Image src='https://www.stmwk.bayern.de/bilder/km_absatz/foto/37905_c-AxelKo%CC%88nig-StMWK.jpg-4127_880.jpeg' mb='5' alt='Bild des StMWK' />
        <Image src='https://www.stmwk.bayern.de/bilder/km_bilder/foto_gross/4577_HochschuleMusikTheater_M%C3%BCnchen_KaiserUlrich.jpg' alt='Bild des StMWK' />
      </Box>
    </Flex>
    <Heading as='h5' className="headingH5">
      Aus den Detailinformationen zu den Preisträgerinnen und Preisträgern 2024 
    </Heading>
    <Text mb='6'>
      »Prof. Ulrich Kaiser orientiert seinen Unterricht mit außergewöhnlichem Engagement an der Zielgruppe seines Unterrichts und richtet ihn im Dialog mit Studierenden stets neu aus. Die Studierenden würdigen das mit exzellenten Evaluationsergebnissen. Der Schwerpunkt der Tätigkeit von Ulrich Kaiser liegt seit Jahren auf dem Feld der digitalen Bildung. Hier ist er nicht nur Pionier und Motor an der HMTM, sondern erreicht weit darüber hinaus Interesse und Aufmerksamkeit in unterschiedlichen Bildungskontexten. Mit der Initiierung und Umsetzung des Projekts „Open Music Academy“ (OMA) 2021 geriet die Idee der digitalen Bildung im Kontext einer zeitgemäßen Didaktik sowie freier Zugänglichkeit und Nachhaltigkeit in den Fokus einer größeren Öffentlichkeit. Prof. Kaisers steter Einsatz für diese Anliegen über den Horizont seines eigenen Unterrichts und Fachs hinaus und mit Wirkung für möglichst viele Bereiche der Hochschule ist herausragend.«
    </Text>

    <Divider mt='6' mb='6' h='1px' bg='gray' />

    <Button onClick={toggleContainer2025}>
        { !isContainer2025Visible ? "Bewerbung 2024 anzeigen" : "Bewerbung 2024 ausblenden" }
    </Button>
    { isContainer2025Visible && <div id="2025">
      <Heading as='h5' className="headingH5" mt='6'>
        Bewerbung für den Preis für gute Lehre 2024
      </Heading>
      <Text bg='#b9feb9' p='6' mt='6' mb='6' style={{ borderRadius: '10px' }}>
        <b>Studentische Vorschlagsbegründung (2024)</b><br /><br />
        <i>Er engagiert sich über sein Fach hinaus für eine zukunftsweisende Lehre, die Student*innen mit den Tools ausstattet und in Selbstreflexion übt, sodass man sich auch zukünftige Themengebiete in einem möglicherweise veränderten Arbeitsumfeld aneignen kann. Hierfür scheut er keine Mühen, auch externe Experten einzuladen, und die Seminare interdisziplinär zu gestalten. Ein Gastbeitrag von Prof. Ali Nikrang z.B. war für mich besonders prägend. Oder auch die Organisation eines Workshops mit Marti Fischer sollte hier erwähnt werden. Generell nimmt Prof. Kaiser studentische Anliegen ernst und verfolgt selbst (in doppelter Hinsicht ;-)) unkonventionelle Vorschläge mit aller Ernsthaftigkeit.</i>
      </Text>
      <Text>
        <b>Leitfrage:</b> Welche Lehrphilosophie bzw. Überzeugungen prägen Ihre grundsätzliche Auffassung von Lehre?
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b> Angesichts des Tempos gesellschaftlicher Veränderungen durch digitale Innovationen verstehe ich exzellente Lehre heute als einen im hohen Maße dynamischen Prozess. Dieser Prozess gleicht einem neuronalen Netz, in dem Studierende und Lehrende wie Neuronen über Kommunikation miteinander verbunden sind. Das Lernen findet dabei immer parallel und auf verschiedenen Ebenen statt. Studierende lernen an Musikhochschulen idealerweise anhand von Fachinhalten, durch künstlerische Praxis und durch Vorbilder, Lehrpersonen lernen in Unterrichtssituationen, durch künstlerische Vorhaben oder wissenschaftliche Forschung. Nach diesem Bild lässt sich exzellente Lehre nicht über statische Eigenschaften wie fachlich ausgearbeitete Curricula oder Materialien beschreiben, sondern nur als Qualität verstehen, die sich agil und dynamisch um angemessene Fachinhalte in Hinblick auf die rasanten gesellschaftlichen Entwicklungen bemüht.
      </Text>
      <Text className='mt20'>
        <b>Leitfrage:</b> Bitte beziehen Sie sich im Folgenden bitte auf ein bestimmtes Lehrformat (z.B. Einzelunterricht, Seminar o.ä.) oder eine spezifische Lehrveranstaltung, die Sie als besonders beispielhaft für Ihre Lehrtätigkeit ansehen. Bitte machen Sie folgende Angaben dazu:
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b><br />
        Seminar (Format)<br />
        Open Educational Practises im Kontext der Digitalisierung / Projekt (IM 2) (Titel der Lehrveranstaltung)<br />
        12 (Anzahl der Studierenden)<br />
        Lehramt (Studienfächer der Studierenden)<br />
        7. bis 9. FS (Semester der Studierenden)
      </Text><Text className='mt20'>
        <b>Leitfrage:</b> Welche konkreten Lernziele verfolgen Sie in dem von Ihnen gewählten Format bzw. der von Ihnen gewählten Lehrveranstaltung?
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b> Dieses Seminar bietet eine Annäherung an die Themen Open Educational Practices (OEP) und Open Educational Resources (OER). Ziel ist es, gängige Missverständnisse, Aspekte der Medienethik und der Medienkompetenz sowie ausgewählte Kontexte wie das Urheberrecht und Creative-Commons-Lizenzen zu besprechen. Darüber hinaus wird die Frage nach der sozialgesellschaftlichen Relevanz von OEP diskutiert. Nach Einführung in die Thematik geht es um die praktische Arbeit an OER, also um das Besprechen und Realisieren einer eigenen, künstlerisch/pädagogischen Projektidee sowie nach Möglichkeit um die Veröffentlichung der Projektergebnisse auf der Open Music Academy.
      </Text>
      <Text className='mt20'>
        <b>Leitfrage:</b> Welche spezifischen didaktischen und methodischen Ansätze setzen Sie in dem von Ihnen gewählten Format bzw. in der gewählten Lehrveranstaltung ein?
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b> Der didaktisch-methodische Ansatz des Seminars kombiniert Produkt- und Prozessorientierung. Die Produktorientierung liegt darin, dass jede*r Studierende das Ziel verfolgt, ein qualitativ hochwertiges, öffentlich zugängliches Lern- oder Lehrmaterial zu schaffen, das sowohl für die spätere Berufspraxis als auch für andere Musiklernende oder -lehrende einen Mehrwert bietet. Das Material soll nachhaltig sein und deswegen als Open Educational Resource (OER) bzw. unter freier Lizenz auf der Open Music Academy (OMA) veröffentlicht werden.<br />
        Die prozessorientierte Komponente fokussiert den Lern- und Entwicklungsprozess. Reflexionen und Feedbackschleifen begleiten die Arbeitsschritte von der Konzeption bis zur Veröffentlichung. Teamarbeit, Kreativität und iterative Verbesserungen stehen dabei im Mittelpunkt. Studierende lernen, konstruktiv mit Herausforderungen umzugehen, ihre technischen Fertigkeiten in der medialen Umsetzung zu erweitern und ihren Arbeitsprozess kritisch zu reflektieren.<br/>
        Als digitales Tool wird die Open Music Academy genutzt, die sich optimal für dieses Lernszenario eignet. Die Studierenden werden über ihre Hochschul-Mailadresse in einen virtuellen Seminarraum eingeladen. Der Raum ist kollaborativ (mit Schreib- und Leserechten für alle Teilnehmenden) und ermöglicht eine geschützte, gemeinsame Arbeit auf Augenhöhe. Die ersten vier Sitzungen stehen vollständig ausgearbeitet zur Verfügung (mit Downloadmöglichkeiten, falls einzelne Sitzungen nicht besucht werden können). Sie bieten Informationen und Arbeitsmöglichkeiten zu den Themen OER/OEP, Open-Source-Idee, Urheberrecht und Lizenzen sowie Hilfen zu den Möglichkeiten der OMA. Weitere Inputs sind optional und individuell wählbar zu Themen wie A/V-Open-Source-Software, A/V-Hardware, Beleuchtung und Greenscreen, etc.<br/>
        In einer Tabelle werden alle Vorhaben gesammelt, die vorhandenen Kompetenzen, mögliche Schwierigkeiten und ggf. Kooperationen besprochen. Anschließend erstellt jede*r Studierende ein persönliches Arbeitsdokument auf der OMA, das die einzelnen Schritte von der Planung bis zur Fertigstellung der individuellen OER dokumentiert. Dieses Dokument ermöglicht den Austausch und die kollaborative Arbeit zwischen den Studierenden untereinander sowie zwischen Studierenden und der Lehrperson. Die Zusammenarbeit ist dabei nicht lernortbezogen, sondern kann auch dezentral und zeitunabhängig erfolgen, was sich angesichts der zeitlichen Belastung der Studierenden als sehr hilfreich erwiesen hat.
      </Text>
      <Text className='mt20'>
        <b>Leitfrage:</b> Auf welche Weise fördern Sie die Aktivität, Mitgestaltung und Autonomie der Studierenden im Rahmen Ihrer Lehrtätigkeit?
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b> Zentrales Anliegen ist die laterale Seminargestaltung, die sich für Themen eignet, bei denen kreatives, kollaboratives Arbeiten im Mittelpunkt steht und in denen ggf. Problemlösungen gemeinsam entwickelt werden müssen. Flache Hierarchien sind im IM2 für mich unverzichtbare Grundlage für die vertrauensvolle, wertschätzende und ein gemeinsames Ziel fokussierende Zusammenarbeit.<br/>
        Die formale Vorgabe 'Erstellung einer OER' ermöglicht, dass die Projektziele inhaltlich ausnahmslos durch die Studierenden selbst bestimmt werden. Konkrete Beispiele: Erklärvideos zu Instrumenten (z.B. Harfe, Gitarre, Trompete usw.), zum Musizieren an Musikschulen (z.B. Playalong für das Geigen mit leeren Saiten für Kinder), Erstellung von Materialien zum Klassenmusizieren, Anleitungen zur Bodypercussion u.v.a.m. Die Projekte wurden über die OMA veröffentlicht und sind frei zugänglich. Meine Aufgabe liegt in der Beratung sowie Hilfe zur Reflexion. Wird die Expertise anderer Fächer benötigt, bemühe ich mich um die Vermittlung von Kooperationen. Bis auf die vier Einführungsveranstaltungen liegt darüber hinaus auch die Auswahl der Seminarinhalte, die sich mit technischen Kompetenzen beschäftigen, in der Verantwortung der Studierenden (z.B. Video, Audio, Grafik, Textgestaltung, Präsentationen mit den Plugins der OMA usw.). Dabei stehe ich den Studierenden während der gesamten Unterrichtszeit in Präsenz zur Verfügung, auch dann, wenn bei aktuellen Arbeitsschritten keine Hilfe benötigt wird.
      </Text>
      <Text className='mt20'>
        <b>Leitfrage:</b> Wie reflektieren Sie Ihre Lehrpraxis und entwickeln diese weiter?
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b> Erfahrungsgemäß erhalte ich in den IM2-Seminaren regelmäßig Feedback der Studierenden (in der Regel ein sehr positives), und es gehört zu meiner didaktischen Überzeugung, in jedem Feedback eine konstruktive Beteiligung zu sehen, die zu einer Verbesserung der Seminargestaltung führen kann. Darüber hinaus wäre jedoch ein anonymes und professionelles Evaluationsverfahren, wie es an der HMTM den Lehrenden mit Gruppenunterricht in den Jahren 2019 bis 2022 zur Verfügung gestellt worden ist, hilfreich für die Weiterentwicklung von Unterrichtsgestaltungen. Da es auch Ziel ist, den Studierenden im Umgang mit konstruktiver Kritik ein Vorbild zu sein, veröffentliche ich die offiziellen Evaluationen meiner Veranstaltungen zur Herstellung von Transparenz auf meiner Homepage und nehme diese zur Grundlage für die <Link href='/unterricht/evaluation/'>Verbesserung meines Unterrichts</Link>.
      </Text>
      <Text className='mt20'>
        <b>Leitfrage:</b> Warum sollte Ihre Lehre mit einem Lehrpreis ausgezeichnet werden?
      </Text>
      <Text className='mt20'>
        <b>Antwort:</b> Aus meiner persönlichen Perspektive liegt das Besondere meines Unterrichts im Engagement für Nachhaltigkeit, Offenheit und Transparenz. Seit über 10 Jahren produziere ich Open Educational Resources (bisher 25 OpenBooks und über 200 Tutorials) zum Musiklernen an Musikhochschulen, Musikschulen und allgemeinbildenden Schulen. Trotz strukturell bedingter Widerstände gegen OER im Bereich der Musik (geistiges Eigentum ./. freie Bildung) hat mein jahrelanger Einsatz für OER und OEP viele Menschen berühren und von der Community-Arbeit überzeugen können. Ein Ergebnis meines Engagements ist die Open Music Academy mit aktuell über 1.000 Dokumenten und über 1.900 Nutzerinnen und Nutzern, die 2022 eine Empfehlung des Bundesverbands Musikunterricht erhalten hat, 2024 für den Enter Award in der Kategorie Pionierleistung nominiert und im selben Jahr von OE Global mit dem Open Education Award for Excellence in der Kategorie Open Infrastructure ausgezeichnet worden ist.
      </Text>
      <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />
      <Heading as='h3' className="headingH5">
        Ergebnis
      </Heading>
      <Text>
        2025 wurde mein Lehrkonzept von der Leitung der <a href='https://hmtm.de/' className='underline'>Hochschule für Musik und Theater München</a> für den <i>Preis für gute Lehre</i> des Bayerischen Staatsministeriums für Wissenschaft und Kunst ausgewählt und zur Auszeichnung vorgeschlagen. Mit dem Preis in der Kategorie <i>staatliche Kunsthochschulen in Bayern</i> wurde ich am 31.03.2025 ausgezeichnet. 
      </Text>
    </div>}

    <Divider mt='6' mb='6' h='1px' bg='gray' />

    <Button onClick={toggleContainer2024}>
      { !isContainer2024Visible ? "Bewerbung 2023 anzeigen" : "Bewerbung 2023 ausblenden" }
    </Button>
    { isContainer2024Visible && <div id="2024" >
      <Heading as='h5' className="headingH5" mt='6'>
        Bewerbung für den Preis für gute Lehre 2023
      </Heading>
      <Text bg='#b9feb9' p='6' mt='6' mb='6' style={{ borderRadius: '10px' }}>
        <b>Studentische Vorschlagsbegründung</b><br /><br />
        <i>Herr Prof. Dr. Kaiser forscht auf höchstem Niveau über die Theorie der Sonatenhauptsatzform, aber auch im Feld der Pop/Rock/Schlager Musik, was ein außergewöhnlich breites Spektrum der Musikgeschichte und Gegenwart abdeckt. Aber noch wichtiger: er möchte das Musiklernen allen frei zugänglich, und erreichbar machen. Deshalb arbeitet er seit Jahrzehnten an Lehrbüchern aller Stufen, Open  Educational Ressources (OER), Blended Learning, und baut seit einigen Jahren die Open Music Academy (früher ELMU Education e.V. genannt). Diese Online-Plattform sammelt und veröffentlicht originale Beiträge zu nahezu allen Aspekten des Musiklernens.<br/>
        Sein enormes Wissen, seine Begeisterung und sein innovatives Denken schafft er sowohl in seinen Vorlesungen und Seminaren, als auch in seinen Publikationen, in ansteckender Form, herüberzubringen!<br/>
        Es würde mich freuen, wenn seine außergewöhnlichen Leistung besonders anerkannt wäre, wie z.B. durch den Preis ›gute Lehre‹.</i>
      </Text>
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
        Ein Großteil meiner digitalen Ausarbeitungen ist offen zugänglich und über Forschungsbeiträge dokumentiert.<sup id="01"><a href="#fn-01">1</a></sup> Das Angebot reicht dabei von einer öffentlichen Vorlesung und einem öffentlichen Proseminar zur Popularmusik über neue Ansätze zur Filmmusik im Musikunterricht, Lehrgänge zu klassischen Themen (wie z.B. zur Mottete des 16. Jahrhunderts, barocken Fuge und Passacaglia, klassischen Sonate sowie zum romantischen Lied mit Klavierbegleitung), Hilfen zur Prüfungsvorbereitung und zur Allgemeinen Musiklehre bis hin zu Themen wie Musizieren im Chor und mit Instrumenten. Seit zwei Jahren habe ich darüber hinaus die Möglichkeit, Studierenden in Interdisziplinären Modulen dabei zu helfen, eigene OER-Ideen für die spätere Berufspraxis zu entwickeln und zu realisieren. Das Verhältnis zwischen digitaler Lehre und traditionellem Präsenzunterricht ist dabei – wie im Vorangegangenen ausgeführt – in stetiger Bewegung, denn es wird von den jeweiligen Studierenden, ihren Interessen und kreativen Ideen bestimmt. Diese Dynamik hilft mir, meine persönliche Überzeugung konstant zu halten, dass die kollaborative Zusammenarbeit an sowie das gemeinsame Gestalten von Musik einen wichtigen Beitrag für den Zusammenhalt in unserer Gesellschaft zu leisten vermag.
      </Text>
      <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />
      <ol style={{margin: '20px', listStyleType: 'none'}}>
        <li id="fn-01">
          <a href='#01'>1.</a> <a className='underline' href='https://storage.gmth.de/proceedings/articles/270/pdf/gmth-proceedings-artikel-270.pdf'>»Blended Learning im Musiktheorieunterricht«</a>, in: Zeitschrift der Gesellschaft für Musiktheorie (Proceedings, Erscheinungstermin voraussichtlich noch 12/2023); »Fachdidaktik zwischen Komplexität und Reduktionen. Oder: Das Altern der neuen Musiktheorie«, Zeitschrift der Gesellschaft für Musiktheorie, Ausgabe Fachdidaktik, 21/1.
        </li>
      </ol>
      <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />
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
      <Divider mt='20px' mb='20px' w='50%' h='1px' bg='gray' />
      <Heading as='h3' className="headingH5">
        Ergebnis
      </Heading>
      <Text>
        2024 wurde mein Kollege <a href='https://hmtm.de/personen/prof-christian-wissel/' className='underline'>Prof. Christian Wissel</a> von der Leitung der <a href='https://hmtm.de/' className='underline'>Hochschule für Musik und Theater München</a> für den <i>Preis für gute Lehre</i> des Bayerischen Staatsministeriums für Wissenschaft und Kunst ausgewählt und zur Auszeichnung vorgeschlagen. Den Preis in der Kategorie <i>Musikhochschule</i> erhalten hat <a href='https://www.hfm-nuernberg.de/personenverzeichnis/profil/maren-wilhelm' className='underline'>Prof. Wilhelm</a> (Nürnberg).
      </Text>
    </div>}
  </>
}

Hmtm.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
