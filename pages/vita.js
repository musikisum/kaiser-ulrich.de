import _ from 'lodash'
import Head from 'next/head'
import { useReducer } from "react"
import Footer from './components/footer'
import { Container, Breadcrumb, Header, Button, Icon, Table } from 'semantic-ui-react'

import vitaData from '../data/vita.json'
import style from './index.module.css'

function vitaTableReducer(state, action) {
    if (state.column === action.column) {
      return {
        ...state,
        data: state.data.slice().reverse(),
        direction: state.direction === 'ascending' ? 'descending' : 'ascending',
      }
    }
    return {
      column: action.column,
      data: _.sortBy(state.data, [action.column]),
      direction: 'ascending',
    }
}

export default function Vita() {
  
  const [state, dispatch] = useReducer(vitaTableReducer, { column: null, data: vitaData, direction: null })
  const { column, data, direction } = state

  return (
    <>
      <Head>
        <title>Vita</title>
        <meta name="description" content="Vita | Ulrich Kaiser" />
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
          <Header as='h1'>Vita</Header>
          <Container>
            Lebenslauf
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
              <Breadcrumb.Section>Vita</Breadcrumb.Section>
            </Breadcrumb>
          </div>
        </Container>
        <Container>
          <Table sortable celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  sorted={column === 'id' ? direction : null}
                  onClick={() => dispatch({ column: 'id' })}
                >                  
                  Jahr
                </Table.HeaderCell>
                <Table.HeaderCell>
                  Ereignis
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map(({ id, year, item }) => (
                <Table.Row key={id}>
                  <Table.Cell>{year}</Table.Cell>
                  <Table.Cell>{item}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Container>
        <Footer />
      </div>
    </>
  )
}