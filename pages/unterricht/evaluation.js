import useSWR from 'swr';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, Divider } from '@chakra-ui/react';

const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: 'Evaluationen',
  description: 'Hiermit veröffentliche ich für alle Interssierten die Evaluationsergebnisse der Hochschule für Musik und Theater München zu meiner Lehre, seit diese dort professionell ermittelt wird. Ziel ist es, im Sinne eines ›Visible Learning‹ für mich und andere sichtbar zu machen, welche Aspekte meines Unterrichts in den jeweiligen Jahren gut funktioniert haben und welche als negativ bewertet worden sind. Diese Sichtbarmachung geht einher mit meinen großen Bemühungen, jede Kritik ernst zu nehmen, nach Ursachen zu suchen und mich um eine kontinuierlichen Verbeserung meines Unterrichts zu bemühen.',
  filter: 'unterricht',
  slug: '/unterricht/evaluation'
}

const Evaluation = () => {

  
  const uid = new ShortUniqueId();
  const { data, error } = useSWR('/data/evaluations.json', fetcher);

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
          return <>
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
          </>
        })
      }
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
