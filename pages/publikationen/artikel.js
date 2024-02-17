import useSWR from 'swr';
import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { List, ListItem, ListIcon, Link } from '@chakra-ui/react';
import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons';

import style from './index.module.css';

const uid = new ShortUniqueId();
const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: 'Artikel',
  description: 'Hier finden Sie Publikationen, die seit 1992 in Zeitschriften und Broschüren veröffentlicht worden sind.',
  filter: 'publikationen',
  slug: '/publikationen/artikel'
}

const Artikel = () => {

  
  const { data, error } = useSWR('/data/articles.json', fetcher);

  return (
    <>
      <Head>
        <title>Artikel</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      {/* <Text mb='10' ml='4'>Es wurden { data.length } Artikel veröffentlicht:</Text> */}
      { data && <List m='12px' spacing={3}>
        {
          data.map(article => {
            return (
              <ListItem key={uid.seq()}>
                <div className={style.listItemEntry}>
                  {article.link ?
                    <Link href={article.link}><ListIcon as={CheckCircleIcon} color='green.500' /></Link> :
                    <ListIcon mt='1' as={NotAllowedIcon} color='red.500' />
                  }
                  <div>
                    {article.link ? <Link href={article.link}>&raquo;{article.title}&laquo;</Link> : <span>&raquo;{article.title}&laquo;</span>}
                    <span>, in:</span> <i>{article.parent}</i>
                    {article.additional ? ' ' + article.additional : ''}
                    {article.issue ? ' ' + article.issue + '' : ''}
                    {article.details ? ', ' + article.details : ''}
                    {'.'}
                  </div>
                </div>
              </ListItem>
            )
          })
        }
      </List>}
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