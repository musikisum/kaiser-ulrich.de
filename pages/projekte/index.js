import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Projekte',
  description: 'Auf dieser Seite finden Sie Links zu abgeschlossenen, laufenden und geplanten Projekten.',
  filter: 'projekte',
  slug: '/projekte'
}

export default function Angebote() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Projekte | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />

    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Link href='/projekte/gezumu'>
        <Image
          src='/images/card-images/projekte-Seite003.jpg'
          alt='Abbildung GeZuMu'
          className={style.cardImg}
        />
      </Link>
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>GeZuMu</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zur Projekt <i>Generation Zukunft Musik</i> (GeZuMu), das bisher leider noch nicht realisiert werden konnte. Doch die Projektidee lebt weiter ... 
          </Text>
          <CardFooter pl='0'>
            <Link href='/projekte/gezumu'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zum GeZuMu-Projekt ...
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
    
    <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
      <Link href='/projekte/openmusicacademy'>
        <Image
          src='/images/card-images/projekte-Seite002.jpg'
          alt='Abbildung zur OMA'
          className={style.cardImg}
        />
      </Link>
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>OMA</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zur Open Music Academy (OMA). Zum Beginn des Jahres 2021 habe ich diese Projektidee für die Hochschule für Musik und Theater entwickelt und im selben Jahr wurde sie von der Stiftung Innovation in der Hochschullehre zur Förderung ausgewählt. Das Projekt wurde zwischen 2021 und 2025 gefördert.   
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

    <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
      <Link href='/projekte/elmu'>
        <Image
          src='/images/card-images/projekte-Seite001.jpg'
          alt='Abbildung zu Elmu'
          className={style.cardImg}           
        />
      </Link>
      <CardBody className={style.cardBodyMl}>
        <Stack>
          <Heading fontSize='xl'>ELMU</Heading>
          <Text fontSize='l'>
            Auf dieser Seite finden Sie Informationen zum ELMU-Projekt. Das ELMU-Projekt ist bereits abgeschlossen und wurde in die Open Musik Academy (OMA) überführt.
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
  </>
}

Angebote.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
