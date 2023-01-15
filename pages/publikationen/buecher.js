import Head from 'next/head'
import Link from 'next/link'
import style from './books.module.css'
import { Gentium_Book_Basic, Inter } from '@next/font/google'
import Footer from '../components/footer'
import publicationData from '../../data/books.json'
import { Container, Image, Table, Breadcrumb, Header } from 'semantic-ui-react'


export default function Buecher() {
  return (
    <>
      <Head>
        <title>Publikationen</title>
        <meta name="description" content="Publikationsliste | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className={style.main}>
        <Container>
          <Header as='h1'>Bücher</Header>
          <div className='bcs'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link href="/">Home</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen">Publikationen</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>Artikel</Breadcrumb.Section>
            </Breadcrumb>
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Abbildung</Table.HeaderCell>
                <Table.HeaderCell>Aufsätze (Open Access, in Verlagen erschienen)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                publicationData.map((book, index) =>
                  <Table.Row key={index}>
                    <Table.Cell>
                      {!book.link && <Image src={book.image} />}
                      {book.link && <Image as='a' src={book.image} href={book.link} target='_blank' />}
                    </Table.Cell>
                    <Table.Cell><i>{book.head}</i>
                      {book.tail ? '. ' + book.tail : ''}
                      {', ' + book.location + ' ' + book.year}.
                    </Table.Cell>
                  </Table.Row>
                )
              }
            </Table.Body>
          </Table>
        </Container>
      </div>
    </>
  )
}