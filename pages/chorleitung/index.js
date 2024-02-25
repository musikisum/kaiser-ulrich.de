import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Chorleitung',
  description: 'Über das Chorsingen bei meinem Vater Karl-Heinz-Kaiser bin ich in die Chorleitung quasi hineingewachsen. Neben ersten Chorleitungsversuchen vor den Chören meines Vaters habe ich im Anschluss daran mit 18 Jahren die ersten Chöre übernommen und mir auf diese Weise mein Studium finanziert. Auf dieser Seite finden Sie Links zu den Chören, die ich im Laufe meines Lebens geleitet habe und mit denen ich einige meiner schönsten Erlebnisse in meinem Leben teilen durfte.',
  filter: 'chorleitung',
  slug: '/chorleitung'
}

export default function Chorleitung() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Chorleitung | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
      <Image
          src='/images/card-images/wissenschaft-Seite003.jpg'
          alt='Abbildung zur Fortbildungen'
          className={style.cardImg}           
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Chöre</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen den Chören, die ich zwischen 1981 und 2000 in Berlin geleitet habe (z.B. das Consortium Musicum Berlin, Ensemberlino Vocale u.a.).
          </Text>
          <CardFooter pl='0'>
            <Link href='/chorleitung/choere'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den Chören ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Image
        src='/images/card-images/wissenschaft-Seite003.jpg'
          alt='Abbildung zu den Hilfsmitteln'
          className={style.cardImg}
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Repertoire</Heading>
          <Text fontSize='l'>
            Hier finden Sie eine Liste der von mir in Konzerten aufgeführten Werke ...
          </Text>
          <CardFooter pl='0'>
            <Link href='/chorleitung/repertoire'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zum Repertoire ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
  </>
}

Chorleitung.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
