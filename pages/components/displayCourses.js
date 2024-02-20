import ShortUniqueId from 'short-unique-id';
import { Heading } from '@chakra-ui/react';

const uid = new ShortUniqueId();

function convertTime(time, title) {
  if(title === 'Sprechstunde') {
    return '60 Minuten';
  }
  switch (time) {
    case '0:45':
      return '45 Minuten | 1 SWS (Seminar)';
    case '60':
    case '1:00':
      return '60 Minuten | 1 SWS (Übung)';
      case '1:30': 
        return '90 Minuten | 2 SWS (Seminar)';
      case '2:00':
      case '2:0':
        return '120 Minuten | 2 SWS (Übung)';
      case '2:30': 
        return '150 Minuten | 3 SWS (Seminar)';
      default:
        return 'ganztägig'
    }
  
}

export default function DisplayCourses({ semester, name}) {
  return <>
    <Heading as='h3' className='headingH3'>
        { name }
    </Heading>
      { semester.unterricht.map(item => {
        return <div key={uid.seq()} className='mt20'>
                <div><b>{item.Title}</b></div>
                <div style={{'marginBottom': '6px'}}>
                  {item.DayOfWeek + ' | Beginn: ' + 
                  item.Start + ' Uhr | Dauer: ' + 
                  convertTime(item.Duration, item.Title)}
                </div>        
                <div>{item.Description}</div>
              </div>
      })
    }
  </>
}