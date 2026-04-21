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

      <Accordion allowToggle>
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
                  <audio controls src="/medien/OER083.mp3"></audio>
                  <Text>
                    Im Interview mit Susanne Grimm spricht Prof. Dr. Ulrich Kaiser, Leiter des Projekts Open Music Academy, an der Hochschule für Musik und Theater München, über OER als Medium zum Musiklernen und die Open Music Academy, die freie Lehr- und Lernplattform für Musik.
                  </Text>
                  <Text>
                    Text und Podcast stehen unter der <a title="Zur Lizenz" href="https://creativecommons.org/licenses/by/4.0/" rel="license" className='underline'>CC BY 4.0-Lizenz</a>. Die Namen der Urheber*innen sollen bei einer Weiterverwendung wie folgt genannt werden: Susanne Grimm (Interviewerin) für <a title="OERinfo – die Informationsstelle OER" href="http://www.open-educational-resources.de" className='underline'>OERinfo – Informationsstelle OER</a>, Prof. Dr. Ulrich Kaiser (Interviewpartner) für <a href="https://hmtm.de/" className='underline'>Hochschule für Musik und Theater München</a>, »Good morning« (Podcast-Jingle) von <a title="Taz Lazuli" href="https://soundcloud.com/tazlazuli/good-morning" className='underline'>TazLazuli</a>, lizenziert unter <a title="Zur Lizenz" className='underline' href="http://creativecommons.org/licenses/by/3.0/" rel="license">CC BY 3.0</a>.
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
                  <video controls src="https://www.podcampus.de/nodes/RDNVl/res1080.webm"></video>
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
                  <audio style={{ 'marginTop': '6px'}} controls src="/medien/2022-br.mp3"></audio>
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
                  <audio style={{ 'marginTop': '6px'}} controls src="/medien/2022-fm4.mp3"></audio>
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
