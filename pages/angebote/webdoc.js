import Head from 'next/head';
import Layout from '../components/layout';
import ModalImage from "react-modal-image";
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Box, List, ListItem, Flex, HStack, Container, Divider, Spacer } from '@chakra-ui/react';

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
        Hier finden Sie eine kleine Übersicht über meine eigenen oder über externe Aufträge kommerziell erstellten Webseiten. Diese Arbeiten empfinde ich al ein schönes Hobby, da mir das Programmieren von Webseiten ebenso wie Layoutarbeiten Freude bereitet (z.B. das Erstellen von Plakaten, Visitenkarten, etc.). Fall Sie also Wünsche in dieser Richtung haben, ich es zeitlich einrichten kann und es meine Kompetenzen nicht übersteigt, schreiben Sie mir einfach eine Mail ...
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
                <a href='https://kaiser-ulrich.de'><img src={urlSnippet + 'ResponsiveDesign-uk-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://kaiser-ulrich.de'>kaiser-ulrich.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Meine Hompage, die Sie (anscheinen im Moment :) besuchen, ist die älteste, von mir selbst erstellte Webseite (online seit 2003). Zuerst war es nur eine einfache HTML-Seite, seit 2008 dann eine mit C# erstellten Web-App, über die ich meine Studierenden betreut habe (mit einem internen Lernmanagmenet-System). Durch das Auslagern der Studierendenbetreuung auf die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> war ein Relaunch der Homepage möglich. Dafür wurde Next.js und Chakra UI verwendet, die Navigation wird automatisch erstellt und über ein JSON-File gesteuert. Auch die sich gelegentlich verändernden Seiten wie z.B. die der Publikationen, Fortbildungen, Vorträge usw. bzw. ihren Content aus JSON-Files, was eine Aktualisierung der Seitze ohne ein neues Erstellen der  Website ermöglicht.  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://musikanalyse.net'><img src={urlSnippet + 'ResponsiveDesign-musikanalyse-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://musikanalyse.net'>musikanalyse.net</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die Programmierung der Seite musikanalyse.net habe ich zusammen mit Andreas Helmberger begonnen, der sich dann jedoch aus dem Projekt zurückgezogen hat. Auf dieser Seite stelle ich privat Informationen zur musikalischen Analyse und Musiktheorie zur Verfügung. Das Angebot richtet sich in erster Linie an meine Studierende und darüber hinaus an alle, die etwas über die genannten Themen wissen möchten.<br/><br/>
              <i>Im Rahmen eines wissenschaftlichen Forschungsprojekts der TU Dortmund im Bereich Musiktheorie (um Prof. Dr. Mark Gotham), in dem die Verwendung von musiktheoretischen Lehrwerken untersucht worden ist, wurde festgestellt, dass musikanalyse.net »zu den meist verwendeten Lehrwerken im deutschsprachigen Raum (sowohl Print als auch digital) zählt«.</i><br/><br/>
              Trotz dieses erfreulichen Nachricht und einer <a href='https://opacplus.bsb-muenchen.de/discovery/fulldisplay?docid=alma991076179389707356&context=L&vid=49BVB_BSB:VU1&lang=de&search_scope=MyInst_and_CI&adaptor=Local%20Search%20Engine&tab=Everything&query=any,contains,musikanalyse.net' className='underline'>Langzeitarchivierung der Seite</a> durch die <a href='https://www.bsb-muenchen.de/' className='underline'>Bayerische Staatsbibliothek</a> werde ich diese Seite auf die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> transferieren, wo die Inhalte nicht nur kostenlos genutzt, sondern auch aktualisiert, verändert und weiterentwickelt werden können.
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://oer-musik.de/'><img src={urlSnippet + 'ResponsiveDesign-oer-musik-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://oer-musik.de/'>oer-musik.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die Seite oer-musik.de ist aus der Seite openbooks-musik.de hervorgegangen, mit der ich 2011 begonnen hatte, meine Materialien für meine Lehramtsstudierenden sowie Lehrerinnen und Lehrer an allgemeinbildenden Schulen zur Verfügung zu stellen. Die Seite verwendet Gatsby, verzichtet auf den Einsatz von CSS-Frameworks und wird auch aufgelöst, sobald ich alle Inhalte auf die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> überführt und zur Nachbearbeitung freigegeben haben werde. Alle OpenBooks habe ich übrigens mit der freien Desktop-Publishing-Software <a href='https://www.scribus.net/' className='underline'>Scribus</a> selbst entworfen und erstellt.
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://www.gkm-partner.de/'><img src={urlSnippet + 'ResponsiveDesign-gkm-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://www.gkm-partner.de/'>gkm-partner.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die erste Website, die ich über einen externen Auftrag programmiert habe, ist 2015 für die Wirtschaftsprüfer Ulrich Glück, Holger Kock und Martin Mäschke entstanden. Die Seite verwendet ein sehr schlankes CSS-Framework (<a href='http://getskeleton.com/' className='underline'>Skeleton</a>), ist statisch, mehrsprachig (Deutsch, Englisch, Chinesisch), ausgesprochen leichtgewichtig und schnell.  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://www.tpmeder.de/'><img src={urlSnippet + 'ResponsiveDesign-meder-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://www.tpmeder.de/'>tpmeder.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              2017 erhielt ich dann einen Auftrag für eine einfache statische Seite von der Steuerkanzlei TP Meder, die auf Beratung für Verrechnungspreise Transfer Pricing spezialisiert ist. Auch für diese Seite wurde dass CSS-Framework (<a href='http://getskeleton.com/' className='underline'>Skeleton</a>) verwendet und auch diese Seite ist mehrsprachig (Deutsch, Englisch, Chinesisch), leichtgewichtig und schnell.  
            </Box>
          </Flex>                  
        </ListItem>        
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://www.ralph-symann.com/'><img src={urlSnippet + 'ResponsiveDesign-symann-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://www.ralph-symann.com/'>ralph-symann.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
               2019 erhielt ich dann vom Mangement des Komponisten Ralph Symann den Auftrag für eine Website, ein Logo sowie weiteren Layoutmaterialen im Rahmen einer einheitlichen Corporate Identity. Für diese Seite habe ich den Task-Runner Gulp sowie den Static-Site-Generator Metalsmith und darüber hinaus kein CSS-Framework verwendet um wieder eine leichtgewichtige und schnelle statische Website zu erstellen.   
            </Box>
          </Flex>                  
        </ListItem>          
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='http://www.internistische-hausarztpraxis-ramersdorf.de/'><img src={urlSnippet + 'ResponsiveDesign-hausarztpraxis-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='http://www.internistische-hausarztpraxis-ramersdorf.de/'>internistische-hausarztpraxis-ramersdorf.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
               2021 beauftragte mich dann die Internistische Hausarztpraxis Rahmerdorf mit der Programmierung ihres Webauftritts. Auch für diese Seite habe ich Task-Runner Gulp sowie den Static-Site-Generator Metalsmith verwendet.
            </Box>
          </Flex>                  
        </ListItem>
                 
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <a href='https://kaiserliche-koestlichkeiten.eu/'><img src={urlSnippet + 'ResponsiveDesign-k&k-Seite001.png'} /></a>
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://kaiserliche-koestlichkeiten.eu/'>kaiserliche-koestlichkeiten.eu</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
               Kurz danach erhielt ich den Auftrag für eine Seite voller Leckereien und Köstlichkeiten der Konditormeisterin (und meiner Schwester) Gunhild Lakomczyk-Kaiser. Auch diese Seite ist eine statische Website, die mit Next.js erstellt worden ist und deren Daten in JSON-Files gespeichert werden, damit sich die Seite beim Hinzufügen neuer Elemente ohne ein neues Erstellen aktualisieren lässt. 
            </Box>
          </Flex>                  
        </ListItem>           
      </List>    

      <Heading as='h3' mt='40px' className="headingH4">
        Plakate &amp; Covergestaltungen 
      </Heading>

      <Text m='40px 0'>
        Hier sehen Sie einige ausgewählte Beispiele meiner Plakate und Covergestaltungen: 
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