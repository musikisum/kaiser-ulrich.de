import Head from 'next/head'
import { useState } from 'react'
import Footer from '../components/footer'
import { Container, Breadcrumb, Header, Button, Icon, Accordion, Popup } from 'semantic-ui-react'

import testdata from '../../data/unterricht.json'
import styles from '../index.module.css'

function handleClick(index, activeIndex, setActiveIndex) {
  index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
}

export default function Index() {

  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <>
      <Head>
        <title>Unterricht</title>
        <meta name="description" content="Unterricht | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className={styles.handyBackButton}>
        <Button animated as='a' href='/lehre'>
          <Button.Content visible>zurück</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow left' />
          </Button.Content>
        </Button>
      </div>
      <div className={styles.main}>
        <Container>
          <Header as='h1'>Unterricht</Header>
          <Container>
            Auf dieser Seite finden Sie Informationen zu meinen Lehrveranstaltungen an der <a href='https://hmtm.de/' target='blank'>Hochschule für Musik und Theater München</a> (seit 2008).
          </Container>
          <Container textAlign='right' className={styles.backButton}>
            <Button animated as='a' href='/lehre'>
              <Button.Content visible>zurück</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Container>
          <div className={styles.searchOptions}>
            <Breadcrumb>
              <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section href='/lehre'>Lehre</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section>Unterricht</Breadcrumb.Section>
            </Breadcrumb>
          </div>
          <Container>
            <Accordion fluid styled>
              {testdata.map((lehre, index) => {
                return <div key={index}>
                  {lehre.annotations ? <Popup content={lehre.annotations} trigger={
                    <Accordion.Title
                      active={index === activeIndex}
                      index={index}
                      onClick={() => handleClick(index, activeIndex, setActiveIndex) }
                    >
                    <Icon name='dropdown' />
                    {lehre.semester}
                    </Accordion.Title>} /> :
                    <Accordion.Title
                      active={index === activeIndex}
                      index={index}
                      onClick={() => handleClick(index, activeIndex, setActiveIndex) }
                    >
                      <Icon name='dropdown' />
                      {lehre.semester}
                    </Accordion.Title>}
                    <Accordion.Content active={index === activeIndex} className={styles.accordionContent}>
                      {lehre.unterricht.map((course, courseIndex) => {
                        return <div key={courseIndex} className={styles.courseContainer}>
                          <p className={styles.courseTitle}>{course.Title + ', ' + course.DayOfWeek + ' ' + course.Time}</p>
                          <p className={styles.courseDescription}>{course.Description}</p>
                        </div>
                      })}
                    </Accordion.Content>
                  </div>
              })}
            </Accordion>
          </Container>

          <hr className={styles.footerLine} />
          <Footer className='footer' />

        </Container>
      </div>
    </>
  )
}
