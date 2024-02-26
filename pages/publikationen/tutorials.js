import Head from 'next/head';
import dateFormat from 'dateformat'
import Layout from '../components/layout';
import data from '../../data/summary.json';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { List, ListItem, ListIcon, Text, Link } from '@chakra-ui/react';

import style from './index.module.css';

const uid = new ShortUniqueId();
const url = 'https://musikanalyse.net';

const options = {
  title: 'Tutorials',
  description: 'Hier finden Sie Online-Tutorials, die bis 2021 auf der Domain musikanalyse.net veröffentlicht worden sind. Die Tutorials auf dieser Domain werden nach und nach auf der Open Music Academy als Open Educational Resource (OER) für die kollaborative Zusammenarbeit freigegeben.',
  filter: 'publikationen',
  slug: '/publikationen/tutorials'
}

export default function Tutorials() {

  return (
    <>
      <Head>
        <title>Tutorials</title>
        <meta name="description" content="Tutorials | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={options} />
      { 
        data && <Text mb='10'>Bis 2021 wurden { data.tutorials.length } Tutorials auf der Domain musikanalyse.net veröffentlicht.</Text> 
      }
      { data && <List m='12px' spacing={3}>
        {
          data.tutorials.sort((a, b) => { return new Date(b.modified) - new Date(a.modified) }).map(tutorial => {
            return (
              <ListItem key={uid.seq()}>
                <div className={style.listItemEntry}>
                  { <Link href={tutorial.link} isExternal><ListIcon as={CheckCircleIcon} color='green.500' /></Link> }
                  <div>
                    <Link href={url + tutorial.link} isExternal><i>{tutorial.title}</i> <ExternalLinkIcon /></Link>, <span>{tutorial.abstract}<br /> 
                    Quelle: <a href={url}>musikanalyse.net</a></span>, letzte Aktualisierung: <span>{dateFormat(Date.parse(tutorial.modified), 'hh.mm.yyyy')}</span>
                  </div>
                </div>
              </ListItem>)
          })
        }
      </List>
    }
    </>
  );
}

Tutorials.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={true} showheaven={true}>
      {page}
    </Layout>
  )
}
