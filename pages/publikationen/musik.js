import Head from 'next/head';
import Layout from "../components/layout";
import PageHeader from '../components/pagehaeder';
import ShortUniqueId from 'short-unique-id';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

import books from '../../data/musik.json';

const uid = new ShortUniqueId()

const options = {
  title: 'Musik',
  description: 'Hier finden Sie selbstständige Publikationen, über die ich Kompositionen oder Arrangements unter einer Creative-Commons-Lizenz im Selbstverlag veröffentlicht habe.',
  filter: 'publikationen',
  slug: '/publikationen/musik'
}

const Musik = () => {
  return (
    <>
      <Head>
        <title>OpenBooks</title>
        <meta name="description" content="OpenBooks | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />
      <TableContainer>
        <Table variant='simple' whiteSpace='wrap'>
          <TableCaption>Openbooks (Open Educational Resources) von Ulrich Kaiser</TableCaption>
          <Thead>
            <Tr>
              <Th>Abbildung</Th>
              <Th>Bibliographische Angabe</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              books.map(musik => {
                return <Tr key={uid.seq()}>
                  <Td>
                    {musik.link ?
                      <a href={musik.link} target='_blank'><img src={musik.image} /></a> :
                      <img src={musik.image} />
                    }
                  </Td>
                  <Td>
                    <i>
                      {musik.title}
                      {musik.subtitle ? '. ' + musik.subtitle : ''}
                    </i>
                      {musik.details ? ' ' + musik.details + ', ' : ', '}
                      {musik.location + ' ' + musik.year + '.'}
                    <span>{ }</span>
                  </Td>
                </Tr>
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

Musik.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Musik;