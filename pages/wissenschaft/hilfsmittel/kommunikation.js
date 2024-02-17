import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { Heading, TableContainer, Table, TableCaption, Thead, Tbody, Th, Tr, Td, Tfoot, Text, List, ListItem, ListIcon } from '@chakra-ui/react';

import style from '../index.module.css'

const options = {
  title: 'Kommunikation',
  description: 'Was heißt es, wissenschaftlich zu arbeiten und zu kommunizieren? Gehören Fremdworte bzw. Fachbegriffe und Unverständlichkeit dazu? Auf dieser Seite finden Sie meine persönlichen Gedanken zu diesem Thema bzw. zur Kommunikation im Wissenschaftssystem oder ganz allgemein: zur Wissenschaft der Gesellschaft).',
  filter: 'wissenschaft/hilfsmittel',
  slug: '/wissenschaft/hilfsmittel/kommunikation'
}

export default function Kommunikation() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />

      <Heading as='h3' className='headingH3'>
        Wissenschaftliche Kommunikation?
      </Heading>
      <Text className={style.mtDefault}>       
        Diese Frage nach einer Definition wissenschaftlicher Kommunikation mag Furcht einflößen, Diskussionen heraufbeschwören und zur Vorsicht gemahnen. Im Folgenden möchte ich deshalb mein Wissenschaftsverständnis über eine Metapher skizzieren. Die Veranschaulichung mag unernst erscheinen, ist jedoch vollkommen ernst gemeint und basiert auf einem konstruktivistischen Verständnis, dass an Niklas Luhmanns Überlegungen zur Wissenschaft orientiert ist.        
      </Text>

      <TableContainer m='10'>
        <Table variant='unstyled' whiteSpace='wrap'>
          <Thead>
            <Tr>
              <Th w='50%'>Systemtheoretisch gesprochen ...</Th>
              <Th w='50%'>Metaphorisch ausgedrückt ...</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td className={style.redCell}>
                <Text>
                  Wissenschaft ist ein Kommunikationssystem, das eine Umwelt hat (die übrige Gesellschaft). Das Wissenschaftssystem ist in verschiedene Subsysteme (= fachspezifische Kommunikationen) ausdifferenziert, es operiert autopoietisch, operativ geschlossen und beschäftigt sich mit selbsterzeugter Unsicherheit.
                </Text>
              </Td>
              <Td className={style.greenCell}>
                <Text>
                  Wissenschaft ist wie  eine Spielhalle und wissenschaftliches Arbeiten wie ein Spiel mit dem Ziel, überprüfbares Wissen zu generieren. In der Spielhalle spielen unterschiedliche Fachwissenschaften an verschiedenen Tischen Varianten des Wissenschaftsspiels. An allen Tischen der Spielhalle gelten die allgemeinen Geschäftsbedingungen des Wissenschaftsspiels, von Spieltisch zu Spieltisch sind die Spielregeln der individuellen Spielarten jedoch verschieden.
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td className={style.redCell}>
                <Text>
                  Die ausdifferenzierte Gesellschaft als System besteht aus Teilsystemen (z.B. Wissenschaft, Politik, Wirtschaft, Erziehung usw.), welche spezifische Leistung für die Gesellschaft bzw. das gesamte System erbringen.
                </Text>
              </Td>
              <Td className={style.greenCell}>
                <Text>
                  Jeder Mensch kann am Wissenschaftsspiel teilnehmen, doch niemand muss es. Ganz nach persönlichem Geschmack kann man sich auch für ein Gesellschaftsspiele entscheiden (z.B. als Lehrer im Erziehungssystem, als Richterin im Rechtsystem, als Banker im Wirtschaftssystem oder als Politikerin im Politiksystem usw.). Spielerinnen und Spieler des Wissenschaftsspiels nennt man Wissenschaftlerinnen und Wissenschaftler.
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td className={style.redCell}>
                <Text>
                  Die Wissenschaft als System operiert heute mit der Codierung wahr/unwahr (das war nicht immer so). Beiträge, die nachweisbar auf Betrug, Täuschung oder unsauberer Arbeit basieren, sind im Wissenschaftssystem nicht anschlussfähig, werden als Betrug deklariert und ausgeschlossen.
                </Text>
              </Td>
              <Td className={style.greenCell}>
                <Text>
                  Die Regeln des Wissenschaftsspiels werden von den Spielerinnen und Spielern des Wissenschaftsspiels selbst gemacht. Betrugsfälle bzw. Regelverletzungen sollten der Spielhallenaufsicht (= Ombudsperson für gute wissenschaftliche Praxis) gemeldet werden. Ein aufgedeckter Betrugsfall kann ein Hausverbot bzw. den Ausschluss aus dem Wissenschaftsspiel oder empfindliche Strafen (Entzug der Promotion und zivilrechtliche Konsequenzen) nach sich ziehen.
                </Text>
              </Td>
            </Tr>
            <Tr>
              <Td className={style.redCell}>
                <Text>
                  Der Wechsel des wissenschaftlichen Paradigmas ist möglich, allerdings nicht innerhalb eines Forschungsvorhabens. Beispiel: Man kann nicht die Möglichkeit der Erforschung einer Autorintention grundsätzlich in Frage stellen (z.B. aus der Perspektive der konstruktivistischen Systemtheorie) und sich der Erforschung einer Autorintention widmen (z.B. aus der Perspektive einer spezifischen Spielart musikwissenschaftlicher Hermeneutik).
                </Text>
              </Td>
              <Td className={style.greenCell}>
                <Text>
                  In der Spielhalle ist ein Wechsel von Spieltisch zu Spieltisch generell möglich, üblicher Weise aber nicht innerhalb eines Spiels (= Forschungsvorhabens).
                </Text>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>nach Niklas Luhmann</Th>
              <Th>nach Ulrich Kaiser</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <Heading as='h4' className='headingH4'>
        Regeln (am Spieltisch) einer konstruktivistischen Systemtheorie
      </Heading>

      <List spacing={3} m='10'>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Gespielt wird mit kontingenten Konstruktionen der Wirklichkeit (kontingent = so oder auch anders möglich, jedoch nicht beliebig).
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Jedem Wissenschaftsspiel liegt eine theoretische Idee zugrunde. Ein Forschungsvorhaben beruht dabei auf einer Theorie, die aus Aussagesätzen besteht, die sich auf etwas anderes als sich selbst beziehen.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Zu jedem Wissenschaftsspiel gehören außerdem Methoden, das heißt: theoretische Sätze müssen mithilfe methodischer Überprüfung als wahr oder unwahr qualifiziert werden.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Unvoreingenommenheit ist nicht gestattet, denn die Feststellung von ›Unvoreingenommenheit‹ ist eine Selektion aufgrund von Vorwissen und daher ›Voreingenommenheit‹ (bzw. nicht unvoreingenommen).
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Die Erforschung von Autor- oder Komponistenintentionen ist nicht gestattet, da psychische Systeme autopoietisch, operativ geschlossen und für ihre Umwelt nicht zugänglich sind.
        </ListItem>
      </List>

      <Heading as='h4' className='headingH4' mt='10'>
        Musikwissenschaft und Musiktheorie
      </Heading>

      <Text>
        Musikwissenschaftliche und musiktheoretische Forschung gehen im Hinblick auf Problem und Problemlösung entgegengesetzt vor:
      </Text>

      <List spacing={3} m='10'>
        <ListItem>
          <ListIcon as={InfoIcon} color='green.500' />
          Musikwissenschaftliche Forschung fokussiert Musik als Problemlösung (Wirkung) eines spezifischen Problemkontextes (einer historischen Ursache). Funktionale Äquivalenz wird dabei nur auf Seiten des Problemkontextes toleriert, auf Seiten der Musik (Gadamers »Vorgriff der Vollkommenheit«) dagegen ausgeschlossen.
        </ListItem>
        <ListItem>
          <ListIcon as={InfoIcon} color='green.500' />
          Musiktheoretische Forschung fokussiert Musik als Lösung generalisierter Bezugsprobleme (z.B. Modulation, Reprisengestaltung etc.), für die funktional äquivalente Lösungen auf Seiten der Musik möglich sind.
        </ListItem>
      </List>

      <Text>
        In diesem Sinne wird musikwissenschaftliche Forschung in der institutionellen Musiktheorie und musiktheoretische Forschung in der institutionellen Musikwissenschaft praktiziert.
      </Text>
    </>
  )
}

Kommunikation.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}