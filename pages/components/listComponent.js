import ShortUniqueId from 'short-unique-id';
import CustomError from '../components/customError';
import { List, ListItem, Box, Flex, Link } from '@chakra-ui/react';

const uid = new ShortUniqueId();

function renderRight(text, file) {
  if (!file) return text;
  const parts = text.split('&&');
  if (parts.length < 3) return <Link href={file} isExternal color='#6e91a1'>{text}</Link>;
  return <>{parts[0]}<Link href={file} isExternal color='#6e91a1'>{parts[1]}</Link>{parts[2]}</>;
}

function reverseData(data) {
  const reversedArr = [];
  for (let index = data.length - 1; index >= 0; index = index - 1) {
    const entry = data[index];
    reversedArr.push(entry)
  }
  return reversedArr;
}

export default function ListComponent({ data, inOrder, firstColumnWith = '150px', theme }) {
  if(data) {
    return inOrder ?
      <List m='12px' spacing={3}> 
        { data.map(item => {
          return (
            <ListItem key={uid.seq()} style={{'borderBottom': '1px solid gray'}}>
              <Flex mb='16px'>
                <Box as='b' w={firstColumnWith} color='#6e91a1'>{item.left}</Box>
                <Box flex='1'>{renderRight(item.right, item.file)}</Box>
              </Flex>                  
            </ListItem>)
          })
        }
      </List> :
      <List m='12px' spacing={3}> 
        { reverseData(data).map(item => {
          return (
            <ListItem key={uid.seq()} style={{'borderBottom': '1px solid gray'}}>
              <Flex mb='16px'>
                <Box as='b' w={firstColumnWith} color='#6e91a1'>{item.left}</Box>
                <Box flex='1'>{renderRight(item.right, item.file)}</Box>
              </Flex>                  
            </ListItem>)
          })
        }
      </List>
    } else {
      const snippet = theme ? theme : "in dieser Datentabelle";
      return <CustomError theme={snippet} />
    }
  }