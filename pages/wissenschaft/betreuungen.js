import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Divider, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Betreuungen',
  description: 'Auf dieser Seite finden Sie Informationen zu den von mir betreuten Arbeiten und Promotionen.',
  filter: 'wissenschaft',
  slug: '/wissenschaft/betreuungen'
}

export default function Betreuungen() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />
      <Heading as='h3' className={style.headingColor}>
        Dissertationen
      </Heading>
      <Text className={style.mtDefault}>
        An der <i>Hochschule für Musik und Theater München</i> ist es möglich, bei einem in Musikwissenschaft promovierten Musiktheoretiker über ein Thema mit musikanalytischem Schwerpunkt bzw. der historischen oder systematischen Musiktheorie zu promovieren. Am Ende des erfolgreich abgeschlossenen Promotionsverfahrens wird der Titel <i>Dr. phil</i> im Fach Musikwissenschaft verliehen. Aktuell betreue ich die folgenden Arbeiten:
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><i>Arbeitstitel: Die musikalische Entwicklung der Band Deep Purple unter dem Einfluss der wechselnden Gitarrenbesetzung</i></ListItem>
        <ListItem className={style.mlDefault}><i>Arbeitstitel: W. A. Mozarts Dramaturgie des Musiktheaters und seine harmonisch-kontrapunktischen Implikationen</i></ListItem>
      </UnorderedList>

      <Divider mt='20px' mb='20px' />

      <Heading as='h3' className={style.headingColor}>
        Zulassungsarbeiten
      </Heading>
      <Text className={style.mtDefault}>
        Betreut werden von mir Zulassungsarbeiten (Lehramt) zu Themen, bei denen ein Schwerpunkt auf der musikalischen Analyse liegt und/oder die musiktheoretische Fragestellungen berühren. Hierzu gehören auch interdisziplinäre Themen wie z.B. ›Musiktheorie in der Schule‹, ›Musiktheorie und Musikpädagogik‹, Themen aus der ›Geschichte der Musiktheorie‹ etc. Themen können frei gewählt werden, zur wissenschaftlichen Bearbeitung notwendige Eingrenzungen erfolgen in individueller Absprache. Themen ohne musikanalytische und/oder musiktheoretische Anteile aus den Bereichen Musikwissenschaft und Musikpädagogik betreuen meine Kolleginnen und Kollegen der entsprechenden Fachgebiete.
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}>Aktuell werden keine Arbeiten von mir betreut, bitte kontaktieren Sie mich bei Interesse.</ListItem>
      </UnorderedList>
      
      <Divider mt='60px' mb='60px' height='2px' bgColor='gray' />

      <Heading as='h3' className={style.headingColor}>
        Betreute und/oder begutachtete Arbeiten (seit 2006)
      </Heading>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><i>Songwriting bei Beatrice Egli, Zulassungsarbeit Lehramt am Gymnasium 2023</i></ListItem>
        <ListItem className={style.mlDefault}><i>Die Verteilung der Songformen und andere formale Untersuchungen der Popularmusik von Billy Joel, Zulassungsarbeit Lehramt am Gymnasium 2022</i></ListItem>
        <ListItem className={style.mlDefault}><i>Probleme bei der Unterscheidung von Genres und Stilen im Metal, Zulassungsarbeit Lehramt am Gymnasium 2022</i></ListItem>
        <ListItem className={style.mlDefault}><i>Musiktheorie in der Schule. Eine Untersuchung der Musiklehrbücher der 5. und 6. Klasse in Bayern, Zulassungsarbeit Lehramt am Gymnasium 2022</i></ListItem>
        <ListItem className={style.mlDefault}><i>Jazz im Schulbuch. Zuverlässigkeit jazzbezogener Inhalte in Musik-Schulbüchern, Zulassungsarbeit Lehramt am Gymnasium 2021</i></ListItem>
        <ListItem className={style.mlDefault}><i>Paradoxien des Erziehungssystems vor dem Hintergrund der Systemtheorie Niklas Luhmanns, Zulassungsarbeit Lehramt am Gymnasium 2020</i></ListItem>
        <ListItem className={style.mlDefault}><i>Betrachtung des neuen LehrplanPLUS aus konstruktivistischer Sicht, Zulassungsarbeit Lehramt am Gymnasium 2019</i></ListItem>
        <ListItem className={style.mlDefault}><i>Brian May als Gitarrist und Songwriter der Band Queen, Zulassungsarbeit Lehramt am Gymnasium 2019</i></ListItem>
        <ListItem className={style.mlDefault}><i>Fluchtszenen in Der Herr der Ringe. Eine systematische Analyse der Filmmusik Howard Shores aus hermeneutischer und funktionalanalytischer Perspektive , Masterarbeit Musiktheorie/Gehörbildung 2018</i></ListItem>
        <ListItem className={style.mlDefault}><i>James Horner. Die Filmmusik zu AVATAR Zwischen Originalität und Selbstzitat, Zulassungsarbeit Lehramt am Gymnasium 2017</i></ListItem>
        <ListItem className={style.mlDefault}><i>Virtuosität im Heavy Metal, Zulassungsarbeit Lehramt am Gymnasium 2017</i></ListItem>
        <ListItem className={style.mlDefault}><i>Freiheit beim Komponieren im Musikunterricht. Eine Analyse von Selektionskriterien bei Kompositionsaufgaben an weiterführenden Schulen, Masterarbeit Musiktheorie/Gehörbildung 2016</i></ListItem>
        <ListItem className={style.mlDefault}><i>Die ›Neun Advent-Motetten‹ op. 176 von Josef Gabriel Rheinberger. Zulassungsarbeit Lehramt am Gymnasium 2016</i></ListItem>
        <ListItem className={style.mlDefault}><i>Die Dämpfungsaufhebung in den Klavierkonzerten Ludwig van Beethovens. Bachelorarbeit Hauptfach Musiktheorie 2016</i></ListItem>
        <ListItem className={style.mlDefault}><i>Percussion im Musikunterricht. Eine funktionale Analyse von Interviews. Dissertation an der HMTM 2015 im Fach Musikpädagogik (Zweitgutachter)</i></ListItem>
        <ListItem className={style.mlDefault}><i>Liederzyklus als Künstlerdenkmal Studien zu Kunstlied und Künstlerrolle in der ersten Hälfte des 19. Jahrhunderts am Fall von R. Schumann. Sechs Gedichte von N. Lenau und Requiem op. 90. Dissertation an der HMTM 2014 im Fach Musikwissenschaft (Zweitgutachter)</i></ListItem>
        <ListItem className={style.mlDefault}><i>Stilanalysen zum Album Exhibit von John Day.Zulassungsarbeit Lehramt am Gymnasium</i></ListItem>
        <ListItem className={style.mlDefault}><i>Musikpädagogik und Musiktheorie. Eine problematische Beziehung? Systemtheoretische Beobachtungen. Dissertation an der Universität Hamburg 2014, Fachbereich Erziehungswissenschaften (Zweitgutachter)</i></ListItem>
        <ListItem className={style.mlDefault}><i>Die Canzonetten Giovanni Artusis. Bachelorarbeit Hauptfach Musiktheorie und Zulassungsarbeit Lehramt am Gymnasium 2014 und Bachelorarbeit Musiktheorie/Gehörbildung</i></ListItem>
        <ListItem className={style.mlDefault}><i>Ludwig van Beethoven. Eine Darstellung des Komponisten in bayerischen Schulbüchern. Zulassungsarbeit Lehramt am Gymnasium 2014</i></ListItem>
        <ListItem className={style.mlDefault}><i>Formanalyse in der Rockmusik am Beispiel von ›Costello Music‹ der Band The Fratellis. Zulassungsarbeit Lehramt am Gymnasium 2014</i></ListItem>
        <ListItem className={style.mlDefault}><i>Konzeption einer Musikanalyse-Anwendung auf verteilten Displays. Bachelorarbeit Medieninformatik an der LMU 2013, Zweitbetreuer/Kooperationspartner</i></ListItem>
        <ListItem className={style.mlDefault}><i>Modal klingende Stellen im A-capella-Chorwerk von Johannes Brahms. Diplomarbeit Hauptfach Musiktheorie 2013</i></ListItem>
        <ListItem className={style.mlDefault}><i>Rachmaninov op.4. Eine Analyse zum Wort-Ton-Verhältnis. Zulassungsarbeit Lehramt am Gymnasium 2013</i></ListItem>
        <ListItem className={style.mlDefault}><i>Klangtechniken in Anthems von Henry Purcell und deren Rezeption im 20. Jahrhundert. Zulassungsarbeit Lehramt am Gymnasium 2013</i></ListItem>
        <ListItem className={style.mlDefault}><i>Analytische Beobachtungen zu ausgewählten Werken von John Williams. Diplomarbeit Hauptfach Musiktheorie 2012</i></ListItem>
        <ListItem className={style.mlDefault}><i>Das schriftliche Abitur im Leistungsfach Musik. Annäherungen an ein Verfahren musikalischer Analyse. Zulassungsarbeit Lehramt am Gymnasium 2012</i></ListItem>
        <ListItem className={style.mlDefault}><i>Kadenz und Eingang im Violinkonzert. Zulassungsarbeit Lehramt am Gymnasium 2012</i></ListItem>
        <ListItem className={style.mlDefault}><i>Analytische Betrachtungen zu Becks O Crux Aves. Zulassungsarbeit Lehramt am Gymnasium 2012</i></ListItem>
        <ListItem className={style.mlDefault}><i>Musiktheorie und ausgewählte Kompositionen von Meinrad Spieß. Diplomarbeit Hauptfach Musiktheorie und Zulassungsarbeit Lehramt am Gymnasium 2011</i></ListItem>
        <ListItem className={style.mlDefault}><i>Analytische Beobachtungen zu John Williams' Star Wars (Across the Stars). Zulassungsarbeit Lehramt am Gymnasium 2011</i></ListItem>
        <ListItem className={style.mlDefault}><i>Musikalische Analyse der Fest- und Gedenksprüche op. 109 von Johannes Brahms unter Berücksichtigung von gesellschaftspolitischen und theologischen Aspekten. Zulassungsarbeit Lehramt am Gymnasium 2010</i></ListItem>
        <ListItem className={style.mlDefault}><i>Die Madrigale Thomas Vautors. Zulassungsarbeit Lehramt am Gymnasium 2010</i></ListItem>
        <ListItem className={style.mlDefault}><i>Neue Medien und Musikunterricht am Beispiel von Popularmusik. Diplomarbeit Hauptfach Musiktheorie 2009</i></ListItem>
        <ListItem className={style.mlDefault}><i>Untersuchungen formaler Aspekte der Rock-Popmusik anhand ausgewählter Stücke von Meat Loaf. Zulassungsarbeit Lehramt am Gymnasium 2008</i></ListItem>
        <ListItem className={style.mlDefault}><i>Rock zwischen Schema und Experiment. Exemplarische Analysen zu der Musik von Queen. Zulassungsarbeit Lehramt am Gymnasium 2007</i></ListItem>
        <ListItem className={style.mlDefault}><i>Bon Jovi – Entwicklungsgeschichte einer Band und Analyse ihrer Musik unter genauerer Betrachtung von drei ausgewählten Alben: 1) Slippery When Wet 2) Bounce 3) Have A Nice Day [...]. Zulassungsarbeit Lehramt am Gymnasium 2007</i></ListItem>
        <ListItem className={style.mlDefault}><i>Populäre Musik als Gegenstand musikalischer Analyse an ausgewählten Werken Billy Joels. Zulassungsarbeit Lehramt am Gymnasium 2006</i></ListItem>
        <ListItem className={style.mlDefault}><i>Überlegungen zur analytischen Herangehensweise an Vertrautes in ungewohntem Kontext [...]. Diplomarbeit Hauptfach Musiktheorie 2006</i></ListItem>
        <ListItem className={style.mlDefault}><i>Das Wohltemperierte Klavier Johann Sebastian Bachs. Zulassungsarbeit Lehramt am Gymnasium 2002</i></ListItem>
      </UnorderedList>
    </>
  )
}

Betreuungen.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}