import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { Text, Heading, Divider } from '@chakra-ui/react';

const wikimedia1 = '<p class="small"><b>Anmerkungen:</b> Der Beitrag »Von einem, der auszog, das Fürchten zu lernen« ist für die Wikimedia-Foundation ins <a href="https://wikimediafoundation.org/news/2018/08/27/can-beethoven-send-takedown-requests-a-first-hand-account-of-one-german-professors-experience-with-overly-broad-upload-filters/">Englische übersetzt</a> worden. Der deutschsprachige Beitrag wurde am 6. August 2018 auf dem <a href="https://blog.wikimedia.de/2018/08/06/von-einem-der-auszog-das-fuerchten-zu-lernen/" target="_blank">Blog</a> der deutschen <a href="https://wikimedia.de/" target="_blank">Wikimedia Deutschland</a> veröffentlicht. Am 27. August 2018 wurde der Beitrag in einer Übersetzung von Bernd Filder als <a href="https://wikimediafoundation.org/2018/08/27/can-beethoven-send-takedown-requests-a-first-hand-account-of-one-german-professors-experience-with-overly-broad-upload-filters/" target="_blank">Can Beethoven send takedown requests? A first-hand account of one German professor’s experience with overly broad upload filters</a> für die <a href="https://wikimediafoundation.org/" target="_blank">Wikimedia Foundation</a> übernommen und von vielen weiteren Seiten adaptiert, z.B. als <a href="https://motherboard.vice.com/en_us/article/xwkbad/this-music-theory-professor-just-showed-how-stupid-and-broken-copyright-filters-are" target="_blank">»This Music Theory Professor Just Showed How Stupid and Broken Copyright Filters Are Automated takedown systems don’t work, stifle free expression online«</a> auf <a href="https://motherboard.vice.com/de" target="_blank">motherboard.vice.com</a>, als <a href="https://www.techdirt.com/articles/20180827/16481940516/how-eu-may-be-about-to-kill-public-domain-copyright-filters-takedown-beethoven.shtml" target="_blank">»How The EU May Be About To Kill The Public Domain: Copyright Filters Takedown Beethoven from the ending-the-public-domain dept«</a> auf <a>techdirt.com</a>,  als <a href="https://arstechnica.com/tech-policy/2018/09/how-contentid-knocked-down-decades-old-recordings-of-beethoven/" target="_blank">»Google: Sorry professor, old Beethoven recordings on YouTube are copyrighted. Op-ed: How one German professor had a bad experience with overly broad upload filters«</a> auf <a href="https://arstechnica.com" target="_blank">arstechnica.com</a>, '

const wikimedia2 = 'als <a href="https://www.economist.com/business/2018/09/13/a-controversial-new-copyright-law-moves-a-step-closer-to-approval?fsrc=scn/tw/te/rfd/pe" target="_blank">»A controversial new copyright law moves a step closer to approval. The new rules are another example of the EU’s assertiveness on tech«</a> auf <a href="https://www.economist.com" target="_blank">economist.com</a>, als <a href="https://www.lavanguardia.com/tecnologia/20180914/451786844445/youtube-beethoven-derecho-de-autor.html">»En YouTube, incluso las más antiguas grabaciones de Beethoven están protegidas por el derecho de autor«, als als <a href="https://torrentfreak.com/youtube-targets-music-profs-public-domain-beethoven-and-wagner-uploads-180903/" target="_blank">YouTube’s Content-ID Flags Music Prof’s Public Domain Beethoven and Wagner Uploads«</a>» auf <a href="https://torrentfreak.com" target="_blank">torrentfreak.com</a> und als hackernews Blog <a href="https://news.ycombinator.com/item?id=17884215&amp;p=2" target="_blank">»Can Beethoven send takedown requests?«</a> auf <a href="https://news.ycombinator.com/" target="_blank">hackernews</a>.</Text>'

const options = {
  title: 'Von einem der auszog, das Fürchten zu lernen ...',
  description: '',
  filter: 'publikationen',
  slug: '/publikationen/online/wikimedia'
}

