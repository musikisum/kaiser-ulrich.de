import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

import style from './index.module.css';

const options = {
  title: 'Publikationen',
  description: 'Hier finden Sie eine thematische Ordnung meiner Publikationen, z.B. eigenständige Publikationen in Verlagen, Artikel in Zeitschriften und Broschüren, OpenBooks, Open Educational Resources (Text, Bild, Video), Interviews usw.',
  filter: 'publikationen',
  slug: '/publikationen'
}

export default function Index() {

  return (
    <>
      <Head>
        <title>Publikationen</title>
        <meta name="description" content="Publikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      
      <Card direction={{ base: 'column', md: 'row' }} mb='40px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite001.jpg'
          alt='Abbildung zu Büchern und Heften'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Bücher & Hefte</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu meinen selbstständigen Publikationen, die zwischen 1998 und 2007 in Verlagen (Bärenreiter, Klett) erschienen sind.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/verlage/'>
                <Button variant='solid' className={style.cardButtonSize} >
                  Zu den Büchern & Heften ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} mb='40px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite003.jpg'
          alt='Abbildung zu Artikeln'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Artikel</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu meinen Aufsätzen, die seit 1992 in Zeitschriften und Broschüren publiziert worden sind.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/artikel/'>
                <Button variant='solid' className={style.cardButtonSize} >
                  Zu den Artikeln ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} mb='40px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite002.jpg'
          alt='Abbildung zu OpenBooks'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>OpenBooks</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu meinen <Link href='https://oer-musik.de' isExternal>OpenBooks <ExternalLinkIcon mx='2px' /></Link>, die seit 2009 veröffentliche.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/openbooks/'>
                <Button variant='solid' colorScheme="green" className={style.cardButtonSize} >
                  Zu den OpenBooks ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card> 
      
      <Card direction={{ base: 'column', md: 'row' }} mb='40px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite004.jpg'
          alt='Abbildung zu Tutorials'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Tutorials</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu Tutorials, die ich zuerst auf <Link href='https://musikanalyse.net' isExternal>Musikanalyse .Net <ExternalLinkIcon mx='2px' /></Link> und seit 2022 auf der <Link href='https://openmusic.academy' isExternal>Open Music Academy <ExternalLinkIcon mx='2px' /></Link>.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/tutorials/'>
                <Button variant='solid' colorScheme="green" className={style.cardButtonSize} >
                  Zu den Tutorials ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} mb='40px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite005.jpg'
          alt='Abbildung zu Musikpublikationen'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Musik</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu Kompositionen, Arraangements und Aufnahmen, die ich seit 1994 veröffentlicht habe.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/musik/'>
                <Button variant='solid' colorScheme="green" className={style.cardButtonSize} >
                  Zur Musik ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} mb='40px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite006.jpg'
          alt='Abbildung zu Gelegenheiten'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Gelegenheiten</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu kleineren Publikationen, die sich als Gelegenheit hier und da ergeben haben.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/gelegenheiten/'>
                <Button variant='solid' colorScheme="green" className={style.cardButtonSize} >
                  Zu den Gelegenheiten ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
