import useSWR from 'swr';
import Head from 'next/head';
import Layout from "../components/layout";
import PageHeader from '../components/pagehaeder';
import ShortUniqueId from 'short-unique-id';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

import books from '../../data/verlage.json';

import style from "./index.module.css";

const uid = new ShortUniqueId()
const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: 'Bücher & Hefte',
  description: 'Hier finden Sie selbstständige Publikationen, die in den Verlagen Bärenreiter und Klett in den Jahren von 1998 bis 2007 veröffentlicht worden sind. Seit der Veröffentlichung meiner Mozart-Monographie (Dissertation) arbeite ich nur noch mit Verlagen zusammen, die einer gleichzeitigen Veröffentlichung als Open-Access-Publikation oder als Open Educational Resource zustimmen.',
  filter: 'publikationen',
  slug: '/publikationen/verlage'
}

const Verlage = () => {

  const { data, error } = useSWR('/data/verlage.json', fetcher);

  return (
    <>
      <Head>
        <title>Verlage</title>
        <meta name="description" content="Verlagspublikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      { data && <TableContainer>
        <Table variant='unstyled' whiteSpace='wrap'>
          <TableCaption>Selbstständige Verlagspublikationen von Ulrich Kaiser</TableCaption>
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
                    { book.link ?
                      <a href={book.link} target='_blank'>
                        <img src={book.image} />
                      </a> :
                      <img src={book.image} />
                    }
                  </Td>  
                  <Td> 
                    <div className={style.biblio}>
                      <i>
                        {book.title}
                        {book.subtitle ? '. ' + book.subtitle : ''}                   
                      </i>
                      {book.details ? ' ' + book.details + ', ' : ', '}
                      {book.location + ' ' + book.year + '.'}
                    </div>
                  </Td>
                </Tr>         
             })
            }
          </Tbody>
        </Table>
      </TableContainer> }
    </>
  )
}

Verlage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Verlage;