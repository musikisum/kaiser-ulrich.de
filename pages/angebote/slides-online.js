import Head from 'next/head';
import Iframe from 'react-iframe'
import Layout from '../components/layout';
import { useState } from 'react';
import ShortUniqueId from 'short-unique-id';
import PageHeader from '../components/pagehaeder';
import data from '../../data/vortraege-online.json';
import { Flex, Text, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';

import style from './slides-online.module.css';

const uid = new ShortUniqueId();

const options = {
  title: 'Slides (online)',
  description: 'Hier finden Sie Videos und Online-Präsentationen meiner Vorträge.',
  filter: 'angebote',
  slug: '/angebote/slides-online'
}

const isVideo = (url) => url.endsWith('.mp4');
const videos = data.filter(item => isVideo(item.url));
const slides = data.filter(item => !isVideo(item.url));

export default function SlidesOnline() {

  const [activeItem, setActiveItem] = useState(data[0]);

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Vorträge (online) | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <PageHeader options={options} />

      <Flex className={style.twoCol} gap='24px'>

        {/* Left: grouped list */}
        <Box className={style.list}>

          <Text className={style.groupLabel}>Videos</Text>
          {videos.map(item => (
            <Box
              key={uid.seq()}
              onClick={() => setActiveItem(item)}
              className={style.listItem}
              bg={activeItem.url === item.url ? '#E0F0F4' : 'white'}
              borderColor={activeItem.url === item.url ? '#6e91a1' : 'gray.200'}
            >
              <Text fontSize='sm'>{item.description}</Text>
            </Box>
          ))}

          <Text className={style.groupLabel} mt='4'>Slides</Text>
          {slides.map(item => (
            <Box
              key={uid.seq()}
              onClick={() => setActiveItem(item)}
              className={style.listItem}
              bg={activeItem.url === item.url ? '#E0F0F4' : 'white'}
              borderColor={activeItem.url === item.url ? '#6e91a1' : 'gray.200'}
            >
              <Text fontSize='sm'>{item.description}</Text>
            </Box>
          ))}

        </Box>

        {/* Right: preview */}
        <Box className={style.preview}>
          {activeItem && (
            isVideo(activeItem.url)
              ? <video
                  key={activeItem.url}
                  src={activeItem.url}
                  controls
                  className={style.video}
                />
              : <div className={style.iframeWrapper}>
                  <Iframe
                    key={activeItem.url}
                    url={activeItem.url}
                    className={style.iframe}
                  />
                </div>
          )}
          <Text fontSize='sm' color='gray.500' mt='2'>{activeItem?.description}</Text>

          {activeItem?.details && (
            <Accordion allowToggle mt='3'>
              <AccordionItem border='1px solid' borderColor='gray.200' borderRadius='4px'>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton px='4' py='2' _hover={{ bg: '#F2F7F9' }}>
                      <Box flex='1' textAlign='left' fontSize='sm' color='#6e91a1' fontWeight='bold'>
                        {isExpanded ? 'Informationen ausblenden' : 'Informationen zum Vortrag'}
                      </Box>
                      <Box fontSize='lg'>{isExpanded ? '−' : '+'}</Box>
                    </AccordionButton>
                    <AccordionPanel px='4' py='3' fontSize='sm'>
                      <Text mb='3'>{activeItem.details}</Text>
                      {activeItem.abstract && (
                        <Text><b>Abstract:</b> {activeItem.abstract}</Text>
                      )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          )}
        </Box>

      </Flex>
    </>
  )
}

SlidesOnline.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
