import Link from 'next/link'
import dateFormat from 'dateformat'
import ShortUniqueId from 'short-unique-id'
import { Container, Header, Grid, Breadcrumb, Icon, Button } from 'semantic-ui-react'

import style from './index.module.css'

import musikanalyseNet from '../../data/summary.json'

const uid = new ShortUniqueId();
const url = 'https://musikanalyse.net'

function CompareDates(date1, date2) {
  const d1 = Date.parse(date1)
  const d2 = Date.parse(date2)
  if (d1 > d2) {
    return 1
  } else if (d2 > d1) {
    return -1
  } else {
    return 0
  }
}

export default function Tutorials() {
  return (<>
    <div className={style.main}>
      <Container>
        <Header as='h1'>Tutorials (online)</Header>
        <Container textAlign='right' className={style.backButton}>
          <Button animated as='a' href='/publikationen/'>
            <Button.Content visible>zurück</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow left' />
            </Button.Content>
          </Button>
        </Container>
        <Breadcrumb>
          <Breadcrumb.Section link><Link href="/">Home</Link></Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link><Link href="/publikationen">Publikationen</Link></Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>Tutorials</Breadcrumb.Section>
        </Breadcrumb>
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
                  <Link href={url + tutorial.link}><Icon name='globe' size='big' /></Link>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Link href={url + tutorial.link}><i>{tutorial.title}</i></Link>, <span>{tutorial.abstract}<br />
                    Quelle: <Link href='https://musikanalyse.net'>musikanalyse.net</Link></span>, letzte Aktualisierung: <span>{dateFormat(Date.parse(tutorial.modified), 'hh.mm.yyyy')}</span>
                </Grid.Column>
              </Grid.Row>
            })
          }
        </Grid>
      </Container>
    </div>
  </>);
}