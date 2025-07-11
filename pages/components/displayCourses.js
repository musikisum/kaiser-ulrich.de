import ShortUniqueId from 'short-unique-id';
import CustomError from '../components/customError';
import { Heading, Divider, Text, Center } from '@chakra-ui/react';

const uid = new ShortUniqueId();

function convertTime(time, title) {
  if(title === 'Sprechstunde') {
    return '60 Minuten';
  }
  if(title === 'Open Music Academy') {
    return '';
  }
  switch (time) {
    case '0:45':
      return ' | Dauer: 45 Minuten |(1 SWS/Seminar)';
    case '60':
    case '1:00':
      return ' | Dauer: 60 Minuten | (1 SWS/Übung)';
      case '1:30': 
        return ' | Dauer: 90 Minuten | (2 SWS/Seminar)';
      case '2:00':
      case '2:0':
        return ' | Dauer: 120 Minuten | (2 SWS/Übung)';
      case '2:15': 
        return ' | Dauer: 135 Minuten | (3 SWS/Seminar)';
      default:
        return 'ganztägig'
    }
  
}

const displayItem = (id, item) => {
    return <div key={id} className='mt20'>
            <div><b>{item.Title}</b></div>
            <div style={{'marginBottom': '6px'}}>
              {
                item.DayOfWeek + ' | Beginn: ' + 
                item.Start + ' Uhr' + 
                convertTime(item.Duration, item.Title) 
              }
            </div>        
            <div>{item.Description}</div>
          </div>
}

const displayElement = (id, lastDay, item) => {
  return <div key={id} className='mt20'>
    { lastDay !== item.DayOfWeek && <Divider mt='20px' mb='20px' h='1px' bg='gray' w='50%' /> }
    { lastDay !== item.DayOfWeek && <Text as='b' mt='20px' mb='10px' color='#6e91a1'>{item.DayOfWeek}</Text> }
    { displayItem(uid.seq(), item) }
  </div>
}

export default function DisplayCourses({ semester, name }) {

  if(semester) {
    let lastDay = '';
    return <>
      <Heading as='h3' className='headingH3' color='#6e91a1'>
          { name }
      </Heading>
        { semester.unterricht.map((item, index, uArr) => {          
            let element = null;
            switch(item.DayOfWeek) {
              case 'Montag':
                element = displayElement(uid.seq(), lastDay, item)
              case 'Dienstag':
                element = displayElement(uid.seq(), lastDay, item)
              case 'Mittwoch':
                element = displayElement(uid.seq(), lastDay, item)
              case 'Donnerstag':
                element = displayElement(uid.seq(), lastDay, item)
              case 'Freitag':
                element = displayElement(uid.seq(), lastDay, item)
            }
            if(index < uArr.length - 1) { 
              lastDay = item.DayOfWeek; 
            }
            return element;
          })
        }
      </>
    } else { 
    return <CustomError theme='zu meinem Unterricht' />
  }
}