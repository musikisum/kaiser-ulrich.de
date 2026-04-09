import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/layout";
import ShortUniqueId from 'short-unique-id';
import data from '../../data/gelegenheiten.json';
import PageHeader from '../components/pagehaeder';
import { CheckCircleIcon, NotAllowedIcon, MinusIcon, AddIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, Heading, Divider, Text, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, Stack, UnorderedList } from '@chakra-ui/react';

import style from './index.module.css';

const uid = new ShortUniqueId()

const options = {
  title: 'Gelegenheiten',
  description: '',
  filter: 'publikationen',
  slug: '/publikationen/gelegenheiten'
}

export default function Gelegenheiten() {

  return (
    <>
      <Head>
        <title>Gelegenheiten</title>
        <meta name="description" content="Verlagspublikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <Text mb='10' ml='4'>Hier finden Sie Publikationen, für die sich eine Gelegenheit ergeben hat (Newsletter-Beiträge, Online-Publikationen, Interviews usw.). Meine in Zeitschriften und Büchern veröffentlichten Artikel finden Sie <Link href='/publikationen/artikel/' className='underline'>hier</Link>.</Text>
      <Divider mt='60px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className='headingH3' mb='40px'>
        Schriftliche Beiträge
      </Heading>

      { data && <List m='12px' spacing={3}>
        {
          data.map(article => {
            return (
            <ListItem key={uid.seq()}>
              <div className={style.listItemEntry}>                  
                {article.link ? 
                  <a href={article.link}><ListIcon as={CheckCircleIcon} color='green.500' /></a> : 
                  <ListIcon mt='1' as={NotAllowedIcon} color='red.500' /> 
                }
                <div>
                  {article.link && !article.html ? <a href={article.link} target='_blank'>&raquo;{article.title}&laquo;</a> : <span>&raquo;{article.title}&laquo;</span>}
                  {article.details ? ', ' + article.details : ''}
                  {'. '}
                  {article.html && <Link href={article.link} style={{ 'color': '#6e91a1', 'fontWeight': 'bold'}}>Zum Artikel ...</Link>}
                </div>
              </div>
            </ListItem>)
          })
        } 
      </List>}

      <Divider mt='60px' mb='40px' h='1px' bg='gray' />

      <Heading as='h3' className='headingH3' mb='40px'>
        Interviews (mündliche Beiträge)
      </Heading>

      <Text mb='10' ml='4'>
        Im Folgenden können Sie einige Interviews nachlesen bzw. nachhören, um die ich in der Vergangenheit gebeten wurde:
      </Text>

      <Accordion allowToggle defaultIndex={[0]}>
      <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <span style={{ 'color': '#6e91a1'}}>
                      <b>OE Award for Excellence 2024: Die Open Music Academy gewinnt in der Kategorie »Open Infrastructure«</b> (2024)
                    </span>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing='3'>                   
                  <Text as='b'>
                    Seit 2011 würdigt <a href='https://www.oeglobal.org/' className='underline'>Open Education Global</a> jedes Jahr Menschen und Projekte mit den <a href='https://awards.oeglobal.org/' className='underline'>Open Education Awards for Excellence</a> (<a href='https://awards.oeglobal.org/' className='underline'>OEAwards</a>). Damit werden Einzelpersonen, Open Educational Resources und Projekte und Initiativen gewürdigt sowie jedes Jahr eine aktualisierte Reihe von Sonderpreisen vergeben. Um so viel Anerkennung wie möglich zu teilen, wurden im Vorfeld zunächst die Finalisten des OE Global Award 2024 bekannt gegeben, die 16 Einzelpersonen und 38 offene Bildungsinitiativen und -praktiken in den 16 Preiskategorien würdigt.
                  </Text>
                  <img src="/images/screenshot-oer-info-interview.jpg" style={{width: '50%'}}></img>
                  <Text as='i'>
                    Ein Beitrag von Prof. Dr. Ulrich Kaiser und Susanne Grimm
                  </Text>      
                  <Text>
                  <Link href='/person/oep-oer/' className='underline'>Prof. Dr. Ulrich Kaiser</Link> und die <Link href='https://openmusic.academy' className='underline'>Open Music Academy</Link> (OMA), <Link href='https://hmtm.de/' className='underline'>Hochschule für Musik und Theater München</Link> (HMTM), haben es in den Kategorien Pädagog*innen und offene Infrastrukturen auf die Short List geschafft. Am 18. September wurde die <Link href='https://awards.oeglobal.org/awards/2024/open-infrastructure/open-music-academy/' className='underline'>Open Music Academy als Sieger</Link> in ihrer Kategorie gekürt. OERinfo hat mit Ulrich Kaiser, dem Projektleiter der OMA, gesprochen.
                  </Text>     
                  <Divider />
                  <Text as='b'>
                    Die Nominierung für einen OE Global Award allein ist bereits eine Ehrung. Wer hat Dich und die OMA dafür beworben und wie fühlt es sich an, dass Du als Einzelperson und die OMA als offene Infrastruktur es als Finalisten auf die Short List geschafft haben?  
                  </Text> 
                  <Text>
                    Es fühlt sich natürlich großartig an, wenn man aus über 100 Bewerbungen aus 28 Ländern auf der Shortlist für einen Open Education Award for Excellence nominiert worden ist. Die Nominierung empfinde ich als Auszeichnung und Anerkennung, die zeigt, dass man mit seinem Engagement für Offenheit und Freie Bildung von einer internationalen Community wahrgenommen wird. Angesichts der ideellen Widerstände im Bereich der Musik sowie der Schwierigkeiten, denen man sich im Alltag des Hochschullebens gegenübersieht, ist eine solche Nominierung absolut motivierend. Und die Tatsache, dass ich sogar als Einzelperson auf der Shortlist für einen Educator Award nominiert worden bin, freut mich angesichts meines 10 Jahre langen Engagements für OER wirklich sehr. Da auf der Website von OE Global hingewiesen wurde, dass man sich selbst bewerben könne, haben wir uns kurzerhand selbst beworben. Am meisten Freude hatten wir an den Videos, denn wir sitzen und arbeiten ja täglich in einem speziell eingerichteten OER-Videostudio.
                  </Text>
                  <Text as='b'>
                    Und was sagst du dazu, dass die OMA den 2024 Open Education Award for Excellence in der Kategorie Open Infrastructure gewonnen hat?
                  </Text>
                  <Text>
                    In unserem Videostudio habe ich die Auszeichnung live auf YouTube mitverfolgen können und es ist wirklich unglaublich, dass die OMA-Idee, die Programmierung unter freier Lizenz, die Arbeit von einigen (leider noch recht wenigen) Musikerinnen und Musikern sowie des tollen OMA-Teams in so kurzer Zeit internationale Beachtung gefunden haben. Das ist für mich großes Kino und immer noch unfassbar …
                  </Text>
                  <Text as='b'>
                    Was hat Dich ganz zu Anfang dazu bewogen, Dich mit OER zu befassen und Deine Inhalte als solche zu teilen?
                  </Text>
                  <Text>
                    Als ich anfing, mich mit OER zu beschäftigen, wurde OER in Deutschland überwiegend noch kritisch gesehen. Es waren daher keine neuen Perspektiven und Fördertöpfe, die mich zu OER gebracht haben, sondern vielmehr die alten Bedingungen. Zum Beispiel die Bedingungen für Autor*innen in Verlagen und auch die Bedingungen in meiner Hochschularbeit. Ich habe die Macht der Verlage auf Inhalte als problematisch empfunden (Stichwort: fehlerhafte und veraltete Schulbuchinhalte), die Lehre in überladenen Studiengängen (mit überlasteten Studierenden) und die Ghettoisierung von Wissen hinter Bezahlschranken. Dass meine Studierenden für meine Publikationen bezahlen müssen, hat mich ebenfalls gestört (die wunderbare Formel „öffentliches Geld = öffentliches Gut“ kannte ich damals noch nicht, wenn es sie denn überhaupt schon gab).<br />
                    Den Kipppunkt allerdings bildete für mich die Erkenntnis, welche Sichtbarkeit man mit sorgfältig ausgearbeiteten OER erreichen kann. Während meine sieben Bücher ca. 40.000 Mal verkauft wurden, sind meine OER innerhalb weniger Jahre über 1.000.000 mal heruntergeladen worden. Für alle, die also primär an der Verbreitung ihrer Inhalte interessiert sind, gibt es nur wenig Argumente gegen OER. Viele Argumente allerdings dafür wie z.B. Teilhabe, soziale Gerechtigkeit, Zusammenarbeit oder Nachhaltigkeit. Die wenigsten Kreativen (ein schräges Wort mit einer problematischen Semantik) leben übrigens vom Urheberrecht, deswegen bräuchten viele im Bereich der Musik eigentlich nur die Bereitschaft, auf eine neu Art zu denken und auf einen netten Nebenverdienst zu verzichten.
                  </Text>
                  <Text as='b'>
                    Wie ist die offene Lernplattform OMA entstanden und was bietet sie ihren Nutzer*innen?
                  </Text>
                  <Text>
                    Mein erstes OpenBook mit CC-Lizenz (BY-SA) habe ich 2014 mit Open-Source-Software erstellt und auf GitHub veröffentlicht. Das Thema war „Kostenlose Software für den Musikunterricht“ (ein freies Konkurrenzprodukt zu einer 2013 veröffentlichten Verlagspublikation, die mich geärgert hat). Mit der Bereitstellung unter der CC-Lizenz hoffte ich, dass man über eine kollaborative Zusammenarbeit ein Schulheft zu diesem Thema leichter aktuell halten könne. Bis heute hat sich niemand zur Mitarbeit gefunden. Doch ich habe gelernt, dass der Grund hierfür nicht mangelndes Interesse sein muss, sondern dass er auch in einer ungenügenden Medienkompetenz liegen kann. (Wer kann schon einigermaßen professionell mit Scribus und Gimp umgehen?) Deswegen wollte ich ein Wiki zur Bearbeitung von Musik-OER entwickeln, in dem die Bearbeitung so einfach ist wie bei Wikipedia: Wechsel in den Bearbeitungsmodus und los geht’s. Nur dass diese Plattform spezielle Tools für den Musikunterricht bereitstellen müsste.<br />
                    Mit Unterstützung der Hochschulleitung der HMTM sowie mithilfe von Spendengeldern wurde dann noch vor Corona ein Prototyp der Plattform entwickelt: ELMU. Dank der Förderung der Stiftung Innovation in der Hochschullehre hatten wir dann seit 2021 die Mittel, diese Plattform zu einem Wiki und einem vollumfänglichen Lernmanagementsystem (LMS) ausbauen zu können. Heute bietet die OMA im öffentlichen Bereich (WIKI) einen einfachen Zugang zum Erstellen und Aktualisieren von Musik-OER und im privaten Bereich ein komfortables, vollumfängliches LMS für den Musikunterricht. Die Software selbst haben wir als OpenSource-Entwicklung (MIT) ausgeschrieben. Sie steht auf GitHub zur Verfügung, ist modern programmiert (REACT/JS) und stellt musikspezifische Funktionalität über Plugins bereit. Mit anderen Plugins ließe sich die Software im Sinne des Open-Gedankens daher auch schnell für andere Inhalte und Fächer adaptieren.
                  </Text>
                  <Text as ='b'>
                    Bist Du auf Deiner Reise als OER-Aktivist im Bereich Musik auch auf Widerstände gestoßen? Was sind Deine Lessons Learned, die Du Deinen Kolleg*innen und OER-Mitstreiter*innen mitgeben möchtest?
                  </Text>
                  <Text>
                    Ja, und zwar nicht zu knapp, eingangs hatte ich das ja schon angedeutet. Da sind zum einen formale Widerstände, denn der Antrag wurde in der Vorbereitung und zum Projektbeginn leider schlecht in die Hochschule kommuniziert. Viele haben in dem Projekt zuerst die Mehrarbeit und nicht den Mehrwert gesehen. Das ist zwar nicht schön, aber es gibt auch Studierende und aufgeschlossene Lehrende, die sich begeistern lassen und mit uns tolle OER-Projekte realisieren. Wir sind deshalb auf einem guten Weg, unsere Ziele zu erreichen.<br />
                    Unappetitlich waren dagegen einige Kommentare in den Sozialen Medien. Ein ehemaliger Kompositionsstudent unserer Hochschule hat sich über mein Filmmusik-OpenBook geärgert. Aufgesprungen sind dann weitere Personen, darunter auch ein Mitglied des GEMA-Aufsichtsrats sowie ein bekannter Komponist. Es entspricht leider dem Zeitgeist, digital zu hetzen, anstatt analog zu reden. Da die OMA für den Musikbereich eine Pionierleistung ist (als solche wurde sie auf der <a href='https://enter-award.irights-lab.de/shortlist/' className='underline'>Shortlist des Enter Awards</a> von i.Rights.Lab nominiert), kann ich damit leben. Neues stößt oft auf Widerstände, das ist normal, lediglich die Art des Umgangs damit war es nicht.<br />
                    Wenn es eine Lesson Learned gibt, dann ist es die, dass man gemeinsam mehr erreichen kann (klingt moralisierend, ist aber rein pragmatisch gemeint). Das lässt sich sehr gut an den Open-Source-Entwicklungen im Bereich Künstlicher Intelligenz (KI) beobachten, an denen sich viele der ganz Großen beteiligen. Kollaborativ wird da ein Tempo vorgelegt, das einem dem Atem verschlägt. Und dieses Tempo trifft auf ein teils reaktionäres politisches Denken sowie ein Schneckentempo in der Bildung. Ich persönlich finde es spannend, auf das enorme Potential schauend an dieser Schnittstelle arbeiten zu dürfen. Und ich finde es beängstigend, angesichts der Gefahren das Gefühl zu bekommen, diesen Entwicklungen ausgeliefert zu sein.
                  </Text>
                  <Divider />
                  <Text>
                    Interviewpartner:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      <b>Prof. Dr. Ulrich Kaiser:</b> Ulrich Kaiser ist Professor für Musiktheorie an der <a href='https://www.hmtm.de/de/' className='underline'>Hochschule für Musik und Theater München</a> und Projektleiter der Open Music Academy. Zu seinen Interessenschwerpunkten zählen das <Link href='/publikationen/'>Publizieren</Link> von Forschungsarbeiten unter Open Access sowie eine <Link href='person/oep-oer/'>Open Educational Practise</Link> im Bereich der Musik.
                    </ListItem>
                  </UnorderedList>
                  <Text>
                    Hören Sie gerne auch in die Podcastfolge zugehOERt 83: <a href='https://open-educational-resources.de/zugehoert-083-oer-zum-musiklernen/'>»OER zum Musiklernen«</a> mit Ulrich Kaiser im Interview zur Open Musik Akademy.
                  </Text>
                  <Divider />
                  <Text>
                    <a title="Details zu dieser Lizenz" href="http://creativecommons.org/licenses/by/4.0/"><img style={{borderWidth: 0}} src="https://licensebuttons.net/l/by/4.0/88x31.png" alt="Creative Commons Lizenzvertrag" /></a> Dieser Text steht unter der <a title="Details zur Lizenz" href="http://creativecommons.org/licenses/by/4.0/" rel="license">CC BY 4.0-Lizenz</a>. Die Namen der Urheber*innen sollen bei einer Weiterverwendung wie folgt genannt werden: <em>Ulrich Kaiser</em>, <a href="https://www.hmtm.de//" target="_blank" rel="noopener">Hochschule für Musik und Theater München</a> und <em>Susanne Grimm</em>, <a href="https://www.dipf.de/" target="_blank" rel="noopener">DIPF | Leibniz-Institut für Bildungsforschung und Bildungsinformation</a> für <a href="https://www.o-e-r.de/" target="_blank" rel="noopener">OERinfo – Die Informationsstelle OER</a>
                  </Text>
                </Stack>
              </AccordionPanel>
          </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <span style={{ 'color': '#6e91a1'}}>
                      <b>zugehOERt 083: OER zum Musiklernen</b> (2022)
                    </span>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing='3'>                   
                  <audio controls src="https://kaiser-ulrich.de/medien/OER083.mp3"></audio>
                  <Text>
                    Im Interview mit Susanne Grimm spricht Prof. Dr. Ulrich Kaiser, Leiter des Projekts Open Music Academy, an der Hochschule für Musik und Theater München, über OER als Medium zum Musiklernen und die Open Music Academy, die freie Lehr- und Lernplattform für Musik.
                  </Text>
                  <Text>
                    Text und Podcast stehen unter der <a title="Zur Lizenz" href="http://creativecommons.org/licenses/by/4.0/" rel="license" className='underline'>CC BY 4.0-Lizenz</a>. Die Namen der Urheber*innen sollen bei einer Weiterverwendung wie folgt genannt werden: Susanne Grimm (Interviewerin) für <a title="OERinfo – die Informationsstelle OER" href="http://www.open-educational-resources.de" className='underline'>OERinfo – Informationsstelle OER</a>, Prof. Dr. Ulrich Kaiser (Interviewpartner) für <a href="https://website.musikhochschule-muenchen.de/de/" className='underline'>Hochschule für Musik und Theater München</a>, »Good morning« (Podcast-Jingle) von <a title="Taz Lazuli" href="https://soundcloud.com/tazlazuli/good-morning" className='underline'>TazLazuli</a>, lizenziert unter <a title="Zur Lizenz" className='underline' href="http://creativecommons.org/licenses/by/3.0/" rel="license">CC BY 3.0</a>.
                  </Text>                  
                </Stack>
              </AccordionPanel>
          </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <span style={{ 'color': '#6e91a1'}}>
                      <b>Offene Hochschulbildung mit der openmusic.academy</b> (2022)
                    </span>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing='3'> 
                  <Text>
                    Ein Video aus der Reihe <a href='https://www.podcampus.de/nodes/RDNVl'></a>spotlight, herausgegeben von der Akademie der Bildenden Künste Nürnberg, 2022.<br/> Design und Illustrationen: Lorena Thunn,
                    Sounds: „Haunted House 80 bpm“ von ITheRealGooglekatClaire (https://freesound.org/).<br/>
                    Dieses Video steht unter der Lizenz <a href='https://creativecommons.org/licenses/by-sa/4.0/' className='underline'>CC BY-SA 4.0</a>.
                  </Text>
                  <video controls src="https://kaiser-ulrich.de/medien/spotlight_kaiser_web2.mp4"></video>
                </Stack>
              </AccordionPanel>
          </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    <span style={{ 'color': '#6e91a1'}}>
                      <b>Bayerischer Rundfunk (BR) – U21</b> (2022)
                    </span>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing='3'> 
                  <audio style={{ 'marginTop': '6px'}} controls src="https://kaiser-ulrich.de/medien/2022-br.mp3"></audio>
                  <Text>
                    Ungekürzte Schriftfassung:
                  </Text>
                  <Text as='b'>
                    Ich würde gerne nochmal von Ihnen Ihre Erfahrungen mit YouTube und deren Filtern
                  </Text>
                  <Text>
                    Es gibt zwei primäre Erfahrungen, die allerdings ganz unterschiedliche Schlüsse zulassen: Meine erste Erfahrung besteht darin, dass der von YouTube eingesetzte Filter, das Content-ID-System, in Bezug auf klassische Musik sehr fehlerhaft arbeitet. Ich habe beispielsweise eigene Aufnahmen von Brahms-Chorkompositionen auf YouTube hochgeladen, woraufhin der Filter mit der Behauptung anschlug, die Aufnahmen seien von Wolf-Dieter Haunschild und die Rechte an meiner Aufnahme hätte Naxos of America. Weitere Fehler waren, dass im Falle einer Fischer-Dieskau-Aufnahme behauptet wurde, Hans Hotter sei als Bariton zu hören oder ein von Igor Oistrach gespieltes Violinkonzert wurde dem Pianisten Vladimir Ashkenazy zugeordnet. In Bezug auf klassische Musik ist die Fehlerrate tatsächlich erheblich, was mir übrigens ein Musikproduzent in einer Mail auch bestätigt hat. Er schrieb mir, dass die Labels selbst darüber sehr unglücklich seien, dass klassische Musik so schlecht erkannt würde, aber die Filter könnten halt sehr gut Popsongs erkennen. Daraus kann man schließen, dass klassische Musik als Kollateralschaden in Kauf genommen wird und es eigentlich nur um das Erkennen von Schlager-, Pop- und Filmmusik geht, weil in diesem Bereich noch Geld bewegt wird.<br/>
                    Meine zweite Erfahrung steht im Zusammenhang mit einem Projekt, für das ich Schallplatten digitalisiere mit dem Ziel, gemeinfreie Aufnahmen für pädagogische Zwecke zur Verfügung stellen zu können (= kein Leistungsschutzrecht / Komponist länger als 70 Jahre tot). Beim Hochladen von meinen Videos, die ich unter einer kulturell freien Lizenz zur Verfügung stellen wollte und in denen ich diese freie Musik verwendet hatte, schlug der Content-ID-Filter von YouTube regelmäßig an und ich erhielt die Information, dass irgendein Label Ansprüche an der freien Musik meiner Videos hätte. Ich habe immer Einspruch erhoben mit dem Hinweis auf die Rechtslage in Deutschland und bis auf zwei Ausnahmen wurden die Ansprüche auch regelmäßig zurückgezogen. Aus dieser Erfahrung kann man schließen, dass YouTubes Content-ID-Datenbank von den Labels mit ihrem gesamten Portfolio gefüttert wird und keine Überprüfung erfolgt, ob die Ansprüche auch berechtigt sind. Schreibt man dem deutschen Support von YouTube übrigens eine Mail, um auf diesen Missstand hinzuweisen, bekommt man eine automatisierte Antwort, dass Nachrichten an die Supportadresse wegen des hohen Mailaufkommens nicht gelesen werden können. In Zeiten des Telemediengesetzes eigentlich ein Nogo. Spätestens an dieser Stelle wechseln sich bei mir Ohnmacht und Wut ab: Ohnmacht, weil man den Filter nicht beeinflussen, die Rechteverwerter nicht kontrollieren und YouTube nicht erreichen kann und Wut darüber, dass sich daran in Zukunft nichts ändern wird.
                  </Text>
                  <Text as='b'>
                    Wie haben Sie die letzten Monate bis zur Parlamentsentscheidung wahrgenommen?
                  </Text>
                  <Text>
                    Was mich zuerst maßlos geärgert hat, war Unkenntnis einiger führender deutscher Politiker und die Ignoranz der EU-Politiker gegenüber der Kritik einer ganzen Generation. Wer nicht für die Änderung des Urheberrechts war, konnte in Deutschland schon mal als Mob, Bot oder bezahlter Stimmungsmacher beschimpft werden. Fünf Millionen Menschen sind aber keine ferngesteuerten Idioten und ich bin weder ein Bot noch ein Stimmungsmacher, sondern Professor an einer Musikhochschule und zudem Kulturschaffender dieses Landes. Ich bin mir sicher, dass diese Ignoranz vor allem bei jungen Leuten zu einer sich verstärkenden EU-Verdrossenheit oder einer Protestwahl führen wird. Erschrecken war dann für mich natürlich auch die Radikalisierung auf der Seite der Reformgegner. Die Ereignisse haben jedoch dazu geführt, dass dieses Thema nun in der breiten öffentlichen Wahrnehmung angekommen ist, was ich sehr begrüße.
                  </Text>
                  <Text as='b'>
                    Was spricht für sie gegen Artikel 13/17? Welche Auswirkungen befürchten Sie?
                  </Text>
                  <Text>
                    Ich habe die Befürchtung, dass die Veränderungen, die mit der Digitalen Revolution einhergehen, generell unterschätzt werden. Natürlich habe ich aktuell in Deutschland keine Angst, dass Content-ID von YouTube bzw. Upload-Filter die Meinungsfreiheit einschränken werden. Aber wenn man das massenweise Filtern von Inhalten an amerikanische Firmen delegiert, muss sich doch nur noch das politischen Klima wie z.B. in Ungarn ändern, um das Filtern zu einer potentiellen Gefahr werden zu lassen. Neulich wurde zum Beispiel protestiert, als man vorhatte, die Nummernschilder von Dieselautos automatisiert zu erfassen, aber es wird zukünftig in Ordnung sein, meine gesamten Bildungsmaterialien zu durchleuchten, wenn ich diese im Netz zur Verfügung stellen will.<br />
                    Ein weiteres Problem besteht darin, dass von Seiten der Befürworter zwar immer wieder darauf hingewiesen wird, dass gemeinnützige Plattformen von der Filterpflicht ausgenommen sein sollen, aber die Ausnahmeregelungen sind bisher sehr schwammig formuliert. Mit Unterstützung der Hochschule für Musik und Theater München habe ich zum Beispiel gerade den Verein EMU Education gegründet, dessen gemeinnütziges Vereinsziel es ist, musische Bildung kostenlos und werbungsfrei der Allgemeinheit zur Verfügung zu stellen. Geplant ist also eine Art „Wikipedia für Musik“, nur mit besseren musikbezogenen technischen Möglichkeiten und einer professionellen Redaktionsschicht. Wer wird haften, wenn in Zukunft auf elmu eine Musiklehrerin oder ein Musiklehrer einen Content einstellt, der das Urheberrecht verletzt? Für einen gemeinnützigen Verein könnte die Betreiberhaftung schnell zum Fiasko werden.
                  </Text>
                  <Text as='b'>
                    Verwertungsgesellschaften argumentieren, dass es keine Filter brauchen wird, sondern sich alles mit Lizenzen lösen lässt. Was denken Sie darüber?
                  </Text>
                  <Text>
                      Das ist ein schönes Beispiel dafür, dass es eigentlich nur um Geldverteilung geht, wenn über das Urheberrecht geredet wird. Wie soll jemand wie ich, der mit seinen OpenBooks und Tutorials zur Musik keine Einnahmen erzielt, Lizenzen bezahlen? Hätten wir in Deutschland ein Fair-Use wie in Amerika, das heißt, würde man sich auch in Deutschland unter dem Radar des Urheberrechts bewegen können, wenn man sich ehrenamtlich und ohne finanzielle Interessen im Erziehungs- bzw. Bildungsbereich engagiert, dann könnte ich den Verwertungsgesellschaften oder den Äußerungen unserer Justizministerin zustimmen. Aber im Bildungsbereich wird mit dem Urheberrecht viel Geld gemacht, was die Allgemeinheit über Pauschalverträge des Staates bezahlen muss. Eigentlich war das Urheberrecht ja dazu gedacht, einen Ausgleich zu schaffen zwischen dem Individualinteresse eines Urhebers und dem Allgemeininteresse an freiem Zugang und Umgang mit Inhalten. Aber wenn Sie sich die Entwicklung des Urheberrechts in der EU anschauen, sehen Sie, dass das Interesse der Allgemeinheit schlecht abgebildet wird, was sich sehr gut am Leistungsschutzrecht der Tonträgerhersteller veranschaulichen lässt: 1966 wurde in Deutschland ein Schutz für Tonträger von 25 Jahre festgelegt, 1995 wurde dieser auf EU-Ebene auf 50 Jahre „harmonisiert“, was heißt: verlängert, da Länder mit einem längeren Schutz diesen nicht verkürzen mussten. 2012 drohte dann der Verlust der Einnahmen an den Beatles-Tonträgern, woraufhin die Schutzfrist noch einmal von 50 Jahren auf 70 Jahre angehoben worden ist. Das ein so kreativer Mensch wie Paul McCartney komfortabel leben können soll, dagegen ist ja gar nichts einzuwenden. Aber dass seine 1963 komponierte Musik noch mindestens bis zum Jahr 2089 geschützt ist, hat doch mit einem Schutz seiner Kreativität nichts mehr zu tun. Das Urheberrecht schützt doch schon lange nicht mehr die Kreativität und Kunst, sondern nur noch den Kommerz mit Kunst auf Kosten der Allgemeinheit. Die Möglichkeit eines Fair Use wie im US-amerikanischen Copyright sowie das Eindampfen der Fristen wären für mich wichtige Themen, die man politisch unbedingt angehen müsste. 
                  </Text>
                  <Text as='b' mb='4'>
                    Viele Kreative außerhalb YouTubes (Komponisten oder Musiker) haben sich für die Reform ausgesprochen. Wie erklären Sie sich das? Was haben die vielleicht übersehen?
                  </Text>
                  <Text mb='4'>
                    Die haben nichts übersehen, die haben es genau richtig gemacht und die Grundlage dafür geschaffen, dass sich ein in die Jahre gekommenes Urheberrecht, an dem Sie persönlich verdienen, noch etwas länger hält und dass sie von YouTube & Co. eventuell noch etwas mehr Geld bekommen.  Mich stört dabei in erster Linie das Gerede von »den Kreativen«, denn es suggeriert, dass es unter den Urheberrechtsgegnern keine Kreativen gäbe und das ist schlichtweg falsch. Stark gemacht für die Urheberrechtsveränderungen haben sich Lobbyisten und Berufsmusiker, die gut organisiert sind und ihre Interessen politisch durchsetzen können. Ich weiß, dass ich mich mit den folgenden Äußerungen bei meinen Kolleginnen und Kollegen sehr unbeliebt machen werde, aber wenn ein Biochemiker etwas in der Arbeitszeit erfindet, ist seine Erfindung Eigentum der Firma und wird von dieser patentiert. Warum eigentlich gehören die künstlerischen Erzeugnisse der Professorinnen für Komposition, Filmmusik, Popularmusik und Instrumentalmusik sowie die Produktionen der Musikhochschulen nicht ›der Firma‹, das heißt dem Staat und damit der Allgemeinheit? Ein Professor hat einen privilegierten Job, warum kann man in einer Berufungsurkunde, die eine lebenslange Sicherheit gewährt, nicht einfach festlegen, dass 50% der künstlerischen Produktionen unter einer Creative-Commons-Lizenz an die Allgemeinheit zurückgegeben werden müssen. Die Allgemeinheit zahlt ja schließlich auch die Bezüge und Pensionen der Professorinnen und Professoren. Mich würde wirklich interessieren, wie viele der sogenannten »Kreativen« ohne Lehraufträge und Festanstellungen von ihrer Kreativität leben und nicht von Geldern der öffentlichen Hand. Ein solches Ergebnis wäre glaube ich sehr ernüchternd und das Argument, die Existenz »der Kreativen« schützen zu müssen, würde schnell an Glaubwürdigkeit verlieren.
                  </Text>
                  <Text as='b'>
                    Wie wird die Reform Ihre persönliche Arbeit beeinflussen?
                  </Text>
                  <Text>
                    Auswirkungen auf meine persönliche Arbeit befürchte ich keine. Denn dort, wo ich mit geschützter Musik umgehe, verlinke ich entweder die von den Labels monetarisierten Videos auf YouTube oder ich bewege mich im Rahmen des Zitatrechts. Dass sich bei YouTube einiges verändern wird, davon gehe ich aus, dass es auf YouTube demnächst keine monetariserten Videos mehr geben wird halte ich für unwahrscheinlich. Solange das Geldverdienen bei YouTube und das Zitatrecht für die Wissenschaft nicht in Frage gestellt werden, sehe ich keine direkten Auswirkungen auf meine Arbeit. Es könnte nur sein, dass ich in Zukunft mehr Mails schreiben muss, um auf das Zitatrecht hinzuweisen und es durchzusetzen.
                  </Text>
                  <Text as='b'>
                    Wie wird sie Ihrer Meinung nach auch NutzerInnen und HörerInnen betreffen  
                  </Text>
                  <Text>
                    Das kommt darauf an, wie YouTube auf das neue EU-Urheberrecht reagieren wird. Ich hin sehr gespannt, glaube allerdings nicht daran, dass sich die Macht der Internetriesen auf diese Art einschränken lässt.
                  </Text>
                  <Text as='b'>
                    Kann die Situation ihrer Meinung nach in der nationalen Umsetzung noch verbessert werden? Was muss nun geschehen?
                  </Text>
                  <Text>
                    Da ist meiner Meinung nach nichts mehr zu machen, jetzt geht es nur noch ums Make-Up, um die Spuren der Schlägerei vergessen zu machen. Ich bin mir jedoch sicher, dass wir nicht die letzte Reform des Urheberrechts erlebt haben und ich hoffe, dass wir auf der Grundlage der Erfahrungen mit der aktuellen Reform noch Änderungen des Urheberrechts erleben werden, die in eine bessere Richtung führen. Und zwar zum Schutz einer in der Gesellschaft vorhandenen Kreativität sowie zum Schutz der Allgemeininteressen.
                  </Text>
              </Stack>
              </AccordionPanel>
          </>
          )}
        </AccordionItem>
        <AccordionItem>
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                  <span style={{ 'color': '#6e91a1'}}>
                      <b>FM4 (ORF)</b> (2022)
                    </span>
                  </Box>
                  {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                  ) : (
                    <AddIcon fontSize='12px' />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing='3'> 
                  <audio style={{ 'marginTop': '6px'}} controls src="https://kaiser-ulrich.de/medien/2022-fm4.mp3"></audio>
                  <Text>
                    Ungekürzte Schriftfassung:
                  </Text>
                  <Text as='b' mb='4'>                  
                    Sie haben einen Versuch gestartet, um schon existierende Uploadfilter zu testen. Konkret den Algorithmus von Google, Content ID genannt. Und dieses automatisierte System hat auch prompt Musik „gefiltert“ bzw. als Urheberrechts-Verstoß geflagged, die es eigentlich nicht als solche kennzeichnen dürfte. Erklären Sie uns kurz Ihr Experimentiert?</Text>
                  <Text mb='4'>
                    Für meine Open Educational Resources – also meine unter CC-Lizenz publizierten Unterrichtsmaterialien für allgemeinbildende Schulen - benötige ich Sounddateien zur Veranschaulichung. Deswegen wollte ich urheberrechtsfreie Musik herstellen, die man in Schulen, Schulnetzwerken für den Musikunterricht frei verwenden kann. Nach Auskunft unserer Juristen und unserer Bibliotheksleitung durfte ich hierzu Musik alter Schallplatten digitalisieren, die vor dem 1.1.1963 erschienen ist und deren Komponist mehr als 70 Jahre tot ist. Die Hochschule für Musik und Theater München hat einen sehr großen Bestand solcher alten Schallplatten, die sonst eigentlich nicht mehr genutzt werden. Um diese Digitalisierungen nun bekannter zu machen, habe ich auf dem YouTube-Kanal für meine Studierenden ein Werbevideo hochgeladen und in diesem Video, wo ich eigentlich für nicht mehr geschützte Musik werben wollte, wurde ich angemahnt, dass es sich bei der in dem Video verwendeten Aufnahme der Rosenkranz-Sonaten von Biber aus dem Jahr 1962 um geschützte Musik handeln würde. Dem Anspruch des Labels habe ich widersprochen und er wurde auch zurückgezogen. Daraufhin habe ich unterschiedliche Aufnahmen hochgeladen und bis auf eine Aufnahme wurden alle Aufnahmen, die nach deutschen Recht keinen Schutz mehr genießen, durch die Content-ID-Technik moniert.
                  </Text>
                  <Text as='b' mb='4'>                  
                    Ich bin selbst Musiker und Content ID hat in der Vergangenheit auch schon Musik von mir blockiert, die ich selbst komponiert habe. Viele Musikerinnen und Musiker beklagen sich darüber. Sind einfach nur die Google-Algorithmen schlecht?
                  </Text>
                  <Text mb='4'>
                    Nach meinem Artikel auf dem Wikimedia-Blog hat sich auch ein <i>Director of Publishing</i> einer großen Musikfirma bei mir gemeldet und mir erläutert, dass die Filter nur bei klassischer Musik schlecht seien – was er auch bedauern würde - bei den Beatles hingegen sehr gut funktionieren würden. Ich glaube mittlerweile, dass es nur um Geld geht und Geld wird heute mit den Beatles, nicht mit Beethoven gemacht. Deswegen arbeiten die Filter für die Rechtehalter aktueller populärer Musik auch zufriedenstellend, die Fehler beim erkennen klassischer Musik ist hingegen sind ein Kollateralschaden, den man in Kauf nimmt. Das ist für die Musikausbildung an den Musikhochschulen und für den Unterricht an allgemeinbildenden Schulen, deren Aufgabe es nach wie vor ist, auch an klassische Musik heranzuführen, eine Katastrophe. 
                  </Text>
                  <Text as='b' mb='4'>                  
                    Sie haben gegen die Takedown-Requests von Google Einspruch erhoben. Aber immer wieder neue Sperren und Takedown-Requests erhalten. Wie gut funktioniert der Google support?
                  </Text>
                  <Text mb='4'>
                    Klarstellung: kein Takedown, sondern nur Anspruch auf Monetarisierung z.B. durch Werbung, was bis heute nicht passiert ist. Allerdings hat ein großes Label auf meinen Einspruch seinen Anspruch auch nicht zurückgezogen, was mich eigentlich verwundert. Auch meinen Versuch, mit YouTube über die support-Adresse Kontakt aufzunehmen, wurde automatisiert beantwortet, dass YouTube so viele Mail bekäme, dass diese leider nicht gelesen werden könnten. Diese Antwort hat es mir echt die Sprache verschlagen, und auch alle anderen Kontaktversuche führten via Weiterleitung nur zu Foren, wo man sich mit anderen und sich selbst unterhalten kann, nicht aber mit einem Verantwortlichen von YouTube. Ganz anders funktioniert das übrigens, wenn man einen Rechtsverstoß meldet, dann hat man sehr schnell zu einem Mitarbeiter-Team Kontakt. 
                  </Text>
                  <Text as='b' mb='4'>                  
                    Was halten Sie vom Plan der EU-Kommission, das Urheberrecht durch automatisierte Uploadfilter durchzusetzen?
                  </Text>
                  <Text mb='4'>
                    Wenn diese Uploadfilter wie ein Rasenmäher eingesetzt werden sollen, bin ich klar dagegen. Es gibt sicherlich andere Möglichkeiten, dem illegalen Verbreiten von Musik auf die Spur zu kommen, ohne die angesprochen Kollateralschäden zu erzeugen. Ich selbst initiiere gerade eine neue Website ELMU, eine Art Wikipedia für Musik mit einer Redaktionsschicht und für dieses Projekt wäre das Knockout. 
                  </Text>
                </Stack>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  )
}

Gelegenheiten.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
