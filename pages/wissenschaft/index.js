import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button } from '@chakra-ui/react';

import style from './index.module.css'

const options = {
  title: 'Wissenschaft',
  description: 'Hier finden Kurzbeschreibungen und Links zu Themen meiner wissenschaftlichen Tätigkeiten (Forschung, Betreuungen, etc.).'
}

const Wissenschaft = () => {
  return (
    <>
      <Head>
        <title>Wissenschaft</title>
        <meta name="description" content="Wissenschaft | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <PageHeader options={ options } />
      
      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
            src='/images/card-images/card-images-Seite001.jpg'
            alt='Abbildung zur Wissenschaft'
            className={style.cardImg}           
          />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Wissenschaft</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Links zu Informationen zu meinem Wissenschaftsverständnis, zu meiner Forschungstätigkeit und zu den von mir betreuten wissenschaftlichen Arbeiten (Bachelor- und Masterarbeiten sowie Promotionen). Darüber hinaus werden hier für Nachwuchswissenschaftler:innen Hilfsmittel zum wissenschaftlichen Arbeiten angeboten.
            </Text>
            <CardFooter pl='0'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zur Wissenschaft ...
              </Button>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} overflow='hidden' variant='outline'>
        <Image
            src='/images/card-images/card-images-Seite002.jpg'
            alt='Abbildung zur Wissenschaft'
            className={style.cardImg}
          />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Wissenschaft</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Links zu Informationen zur institutionellen Musiktheorie und zu meinem Verständnis als Fachwissenschaftler.
            </Text>
            <CardFooter pl='0'>
              <Button variant='solid' className={style.cardButtonSize}>
                Zur Wissenschaft ...
              </Button>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>
    </>
  )
}

Wissenschaft.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Wissenschaft;