import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'
import { Container, Breadcrumb, Header, Button, Icon, Card, Image } from 'semantic-ui-react'

import style from './index.module.css'

export default function Index() {
  return (
    <>
      <Head>
        <title>Wissenschaft</title>
        <meta name="description" content="Wissenschaft | Ulrich Kaiser" />
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
          <Header as='h1'>Wissenschaft</Header>
          <Container>
            Auf dieser Seite finden Sie Links zu Informationen zur institutionellen Musiktheorie, zu meinem Wissenschaftsverständnis, zu den von mir betreuten wissenschaftlichen Arbeiten sowie zu meiner Forschungstätigkeit. Darüber hinaus werden hier Machwuchswissenschaftler:innen Hilfsmittel zum wissenschaftlichen Arbeiten angeboten.    
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
              <Breadcrumb.Section>Wissenschaft</Breadcrumb.Section>
            </Breadcrumb>
          </div>
          <Container>
            <Card.Group>
              <Card href='/wissenschaft/musiktheorie'>
                <Image src='/images/card-images/card-images-Seite002.jpg' wrapped />
                <Card.Content>
                  <Card.Header>Musiktheorie</Card.Header>
                  <Card.Meta>
                    <span className='date'>Gedanken & Fachverständnis</span>
                  </Card.Meta>
                  <Card.Description>
                    Hier finden Sie einige Gedanken und Erläuterungen zu meinem Fachverständnis der institutionellen Musiktheorie.
                  </Card.Description>
                </Card.Content>
              </Card>
              <Card href='/wissenschaft/forschung'>
                <Image src='/images/card-images/card-images-Seite001.jpg' wrapped />
                <Card.Content>
                  <Card.Header>Forschung</Card.Header>
                  <Card.Meta>
                    <span className='date'>Interessen & Projekte</span>
                  </Card.Meta>
                  <Card.Description>
                    Interessieren Sie sich für meine aktuellen Projekte? Hier finden Sie einige Informationen zum Thema ...
                  </Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
          
          <hr className={style.footerLine} />
          <Footer className='footer' />

        </Container>
      </div>
    </>
  )
}
