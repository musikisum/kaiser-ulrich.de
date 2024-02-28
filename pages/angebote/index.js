import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Angebote',
  description: 'Auf dieser Seite finden Sie Links zu meinen Angeboten wie zum Beispiel Fortbildungen für Lehrerinnen und Lehrer, Vorträge zu Themen der Musik sowie Angebote, die ich über WebDoc erledige (z.B. das Programmieren kleiner Webseiten, Layout-Arbeiten usw.).',
  filter: 'angebote',
  slug: '/angebote'
}

export default function Angebote() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Wissenschaft | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
      <Link href='/angebote/fortbildungen'>
        <Image
          src='/images/card-images/angebote-Seite002.jpg'
          alt='Abbildung zur Fortbildungen'
          className={style.cardImg}           
        />
      </Link>
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Fortbildungen</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zu meinem Fortbildunsgangeboten.
          </Text>
          <CardFooter pl='0'>
            <Link href='/angebote/fortbildungen'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den Fortbildungsangeboten ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Link href='/angebote/beitraege'>
        <Image
          src='/images/card-images/angebote-Seite001.jpg'
          alt='Abbildung zu Vorträgen'
          className={style.cardImg}
        />
      </Link>
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Vorträge</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zu meinen seit 1995 gehaltenen und in Planung befindlichen Vorträgen.
          </Text>
          <CardFooter pl='0'>
            <Link href='/angebote/beitraege'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den Vorträgen ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
      
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Link href='/angebote/slides-online'><Image
        src='/images/card-images/angebote-Seite004.jpg'
          alt='Abbildung zu den Vorträgen online'
          className={style.cardImg}
        />
      </Link>
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Vorträge (online)</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Vorträge, die aktuell online verfügbar sind.
          </Text>
          <CardFooter pl='0'>
            <Link href='/angebote/slides-online'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den Vorträgen (online)
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
    <Link href='/angebote/webdoc'>
      <Image
      src='/images/card-images/angebote-Seite003.jpg'
        alt='Abbildung zu den Hilfsmitteln'
        className={style.cardImg}
      />
    </Link>
    <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>WebDoc (kommerzielles Angebot)</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zur Webprogrammierung &amp; meinen Layoutarbeiten (WebDoc).
          </Text>
          <CardFooter pl='0'>
            <Link href='/angebote/webdoc'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zum WebDoc ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
    
  </>
}

Angebote.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
