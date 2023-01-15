import Head from 'next/head'
import HomeImage from './components/homeImage'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prof. Dr. Ulrich Kaiser</title>
        <meta name="description" content="Homepage von Prof. Dr. Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div className='pageContainer'>      
        <main className='main'>
          <HomeImage />
        </main>
        <Footer className='footer'  />    
      </div>
    </>
  )
}
