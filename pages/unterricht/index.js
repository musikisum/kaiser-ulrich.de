import Head from 'next/head';
import Layout from '../components/layout';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import { Select, List, ListItem, ListIcon, Text, Heading, Box } from '@chakra-ui/react';

import courses from '../../data/unterricht.json';
const course = courses[0]; 

const uid = new ShortUniqueId();

const options = {
  title: 'Unterricht',
  description: 'Hier finden Sie Informationen zu dem aktuellen Semester. Falls Sie sich über meinen Unterricht der vergangenen Semester informieren wollen, wählen Sie bitte ein Semester in dem Auswahlfeld.',
  filter: 'unterricht',
  slug: '/unterricht'
}

const Unterricht = () => {
  return (
    <>
      <Head>
        <title>Artikel</title>
        <meta name="description" content="Artikel | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <Box style={{'maxWidth': '400px'}} mb='40px'>
        <Select placeholder='Semester auswählen ...'>
          {
            courses.map(item => {
              return <option 
                        key={uid.seq()} 
                        value={item.semester}>
                        {item.semester}
                      </option>
            })
          }
        </Select>
      </Box>      
      {
        <Heading as='h3' className='headingH3'>
          {course.semester}
        </Heading>
      }
      {
        course.unterricht.map(item => {
          return <div key={uid.seq()} className='mt20'>
                  <div><b>{item.Title}</b></div>
                  <div style={{'marginBottom': '6px'}}>{item.DayOfWeek + ' | ' + item.Start + ' Uhr | Dauer: ' + item.Duration}</div>        
                  <div>{item.Description}</div>
                </div>
        })
      }
    </>
  );
}

Unterricht.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Unterricht