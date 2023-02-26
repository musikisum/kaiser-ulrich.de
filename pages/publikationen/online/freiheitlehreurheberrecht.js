import Head from 'next/head'
import Footer from '../../components/footer'
import { Breadcrumb, Container, Header, Button, Icon, Image, Message, List } from 'semantic-ui-react'

import style from '../index.module.css'

export default function FreiheitLehreUrheberrecht() {
  return (
    <>
      <Head>
        <title>Wikimedia-Artikel</title>
        <meta name="description" content="Freiheit der Lehre und das Urheberrecht | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className={style.main}>
        <Container>
          <Header as='h1'>Freiheit der Lehre und das Urheberrecht</Header>
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
            <Breadcrumb.Section active>Freiheit der Lehre &amp; Urheberrecht</Breadcrumb.Section>
          </Breadcrumb>
          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='file alternate outline' size='big' />
              Freiheit der Lehre und das Urheberrecht 
            </Header>
          </div>
          <div>
            <h2>Freiheit der Lehre und das Urheberrecht</h2>
            <p>
              Das Urheberrecht soll in dem Interessenskonflikt vermitteln, der zwischen den Rechten von Urhebern auf der einen Seite sowie dem Interesse der Allgemeinheit an freiem Umgang mit Inhalten auf der anderen Seite besteht. Ich finde es beschämend, dass die Politik meines Landes maßgeblich mit dafür verantwortlich ist, dass sich in der EU das Recht für den freien Umgang mit Wissen und Kultur sowie die Freiheit der Lehre fest in der Umklammerung des Urheberrechts befindet.<br />
              Maßgeblich dafür verantwortlich sind die Länge der Schutzfristen. Selbstverständlich ist eine künstlerische Leistungen angemessen zu schützen. Doch die derzeitige Schutzfrist von 70 Jahren nach dem Tod des Urhebers schützt den Urheber natürlich nur bis zum Tod, anschließend werden die Erben über mehrer Generationen sowie die Rechteverwerter wie Notenverlage, Tonträgerhersteller usw. geschützt.<br/>
              Während das Verdienen an der Kunst daher große Freiheit genießt, ist es um die Freiheit der Lehre schlecht bestellt. Die Freiheit der Lehre ist ein Grundrecht (Art. 5 GG). Es besagt, dass Kunst und Wissenschaft sowie Forschung und Lehre frei sind. Allerdings nur für diejenigen, die dafür bezahlen. Als Hochschullehrer kann ich einen Song von Paul McCartney nur dann unterrichten, wenn irgend jemand Geld für die im Unterricht verwendeten Noten und Musik bezahlt. Dieser Zwang zum Bezahlen ist mit dem Begriff der Freiheit jedoch nicht vereinbar.<br />
              Lange Schutzfristen ließen sich rechtfertigen, gäbe es im europäischen Urheberrecht eine Fair-Use-Schranke, die es erlauben würde, jegliches Material in nicht kommerziellen und/oder gemeinnützigen Projekten (wie z.B. dem Unterricht an allgemeinbildenden Schulen und Musikhochschulen) kostenlos und unter Angabe von Quellen verwenden zu dürfen. Doch wie die jüngsten Reformen des Urheberrechts zeigen, wird eine solche Schranke durch Lobbyismus und Individualinteressen derzeit noch verhindert.
            </p>
            <h3>Probleme mit Musikdateien auf <b>YouTube</b></h3>
            <p>
              YouTube (Google) setzt mit dem ›Content-ID‹ einen Upload-Filter ein, der aufgrund der umstrittenen Urheberrechtsreform der Normalfall für ›Content Provider‹ werden wird. Dem gewünschten Ziel (Abwendung von Rechtsverstößen) stehen jedoch nicht nur Bedenken gegenüber (Datenschutz, Internetzensur), sondern es werden, wie die nachstehenden Fälle zeigen, auch legale Verwendungsweisen von Bild- und Tonmaterial durch Upload-Filter erschwert bzw. verhindert (darüber hinaus laden solche Techniken zu schwer kontrollierbarem Missbrauch ein). Derzeit können automatisierte Scans z.B. nicht zwischen einem Urheberrechtsverstoß und einem gesetzlich erlaubten Zitat im musikwissenschaftlichen Kontext unterscheiden, was die Vermittlung von musikalischem Fachwissen und meine Bereitstellung von Open Educational Resources auf YouTube schon jetzt negativ beeinträchtigt. Hierzu ein paar Beispiele:
            </p>
            <div style={{ 'margin': '20px' }}>
              <List bulleted>
                <List.Item>
                  Content-ID Anspruch von Kontor New Media Mudic (Jaap ter Linden-Symphony No. 19 in E-Flat Major, K. 132: I. Allegro und Allegro con brio - Friedrich Gulda). Der Anspruch Allegro con brio - Friedrich Gulda wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von Kontor New Media Mudic (Klara Würtz Piano Sonata Mr. 3).  Verwendung der Sounddatei im Rahmen des Zitatrechts. Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von Fox Entertainment/Naxos of America (Biber Violinsonaten/Lautenbacher, 1961). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von Deutsche Grammophon/UMG (Bartók Klavierkonzerte, 1961/62). UMG/Deutsche Grammophon haben den Anspruch an einer Aufnahme aus dem Jahr 1961/1962 aufrecht erhalten. Diese Aufnahme ist nach deutschem Urheberrecht jedoch frei, weil das Recht »nicht durch Vervielfältigung eines Tonträgers« bzw. durch Nachpressungen entsteht. Für eine Klärung des Sachverhalts bzw. eine Überprüfung des Anspruch von Deutsche Grammophon/UMG bietet YouTube leider keine Kontaktmöglichkeit in Deutschland an.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von Deutsche Grammophon/UMG (Bartók 2. Violinkonzert, 1961). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von The Orchard Music im Auftrag von Pipeline Music (Bartók 1. Violinkonzert, 1962). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von INgrooves/Naxos of America (Wagner, Der fliegende Holländer, 1962). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von The Orchard Music im Auftrag von Discover Classical Music (Puccini, Manon Lescaut, 1959). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von The Orchard Music im Auftrag von Naxos of America (Schubert, Die schöne Müllerin, Platte o. Datum, erste Veröffentlichung als Platte 1955). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von WMG Im Auftrag von Documents (No. 8. Der Atlas - Hans Hotter: falscher Scan) (Schubert, Schwanengesang, Platte o. Datum, erste Veröffentlichung als Platte vor 1963). Der Anspruch wurde nach dem Einspruch fallengelassen.
                </List.Item>
                <List.Item>
                  Content-ID Anspruch von UMG Im Auftrag von Deutsche Grammophon auf eine freie Aufnahme (P)1961 (Sinfonie Nr. 8 von F. Schubert und Sinfonie Nr. 5 von L.v. Beethoven,). UMG/Deutsche Grammophon haben den Leistungsanspruch für diese Aufnahme aufrecht erhalten, obwohl deren Schutzdatum auf der Platte mit 1961 explizit angegeben ist. Die Aufnahme ist nach deutschem Urheberrecht daher frei, weil das Recht »nicht durch Vervielfältigung eines Tonträgers« bzw. durch Nachpressungen entsteht. Für eine Klärung des Sachverhalts bzw. eine Überprüfung des Anspruch von Deutsche Grammophon/UMG bietet YouTube leider keine Kontaktmöglichkeit in Deutschland an.
                </List.Item>
              </List>
            </div>
            <p>
              Die zurückgezogenen Ansprüche (und auch die nicht zurückgezogenen von UMG/Deutsche Grammophon) legen die Vermutung nahe, dass die Content-ID-Datenbank von YouTube/Google mit Titeln gefüllt wird, an denen die Labels keine Rechte mehr haben (vgl. hierzu die Entwicklungen des UrhG zum Leistungsschutz). Über den Support von Google wollte ich hierrüber informieren und die Streitfälle klären. Doch Mails an den Support von YouTube/Google werden »leider nicht gelesen und zur Kenntnis genommen«, eine menschliche Rückmeldungen von YouTube/Google darf man derzeit nur erwarten, wenn eine Urheberrechtsverletzung melden möchte.
            </p>
            <h3>Bestätigung der Fehlerhaftigkeit des Content-ID-Systems</h3>
            <p>
              Eine Reaktion auf meinen Beitrag für die Wikimedia Foundation erhielt ich eine sehr freundliche Rückmeldung:
            </p>
            <Message positive>
              <Message.Header>Email-Rückmeldung eines Publishing Directors</Message.Header>
              <p>
                »I was interested to read your article in Arstechnica about YouTube misidentifying public domain classical recordings. As a music publisher and record label a lot of [...] content features on YouTube and also on television stations around the world. We find that YouTube also misidentifies our own recordings of classical works, but it rarely makes mistakes with our pop songs and other genres of music. We believe that this is because two different recordings of a Beethoven symphony still ›sound‹ very similar - particularly to the Content ID technology. Whereas two different recordings of a Beatles song will sound much more distinct, and will be able to be identified correctly by Content ID. Until the technology can be improved to distinguish subtle differences in tempo, pitch, timbre and even acoustics/reverb, it will continue to misidentify classical recordings. This is nothing to do with over-zealous claims or other publishers and labels deliberately claiming rights over your public domain recordings, simply to shortcomings in technology. Thanks again for your interesting article, and best wishes«
              </p>
            </Message>
            <p>
              Diese Rückmeldung zeigt, dass ein Wissen um die Fehlerhaftigkeit der Scans bei Insidern durchaus vorhanden ist, dass jedoch klassische Musik als Kollateralschaden in Kauf genommen wird, weil die Filter dort, wo derzeit Geld verdient wird (also im Bereich der Popmusik), recht zuverlässig funktionieren. Darüber hinaus zeigt diese Rückmeldung, dass es unter den Publishers und Labels sowohl einen korrekten Umgang mit der Content-ID-Datenbank zu geben scheint, als auch ein illegales Verhalten, welches gemeinfreie Aufnahmen mit Rechtsansprüchen belegt. In der Diskussion um illegales Verhalten auf YouTube ist das illegale Verhalten durch Labels bisher leider noch nicht thematisiert worden.
            </p>
            <h3>Erfahrungen mit eigenen Aufnahmen</h3>
            <p>
              Meine von dem Publishing Director bestätigten Erfahrungen gipfelten in einem Erlebnis, das ich mit meinem Chormusik-Kanal auf YouTube hatte, auf dem ich eine nicht mehr im Handel befindliche Brahms-CD des von mir gegründeten Ensemberlino Vocale auf YouTube zur Verfügung stellen wollte. An dieser Aufnahme halte ich alle Rechte, der Chor sang seinerzeit unter meiner Leitung, die CD wurde von mir privat finanziert und der Vertrieb (Pool Music) ist schon vor Jahren in Konkurs gegangen.<br/>
              Zu meinem Erstaunen wurde ich nach dem Upload umgehend von YouTube benachrichtigt, dass die von mir dirigierte und von meinem ehemaligen Chor gesungene Aufnahme gar nicht von uns sei. Denn in ›Wirklichkeit‹ wäre Wolf-Dieter Haunschild der Dirigent der Aufnahme und die Rechte daran lägen deshalb bei Naxos of America.<br/>
              Falls Sie Lust haben, sich meine Brahms-Aufnahmen anzuhören, hier geht´s zu meinem YouTube-Kanal mit den Choraufnahmen.
            </p>
            <Image as='a' src='/images/Content-ID_Brahms-op93a-3.jpg' href='https://www.youtube.com/watch?v=uroj2M-GRkA' target='_blank' fluid />
          </div>
          <hr className={style.footerLine} />
          <Footer className='footer' /> 
        </Container>
      </div>
    </>
  );
}