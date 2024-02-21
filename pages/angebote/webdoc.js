import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Box, List, ListItem, Flex, Container, Divider } from '@chakra-ui/react';

import style from './index.module.css'; 

const options = {
  title: 'WebDoc',
  filter: 'angebote',
  slug: '/angebote/webdoc'
}

export default function WebDoc() {

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Lebenslauf | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      <Heading as='h3' className="headingH3">
        Kommerzielles Angebot
      </Heading>
      <Text>
        Hier finden Sie eine kleine Übersicht über mein kommerzielles Angebot. Die Arbeiten haben dabei in der Regel nichts mit Musik zu tun, wie programmiere ich gerne kleinerer Webseiten, übernehme Layoutarbeiten (wie z.B. Plakate, Visitenkarten, etc.). Diese Tätigkeiten sind eine willkommene Abwechslung von meiner eigentlichen Arbeit, die ich gerne übernehme, wenn ich es zeitlich einrichten kann und es meine Kompetenze nicht überfordert. Schreiben Sie mir eine Mail, wenn Sie eine Anfrage haben ...
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
                <img src='/images/websites/ResponsiveDesign-uk-Seite001.png' />
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://kaiser-ulrich.de'>kaiser-ulrich.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Meine Hompage, die Sie (anscheinen gerade :) besuchen, ist die älteste, von mir selbst erstellte Webseite (2003). Zuerst war es nur eine einfache HTML-Seite, seit 2008 dann eine mit C# erstellten Web-App, über die ich meine Studierenden betreut habe. Heute erfüllt diese Aufgabe die <a href='https://openmusic.academy'>Open Music Academy (OMA)</a> wesentlich besser. Daduch konnte ich die Homepage ganzneu konzipieren, heute ist es eine  statische Website, die ich mit Next.js und Chakra UI gebauthabe. Die Navigation wird aus einem JSON-File ausgelesen und automatisch erstellt, darüber hinaus erhalten auch die sich gelegentlich verändernden Seiten wie z.B. die der Publikationen, Fortbildungen, Vorträge usw. ihren Content aus JSON-Files, was ein Content-Aktualisierung ohne ein neues Bauen der Website erlaubt.  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px' className={style.websiteDirection}>
            <Box as='b' flex='0.4' color='#6e91a1' mb='20px'>
              <Container>
                <img src='/images/websites/ResponsiveDesign-gkm-Seite001.png' />
                <Container style={{ 'textAlign': 'center' }}>
                  <Divider mt='20px' mb='20px' h='1px' bg='#E0F0F4' />                 
                  <a href='https://www.gkm-partner.de/'>gkm-partner.de</a>
                </Container>                    
              </Container>
            </Box>
            <Box flex='0.6' ml='10px'>
              Die erste Website, für die ich einen Auftrag erhielt, war die Seite der Wirtschaftsprüfer Ulrich Glück, Holger Kock und Martin Mäschke. Die Seite verwendet ein sehr schlankes CSS-Framework (<a href='http://getskeleton.com/' className='underline'>Skeleton</a>). Diese Seite ist statisch, mehrsprachig (Deutsch, Englisch, Chinesisch) und sehr leicht und schnell.  
            </Box>
          </Flex>                  
        </ListItem>        
      </List>    
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