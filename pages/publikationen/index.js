import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button } from '@chakra-ui/react';

import style from './index.module.css';

const options = {
  title: 'Publikationen',
  description: 'Hier finden Sie eine thematische Ordnung meiner Publikationen, z.B. eigenständige Publikationen in Verlagen, Artikel in Zeitschriften und Broschüren, OpenBooks, Open Educational Resources (Text, Bild, Video), Interviews usw.',
  filter: 'publikationen',
  slug: '/publikationen'
}
const Index = () => {
  return (
    <>
      <Head>
        <title>Publikationen</title>
        <meta name="description" content="Publikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/publikationen-Seite001.jpg'
          alt='Abbildung zur Wissenschaft'          
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Bücher & Hefte</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu meinen selbstständigen Publikationen, die zwischen 1998 und 2007 in Verlagen (Bärenreiter, Klett) erschienen sind.
            </Text>
            <CardFooter pl='0'>
              <Link href='/publikationen/verlage'>
                <Button variant='solid' colorScheme="green" className={style.cardButtonSize} >
                  Zu den Büchern & Heften ...
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
    <Layout>
      {page}
    </Layout>
  )
}

export default Index;
