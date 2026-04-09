import Head from 'next/head';
import Layout from '../components/layout';
import ModalImage from "react-modal-image";
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import Link from 'next/link';
import { Heading, Text, Box, List, ListItem, Flex, Container, Divider } from '@chakra-ui/react';

import style from './index.module.css'; 

const options = {
  title: 'WebDoc',
  filter: 'angebote',
  slug: '/angebote/webdoc'
}
const urlSnippet = '/images/webdoc/';

const webDocImages = [
  { 'small': 'poster2-thumb.jpg', 'large': 'poster2.jpg', 'altText': 'Plakat Beispiel Rock' },
  { 'small': 'happy-thumb.jpg', 'large': 'happy.jpg', 'altText': 'U1 Beispiel Happy-Variationen' },
  { 'small': 'brahms-thumb.jpg', 'large': 'brahms.jpg', 'altText': 'U1 Beispiel Brahms' },
  { 'small': 'lamentobass-thumb.jpg', 'large': 'lamentobass.jpg', 'altText': 'U1 Beispiel Lamentobass' },
  { 'small': 'inventionen-thumb.jpg', 'large': 'inventionen.jpg', 'altText': 'U1 Beispiel Inventionen' },
  { 'small': 'formenlehre-thumb.jpg', 'large': 'formenlehre.jpg', 'altText': 'U1 Beispiel Formenlehre' }
];

const uid = new ShortUniqueId();

