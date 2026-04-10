import { Text, Heading, Container, Card, CardBody, Stack } from '@chakra-ui/react';

import style from './videoWrapper.module.css';

const isYouTube = (url) => url?.includes('youtube-nocookie.com') || url?.includes('youtube.com');

export default function videoWrapper({ video }) {
  const aspectRatio = video?.aspectRatio || '16/9';
  return <>
    { video && <Container className={style.fullContentWidth}>
        <Card>
          <CardBody>
          {isYouTube(video.url)
            ? <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={video.url}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allowFullScreen
                />
              </div>
            : <video
                src={video.url}
                poster={video.posterUrl}
                controls
                style={{ width: '100%', aspectRatio, display: 'block' }}
              />
          }
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