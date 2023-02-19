import Link from 'next/link'
import ShortUniqueId from 'short-unique-id'
import { Container, Header, Grid, Breadcrumb, Icon, Image, Button } from 'semantic-ui-react'

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
          <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section href='/publikationen'>Publikationen</Breadcrumb.Section>
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
                  {!sheet.link && <Image src={sheet.image} />}
                  {sheet.link && <Image as='a' src={sheet.image} href={sheet.link} target='_blank' />}
                </Grid.Column>
                <Grid.Column width={14}>
                  <div><b>Titel:</b> <i>{sheet.title}</i></div>
                  {sheet.subtitle && <div><b>Untertitel:</b> <i>{sheet.subtitle}</i></div>}
                  {sheet.details && <div><b>Zusätze:</b> {sheet.details}</div>}
                  <div><b>Ort:</b> {sheet.location}</div>
                  <div><b>Jahr:</b> {sheet.year}</div>  
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