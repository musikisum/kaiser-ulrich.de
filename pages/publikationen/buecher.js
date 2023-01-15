import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import ShortUniqueId from 'short-unique-id'
import { Container, Image, Table, Breadcrumb, Header, Icon } from 'semantic-ui-react'

import style from './index.module.css'

import books from '../../data/books.json'

const uid = new ShortUniqueId();
const oer = books.filter(book => book.type === 'OER')
const publisher = books.filter(book => book.type === 'publisher') 

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
          <Header as='h1'>Selbständige Publikationen</Header>
          <div className='bcs'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link href="/">Home</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen">Publikationen</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>Bücher</Breadcrumb.Section>
            </Breadcrumb>
          </div>

          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='book' size='big' /> Bücher (in Verlagen erschienen)
            </Header>
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Abbildung</Table.HeaderCell>
                <Table.HeaderCell>Bibliographische Angabe</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                publisher.map(book => {
                  return <Table.Row key={uid.seq()}>
                    <Table.Cell>
                      {!book.link && <Image src={book.image} />}
                      {book.link && <Image as='a' src={book.image} href={book.link} target='_blank' />}
                    </Table.Cell>
                    <Table.Cell><i>{book.head}</i>
                      {book.tail ? '. ' + book.tail : ''}
                      {', ' + book.location + ' ' + book.year}.
                    </Table.Cell>
                  </Table.Row>
                })
              }
            </Table.Body>
          </Table>

          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='book' size='big' /> OpenBooks (OER)
            </Header>
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Abbildung</Table.HeaderCell>
                <Table.HeaderCell>Bibliographische Angabe</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                oer.map(book => {
                  return <Table.Row key={uid.seq()}>
                    <Table.Cell>
                      {!book.link && <Image src={book.image} />}
                      {book.link && <Image as='a' src={book.image} href={book.link} target='_blank' />}
                    </Table.Cell>
                    <Table.Cell><i>{book.head}</i>
                      {book.tail ? '. ' + book.tail : ''}
                      {', ' + book.location + ' ' + book.year}.
                    </Table.Cell>
                  </Table.Row>
                })
              }
            </Table.Body>
          </Table>
        </Container>
      </div>
      <Footer />
    </>
  )
}