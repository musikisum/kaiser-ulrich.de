import { Text, Heading, Container, Card, CardBody, Stack } from '@chakra-ui/react';

import style from './videoWrapper.module.css';

export default function videoWrapper({ video }) {
  return <>
    { video && <Container className={style.fullContentWidth}>
        <Card>
          <CardBody>
          <video src={video.url} poster={video.posterUrl} controls />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{video.title}</Heading>
              <Text>{video.description}</Text>
            </Stack>
          </CardBody>
        </Card>
      </Container>
    }   
  </>
}