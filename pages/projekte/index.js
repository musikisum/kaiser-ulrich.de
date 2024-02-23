import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Projekte',
  description: 'Auf dieser Seite finden Sie Links zu abgeschlossenen und laufenden Projekten.',
  filter: 'projekte',
  slug: '/projekte'
}

const Angebote = () => {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Projekte | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
      <Image
          src='/images/card-images/projekte-Seite001.jpg'
          alt='Abbildung zu Elmu'
          className={style.cardImg}           
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>ELMU</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zum ELMU-Projekt, das bereits abgeschlossen und in die Open Musik Academy (OMA) überführt worden ist.
          </Text>
          <CardFooter pl='0'>
            <Link href='/projekte/elmu'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zum ELMU-Projekt ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Image
          src='/images/card-images/projekte-Seite002.jpg'
          alt='Abbildung zur OMA'
          className={style.cardImg}
        />
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>OMA</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zur Open Music Academy (OMA). Dieses Projekt habe ich zum Beginn des Jahres 2021 für die Hochschule für Musik und Theater entworfen und im selben Jahr wurde es von der Stiftung Innovation in der Hochschullehre zur Förderung ausgewählt. Das Projekt läuft noch bis zum Ende des Jahres 2025.   
          </Text>
          <CardFooter pl='0'>
            <Link href='/projekte/openmusicacademy'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zur Open Music Academy ...
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