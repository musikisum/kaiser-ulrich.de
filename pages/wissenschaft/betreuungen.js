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
      <Heading as='h3' className="headingH3">
        Dissertationen
      </Heading>
      <Text className={style.mtDefault}>
        An der <i>Hochschule für Musik und Theater München</i> ist es möglich, bei einem in Musikwissenschaft promovierten Musiktheoretiker über ein Thema mit musikanalytischem Schwerpunkt bzw. der historischen oder systematischen Musiktheorie zu promovieren. Am Ende des erfolgreich abgeschlossenen Promotionsverfahrens wird der Titel <i>Dr. phil</i> im Fach Musikwissenschaft verliehen. DArüber hinaus gibt es die Möglichkeit, sich von einem Team betreuen zu lassen. Aktuell betreue ich die folgenden Dissertationsprojekte:
      </Text>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}>Arbeitstitel: <i>Musikunterricht und Digitalisierung an Bayerischen Gymnasien im Spannungsfeld zwischen Commons und Postdemokratie</i></ListItem>
        <ListItem className={style.mlDefault}><i>Die Gitarristen der Band Deep Purple und deren Einfluss auf das musikalische Werk der Band</i></ListItem>
      </UnorderedList>

      <Divider mt='20px' mb='20px' />

      <Heading as='h3' className="headingH3">
        Zulassungsarbeiten
      </Heading>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}>Arbeitstitel: <i>Übereinstimmungen und Differenzen in der Theorie der Sonatenform seit 1998</i></ListItem>
        <ListItem className={style.mlDefault}>Arbeitstitel: <i>Motivische Arbeit im frühen Werk von G. Puccini</i></ListItem>
        <ListItem className={style.mlDefault}>Arbeitstitel: <i>Filmmusikanalyse zu einem Film von Howard Shore </i></ListItem>
        <ListItem className={style.mlDefault}>Arbeitstitel: <i>Die Nutzung Digitaler Medien im Musikunterricht</i></ListItem>
      </UnorderedList>
      
      <Divider mt='60px' mb='60px' height='2px' bgColor='gray' />

      <Heading as='h3' className="headingH3">
        Betreute und/oder begutachtete Arbeiten (seit 2006)
      </Heading>
      <UnorderedList className={style.mtDefault}>
        <ListItem className={style.mlDefault}><i>Wolfgang Amadeus Mozart: Dramaturgie und Musik in den Opern der Wiener Zeit</i>, Dissertation (Betreuung und Erstgutachter) 2025</ListItem>
        <ListItem className={style.mlDefault}><i>Songwriting bei Beatrice Egli</i>, Zulassungsarbeit Lehramt am Gymnasium 2023</ListItem>
        <ListItem className={style.mlDefault}><i>Die Verteilung der Songformen und andere formale Untersuchungen der Popularmusik von Billy Joel</i>, Zulassungsarbeit Lehramt am Gymnasium 2022</ListItem>
        <ListItem className={style.mlDefault}><i>Probleme bei der Unterscheidung von Genres und Stilen im Metal</i>, Zulassungsarbeit Lehramt am Gymnasium 2022</ListItem>
        <ListItem className={style.mlDefault}><i>Musiktheorie in der Schule. Eine Untersuchung der Musiklehrbücher der 5. und 6. Klasse in Bayern</i>, Zulassungsarbeit Lehramt am Gymnasium 2022</ListItem>
        <ListItem className={style.mlDefault}><i>Jazz im Schulbuch. Zuverlässigkeit jazzbezogener Inhalte in Musik-Schulbüchern</i>, Zulassungsarbeit Lehramt am Gymnasium 2021</ListItem>
        <ListItem className={style.mlDefault}><i>Paradoxien des Erziehungssystems vor dem Hintergrund der Systemtheorie Niklas Luhmanns</i>, Zulassungsarbeit Lehramt am Gymnasium 2020</ListItem>
        <ListItem className={style.mlDefault}><i>Betrachtung des neuen LehrplanPLUS aus konstruktivistischer Sicht</i>, Zulassungsarbeit Lehramt am Gymnasium 2019</ListItem>
        <ListItem className={style.mlDefault}><i>Brian May als Gitarrist und Songwriter der Band Queen</i>, Zulassungsarbeit Lehramt am Gymnasium 2019</ListItem>
        <ListItem className={style.mlDefault}><i>Fluchtszenen in Der Herr der Ringe. Eine systematische Analyse der Filmmusik Howard Shores aus hermeneutischer und funktionalanalytischer Perspektive</i>, Masterarbeit Musiktheorie/Gehörbildung 2018</ListItem>
        <ListItem className={style.mlDefault}><i>James Horner. Die Filmmusik zu AVATAR Zwischen Originalität und Selbstzitat</i>, Zulassungsarbeit Lehramt am Gymnasium 2017</ListItem>
        <ListItem className={style.mlDefault}><i>Virtuosität im Heavy Metal</i>, Zulassungsarbeit Lehramt am Gymnasium 2017</ListItem>
        <ListItem className={style.mlDefault}><i>Freiheit beim Komponieren im Musikunterricht. Eine Analyse von Selektionskriterien bei Kompositionsaufgaben an weiterführenden Schulen</i>, Masterarbeit Musiktheorie/Gehörbildung 2016</ListItem>
        <ListItem className={style.mlDefault}><i>Die &lsquo;Neun Advent-Motetten&rsquo; op. 176 von Josef Gabriel Rheinberger</i>. Zulassungsarbeit Lehramt am Gymnasium 2016</ListItem>
        <ListItem className={style.mlDefault}><i>Die Dämpfungsaufhebung in den Klavierkonzerten Ludwig van Beethovens.</i> Bachelorarbeit Hauptfach Musiktheorie 2016</ListItem>
        <ListItem className={style.mlDefault}><i>Percussion im Musikunterricht. Eine funktionale Analyse von Interviews</i> Dissertation an der HMTM 2015 im Fach Musikpädagogik (Zweitgutachter)</ListItem>
        <ListItem className={style.mlDefault}><i>Liederzyklus als Künstlerdenkmal Studien zu Kunstlied und Künstlerrolle in der ersten Hälfte des 19. Jahrhunderts am Fall von R. Schumann. Sechs Gedichte von N. Lenau und Requiem op. 90.</i> Dissertation an der HMTM 2014 im Fach Musikwissenschaft (Zweitgutachter)</ListItem>
        <ListItem className={style.mlDefault}><i>Stilanalysen zum Album Exhibit von John Day.</i> Zulassungsarbeit Lehramt am Gymnasium</ListItem>
        <ListItem className={style.mlDefault}><i>Musikpädagogik und Musiktheorie. Eine problematische Beziehung? Systemtheoretische Beobachtungen.</i> Dissertation an der Universität Hamburg 2014, Fachbereich Erziehungswissenschaften (Zweitgutachter)</ListItem>
        <ListItem className={style.mlDefault}><i>Die Canzonetten Giovanni Artusis.</i> Zulassungsarbeit Lehramt am Gymnasium 2014 und Bachelorarbeit Hf Musiktheorie/Gehörbildung</ListItem>
        <ListItem className={style.mlDefault}><i>Ludwig van Beethoven. Eine Darstellung des Komponisten in bayerischen Schulbüchern.</i> Zulassungsarbeit Lehramt am Gymnasium 2014</ListItem>
        <ListItem className={style.mlDefault}><i>Formanalyse in der Rockmusik am Beispiel von &lsquo;Costello Music&rsquo; der Band The Fratellis.</i> Zulassungsarbeit Lehramt am Gymnasium 2014</ListItem>
        <ListItem className={style.mlDefault}><i>Konzeption einer Musikanalyse-Anwendung auf verteilten Displays.</i> Bachelorarbeit Medieninformatik an der LMU 2013, Zweitbetreuer/Kooperationspartner</ListItem>
        <ListItem className={style.mlDefault}><i>Modal klingende Stellen im A-capella-Chorwerk von Johannes Brahms.</i> Diplomarbeit Hauptfach Musiktheorie 2013</ListItem>
        <ListItem className={style.mlDefault}><i>Rachmaninov op.4. Eine Analyse zum Wort-Ton-Verhältnis.</i> Zulassungsarbeit Lehramt am Gymnasium 2013</ListItem>
        <ListItem className={style.mlDefault}><i>Klangtechniken in Anthems von Henry Purcell und deren Rezeption im 20. Jahrhundert.</i> Zulassungsarbeit Lehramt am Gymnasium 2013</ListItem>
        <ListItem className={style.mlDefault}><i>Analytische Beobachtungen zu ausgewählten Werken von John Williams.</i> Diplomarbeit Hauptfach Musiktheorie 2012</ListItem>
        <ListItem className={style.mlDefault}><i>Das schriftliche Abitur im Leistungsfach Musik. Annäherungen an ein Verfahren musikalischer Analyse.</i> Zulassungsarbeit Lehramt am Gymnasium 2012</ListItem>
        <ListItem className={style.mlDefault}><i>Kadenz und Eingang im Violinkonzert.</i> Zulassungsarbeit Lehramt am Gymnasium 2012</ListItem>
        <ListItem className={style.mlDefault}><i>Analytische Betrachtungen zu Becks O Crux Aves.</i> Zulassungsarbeit Lehramt am Gymnasium 2012</ListItem>
        <ListItem className={style.mlDefault}><i>Musiktheorie und ausgewählte Kompositionen von Meinrad Spieß.</i> Diplomarbeit Hauptfach Musiktheorie und Zulassungsarbeit Lehramt am Gymnasium 2011</ListItem>
        <ListItem className={style.mlDefault}><i>Analytische Beobachtungen zu John Williams&rsquo; Star Wars (Across the Stars).</i> Zulassungsarbeit Lehramt am Gymnasium 2011</ListItem>
        <ListItem className={style.mlDefault}><i>Musikalische Analyse der Fest- und Gedenksprüche op. 109 von Johannes Brahms unter Berücksichtigung von gesellschaftspolitischen und theologischen Aspekten.</i> Zulassungsarbeit Lehramt am Gymnasium 2010</ListItem>
        <ListItem className={style.mlDefault}><i>Die Madrigale Thomas Vautors.</i> Zulassungsarbeit Lehramt am Gymnasium 2010</ListItem>
        <ListItem className={style.mlDefault}><i>Neue Medien und Musikunterricht am Beispiel von Popularmusik.</i> Diplomarbeit Hauptfach Musiktheorie 2009</ListItem>
        <ListItem className={style.mlDefault}><i>Untersuchungen formaler Aspekte der Rock-Popmusik anhand ausgewählter Stücke von Meat Loaf.</i> Zulassungsarbeit Lehramt am Gymnasium 2008</ListItem>
        <ListItem className={style.mlDefault}><i>Rock zwischen Schema und Experiment. Exemplarische Analysen zu der Musik von Queen.</i> Zulassungsarbeit Lehramt am Gymnasium 2007</ListItem>
        <ListItem className={style.mlDefault}><i>Bon Jovi – Entwicklungsgeschichte einer Band und Analyse ihrer Musik unter genauerer Betrachtung von drei ausgewählten Alben: 1) Slippery When Wet 2) Bounce 3) Have A Nice Day [...].</i> Zulassungsarbeit Lehramt am Gymnasium 2007</ListItem>
        <ListItem className={style.mlDefault}><i>Populäre Musik als Gegenstand musikalischer Analyse an ausgewählten Werken Billy Joels.</i> Zulassungsarbeit Lehramt am Gymnasium 2006</ListItem>
        <ListItem className={style.mlDefault}><i>Überlegungen zur analytischen Herangehensweise an Vertrautes in ungewohntem Kontext [...].</i> Diplomarbeit Hauptfach Musiktheorie 2006</ListItem>
        <ListItem className={style.mlDefault}><i>Das Wohltemperierte Klavier Johann Sebastian Bachs.</i> Zulassungsarbeit Lehramt am Gymnasium 2002</ListItem>
      </UnorderedList>
    </>
  )
}

Betreuungen.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}