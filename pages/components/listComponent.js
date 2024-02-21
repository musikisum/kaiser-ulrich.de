import ShortUniqueId from 'short-unique-id';
import CustomError from '../components/customError';
import { List, ListItem, Box, Flex } from '@chakra-ui/react';

const uid = new ShortUniqueId();

function reverseData(data) {
  const reversedArr = [];
  for (let index = data.length - 1; index >= 0; index = index - 1) {
    const entry = data[index];
    reversedArr.push(entry)
  }
  return reversedArr;
}

export default function ListComponent({ data, inOrder, firstColunnWith = '150px' }) {
  if(data) {
    return inOrder ?
      <List m='12px' spacing={3}> 
        { data.map(vitaItem => {
          return (
            <ListItem key={uid.seq()} style={{'borderBottom': '1px solid gray'}}>
              <Flex mb='16px'>
                <Box as='b' w={firstColunnWith} color='#6e91a1'>{vitaItem.year}</Box>
                <Box flex='1'>{vitaItem.item}</Box>
              </Flex>                  
            </ListItem>)
          })
        }
      </List> :
      <List m='12px' spacing={3}> 
        { reverseData(data).map(vitaItem => {
          return (
            <ListItem key={uid.seq()} style={{'borderBottom': '1px solid gray'}}>
              <Flex mb='16px'>
                <Box as='b' w={firstColunnWith} color='#6e91a1'>{vitaItem.year}</Box>
                <Box flex='1'>{vitaItem.item}</Box>
              </Flex>                  
            </ListItem>)
          })
        }
      </List>
    } else {
      return <CustomError theme='zu meinem Lebenslauf' />
    }
  }