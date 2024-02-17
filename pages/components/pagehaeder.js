import Navigation from './navigation';
import { Heading, Text, Box, Divider } from '@chakra-ui/react';

import style from './pagehaeder.module.css';

export default function PageHeader ({ options }) {
  
  return (<div className={style.header}>
        <Heading style={{ 'color': '#494949' }}>{options?.title}</Heading>
        <div className={style.navContainer}>
          <Navigation bg='white' filter={ options?.filter } slug={ options?.slug } />
        </div>
        { options?.description && <Divider mt='60px' mb='60px' h='1px' bg='gray' /> }
        { options?.description && 
          <Box w='100%'>
            <Text fontSize='l'>{options?.description}</Text>
          </Box> 
        }
        <Divider mt='60px' mb='60px' h='1px' bg='gray' />
      </div>
  )
}