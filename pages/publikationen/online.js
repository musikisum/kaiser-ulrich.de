import Link from 'next/link'
import onlineData from '../../data/online.json'
import { Table, Breadcrumb, Container, Button, Header, Icon } from 'semantic-ui-react'

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
          <Breadcrumb.Section href='/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section href='/publikationen'>Publikationen</Breadcrumb.Section>
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
                    {article.link ? <Link href={article.link}><Icon name='file alternate outline' size='big' /></Link> : <Icon name='file alternate outline' size='big' />}
                  </Table.Cell>
                  <Table.Cell>
                    {article.link ? <Link href={article.link}>&raquo;{article.title}&laquo;</Link> : <span>&raquo;{article.title}&laquo;</span>}
                    <span>, in:</span> <i>{article.parent}</i>
                    {article.additional ? ' ' + article.additional : ''}
                    {article.issue ? ' ' + article.issue + '' : ''}
                    {article.details ? ', ' + article.details : ''}
                  </Table.Cell>                
                </Table.Row>
              )
            }
          </Table.Body>
        </Table>      
      </Container >
    </div>
  )
}