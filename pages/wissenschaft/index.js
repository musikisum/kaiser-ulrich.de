import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Wissenschaft',
  description: 'Auf dieser Seite finden Sie Links zu Informationen zu meinem Wissenschaftsverständnis, zu meiner Forschungstätigkeit und zu den von mir betreuten wissenschaftlichen Arbeiten (Bachelor-, Masterarbeiten sowie Promotionen). Darüber hinaus werden hier für Nachwuchswissenschaftler:innen Hilfsmittel zum wissenschaftlichen Arbeiten angeboten.',
  filter: 'wissenschaft',
  slug: '/wissenschaft'
}

const Wissenschaft = () => {
  return <>
    <Head>
      <title>Wissenschaft</title>
      <meta name="description" content="Wissenschaft | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
      <Image
          src='/images/card-images/wissenschaft-Seite001.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}           
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Profil</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zu meinem Wissenschaftsverständnis und meinen Forschungsschwerpunkten.
          </Text>
          <CardFooter pl='0'>
            <Link href='/wissenschaft/profil'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zum wissenschaftlichen Profil ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Image
          src='/images/card-images/wissenschaft-Seite002.jpg'
          alt='Abbildung zu den Betreuungen'
          className={style.cardImg}
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>Betreuungen</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zu den von mir betreuten Arbeiten und Promotionen.
          </Text>
          <CardFooter pl='0'>
            <Link href='/wissenschaft/betreuungen'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den betreuten Arbeiten ...
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
          <Heading fontSize='xl'>Hilfsmittel</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zu den Hilfsmittel, die den Einstieg in das wissenschaftliche Arbeiten erleichtern sollen.
          </Text>
          <CardFooter pl='0'>
            <Link href='/wissenschaft/hilfsmittel'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zu den Hilfsmitteln ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
  </>
}

Wissenschaft.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Wissenschaft;