export default function WebDoc() {

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="WebDoc | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <PageHeader options={ options } />
      
      <Heading as='h3' className="headingH3">
        Kommerzielles Angebot
      </Heading>
      <Text>
        Von 2003 bis 2020 habe ich neben meiner akademischen Arbeit regelmäßig Webseiten programmiert. Die Programmierung hat mich interessiert, weil sie klarer und logischer ist als viele Arbeiten im geisteswissenschaftlichen Bereich. Und da man beim Selber-Machen am meisten lernt, habe ich gerne eigene Projekte realisiert und externe Aufträge angenommen, bei denen mir das Lernen als Gegengewicht zur Wissenschaft stets viel Freude bereitet hat. Ab 2021 ließ mir dann das Projekt <Link href='/projekte/openmusicacademy' className='underline'>Open Music Academy</Link> schlicht keinen Raum mehr dafür (und wer sich die OMA einmal anschaut, wird verstehen, warum :).
      </Text>
      <Text mt="4">
        Seit 2026 habe ich angefangen, mit claude.ai als VS-Code-Plugin zu arbeiten und seither steht für mich fest: Claude ist nett zu mir, kompetenter als ich und darüber hinaus immer geduldig, wenn ich als Hobbyprogrammierer mal wieder etwas vergessen habe. Auf dieser Seite finden Sie eine Dokumentation der Projekte, die mir in den Jahren 2003–2020 möglich waren. Wenn Sie sich mehr für meine Arbeiten in diesem Bereich interessieren, schauen Sie sich auf meinem <a className="underline" href='https://github.com/musikisum'>GitHub-Account</a> um.
      </Text>
      <Divider mt='60px' mb='60px' h='1px' bg='gray' />

      <Heading as='h3' className="headingH4">
        Programmierte Webseiten (seit 2003) 
      </Heading>

      <Text mt='40px'></Text>

      <List m='12px' spacing={12}> 
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <Link href='/'><img src={urlSnippet + 'ResponsiveDesign-uk-Seite001.png'} alt="kaiser-ulrich.de" /></Link>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />
                  <Link href='/'>kaiser-ulrich.de</Link>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Meine Homepage, die Sie (anscheinend im Moment :) besuchen, ist die älteste der von mir erstellten Webseiten (online seit 2003). Zuerst war es nur eine einfache HTML-Seite, seit 2008 dann eine mit C# erstellte Web-App, über die ich viele Jahre lang meine Studierenden betreut habe (mit einem internen Lernmanagement-System). Durch das Auslagern der Studierendenbetreuung auf die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> war endlich ein Relaunch der Homepage möglich. Dafür habe ich Next.js und Chakra UI verwendet. Navigation und Content von Seiten mit dynamischen Inhalten (z.B. Publikationen, Vorträge usw.) werden automatisch über JSON-Files gesteuert.
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://musikanalyse.net'><img src={urlSnippet + 'ResponsiveDesign-musikanalyse-Seite001.png'} alt="musikanalyse.net" /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://musikanalyse.net'>musikanalyse.net</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die Programmierung der Seite musikanalyse.net habe ich zusammen mit Andreas Helmberger begonnen, der sich dann jedoch aus beruflichen Gründen aus dem Projekt zurückgezogen hat. Auf dieser Seite stelle ich privat kostenlose Informationen zur musikalischen Analyse und Musiktheorie zur Verfügung. Das Angebot richtet sich in erster Linie an meine Studierende und darüber hinaus an alle, die etwas über die genannten Themen wissen möchten.<br/><br/>
              <i>Im Rahmen eines wissenschaftlichen Forschungsprojekts der TU Dortmund im Bereich Musiktheorie (um Prof. Dr. Mark Gotham) wurde festgestellt, dass musikanalyse.net »zu den meist verwendeten Lehrwerken im deutschsprachigen Raum (sowohl Print als auch digital) zählt«.</i><br/><br/>
              Trotz dieser erfreulichen Nachricht und einer <a href='https://opacplus.bsb-muenchen.de/discovery/fulldisplay?docid=alma991076179389707356&context=L&vid=49BVB_BSB:VU1&lang=de&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,musikanalyse.net' className='underline'>Langzeitarchivierung</a> durch die <a href='https://www.bsb-muenchen.de/' className='underline'>Bayerische Staatsbibliothek</a> werde ich die Inhalte diese Seite vollständig auf die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> transferieren, wo sie gemeinschaftlich, aktualisiert und weiterentwickelt werden können.
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://oer-musik.de/'><img src={urlSnippet + 'ResponsiveDesign-oer-musik-Seite001.png'} alt="oer-musik.de" /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://oer-musik.de/'>oer-musik.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die Seite oer-musik.de ist aus der Seite openbooks-musik.de hervorgegangen, mit der ich 2011 begonnen hatte, meine Materialien für meine Lehramtsstudierenden sowie Musiklehrerinnen und -lehrer an allgemeinbildenden Schulen zur Verfügung zu stellen. Die Seite verwendete zuerst Gatsby, verzichtet auf den Einsatz von CSS-Frameworks und wurde mithilfe von claude.ai zu einer statischen Website (mit Eleventy) umgewandelt. Diese Seite wird ebenfalls aufgelöst, sobald ich alle Inhalte auf die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> überführt haben werde. Alle OpenBooks wurden übrigens mit der freien Desktop-Publishing-Software <a href='https://www.scribus.net/' className='underline'>Scribus</a> erstellt und lassen sich daher auch ohne den Kauf von DTP-Programmen aktualisieren.
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://www.gkm-partner.de/'><img src={urlSnippet + 'ResponsiveDesign-gkm-Seite001.png'} alt="gkm-partner.de" /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://www.gkm-partner.de/'>gkm-partner.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die erste Website, für die ich einen externen Programmierauftrag bekam, ist 2015 für die Wirtschaftsprüfer Ulrich Glück, Holger Kock und Martin Mäschke entstanden. Die Seite verwendet ein sehr schlankes CSS-Framework (<a href='http://getskeleton.com/' className='underline'>Skeleton</a>), ist statisch, mehrsprachig (Deutsch, Englisch, Chinesisch), ausgesprochen leichtgewichtig und immer noch sehr schnell.
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <img src={urlSnippet + 'ResponsiveDesign-meder-Seite001.png'} alt="tpmeder.de" />
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <span>tpmeder.de</span>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              2017 erhielt ich einen Auftrag für eine einfache statische Seite von der Steuerkanzlei TP Meder, die auf Beratung für Verrechnungspreise Transfer Pricing spezialisiert ist. Auch für diese Seite wurde das CSS-Framework (<a href='http://getskeleton.com/' className='underline'>Skeleton</a>) verwendet und auch diese Seite war mehrsprachig (Deutsch, Englisch, Chinesisch), leichtgewichtig und schnell. Aktuell ist sie nicht mehr erreichbar. 
            </Box>
          </Flex>                  
        </ListItem>        
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://www.ralph-symann.com/'><img src={urlSnippet + 'ResponsiveDesign-symann-Seite001.png'} alt="ralph-symann.com" /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://www.ralph-symann.com/'>ralph-symann.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
               2019 erhielt ich dann vom Management des Komponisten Ralph Symann den Auftrag für eine Website, ein Logo sowie weitere Layoutmaterialien im Rahmen einer einheitlichen Corporate Identity. Für diese Seite habe ich den Task-Runner Gulp, den Static-Site-Generator Metalsmith und darüber hinaus kein CSS-Framework verwendet, um wieder eine leichtgewichtige und sehr schnelle statische Website anbieten zu können.   
            </Box>
          </Flex>                  
        </ListItem>          
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='http://www.internistische-hausarztpraxis-ramersdorf.de/'><img src={urlSnippet + 'ResponsiveDesign-hausarztpraxis-Seite001.png'} alt="internistische-hausarztpraxis-ramersdorf.de" /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='http://www.internistische-hausarztpraxis-ramersdorf.de/'>internistische-hausarztpraxis-ramersdorf.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
               2021 beauftragte mich dann die <i>Internistische Hausarztpraxis Ramersdorf</i> mit der Programmierung ihres Webauftritts. Auch für diese Seite habe ich Task-Runner Gulp sowie den Static-Site-Generator Metalsmith verwendet.
            </Box>
          </Flex>                  
        </ListItem>
                 
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://kaiserliche-koestlichkeiten.eu/'><img src={urlSnippet + 'ResponsiveDesign-k&k-Seite001.png'} alt="kaiserliche-koestlichkeiten.eu" /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://kaiserliche-koestlichkeiten.eu/'>kaiserliche-koestlichkeiten.eu</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
               Kurz danach erhielt ich den Auftrag für eine Seite voller Leckereien und Köstlichkeiten der Konditormeisterin Gunhild Lakomczyk-Kaiser. Diese Seite ist eine statische, mit Next.js umgesetzte Seite, wobei der Content über JSON-Files gepflegt und bereitgestellt wird. 
            </Box>
          </Flex>                  
        </ListItem>           
      </List>    

      <Heading as='h3' mt='40px' className="headingH4">
        Plakate &amp; Covergestaltungen 
      </Heading>

      <Text m='40px 0'>
        Hier sehen Sie einige ausgewählte Beispiele meiner Plakat- und Covergestaltungen: 
      </Text>
      <Flex bg='#eaeaea' flexWrap='wrap' p='20px' justifyContent='space-between'>
        {
          webDocImages.map(images => {
            return <div style={{'margin': '10px'}} key={uid.seq()}>
                    <ModalImage                      
                      small={urlSnippet + images.small}
                      large={urlSnippet + images.large}
                      alt={images.altText}                  
                    />
                  </div>
          })
        }        
      </Flex>
      <Text m='40px 0'>
        Weitere Covergestaltungen finden sie <Link className='underline' href="/publikationen/openbooks/">hier</Link> und <Link className='underline' href="/publikationen/musik/">hier</Link>. 
      </Text>
    </>  
  )
}

WebDoc.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}