import Head from 'next/head'
import { useState } from 'react'

import testdata from '../../data/unterricht.json'
import styles from '../index.module.css'

const options = {
  title: 'Evaluationen',
  description: '',
  filter: 'unterricht',
  slug: '/unterricht/evaluation'
}

export default function Evaluation() {

  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <>
      <Head>
        <title>Unterricht</title>
        <meta name="description" content="Evaluation | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        Vergangenes
      </div>
    </>
  )
}

Evaluation.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Evaluation;
