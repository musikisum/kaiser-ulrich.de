import useSWR from 'swr';
import Head from 'next/head';
import Layout from "../components/layout";
import PageHeader from '../components/pagehaeder';
import ShortUniqueId from 'short-unique-id';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Link, Text, Heading } from '@chakra-ui/react'

const uid = new ShortUniqueId()
const fetcher = (url) => fetch(url).then((res) => res.json());

const options = {
  title: 'Musik',
  description: 'Hier finden Sie selbstständige Publikationen, über die ich Kompositionen oder Arrangements unter einer Creative-Commons-Lizenz im Selbstverlag veröffentlicht habe.',
  filter: 'publikationen',
  slug: '/publikationen/musik'
}

const Musik = () => {

  const { data, error } = useSWR('/data/musik.json', fetcher);

  return (
    <>
      <Head>
        <title>OpenBooks</title>
        <meta name="description" content="OpenBooks | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />

      {data && <TableContainer>
        <Table variant='simple' whiteSpace='wrap'>
          <TableCaption>Openbooks (Open Educational Resources) von Ulrich Kaiser</TableCaption>
          <Thead>
            <Tr>
              <Th>Abbildung</Th>
              <Th>Bibliographische Angabe</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              data.map(musik => {
                return <Tr key={uid.seq()}>
                  <Td>
                    {musik.link ?
                      <Link href={musik.link} isExternal><img src={musik.image} /></Link> :
                      <img src={musik.image} />
                    }
                  </Td>
                  <Td>
                    <i>
                      {musik.title}
                      {musik.subtitle ? '. ' + musik.subtitle : ''}
                    </i>
                      {musik.details ? ' ' + musik.details + ', ' : ', '}
                      {musik.location + ' ' + musik.year + '.'}
                  </Td>
                </Tr>
              })
            }
          </Tbody>
        </Table>
      </TableContainer>}

      <hr className="mt40 mb40" />
      <Heading as='h2' style={{'fontSize': '1.5em', 'color': '#494949', 'marginBottom': '40px'}}>
        CD-Aufnahmen von Ulrich Kaiser
      </Heading>

      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>Abbildung</Th>
              <Th>Bibliographische Angabe</Th>
            </Tr>
          </Thead>
          <Tbody>
          <Tr>
              <Td style={{ 'verticalAlign': 'top' }}>
              <Link href='' isExternal><img src='/images/musik/brahms-cd-kaiser-sm.jpg' /></Link>
              </Td>
              <Td>
                <Text mb='6'>Johannes Brahms. Liebesliederwalzer und andere Werke. Ensemberlino Vocale, Ltg: Ulrich Kaiser (1992−1994). Lizenz: CC BY-SA.</Text>
                <Text>                  
                <b>Liebesliederwalzer op. 52</b><br/>
                  Rede, Mädchen, allzu liebes<br/>
                  Am Gesteine rauscht die Flut<br/>
                  O die Frauen<br/>
                  Wie des Abends schöne Röte<br/>
                  Die grüne Hopfenranke<br/>
                  Ein kleiner, hübscher Vogel<br/>
                  Wohl schön bewandt war es<br/>
                  Wenn so lindt dein Auge mir<br/>
                  Am Donaustrande<br/>
                  O wie sanft die Quelle<br/>
                  Nein, es ist nicht auszukommen<br/>
                  Schlosser auf, und mache Schlösser<br/>
                  Vögelein durchrauscht die Luft<br/>
                  Sieh, wie ist die Quelle klar<br/>
                  Nachtigall, sie singt so schön<br/>
                  Ein dunkler Schacht ist Liebe<br/>
                  Nicht wandle, mein Licht<br/>
                  Es bebet das Gesträuche<br/><br/>
                  <b>Drei Gesänge op. 42</b><br/>
                  Abendständchen<br/>
                  Vineta<br/>
                  Darthulas Grabgesang<br/><br/>
                  <b>Lieder und Romanzen op. 93a</b><br/>
                  Der bucklichte Fiedler<br/>
                  Das Mädchen<br/>
                  O süßer Mai<br/>
                  Fahr wohl<br/>
                  Der Falke<br/>
                  Beherzigung<br/><br/>
                  <b>Fünf Gesänge op. 104</b><br/>
                  Nachtwache I<br/>
                  Nachtwache II<br/>
                  Letztes Glück<br/>
                  Verlorene Jugend<br/>
                  Im Herbst
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  ) 
}

Musik.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}

export default Musik;