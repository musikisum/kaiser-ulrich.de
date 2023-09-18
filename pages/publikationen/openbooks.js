import Head from 'next/head';
import Layout from "../components/layout";
import PageHeader from '../components/pagehaeder';
import ShortUniqueId from 'short-unique-id';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

import books from '../../data/openbooks.json';

const uid = new ShortUniqueId()

const options = {
  title: 'OpenBooks',
  description: 'Hier finden Sie selbstständige Publikationen, die seit 2009 als OpenBook im Selbstverlag veröffentlicht worden sind. Seit 2014 wurden diese Publikationen mit der Lizenz CC BY-SA oder CC BY veröffentlicht bzw. als Open Educational Resource. Wenn nicht anders angegeben, können alle OpenBooks heute unter der Lizenz CC BY-SA genutzt werden.',
  filter: 'publikationen',
  slug: '/publikationen/openbooks'
}

const OpenBooks = () => {
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
              books.map(book => {
                return <Tr key={uid.seq()}>
                  <Td>
                    {book.link ?
                      <a href={book.link} target='_blank'><img src={book.image} /></a> :
                      <img src={book.image} />
                    }
                  </Td>
                  <Td>
                    <i>
                      {book.title}
                      {book.subtitle ? '. ' + book.subtitle : ''}
                    </i>
                      {book.details ? ' ' + book.details + ', ' : ', '}
                      {book.location + ' ' + book.year + '.'}
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

OpenBooks.getLayout = function getLayout(page) {
  return (
    <Layout text='Prof. Dr. Ulrich Kaiser – Open Educational Resources / Multimedia / Musiktheorie'>
      {page}
    </Layout>
  )
}

export default OpenBooks;