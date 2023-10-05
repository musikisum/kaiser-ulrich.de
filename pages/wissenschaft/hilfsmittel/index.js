import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from '../index.module.css'

const options = {
  title: 'Betreuungen',
  description: 'Auf dieser Seite finden zu den Hilfsmittel, die den Einstieg in das wissenschaftliche Arbeiten erleichtern sollen.',
  filter: 'wissenschaft/hilfsmittel',
  slug: '/wissenschaft/hilfsmittel'
}

export default function Hilfsmittel() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />
      
      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite001.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Kommunikation</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Gedanken zur Kommunikation im Wissenschaftssystem (bzw. zur <i>Wissenschaft der Gesellschaft</i>).
            </Text>
            <CardFooter pl='0'>
              <Link href='/wissenschaft/hilfsmittel/kommunikation'>
                <Button variant='solid' className={style.cardButtonSize}>
                  Zum Wissenschaftskommunikation ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite001.jpg'
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

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite001.jpg'
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

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite001.jpg'
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

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite001.jpg'
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
    </>
  )
}

Hilfsmittel.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}