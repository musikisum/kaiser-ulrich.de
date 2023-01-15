import Head from 'next/head'
import Link from 'next/link'
import style from './index.module.css'
import { Gentium_Book_Basic, Inter } from '@next/font/google'
import Footer from '../components/footer'
import booksData from '../../data/books.json'
import articleData from '../../data/articles.json'
import { Container, Image, Table, Breadcrumb, Header, Button, Icon, Grid } from 'semantic-ui-react'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
    <>
      <Head>
        <title>Publikationen</title>
        <meta name="description" content="Publikationsliste | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div>
        
      </div>
      <div className={style.main}>
        <Container>
          <Header as='h1'>Publikationsliste</Header>
          <Container textAlign='right' className={style.backButton}>
            <Button animated as='a' href='/'>
              <Button.Content visible>zurück</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Container>
          <div className={style.bcsBottom}>
            <Breadcrumb>
              <Breadcrumb.Section link><Link href="/publikationen/buecher">Bücher</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/artikel">Artikel</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/tutorials">Tutorials</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/musik">Musik</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/verschiedenes">Verschiedenes</Link></Breadcrumb.Section>              
            </Breadcrumb>            
          </div>
          <Header as='h2' className={style.entryType}>Bücher</Header>
          <Grid divided='vertically'>
            {
              booksData.map((book, index) => {
                return <Grid.Row columns={2} key={book.head}>
                  <Grid.Column width={2}>
                    <Link href={book.link}><Icon name='book' size='big' /></Link>
                    {/* <Icon name='file alternate outline' size='big' /> */}
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Link href={book.link}><i>{book.head}</i></Link>, <span>{book.tail}</span>, <span>{book.location}</span> <span>{book.year}</span>.
                  </Grid.Column>
                </Grid.Row>
              })
            }
          </Grid>
          
          <Header as='h2' className={style.entryType}>Artikel</Header>
          <Grid divided='vertically'>
            {
              articleData.map(article => {
                return <Grid.Row columns={2} key={article.head}>
                  <Grid.Column width={2}>
                    {article.link ? <Link href={article.link}><Icon name='file alternate outline' size='big' /></Link> : <Icon name='file alternate outline' size='big' />}
                  </Grid.Column>
                  <Grid.Column width={14}>
                    {article.link ? <Link href={article.link}>&raquo;{article.title}&laquo;</Link> : <span>&raquo;{article.title}&laquo;</span>}
                    <span>, in:</span> <i>{article.parent}</i>
                    {article.additional ? ' ' + article.additional : ''}
                    {article.issue ? ' ' + article.issue + '' : ''}
                    {', ' + article.details}
                  </Grid.Column>
                </Grid.Row>
              })
            }
          </Grid>
          
          <hr className={style.footerLine} />
          <Footer className='footer' />  

        </Container>
      </div>
    </>
  )
}
