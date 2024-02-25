import Head from 'next/head';
import Layout from './components/layout';
import { Heading, Text, Link } from '@chakra-ui/react';
import SitemapBuilder from './components/sitemapBuilder';

import style from './404.module.css';

export default function Custom404() {
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
          style={{'borderRadius': '10px', 'fontWeight': 'bold'}}>
            Beim Relaunch dieser Website sind allem Anschein nach einige alte Adressen verlorengegangen. Falls ja, bitte ich vielmals um Entschuldigung! Die Inhalte der alten Seite habe ich allerdings (fast) vollständig auf die neue Homepage überführt. Finden Sie anhand der <Link href='/sitemap' className='underline'>Sitemap</Link> die gesuchte Seite bzw. den gesuchten Inhalt wieder?<br/>
            <span style={{'display': 'block', 'marginTop': '10px'}}>
              Falls nicht, können Sie mich über die im <Link href='/impressum/' className='underline'>Impressum</Link> angegebenen Adresse kontaktieren.
            </span> 
        </Text>
        {/* <SitemapBuilder /> */}
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
