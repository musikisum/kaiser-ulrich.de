import Head from 'next/head'
import { useState } from 'react'

import testdata from '../../data/unterricht.json'
import styles from '../index.module.css'

function handleClick(index, activeIndex, setActiveIndex) {
  index === activeIndex ? setActiveIndex(-1) : setActiveIndex(index)
}

export default function Vergangenes() {

  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <>
      <Head>
        <title>Unterricht</title>
        <meta name="description" content="Vergangenes | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        Vergangenes
      </div>
    </>
  )
}
