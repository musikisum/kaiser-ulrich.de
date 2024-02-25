import useSWR from 'swr';
import Head from 'next/head';
import Link from 'next/link';
import Layout from "../components/layout";
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { List, ListItem, ListIcon, Divider, Text } from '@chakra-ui/react';
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'

import style from './index.module.css';

const uid = new ShortUniqueId()
const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: 'Gelegenheiten',
  description: '',
  filter: 'publikationen',
  slug: '/publikationen/gelegenheiten'
}

export default function Gelegenheiten() {

  const { data, error } = useSWR('/data/gelegenheiten.json', fetcher);

  return (
    <>
      <Head>
        <title>Gelegenheiten</title>
        <meta name="description" content="Verlagspublikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <Text mb='10' ml='4'>Hier finden Sie Publikationen, für die sich eine Gelegenheit ergeben hat (Interviews, Newsletter-Beiträge, Online-Publikationen usw.). Meine in Zeitschriften und Büchern veröffentlichten Artikel finden Sie <Link href='/publikationen/artikel/' className='underline'>hier</Link>.</Text>
      <Divider mt='60px' mb='40px' h='1px' bg='gray' />

      { data && <List m='12px' spacing={3}>
        {
          data.map(article => {
            return (
            <ListItem key={uid.seq()}>
              <div className={style.listItemEntry}>                  
                {article.link ? 
                  <a href={article.link}><ListIcon as={CheckCircleIcon} color='green.500' /></a> : 
                  <ListIcon mt='1' as={NotAllowedIcon} color='red.500' /> 
                }
                <div>
                  {article.link && !article.html ? <a href={article.link} target='_blank'>&raquo;{article.title}&laquo;</a> : <span>&raquo;{article.title}&laquo;</span>}
                  {article.details ? ', ' + article.details : ''}
                  {'. '}
                  {article.html && <Link href={article.link} style={{ 'color': '#6e91a1', 'fontWeight': 'bold'}}>Zum Artikel ...</Link>}
                </div>
              </div>
            </ListItem>)
          })
        } 
      </List>}
    </>
  )
}

Gelegenheiten.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
