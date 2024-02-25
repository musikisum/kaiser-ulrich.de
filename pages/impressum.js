import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Center, Text, Divider, Box, Link } from '@chakra-ui/react';

const options = {
  title: 'Impressum',
  filter: 'impressum',
  slug: '/impressum'
}

export default function Formales() {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Impressum | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />
    <Box bg='#FFF8EA' p='40px'>
      <Center fontSize='lg' fontWeight='bold'>
        Prof. Dr. Ulrich Kaiser<br/>
        Birkenstr. 39c<br />
        85757 Karlsfeld<br/>
        Telefon: 089/289-27873<br/>
        E-Mail: kontakt[äd]kaiser-ulrich.de
      </Center>
      <Divider mt='20px' mb='20px' />
      <Text>
        <b>Hinweis:</b> Die Elemente der meisten Grafiken auf dieser Website (einschließlich der ›<i>Schule</i>‹ auf der <Link href='/' className='underline'>Landing-Page</Link>) hat Mani Vieregg von <a href='https://www.vieregg-design.de/' className='underline'>VIEREGG Design</a> im Rahmen Ihrer Arbeiten für die <a href='https://openmusic.academy' className='underline'>Open Music Academy (OMA)</a> erstellt und auf dieser Plattform unter der Creative-Commons-Lizenz CC0 <a href='https://openmusic.academy/docs/fRGMepfbbVvekmWvdEtQFx/' className='underline'>veröffentlicht</a>.
      </Text>  
    </Box>      
  </>
}

Formales.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
