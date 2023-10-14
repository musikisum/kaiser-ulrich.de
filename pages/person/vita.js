import _ from 'lodash'
import Head from 'next/head'

import vitaData from '../../data/vita.json'
import style from '../index.module.css'

export default function Vita() {

  return (
    <>
      <Head>
        <title>Vita</title>
        <meta name="description" content="Vita | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <div>
        Hallo Vita
      </div>
    </>
  )
}