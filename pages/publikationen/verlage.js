import Head from 'next/head'
import ShortUniqueId from 'short-unique-id'

import style from './index.module.css'

import books from '../../data/books.json'

const uid = new ShortUniqueId()
const oer = books.filter(book => book.type === 'OER')
const publisher = books.filter(book => book.type === 'publisher') 

export default function Verlage() {
  return (
    <>
      <Head>
        <title>Verlage</title>
        <meta name="description" content="Verlagspublikationen | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div>Verlage</div>
    </>
  )
}