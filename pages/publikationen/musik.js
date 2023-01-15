import Link from 'next/link'
import ShortUniqueId from 'short-unique-id'
import { Container, Header, Grid, Breadcrumb, Icon, Button } from 'semantic-ui-react'

import style from './index.module.css'

import musicData from '../../data/music.json'
import Footer from '../components/footer'

const uid = new ShortUniqueId();

export default function Musik() {
  return (<>
    <div className={style.main}>
      <Container>
        <Header as='h1'>Musik</Header>
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
          <Breadcrumb.Section active>Musik</Breadcrumb.Section>
        </Breadcrumb>
        <div className={style.entryTypeWrapper}>
          <Header as='h2' className={style.entryType}>
            <Icon name='music' size='big' /> Noten
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
      </Container>
    </div>
    <Footer />
    </>
  );
}