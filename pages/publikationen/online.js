import Link from 'next/link'
import onlineData from '../../data/online.json'
import { Image, Table, Breadcrumb, Container, Button, Header, Icon } from 'semantic-ui-react'
import { wikimedia1, wikimedia2 } from '../../data/variables.js'

import style from './index.module.css'

export default function Online() {
  return (
    <div className={style.main}>
      <Container>
        <Header as='h1'>Gelegenheiten (online)</Header>
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
          <Breadcrumb.Section active>Gelegenheiten (online)</Breadcrumb.Section>
        </Breadcrumb>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Abbildung</Table.HeaderCell>
              <Table.HeaderCell>Veröffentlichungen (online) unter Open Access</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              onlineData.map((article, index) =>
                <Table.Row key={index}>
                  <Table.Cell>
                    <Image as='a' src={article.image} href={article.link} />
                  </Table.Cell>
                  <Table.Cell>
                    &raquo;<i>{article.title}</i>&laquo;, {article.details}.
                  </Table.Cell>                
                </Table.Row>
              )
            }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>         
                <p dangerouslySetInnerHTML={{ __html: wikimedia1 + wikimedia2 }} />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>      
      </Container >
    </div>

  )
}