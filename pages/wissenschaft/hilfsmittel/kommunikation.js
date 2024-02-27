import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { CheckCircleIcon, InfoIcon } from '@chakra-ui/icons';
import { Heading, Text, List, ListItem, ListIcon, Flex, Box } from '@chakra-ui/react';

import style from '../index.module.css'

const options = {
  title: 'Kommunikation',
  description: 'Was heißt es, wissenschaftlich zu arbeiten und zu kommunizieren? Gehören Fremdworte, Fachbegriffe und Unverständlichkeit dazu? Auf dieser Seite finden Sie meine persönlichen Gedanken zur Kommunikation im Wissenschaftssystem (oder ganz allgemein: zur Wissenschaft der Gesellschaft).',
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

      <Text mb='20px'>       
        Diese Frage nach einer Definition wissenschaftlicher Kommunikation mag Furcht einflößen, Diskussionen heraufbeschwören und zur Vorsicht gemahnen. Im Folgenden möchte ich deshalb versuchen, mein Wissenschaftsverständnis über eine Metapher zu skizzieren. Die Veranschaulichung könnte unernst erscheinen, ist jedoch vollkommen ernst gemeint und basiert auf einem konstruktivistischen Verständnis, dass an Niklas Luhmanns Überlegungen zur Wissenschaft orientiert ist.        
      </Text>

      <Flex flexWrap='wrap' mb='1'>
        <Box className={style.defaultCell}>
          <Text>
            Nach Niklas Luhmann ...
          </Text>
        </Box>
        <Box className={style.defaultCell}>
          <Text>
            ... und metaphorisch gesprochen
          </Text>
        </Box>
      </Flex>
      <Flex flexWrap='wrap'>
        <Box className={style.redCell}>
          <Text>
            Wissenschaft ist ein Kommunikationssystem, das eine Umwelt hat (die übrige Gesellschaft). Das Wissenschaftssystem ist in verschiedene Subsysteme (= fachspezifische Kommunikationen) ausdifferenziert, es operiert autopoietisch, operativ geschlossen und beschäftigt sich mit selbsterzeugter Unsicherheit.
          </Text>
        </Box>
        <Box className={style.greenCell}>
          <Text>
            Wissenschaft ist wie  eine Spielhalle und wissenschaftliches Arbeiten wie ein Spiel. Ziel des Wissenschaftsspiel ist es, überprüfbares Wissen zu generieren. In der Spielhalle spielen Fachwissenschaften an verschiedenen Tischen Varianten des Wissenschaftsspiels. An allen Tischen der Spielhalle gelten die allgemeinen Geschäftsbedingungen des Wissenschaftsspiels, von Spieltisch zu Spieltisch jedoch können sich die Spielregeln der individuellen Spielarten unterscheiden.
          </Text>
        </Box>
      </Flex>
      <Flex flexWrap='wrap'>
        <Box className={style.redCell}>
          <Text>
            Die ausdifferenzierte Gesellschaft als System besteht aus Teilsystemen (z.B. Wissenschaft, Politik, Wirtschaft, Erziehung usw.), welche spezifische Leistung für die Gesellschaft bzw. das gesamte System erbringen.
          </Text>
        </Box>
        <Box className={style.greenCell}>
          <Text>
            Jeder Mensch kann am Wissenschaftsspiel teilnehmen, doch niemand muss es. Ganz nach persönlichem Geschmack kann man sich auch für ein anderes Gesellschaftsspiel entscheiden (z.B. als Lehrer im Erziehungssystem, als Richterin im Rechtsystem, als Banker im Wirtschaftssystem oder als Politikerin im Politiksystem usw.). Die Spielerinnen und Spieler des Wissenschaftsspiels nennt man Wissenschaftlerinnen und Wissenschaftler.
          </Text>
        </Box>
      </Flex>
      <Flex flexWrap='wrap'>
        <Box className={style.redCell}>
          <Text>
            Die Wissenschaft als System operiert aktuell mit der Codierung wahr/unwahr (das war nicht immer so). Beiträge, die nachweisbar auf Betrug, Täuschung oder unsauberer Arbeit basieren, sind im Wissenschaftssystem nicht anschlussfähig, werden als Betrug deklariert und ausgeschlossen (z.B. Entzug der Promotion und/oder zivilrechtliche Konsequenzen).
          </Text>
        </Box>
        <Box className={style.greenCell}>
          <Text>
            Die Regeln des Wissenschaftsspiels werden von den Spielerinnen und Spielern des Wissenschaftsspiels selbst gemacht. Betrugsfälle bzw. Regelverletzungen sollten der Spielhallenaufsicht (= Ombudsperson für gute wissenschaftliche Praxis) gemeldet werden. Ein aufgedeckter Betrugsfall kann ein Hausverbot bzw. den Ausschluss aus dem Wissenschaftsspiel oder empfindliche Strafen nach sich ziehen.
          </Text>
        </Box>
      </Flex>
      <Flex flexWrap='wrap'>
        <Box className={style.redCell}>
          <Text>
            Der Wechsel des wissenschaftlichen Paradigmas ist möglich, allerdings nicht innerhalb eines Forschungsvorhabens. Beispiel: Man kann nicht die Möglichkeit der Erforschung einer Autorintention grundsätzlich in Frage stellen (z.B. aus der Perspektive der konstruktivistischen Systemtheorie) und sich der Erforschung einer Autorintention widmen (z.B. aus der Perspektive einer spezifischen Spielart musikwissenschaftlicher Hermeneutik).
          </Text>
        </Box>
        <Box className={style.greenCell}>
          <Text>
            In der Spielhalle ist ein Wechsel von Spieltisch zu Spieltisch generell möglich, üblicher Weise aber nicht innerhalb eines Spiels (= Forschungsvorhabens).
          </Text>
        </Box>
      </Flex>

      <Heading as='h4' className='headingH4' mt='40px'>
        Regeln (am Spieltisch) einer konstruktivistischen Systemtheorie
      </Heading>

      <List spacing={3} m='10'>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Gespielt wird mit kontingenten Konstruktionen der Wirklichkeit (kontingent = willkürlich, jedoch nicht beliebig).
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Jeder Spielrunde im System Wissenschaft muss eine Idee zugrunde liegen. Forschungsvorhaben arbeiten dabei mit Theorien, die aus Aussagesätzen bestehen, die sich auf etwas anderes als sich selbst beziehen.
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color='green.500' />
          Zu jedem Wissenschaftsspiel gehören außerdem Methoden, das heißt: mithilfe einer methodischer Überprüfung werden theoretische Sätze als wahr oder unwahr qualifiziert.
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

      <Heading as='h4' className='headingH4' mt='10' mb='10'>
        Musikwissenschaft und Musiktheorie
      </Heading>

      <Text>
        Musikwissenschaftliche und musiktheoretische Forschung gehen im Hinblick auf Problem und Problemlösung entgegengesetzt vor:
      </Text>

      <List spacing={3} ml='10' mt='5' mb='5'>
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