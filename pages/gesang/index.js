import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Heading, Text, List, ListItem, Flex, Box, Divider } from '@chakra-ui/react';

const options = {
  title: 'Gesang',
  description: 'Auf dieser Seite finden Sie Informationen zu meinem Chorsingen, Gesangsstudium sowie zu meiner (kurzen) Tätigkeit als Sänger in Berlin (vor 1997).',
  filter: 'gesang',
  slug: '/gesang'
}

const Gesang = () => {
  return <>
    <Head>
      <title>{options.title}</title>
      <meta name="description" content="Wissenschaft | Ulrich Kaiser" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/images/icon.png" />
    </Head>

    <PageHeader options={ options } />
    
    <Heading as='h3' className='headingH4' mb='40px'>
      Chöre
    </Heading>

    <List m='12px' spacing={3}> 
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1972–1973</Box>
          <Box flex='1'>Chorvorschule der Evangelischen Kirchengemeinde Pichelsdorf (heute: <a href='https://www.weinberggemeinde.de/unsere-kirchen/' className='underline'>Gnadenkirche der Weinberggemeinde</a>), Ltg.: Karl-Heinz Kaiser</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1973–1975</Box>
          <Box flex='1'>Kurrende der Evangelischen Kirchengemeinde Pichelsdorf, Ltg.: Karl-Heinz Kaiser</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1973–1975</Box>
          <Box flex='1'>Jugendchor der Evangelischen Kirchengemeinde Pichelsdorf, Ltg.: Karl-Heinz Kaiser</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1977–1992</Box>
          <Box flex='1'>Chor der Evangelischen Kirchengemeinde Pichelsdorf, Ltg.: Karl-Heinz Kaiser</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1982–1985</Box>
          <Box flex='1'><a href='https://miz.org/de/institutionen/capella-cantorum-berlin-i11214' className='underline'>Capella Cantorum Berlin</a> (Ltg.: Klaus Eichhorn), zur damaligen Zeit ein der <a href='https://de.wikipedia.org/wiki/Musicalische_Compagney' className='underline'>Musicalischen Compagney Berlin</a> (Ltg.: Holger Eichhorn) assoziiertes Vokalensemble</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1985–1989</Box>
          <Box flex='1'><a href='https://www.udk-berlin.de/universitaet/fakultaet-musik/musikensembles/kammerchor-der-kuenste/' className='underline'>Kammerchor der Universität der Künste Berlin</a> (ehem. HdK-Berlin), Ltg.: Christian Grube</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1985–1990</Box>
          <Box flex='1'>Choraushilfe in diversen Chören und Ensembles</Box>
        </Flex>                  
      </ListItem>
    </List>

    <Heading as='h3' className='headingH4' m='40px 0'>
      Gesangsunterricht
    </Heading>

    <List m='12px' spacing={3}> 
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1982–1984</Box>
          <Box flex='1'>Gesangsunterricht bei <a href='https://de.wikipedia.org/wiki/Manfred_Cordes' className='underline'>Manfred Cordes</a></Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1985–1987</Box>
          <Box flex='1'>Gesangsunterricht (im Rahmen des Lehramtstudiums) bei Herbert Grzymek</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1985–1987</Box>
          <Box flex='1'>Gesangsunterricht (im Rahmen des Lehramtstudiums) bei Prof. Anke Eggers</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1988–1990</Box>
          <Box flex='1'>Gesangsunterricht bei Richard Gsell (privat)</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1990–1992</Box>
          <Box flex='1'>Gesangsunterricht (im Rahmen des Studiums Gesang/Musiktheater) bei Richard Gsell</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>1992–1995</Box>
          <Box flex='1'>Gesangsunterricht (im Rahmen des Studiums Gesang/Musiktheater) bei Edith Urbanczyk</Box>
        </Flex>                  
      </ListItem>
    </List>

    <Heading as='h3' className='headingH4' m='40px 0'>
      Rollenstudium
    </Heading>

    <List m='12px' spacing={3}> 
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>Max</Box>
          <Box flex='1'>Der Freischütz von Carl Maria von Weber)</Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px'>
          <Box as='b' w='150px' color='#6e91a1'>Tamino</Box>
          <Box flex='1'>Zauberflöt von W. A. Mozart</Box>
        </Flex>                  
      </ListItem>
    </List>

    <Heading as='h3' className='headingH4' m='40px 0'>
      Aufnahmen
    </Heading>

    <List m='12px' spacing={3}> 
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px' flexWrap='wrap'>
          <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
            <audio src='/medien/kaiser-gesang_schubert.mp3' controls></audio>
          </Box>
          <Box flex='1' pt='10px'>
            <i>Der Atlas</i>, nach einem Text von Heinrich Heine, aus: »Schwanengesang« D 957, Nr. 8 von Franz Schubert
          </Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px' flexWrap='wrap'>
          <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
            <audio src='/medien/kaiser-gesang-kleinZack.mp3' controls></audio>
          </Box>
          <Box flex='1' pt='10px'>
            <i>Arie ›Kleinzack‹ (Klein Zaches)</i>, aus: Jacques Offenbach, Hoffmanns Erzählungen, Vortragsabend Prof. Richard Gsell an der UdK-Berlin im Jahr der Aufnahmeprüfung Gesang/Musiktheater
          </Box>
        </Flex>                  
      </ListItem>
      <ListItem style={{'borderBottom': '1px solid gray'}}>
        <Flex mb='16px' flexWrap='wrap'>
          <Box as='b' color='#6e91a1' pr='40px' mt='10px'>
            <audio src='/medien/kaiser-gesang_bach.mp3' controls></audio>
          </Box>
          <Box flex='1' pt='10px'>
            <i>»So geh ich mit beherzten Schritten«</i>, aus: Johann Sebastian Bach, Kanate BWV 111 »Was mein Gott will, dass gscheh allzeit«, Nr. 4, Duett Alt und Tenor 
          </Box>
        </Flex>                  
      </ListItem>
    </List>
  </>
}

Gesang.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Gesang;