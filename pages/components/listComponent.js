import ShortUniqueId from 'short-unique-id';
import CustomError from '../components/customError';
import { List, ListItem, Text, Center } from '@chakra-ui/react';

const uid = new ShortUniqueId();

function reverseData(data) {
  const reversedArr = [];
  for (let index = data.length - 1; index >= 0; index = index - 1) {
    const entry = data[index];
    reversedArr.push(entry)
  }
  return reversedArr;
}

export default function ListComponent({ data, inOrder }) {
  if(data) {
    return inOrder ?
      <List m='12px' spacing={3}> 
        { data.map(vitaItem => {
          return (
            <ListItem key={uid.seq()}>
              <div style={{'display': 'flex'}}>
                <div><Text w='120px'>{vitaItem.year}</Text></div>
                <div><Text>{vitaItem.item}</Text></div>
              </div>                  
            </ListItem>)
          })
        }
      </List> :
      <List m='12px' spacing={3}> 
        { reverseData(data).map(vitaItem => {
          return (
            <ListItem key={uid.seq()}>
              <div style={{'display': 'flex'}}>
                <div><Text w='120px'>{vitaItem.year}</Text></div>
                <div><Text>{vitaItem.item}</Text></div>
              </div>                  
            </ListItem>)
          })
        }
      </List>
    } else {
      return <CustomError theme='zu meinem Lebenslauf' />
    }
  }