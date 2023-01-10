import Head from 'next/head'
import { Inter } from '@next/font/google'
import HomeImage from './components/homeImage'
import Footer from './components/footer'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Homepage von Prof. Dr. Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <HomeImage />
      </main>      
      <Footer />
    </>
  )
}
