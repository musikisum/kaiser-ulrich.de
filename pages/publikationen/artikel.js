import Link from 'next/link'
import Head from 'next/head'
import ShortUniqueId from 'short-unique-id'
import { Container, Header, Table, Breadcrumb, Icon, Button } from 'semantic-ui-react'

import style from './index.module.css'

import bookData from '../../data/articles.json'
import Footer from '../components/footer'

const uid = new ShortUniqueId();

export default function Artikel() {
  return (
    <>
      <Head>
        <title>Artikel</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className={style.main}>
        <Container>
          <Header as='h1'>Unselbständige Publikationen</Header>
          <Container textAlign='right' className={style.backButton}>
            <Button animated as='a' href='/publikationen/'>
              <Button.Content visible>zurück</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Container>
          <Breadcrumb>
            <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section href='/publikationen'>Publikationen</Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Artikel</Breadcrumb.Section>
          </Breadcrumb>
          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='book' size='big' /> Artikel (in Zeitschriften erschienen)
            </Header>
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
                bookData.map(article => {
                  return <Table.Row key={uid.seq()}>
                    <Table.Cell>
                      {article.link ? <Link href={article.link}><Icon name='file alternate outline' size='big' /></Link> : <Icon name='file alternate outline' size='big' />}                
                    </Table.Cell>
                    <Table.Cell>
                      {article.link ? <Link href={article.link}>&raquo;{article.title}&laquo;</Link> : <span>&raquo;{article.title}&laquo;</span>}
                      <span>, in:</span> <i>{article.parent}</i>
                      {article.additional ? ' ' + article.additional : ''}
                      {article.issue ? ' ' + article.issue + '' : ''}
                      {article.details ? ', ' + article.details : ''}
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
  );
}