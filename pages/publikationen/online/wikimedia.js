import Link from 'next/link'
import Head from 'next/head'
import Footer from '../../components/footer'
import { Breadcrumb, Container, Header, Button, Icon } from 'semantic-ui-react'

import { wikimedia1, wikimedia2 } from '../../../data/wikivars.js'
import style from '../index.module.css'

export default function Wikimedia() {
  return (
    <>
      <Head>
        <title>Wikimedia-Artikel</title>
        <meta name="description" content="Wikimedia-Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className={style.main}>
        <Container>
          <Header as='h1'>Selbständige Publikationen</Header>
          <Container textAlign='right' className={style.backButton}>
            <Button animated as='a' href='/publikationen/online'>
              <Button.Content visible>zurück</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Container>
          <Breadcrumb>
            <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section href='/publikationen'>Publikationen</Breadcrumb.Section>          
            <Breadcrumb.Divider />
            <Breadcrumb.Section href='/publikationen/online'>Online Artikel</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Beitrag für Wikimedia</Breadcrumb.Section>
          </Breadcrumb>
          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Link href="https://blog.wikimedia.de/2018/08/06/von-einem-der-auszog-das-fuerchten-zu-lernen/"><Icon name='file alternate outline' size='big' /></Link>
              Artikel für die Wikimedia
            </Header>
          </div>
          <div>
          <h2>Von einem der auszog, das Fürchten zu lernen...</h2>
          <p>
            Stellen Sie sich vor, sie würden eine freie Aufnahme der 5. Sinfonie von Beethoven für den Unterricht an einer allgemeinbildenden Schule benötigen. Mit einer solchen Aufnahme lassen sich interessante Unterrichtseinheiten gestalten wie z.B. ein Sinfonie-Puzzle, Beethovens 5. aus Sicht eines Sportreporters, Beethoven als Filmmusik usw. Da ich Lehrbücher für Musik schreibe und als Professor an einer Musikhochschule tätig bin, möchte ich solche Unterrichtseinheiten als Open Educational Resources (oer-musik.de) ausarbeiten. Also begann ich damit, meine eigenen Schallplatten sowie Schallplatten aus den Beständen meines Arbeitgebers zu digitalisieren. In Frage kamen vor dem 1. Januar 1963 publizierte Aufnahmen, für welche 2013 eine 50-jährige Schutzfrist bereits abgelaufen war. Später entstandene Aufnahmen hingegen dürfen nicht digitalisiert werden, weil die Regelschutzfrist 2013 auf 70 Jahre verlängert worden ist. Das magische Jahr 2013 der Schallplattendigitalisierung kann man sich übrigens gut merken: Genau 50 Jahre vorher – das ist natürlich reiner Zufall – erschien das erste Beatles-Album auf dem Markt. Und ob Sie es glauben oder nicht: Mit diesem unschuldigen Vorhaben begann mein Auszug, das Fürchten zu lernen…
          </p>
          <h3>Ein Märchen</h3>
          <p>
            Zu einem richtigen Märchen gehören drei Situationen, in denen man sich bewähren muss. Meine erste Bewährung bestand darin, nachts auf YouTube ein Video hochzuladen, das für die Website wirbt, auf der meine gemeinfreien Digitalisate zum Download bereitstehen. In diesem Video erkläre ich mein Vorhaben, während im Hintergrund Beispiele der von mir digitalisierten Musik zu hören sind. Keine drei Minuten später erschien in meinem YouTube-Konto ein böser Geist und teilte mir mit, dass es einen Content-ID-Anspruch gäbe, weil sich in meinem Video eine urheberrechtlich geschützte Aufnahme der erste Rosenkranz-Sonate von Biber mit Susanne Lautenbacher befände. Furchtlos erhob ich Einspruch und antwortete dem Geist, dass auf der Website des Anspruchsstellers 1962 als Datum der ersten Veröffentlichung genannt würde und meine Digitalisierung daher gemeinfrei sei. Der Geist prüfte drei Tage lang, zog seinen Anspruch zurück und verschwand wortlos. Da überkam mich ein böser Verdacht: Was wäre denn, wenn Anspruchsteller ungeachtet der Tatsache, dass sie an vor 1963 veröffentlichten Aufnahmen keine Ansprüche mehr haben, Ihre Geister dennoch losschicken würden, um Menschen wie mich einzuschüchtern? Das fand ich interessant, das wollte ich genauer wissen.
          </p>
          <h3>Geister angeln</h3>
          <p>
            Meine zweite Bewährung bestand also in der Eröffnung eines YouTube-Kontos mit dem Namen ›Labeltest‹, um das Universum der Musikwirtschaft mit Ausschnitten meiner urheberrechtsfreien Musik zu konfrontieren. Ich wollte sehen, ob sich mir auch hier böse Geister zeigen würden. Und in der Tat: Sie erschienen sofort und stellten sich jeglichem Upload urheberrechtsfreier Musik von Bartók, Beethoven, Schubert, Puccini und Wagner entgegen. Immer wieder hieß es, ich verstoße gegen das Urheberrecht und die Geister taten mir Gewalt an, indem sie ohne meine Zustimmung die Lizenz von CC-BY auf Standard-YouTube änderten.
          </p>
          <h3>Die Werke der Toten</h3>
          <p>
            Ich mailte meinen Widersachern furchtlos entgegen, dass 1. der Komponist der Werke mehr als 70 Jahre tot, 2. die Aufnahmen vor 1963 erstmalig erschienen und 3. ein Schutzrecht für eine Nachpressung in Deutschland nach §85 UrhG nicht gegeben sei. Meine Widerwehr war so gut, dass sie die bösen Geister mehrere Wochen lang in Bann hielt, bevor diese wiederum sang- und klanglos verschwanden. Alle Geister, bis auf einen großen und mächtigen transatlantischen Geist.
          </p>
          <h3>Dein Video gehört jetzt mir</h3>
          <p>
            Meine dritte Bewährung bestand nun in der Auseinandersetzung mit diesem mächtigen Geist. Er ging mich – wie es der Zufall so will angesichts einer Aufnahme von Beethovens 5. Sinfonie – unfreundlich an: »In deinem Video wurden urheberrechtlich geschützte Inhalte gefunden. Der Anspruchsteller lässt die Verwendung seiner Inhalte in deinem YouTube-Video zu. Es könnten allerdings Werbeanzeigen eingeblendet werden.« Klar, der Geist bluffte, denn die Aufnahme der Berliner Philharmoniker unter Lorin Maazel wurde 1961 veröffentlicht und war daher gemeinfrei.
          </p>
          <h3>Keine Hilfe vom Schlossherrn</h3>
          <p>
            Hilfesuchend wandte ich mich mit einer Mail an den Schlossherrn, in dessen Gemäuern ich mich gegen den aggressiven Geist zur Wehr setzen musste. Er antwortete mir: »[…] vielen Dank, dass Sie sich an die Google Inc. wenden. Bitte beachten Sie, dass aufgrund der Vielzahl von Anfragen, E-Mails, die unter dieser E-Mail-Adresse support-de@google.com eingehen, nicht gelesen und zur Kenntnis genommen werden können«. Außerdem war der Schlossherr böse, denn er verhinderte auch in jenen Fällen, in denen meine Abwehr des Content-ID-Anspruchs erfolgreich war, die Wiederherstellung der CC-BY-Lizenz. Darüber hinaus blieben auch meine in dieser Angelegenheit getätigten Mails unbeantwortet.
          </p>
          <h3>Düstere Aussichten</h3>
          <p>
            Während im Märchen der Protagonist in drei furchterregenden Situationen bestehen kann, gebe ich zu, dass mich die zuletzt beschriebene Situation das Fürchten gelehrt hat. Sie verweist auf eine Zukunft, in der die Rechtsprechung außer Kraft gesetzt und den Interessen von Wirtschaftsunternehmen überlassen wird. Belastend kommt hinzu, dass die dabei eingesetzte Technik nachweislich fehlerhaft arbeitet.
          </p>
          <h3>Reihenweise falsch erkannte Werke</h3>
          <p>
            Neben den oben genannten Problemen wurde beispielsweise im Rahmen meiner zweiten Bewährung ›Der Atlas‹ von Franz Schubert in der Interpretation von Hans Hotter erkannt, auf der Aufnahme zu hören ist hingegen Dietrich Fischer-Dieskau. Und in Bartóks zweitem Violinkonzert solierte tatsächlich Igor Oistrach, der große und mächtige Geist hingegen erkannte Vladimir Ashkenazy als Interpreten (dass dieser berühmte Pianist so gut Geige spielt, ist eine echte Sensation). Doch selbst dann, wenn die Technik zukünftig einwandfrei arbeiten würde und man z.B. aufgrund von technischen Verbesserungen falsche Scans mit Sicherheit ausschließen könnte: Eine künstliche Intelligenz, die ohne Fehler zu unterscheiden in der Lage wäre, ob ein Musikupload einen Rechtsbruch oder ein rechtskonformes Zitat im wissenschaftlichen Kontext darstellt, dürfte noch lange Zeit Utopie bleiben. Und auch diese würde ich nicht eintauschen wollen gegen einen Rechtsstaat, in dem es qualifizierte Menschen gibt, die in aller Öffentlichkeit über Recht und Unrecht verhandeln und in dem man sich gegen böse Geister zur Wehr setzen kann.
          </p>
          </div>
          <br /><hr /><br />
          <p dangerouslySetInnerHTML={{ __html: wikimedia1 + wikimedia2 }} />
          <hr className={style.footerLine} />
          <Footer className='footer' />  
        </Container>      
      </div>
    </>
  );
}