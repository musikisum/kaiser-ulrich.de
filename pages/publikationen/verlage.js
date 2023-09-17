import Head from 'next/head';
import Layout from "../components/layout";
import PageHeader from '../components/pagehaeder';
import ShortUniqueId from 'short-unique-id';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

import style from './index.module.css'

import books from '../../data/verlage.json'

const uid = new ShortUniqueId()

const options = {
  title: 'Bücher & Hefte',
  description: 'Hier finden Sie selbstständige Publikationen, die in den Verlagen Bärenreiter und Klett in den Jahren von 1998 bis 2007 veröffentlicht worden sind.',
  filter: 'publikationen',
  slug: '/publikationen/verlage'
}

const Verlage = () => {
  return (
    <>
      <Head>
        <title>Verlage</title>
        <meta name="description" content="Verlagspublikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Selbstständige Verlagspublikationen von Ulrich Kaiser</TableCaption>
          <Thead>
            <Tr>
              <Th>Abbildung</Th>
              <Th>Bibliographische Angabe</Th>
            </Tr>
          </Thead>
          <Tbody>
           
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

Verlage.getLayout = function getLayout(page) {
  return (
    <Layout text='Prof. Dr. Ulrich Kaiser – OER / Musiktheorie / Multimedia'>
      {page}
    </Layout>
  )
}

export default Verlage;