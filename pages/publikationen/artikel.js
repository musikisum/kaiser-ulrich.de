import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons';

import style from './index.module.css';

import articleData from '../../data/artikel.json';

const uid = new ShortUniqueId();

const options = {
  title: 'Artikel',
  description: 'Hier finden Sie Publikationen, die seit 1992 in Zeitschriften und Broschüren veröffentlicht worden sind.',
  filter: 'publikationen',
  slug: '/publikationen/artikel'
}

const Artikel = () => {
  return (
    <>
      <Head>
        <title>Artikel</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <List m='12px' spacing={3}>
        {
          articleData.map(article => {
            return (
            <ListItem key={uid.seq()}>
              <div className={style.articleEntry}>                  
                {article.link ? 
                  <a href={article.link}><ListIcon as={CheckCircleIcon} color='green.500' /></a> : 
                  <ListIcon mt='1' as={NotAllowedIcon} color='red.500' /> 
                }
                <div>
                  {article.link ? <a href={article.link}>&raquo;{article.title}&laquo;</a> : <span>&raquo;{article.title}&laquo;</span>}
                  <span>, in:</span> <i>{article.parent}</i>
                  {article.additional ? ' ' + article.additional : ''}
                  {article.issue ? ' ' + article.issue + '' : ''}
                  {article.details ? ', ' + article.details : ''}
                  {'.'}
                </div>
              </div>
            </ListItem>)
          })
        }
      </List>
    </>
  )
}

Artikel.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Artikel;