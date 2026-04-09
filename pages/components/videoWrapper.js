import { Text, Heading, Container, Card, CardBody, Stack } from '@chakra-ui/react';

import style from './videoWrapper.module.css';

export default function videoWrapper({ video }) {
  const aspectRatio = video?.aspectRatio || '16/9';
  return <>
    { video && <Container className={style.fullContentWidth}>
        <Card>
          <CardBody>
          <video
            src={video.url}
            poster={video.posterUrl}
            controls
            style={{ width: '100%', aspectRatio, display: 'block' }}
          />
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