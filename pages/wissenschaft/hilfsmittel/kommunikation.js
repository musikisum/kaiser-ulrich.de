import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Divider, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';

import style from '../index.module.css'

const options = {
  title: 'Kommunikation',
  description: 'Was heißt es, wissenschaftlich zu arbeiten und zu kommunizieren? Gehören Fremdworte bzw. Fachbegriffe und Unverständlichkeit dazu? Auf dieser Seite finden Sie meine persönlichen Gedanken zu diesem Thema bzw. zur Kommunikation im Wissenschaftssystem oder ganz allgemein: zur Wissenschaft der Gesellschaft).',
  filter: 'wissenschaft/hilfsmittel',
  slug: '/wissenschaft/hilfsmittel/kommunikation'
}

export default function Hilfsmittel() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />

      <Heading as='h3' className={style.headingColor}>
        Wissenschaftliche Kommunikation?
      </Heading>
      <Text className={style.mtDefault}>
        Diese Frage nach einer Definition wissenschaftlicher Kommunikation mag Furcht einflößen, Diskussionen heraufbeschwören und zur Vorsicht gemahnen. Im Folgenden möchte ich deshalb mein Wissenschaftsverständnis über eine Metapher skizzieren. Die Veranschaulichung mag unernst erscheinen, ist jedoch vollkommen ernst gemeint und basiert auf einem konstruktivistischen Verständnis, dass an Niklas Luhmanns Überlegungen zur Wissenschaft orientiert ist.
      </Text>
      <Text mt="6">
        Wissenschaftliches Arbeiten ist ein Gesellschaftsspiel mit dem Ziel, überprüfbares Wissen zu generieren. Aus dieser Perspektive ist Wissenschaft mit einer Spielhalle vergleichbar, in der verschiedene Fachwissenschaften an verschiedenen Tischen Varianten des Wissenschaftsspiels spielen. An allen Tischen der Spielhalle gelten natürlich die allgemeinen Geschäftsbedingungen des Wissenschaftsspiels, von Spieltisch zu Spieltisch jedoch sind die Spielregeln der individuellen Spielarten verschieden.
      </Text>
    </>
  )
}

Hilfsmittel.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}