import Head from 'next/head'
import Footer from '../components/footer'
import { Container, Breadcrumb, Header, Button, Icon } from 'semantic-ui-react'

import style from './index.module.css'

export default function Musiktheorie() {
  return (
    <>
      <Head>
        <title>Musiktheorie</title>
        <meta name="description" content="Musiktheorie | Ulrich Kaiser" />
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
          <Header as='h1'>Musiktheorie</Header>
          <Container>
            Hier etwas zur Musiktheorie ...
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
              <Breadcrumb.Section href='/wissenschaft'>Wissenschaft</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section>Musiktheorie</Breadcrumb.Section>
            </Breadcrumb>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}