import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import data from '../../data/evaluations.json';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Divider, Box } from '@chakra-ui/react';

const options = {
  title: 'Evaluationen',
  description: 'Hiermit veröffentliche ich für alle Interessierten die Evaluationsergebnisse zu meiner Lehre an der Hochschule für Musik und Theater München (professionell ermittelt seit 2019) sowie Rückmeldungen zu meinen Fortbildungen für Musiklehrerinnen und -lehrer. Ziel ist es, im Sinne eines ›Visible Learning‹ für mich und andere sichtbar zu machen, welche Aspekte meines Unterrichts in den jeweiligen Jahren gut funktioniert haben und welche als negativ bewertet worden sind. Diese Sichtbarmachung geht einher mit meinem aufrichtigen Bemühen, jede Kritik an meinem Unterricht ernst zu nehmen, nach Ursachen von Problemen sowie einer kontinuierlichen Verbesserung meines Unterrichts zu suchen.',
  filter: 'unterricht',
  slug: '/unterricht/evaluation'
}

export default function Evaluation() {
  
  const uid = new ShortUniqueId();

  return (
    <>
      <Head>
        <title>Unterricht</title>
        <meta name="description" content="Evaluation | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <Heading as='h3' className='headingH3' mb='40px'>
        Evaluationsergebnisse meiner Lehre an der HMTM
      </Heading>
      {
        data && data.map(evaluation => {
          return <Box key={uid.seq()}>
            <Heading as='h4' className='headingH5'>{evaluation.semester}</Heading>
            <Text>Bewerteter Unterricht</Text>
            <ul className='list2040'>
              {
                evaluation.courses.map(course => {
                  return <li key={uid.seq()}>{course}</li>
                })
              }
            </ul>
            { evaluation.annotation && <Text>{evaluation.annotation}</Text> }
            <Link className='importantLink' href={evaluation.link}>Evaluationsergebnisse</Link>
            <Divider mt='20px' mb='20px' h='1px' bg='gray' w='50%' />
          </Box>
        })
      }
    </>
  )
}

Evaluation.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
