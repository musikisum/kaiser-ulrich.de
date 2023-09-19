import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/layout";
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'

import style from './index.module.css';

import online from '../../data/gelegenheiten.json';

const uid = new ShortUniqueId()

const options = {
  title: 'Gelegenheiten',
  description: 'Hier finden Sie Online-Publikationen, für die sich eine Gelegenheit ergab, die jedoch nie in einer gedruckten Form erschienen sind.',
  filter: 'publikationen',
  slug: '/publikationen/gelegenheiten'
}

const Gelegenheiten = () => {
  return (
    <>
      <Head>
        <title>Gelegenheiten</title>
        <meta name="description" content="Verlagspublikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <List m='12px' spacing={3}>
        {
          online.map(article => {
            return (
            <ListItem key={uid.seq()}>
              <div className={style.articleEntry}>                  
                {article.link ? 
                  <a href={article.link}><ListIcon as={CheckCircleIcon} color='green.500' /></a> : 
                  <ListIcon mt='1' as={NotAllowedIcon} color='red.500' /> 
                }
                <div>
                  {article.link && !article.html ? <a href={article.link} target='_blank'>&raquo;{article.title}&laquo;</a> : <span>&raquo;{article.title}&laquo;</span>}
                  {article.details ? ', ' + article.details : ''}
                  {'. '}
                  {article.html && <Link href={article.link}>Zum Artikel ...</Link>}
                </div>
              </div>
            </ListItem>)
          })
        }
      </List>
    </>
  )
}

Gelegenheiten.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Gelegenheiten;