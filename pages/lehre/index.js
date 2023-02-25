import Head from 'next/head'
import Footer from '../components/footer'
import { Container, Breadcrumb, Header, Button, Icon, Card, Image } from 'semantic-ui-react'

import testdata from '../../data/seminare/2018-ws.json'
import style from '../index.module.css'

export default function Index() {

  return (
    <>
      <Head>
        <title>Wissenschaft</title>
        <meta name="description" content="Lehre | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className={style.handyBackButton}>
        <Button animated as='a' href='/'>
          <Button.Content visible>zurück</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
      </div>
      <div className={style.main}>
        <Container>
          <Header as='h1'>Lehre</Header>
          <Container>
            Auf dieser Seite finden Sie Links zu Informationen zur Lehre.    
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
            <Breadcrumb>
              <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section>Lehre</Breadcrumb.Section>
            </Breadcrumb>
          </div>
          <Container>
            <h2>{testdata.semester}</h2>
              {testdata.unterricht.map(seminar => {
                return <div key={seminar.Id} style={{ 'marginTop': '20px' }}>
                  <p style={{ 'fontWeight': 'bold', 'fontSize': '1.5em' }}><span>{seminar.Title + ', ' + seminar.DayOfWeek + ', ' + seminar.Time}</span></p>
                  <p><b>Beschreibung: </b>{seminar.Description}</p>
                </div>              
              })}
          </Container>
          
          <hr className={style.footerLine} />
          <Footer className='footer' />

        </Container>
      </div>
    </>
  )
}
