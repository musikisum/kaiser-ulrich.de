import useSWR from 'swr';
import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import { useEffect, useState } from 'react';
import PageHeader from '../components/pagehaeder';
import DisplayCourses from '../components/displayCourses';
import { Select, Box, Flex, Spacer } from '@chakra-ui/react';

const uid = new ShortUniqueId();
const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: 'Unterricht',
  description: 'Hier finden Sie Informationen zu dem aktuellen Semester. Wenn Sie sich über mein Lehrangebot der vergangenen Semester informieren möchten, wählen Sie bitte ein Semester in dem Auswahlfeld.',
  filter: 'unterricht',
  slug: '/unterricht'
}

const Unterricht = () => {

  const { data, error } = useSWR('/data/unterricht.json', fetcher);
  const [courses, setCourses] = useState();
  const [semesterName, setSemesterName] = useState();
  const [displayCourse, setDisplayCourse] = useState();
 
  useEffect(() => {
    if(data) {
      setCourses(data);
      setDisplayCourse(data[0]);
    }    
  }, [data])

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
        <title>Artikel</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
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

export default Unterricht