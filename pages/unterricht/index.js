import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import { useEffect, useState } from 'react';
import data from '../../data/unterricht.json';
import PageHeader from '../components/pagehaeder';
import DisplayCourses from '../components/displayCourses';
import { Select, Box, Flex, Spacer, Divider, Text } from '@chakra-ui/react';

const uid = new ShortUniqueId();

const options = {
  title: 'Unterricht',
  description: '',
  filter: 'unterricht',
  slug: '/unterricht'
}

export default function Unterricht() {

  const [courses, setCourses] = useState();
  const [semesterName, setSemesterName] = useState();
  const [displayCourse, setDisplayCourse] = useState();
 
  useEffect(() => {
    if(data) {
      setCourses(data);
      setDisplayCourse(data[0]);
    }    
  }, [])

  useEffect(() => {
    if(data) {
      const course = data.filter(item => item.name === semesterName);
      if(course.length) {
        setDisplayCourse(course[0]);
      }
    }
  }, [semesterName])

  const onSemesterChange = (event) => { 
    setSemesterName(event.target.value);
  }

  return (
    <>
      <Head>
        <title>Unterricht</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <Text>
        Hier finden Sie Informationen zu dem aktuellen Semester. Wenn Sie sich über mein Lehrangebot der vergangenen Semester informieren möchten, wählen Sie bitte ein Semester in dem Auswahlfeld. Evaluationsergebnisse zu meinem Unterricht können Sie <Link href='/unterricht/evaluation' className='underline'>hier</Link> einsehen.
      </Text>
      <Divider mt='60px' mb='40px' h='1px' bg='gray' />
      <Flex>
        <Spacer />
        <Box style={{'maxWidth': '300px'}} mb='0' mr='6%'>
          { courses && <Select onChange={onSemesterChange} value={semesterName}>
            {
              courses && courses.map(item => {
                return <option
                          key={uid.seq()}
                          value={item.name}>
                          {item.name}
                        </option>
              })
            }
          </Select>}
        </Box>
      </Flex>
      { displayCourse && 
        <DisplayCourses 
          semester={displayCourse || []} 
          name={displayCourse.name || 'Keine  Daten vorhanden'} 
        /> }
    </>
  );
}

Unterricht.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
