import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import dateFormat from 'dateformat'
import ShortUniqueId from 'short-unique-id'
import { Container, Breadcrumb, Header, Button, Icon, Grid } from 'semantic-ui-react'

import style from './index.module.css'

import booksData from '../../data/books.json'
import musicData from '../../data/music.json'
import articleData from '../../data/articles.json'
import musikanalyseNet from '../../data/summary.json'

const uid = new ShortUniqueId();

function CompareDates(date1, date2) {
  const d1 = Date.parse(date1)
  const d2 = Date.parse(date2)
  if(d1 > d2) {
    return 1
  } else if(d2 > d1) {
    return -1
  } else {
    return 0
  }
}

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
          <Container>
            Auf dieser Seite finden Sie eine (hoffentlich) vollständige Liste der Publikationen von Ulrich Kaiser. In der Publikationsliste finden Sie sowohl die selbständigen Publikationen und Artikel, die in Verlagen Publiziert worden sind, als auch Veröffentlichungen, die nach 2013 ohne eine Bindung an Verlage veröffentlicht worden sind. Noch nicht in die Liste aufgenommen, jedoch geplant ist auch eine Übersicht über veröffentlichte Videobeiträge.    
          </Container>
          <Container textAlign='right' className={style.backButton}>
            <Button animated as='a' href='/'>
              <Button.Content visible>zurück</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Container>
          <div className={style.searchOptions}>
            <div className={style.searchOptionsText}>Oder suchen Sie nur nach:</div>
            <Breadcrumb>
              <Breadcrumb.Section link><Link href="/publikationen/buecher">Büchern</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/artikel">Artikeln</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/tutorials">Tutorials</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/musik">Musik</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen/verschiedenes">Gelegenheiten</Link></Breadcrumb.Section>              
            </Breadcrumb> 
            <div className={style.searchOptionsQuestionmark}>?</div>    
          </div>

          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='book' size='big' /> Bücher & Hefte
            </Header>
          </div>
          <Grid divided='vertically'>
            {
              booksData.map(book => {
                return <Grid.Row columns={2} key={uid.seq()}>
                  <Grid.Column width={2}>
                    <Link href={book.link}><Icon name='book' size='big' /></Link>
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Link href={book.link}><i>{book.head}</i></Link>, <span>{book.tail}</span>, <span>{book.location}</span> <span>{book.year}</span>.
                  </Grid.Column>
                </Grid.Row>
              })
            }
          </Grid>
          
          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
            <Icon name='file alternate outline' size='big' /> Artikel
            </Header>
          </div>
          <Grid divided='vertically'>
            {
              articleData.map(article => {
                return <Grid.Row columns={2} key={uid.seq()}>
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

          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='music' size='big' /> Musik
            </Header>
          </div>         
          <Grid divided='vertically'>
            {
              musicData.map(sheet => {
                return <Grid.Row columns={2} key={uid.seq()}>
                  <Grid.Column width={2}>
                    <Link href={sheet.link}><Icon name='music' size='big' /></Link>
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Link href={sheet.link}><i>{sheet.head}</i></Link>, <span>{sheet.tail}</span>, <span>{sheet.location}</span> <span>{sheet.year}</span>.
                  </Grid.Column>
                </Grid.Row>
              })
            }
          </Grid>

          <div className={style.entryTypeWrapper}>
            <Header as='h2' className={style.entryType}>
              <Icon name='globe' size='big' /> Tutorials (online)
            </Header>
          </div>
          <Grid divided='vertically'>
            {
              musikanalyseNet.tutorials.sort((d1, d2) => CompareDates(d1, d2)).map(tutorial => {
                return <Grid.Row columns={2} key={uid.seq()}>
                  <Grid.Column width={2}>
                    <Link href={tutorial.link}><Icon name='globe' size='big' /></Link>
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Link href={tutorial.link}><i>{tutorial.title}</i></Link>, <span>{tutorial.abstract}<br/>
                      Quelle: <Link href='https://musikanalyse.net'>musikanalyse.net</Link></span>, letzte Aktualisierung: <span>{dateFormat(Date.parse(tutorial.modified), 'hh.mm.yyyy')}</span>
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
