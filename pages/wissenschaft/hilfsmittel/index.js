import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
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
          src='/images/card-images/hilfsmittel-Seite002.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Herausgeberinnen & Herausgeber</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie meine Meinung zur Angabe einer Herausgeberschaft.
            </Text>
            <CardFooter pl='0'>
              <Link href='/wissenschaft/hilfsmittel/herausgeber'>
                <Button variant='solid' className={style.cardButtonSize}>
                  Zu meiner Auffassung ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      {/* <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite003.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Recherchieren</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zum Recherchieren im Rahmen des wissenschaftlichen Arbeitens.
            </Text>
            <CardFooter pl='0'>
              <Link href='/wissenschaft/hilfsmittel/recherche'>
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
          src='/images/card-images/hilfsmittel-Seite004.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Zitationsstile</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zu verschiedenen Zitationsstilen.
            </Text>
            <CardFooter pl='0'>
              <Link href='/wissenschaft/hilfsmittel/zitieren'>
                <Button variant='solid' className={style.cardButtonSize}>
                  Zu den Zitationsstilen ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card>

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite005.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>WebWiZi</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie ein Tool, um die Formatierungen der Zitierstile besser zu verstehen.
            </Text>
            <CardFooter pl='0'>
              <Link href='/wissenschaft/hilfsmittel/webwizi'>
                <Button variant='solid' className={style.cardButtonSize}>
                  Zum Tool (WebWiZi) ...
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </CardBody>
      </Card> */}

      <Card direction={{ base: 'column', md: 'row' }} mb='20px' overflow='hidden' variant='outline'>
        <Image
          src='/images/card-images/hilfsmittel-Seite006.jpg'
          alt='Abbildung zur Wissenschaft'
          className={style.cardImg}
        />
        <CardBody className={style.cardBodyMl}>
          <Stack>
            <Heading fontSize='xl'>Urheberrecht & Wissenschaft</Heading>
            <Text fontSize='l'>
              Auf dieser Seite finden Sie Informationen zum Urheberrecht.
            </Text>
            <CardFooter pl='0'>
              <Link href='/wissenschaft/hilfsmittel/urheberrecht'>
                <Button variant='solid' className={style.cardButtonSize}>
                  Infos zum Urheberrecht ...
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
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}