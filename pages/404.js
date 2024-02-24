import Head from 'next/head';
import Layout from './components/layout';
import ShortUniqueId from 'short-unique-id';
import { Heading, Text, Link } from '@chakra-ui/react';

import { sitemap, sitemapDictionary } from '../data/sitemap'; 

import style from './404.module.css';

const uid = new ShortUniqueId();

function getUrl(slug) {
  const head = sitemap.protocol + sitemap.domain;
  return head + slug;
} 

const Custom404 = () => {
  return <>
      <div className={style.main}>
        <Head>
          <title>Zur Person</title>
          <meta name="description" content="404 (not found) | Ulrich Kaiser" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/icon.png" />
        </Head>
        <Heading as='h3' className="headingH3">
          Ups, das tut mir leid ...
        </Heading>
        <Text bg='#ff9999' 
          pl='40px' 
          pr='40px' 
          pt='20px' 
          pb='20px' 
          m='40px 0'
          style={{'borderRadius': '10px'}}>
            <b>
              Beim Relaunch dieser Website sind anscheinen einige alte Adressen verloren gegangen. Die Inhalte habe ich allerdings (fast) vollständig übernommen. Können Sie anhand der Sitemap den gesuchte Seitebzw. den gesuchten Inhalt finden? Wenn nicht, kontaktieren Sie mich bitte unter der im <Link href='/impressum/' className='underline'>Impressum</Link> angegebenen Adresse. 
            </b>
        </Text>
        <ul className={style.urlListe}>
          {          
            sitemap.pages.map((page, index) => {
              const key = Object.keys(page)[0];
              return <li key={uid.seq()}>
                <Link href={key}>{sitemapDictionary[key]}</Link>
              </li>
            })
          }
        </ul>
      </div>
    </>
}

Custom404.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={true} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Custom404;