const Wikimedia = () => {
  return (
    <>
      <Head>
        <title>Wikimedia</title>
        <meta name="description" content="Wikimedia | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={options} />
      <Text mt='40px' fontSize='sm' dangerouslySetInnerHTML={{ __html: wikimedia1 + wikimedia2 }} />
      <Divider mt='60px' mb='60px' h='1px' bg='gray' />
      
      <Text mb='6px'>
        Stellen Sie sich vor, sie würden eine freie Aufnahme der 5. Sinfonie von Beethoven für den Unterricht an einer allgemeinbildenden Schule benötigen. Mit einer solchen Aufnahme lassen sich interessante Unterrichtseinheiten gestalten wie z.B. ein Sinfonie-Puzzle, Beethovens 5. aus Sicht eines Sportreporters, Beethoven als Filmmusik usw. Da ich Lehrbücher für Musik schreibe und als Professor an einer Musikhochschule tätig bin, möchte ich solche Unterrichtseinheiten als Open Educational Resources (oer-musik.de) ausarbeiten. Also begann ich damit, meine eigenen Schallplatten sowie Schallplatten aus den Beständen meines Arbeitgebers zu digitalisieren. In Frage kamen vor dem 1. Januar 1963 publizierte Aufnahmen, für welche 2013 eine 50-jährige Schutzfrist bereits abgelaufen war. Später entstandene Aufnahmen hingegen dürfen nicht digitalisiert werden, weil die Regelschutzfrist 2013 auf 70 Jahre verlängert worden ist. Das magische Jahr 2013 der Schallplattendigitalisierung kann man sich übrigens gut merken: Genau 50 Jahre vorher – das ist natürlich reiner Zufall – erschien das erste Beatles-Album auf dem Markt. Und ob Sie es glauben oder nicht: Mit diesem unschuldigen Vorhaben begann mein Auszug, das Fürchten zu lernen…
      </Text>
      <Heading as='h2' className='headingH4'>Ein Märchen</Heading>
      <Text mb='6px'>
        Zu einem richtigen Märchen gehören drei Situationen, in denen man sich bewähren muss. Meine erste Bewährung bestand darin, nachts auf YouTube ein Video hochzuladen, das für die Website wirbt, auf der meine gemeinfreien Digitalisate zum Download bereitstehen. In diesem Video erkläre ich mein Vorhaben, während im Hintergrund Beispiele der von mir digitalisierten Musik zu hören sind. Keine drei Minuten später erschien in meinem YouTube-Konto ein böser Geist und teilte mir mit, dass es einen Content-ID-Anspruch gäbe, weil sich in meinem Video eine urheberrechtlich geschützte Aufnahme der erste Rosenkranz-Sonate von Biber mit Susanne Lautenbacher befände. Furchtlos erhob ich Einspruch und antwortete dem Geist, dass auf der Website des Anspruchsstellers 1962 als Datum der ersten Veröffentlichung genannt würde und meine Digitalisierung daher gemeinfrei sei. Der Geist prüfte drei Tage lang, zog seinen Anspruch zurück und verschwand wortlos. Da überkam mich ein böser Verdacht: Was wäre denn, wenn Anspruchsteller ungeachtet der Tatsache, dass sie an vor 1963 veröffentlichten Aufnahmen keine Ansprüche mehr haben, Ihre Geister dennoch losschicken würden, um Menschen wie mich einzuschüchtern? Das fand ich interessant, das wollte ich genauer wissen.
      </Text>

      <Heading as='h2' className='headingH4'>Geister angeln</Heading>
      <Text mb='6px'>
        Meine zweite Bewährung bestand also in der Eröffnung eines YouTube-Kontos mit dem Namen ›Labeltest‹, um das Universum der Musikwirtschaft mit Ausschnitten meiner urheberrechtsfreien Musik zu konfrontieren. Ich wollte sehen, ob sich mir auch hier böse Geister zeigen würden. Und in der Tat: Sie erschienen sofort und stellten sich jeglichem Upload urheberrechtsfreier Musik von Bartók, Beethoven, Schubert, Puccini und Wagner entgegen. Immer wieder hieß es, ich verstoße gegen das Urheberrecht und die Geister taten mir Gewalt an, indem sie ohne meine Zustimmung die Lizenz von CC-BY auf Standard-YouTube änderten.
      </Text>

      <Heading as='h2' className='headingH4'>Die Werke der Toten</Heading>
      <Text mb='6px'>
        Ich mailte meinen Widersachern furchtlos entgegen, dass 1. der Komponist der Werke mehr als 70 Jahre tot, 2. die Aufnahmen vor 1963 erstmalig erschienen und 3. ein Schutzrecht für eine Nachpressung in Deutschland nach §85 UrhG nicht gegeben sei. Meine Widerwehr war so gut, dass sie die bösen Geister mehrere Wochen lang in Bann hielt, bevor diese wiederum sang- und klanglos verschwanden. Alle Geister, bis auf einen großen und mächtigen transatlantischen Geist.
      </Text>

      <Heading as='h2' className='headingH4'>Dein Video gehört jetzt mir</Heading>
      <Text mb='6px'>
        Meine dritte Bewährung bestand nun in der Auseinandersetzung mit diesem mächtigen Geist. Er ging mich – wie es der Zufall so will angesichts einer Aufnahme von Beethovens 5. Sinfonie – unfreundlich an: »In deinem Video wurden urheberrechtlich geschützte Inhalte gefunden. Der Anspruchsteller lässt die Verwendung seiner Inhalte in deinem YouTube-Video zu. Es könnten allerdings Werbeanzeigen eingeblendet werden.« Klar, der Geist bluffte, denn die Aufnahme der Berliner Philharmoniker unter Lorin Maazel wurde 1961 veröffentlicht und war daher gemeinfrei.
      </Text>

      <Heading as='h2' className='headingH4'>Keine Hilfe vom Schlossherrn</Heading>
      <Text mb='6px'>
        Hilfesuchend wandte ich mich mit einer Mail an den Schlossherrn, in dessen Gemäuern ich mich gegen den aggressiven Geist zur Wehr setzen musste. Er antwortete mir: »[…] vielen Dank, dass Sie sich an die Google Inc. wenden. Bitte beachten Sie, dass aufgrund der Vielzahl von Anfragen, E-Mails, die unter dieser E-Mail-Adresse support-de@google.com eingehen, nicht gelesen und zur Kenntnis genommen werden können«. Außerdem war der Schlossherr böse, denn er verhinderte auch in jenen Fällen, in denen meine Abwehr des Content-ID-Anspruchs erfolgreich war, die Wiederherstellung der CC-BY-Lizenz. Darüber hinaus blieben auch meine in dieser Angelegenheit getätigten Mails unbeantwortet.
      </Text>
      
      <Heading as='h2' className='headingH4'>Düstere Aussichten</Heading>
      <Text mb='6px'>
        Während im Märchen der Protagonist in drei furchterregenden Situationen bestehen kann, gebe ich zu, dass mich die zuletzt beschriebene Situation das Fürchten gelehrt hat. Sie verweist auf eine Zukunft, in der die Rechtsprechung außer Kraft gesetzt und den Interessen von Wirtschaftsunternehmen überlassen wird. Belastend kommt hinzu, dass die dabei eingesetzte Technik nachweislich fehlerhaft arbeitet.
      </Text>

      <Heading as='h2' className='headingH4'>Reihenweise falsch erkannte Werke</Heading>
      <Text mb='6px'>
        Neben den oben genannten Problemen wurde beispielsweise im Rahmen meiner zweiten Bewährung ›Der Atlas‹ von Franz Schubert in der Interpretation von Hans Hotter erkannt, auf der Aufnahme zu hören ist hingegen Dietrich Fischer-Dieskau. Und in Bartóks zweitem Violinkonzert solierte tatsächlich Igor Oistrach, der große und mächtige Geist hingegen erkannte Vladimir Ashkenazy als Interpreten (dass dieser berühmte Pianist so gut Geige spielt, ist eine echte Sensation). Doch selbst dann, wenn die Technik zukünftig einwandfrei arbeiten würde und man z.B. aufgrund von technischen Verbesserungen falsche Scans mit Sicherheit ausschließen könnte: Eine künstliche Intelligenz, die ohne Fehler zu unterscheiden in der Lage wäre, ob ein Musikupload einen Rechtsbruch oder ein rechtskonformes Zitat im wissenschaftlichen Kontext darstellt, dürfte noch lange Zeit Utopie bleiben. Und auch diese würde ich nicht eintauschen wollen gegen einen Rechtsstaat, in dem es qualifizierte Menschen gibt, die in aller Öffentlichkeit über Recht und Unrecht verhandeln und in dem man sich gegen böse Geister zur Wehr setzen kann.
      </Text>
    </>
  )
}

Wikimedia.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Wikimedia;