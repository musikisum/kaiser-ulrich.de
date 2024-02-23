import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Chorleitung',
  description: 'Auf dieser Seite finden Sie Links zu den Chören, die ich im Laufe meines Lebens leiten durfte und mit denen ich einige meiner schönsten Erlebnisse in meinem Leben teilen durfte.',
  filter: 'chorleitung',
  slug: '/chorleitung'
}

const Angebote = () => {
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
          <Heading fontSize='xl'>Consortium Musicum Berlin</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zumConsortium Musicum Berlin.
          </Text>
          <CardFooter pl='0'>
            <Link href='/chorleitung/consortium-musicum'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu Consortium Musicum Berlin ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Image
          src='/images/card-images/wissenschaft-Seite003.jpg'
          alt='Abbildung zu Vorträgen'
          className={style.cardImg}
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Ensemberlino Vocale</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zum Ensemberlino Vocale.
          </Text>
          <CardFooter pl='0'>
            <Link href='/chorleitung/ensemberlino-vocale'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zum Ensemberlino Vocale ...
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
          <Heading fontSize='xl'>Die & das ...</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen anderen Chören und Emsembles, mit denen ich zusammengearbeitet habe.
          </Text>
          <CardFooter pl='0'>
            <Link href='/chorleitung/dies-und-das'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den Ensembles ...
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

Angebote.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Angebote;