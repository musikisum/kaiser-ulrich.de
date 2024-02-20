import Head from 'next/head';
import Layout from './components/layout';
import PageHeader from './components/pagehaeder';
import { Center, Stack, Heading, Text, Card, Image, CardBody, CardFooter, Button, Link } from '@chakra-ui/react';

const options = {
  title: 'Impressum ...',
  filter: 'impressum',
  slug: '/impressum'
}

const Formales = () => {
  return <>
    <Head>
      <title>Formales</title>
      <meta name="description" content="Formales | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <PageHeader options={ options } />
    <Center bg='#FFF8EA'>
      <Center padding='40px' fontSize='lg' fontWeight='bold'>
        Prof. Dr. Ulrich Kaiser<br/>
        Birkenstr. 39c<br />
        85757 Karlsfeld<br/>
        Telefon: 089/289-27873<br/>
        E-Mail: kontakt[at,]kaiser-ulrich.de
      </Center>    
    </Center> 
  </>
}

Formales.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Formales;