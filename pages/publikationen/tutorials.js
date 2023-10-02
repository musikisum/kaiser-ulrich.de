import Head from 'next/head';
import dateFormat from 'dateformat'
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { CheckCircleIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, Heading } from '@chakra-ui/react';

import style from './index.module.css';

import musikanalyseNet from '../../data/summary.json'

const uid = new ShortUniqueId();
const url = 'https://musikanalyse.net';

const options = {
  title: 'Tutorials',
  description: 'Hier finden Sie Online-Tutorials, die auf der Domain musikanalyse.net veröffentlicht worden sind. Alle Tutorials werden auf der Open Music Academy als Open Educational Resource (OER) für die kollaborative Zusammenarbeit freigegeben.',
  filter: 'publikationen',
  slug: '/publikationen/tutorials'
}

const Tutorials = () => {
  return (
    <>
      <Head>
        <title>Tutorials</title>
        <meta name="description" content="Tutorials | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={options} />
      <List m='12px' spacing={3}>
        {
          musikanalyseNet.tutorials.sort((a, b) => { return new Date(b.modified) - new Date(a.modified) }).map(tutorial => {
            return (
              <ListItem key={uid.seq()}>
                <div className={style.listItemEntry}>
                  { <a href={tutorial.link}><ListIcon as={CheckCircleIcon} color='green.500' /></a> }
                  <div>
                    <a href={url + tutorial.link}><i>{tutorial.title}</i></a>, <span>{tutorial.abstract}<br /> 
                    Quelle: <a href='https://musikanalyse.net'>musikanalyse.net</a></span>, letzte Aktualisierung: <span>{dateFormat(Date.parse(tutorial.modified), 'hh.mm.yyyy')}</span>
                  </div>
                </div>
              </ListItem>)
          })
        }
      </List>
    </>
  );
}

Tutorials.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Tutorials;