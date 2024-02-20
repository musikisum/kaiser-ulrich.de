import Head from 'next/head';
import Layout from '../../components/layout';
import PageHeader from '../../components/pagehaeder';
import { Heading, Container, Text, Alert, AlertIcon, Divider, Code } from '@chakra-ui/react';

import style from '../index.module.css'

const options = {
  title: 'Anmerkungen zum Urheberrecht',
  description: 'Auf dieser Seite finden Sie Hinweise zum Thema Urheberrecht.',
  filter: 'wissenschaft/hilfsmittel',
  slug: '/wissenschaft/hilfsmittel/urheberrecht'
}

export default function Urheberrecht() {
  return (
    <>
      <Head>
        <title>Profil</title>
        <meta name="description" content="Forschung | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={options} />

      <Heading as='h2' className='headingH3'>
        {options.title}
      </Heading>
      <Text mb='4'>
        Ohne das Zitatrecht § 51 UrhG wären Wissenschaft und wissenschaftliches Arbeiten undenkbar. Denn Wissenschaft beinhaltet immer auch die Auseinandersetzung mit einem Forschungsstand und dem publiziertem Wissen von anderen und damit von Werken, die wiederum urheberrechtlich geschützt sind. Wäre ein Wiedergeben dieses Materials in einer eigenen wissenschaftlichen Arbeit nicht möglich, dann wäre auch das Publizieren wissenschaftlicher Arbeiten nicht möglich. Im § 51 UrhG heißt es:
      </Text>
      <Container maxW='75%' mt='10' p='6' bg='green.100' borderRadius='20'>
        <Text>
          "Zulässig ist die Vervielfältigung, Verbreitung und öffentliche Wiedergabe eines veröffentlichten Werkes zum Zweck des Zitats, sofern die Nutzung in ihrem Umfang durch den besonderen Zweck gerechtfertigt ist. Zulässig ist dies insbesondere, wenn
        </Text>
        <ol className='list2040'>
          <li>
            einzelne Werke nach der Veröffentlichung in ein selbständiges wissenschaftliches Werk zur Erläuterung des Inhalts aufgenommen werden,
          </li>
          <li>
            Stellen eines Werkes nach der Veröffentlichung in einem selbständigen Sprachwerk angeführt werden,
          </li>
          <li>
            einzelne Stellen eines erschienenen Werkes der Musik in einem selbständigen Werk der Musik angeführt werden.
          </li>
        </ol>
        <Text>
          Von der Zitierbefugnis gemäß den Sätzen 1 und 2 umfasst ist die Nutzung einer Abbildung oder sonstigen Vervielfältigung des zitierten Werkes, auch wenn diese selbst durch ein Urheberrecht oder ein verwandtes Schutzrecht geschützt ist."
        </Text>        
        <Text mt='2' textAlign='right' fontSize='sm'>
          aus: <i>Gesetz über Urheberrecht und verwandte Schutzrechte</i>, <a className='underline' href='https://www.gesetze-im-internet.de/urhg/__51.html'>§ 51 Zitate</a>.          
        </Text>
      </Container>    
      <Text className='mt40'>
        Eine Besonderheit des Ziatrechts ist es, dass es unter Beachtung einiger Regeln nicht nur von der Zustimmung zur Nutzung durch den Urheber befreit, sondern auch von der Vergütungspflicht für die Nutzung. Im Gegensatz dazu ist die Schranke des § 60a UrhG für das wissenschaftliche Publizieren unbrauchbar (und übrigens auch die Veröffentlichung von Open Educational Resources), da diese Regelung nur eine Zugänglichmachung von Inhalten für bestimmte Teilnehmer einer Lehrveranstaltung erlaubt.
      </Text>

      <Heading as='h2' className='headingH4'>
        Die Regeln
      </Heading>
      <Text>
        Auf das Zitatrecht berufen kann sich nur, wer die folgenden Regeln beachtet: 
      </Text>
      <ul className='list2040'>
        <li>
          Das zitierte Werk muss veröffentlicht, nicht jedoch erschienen sein (damit sind auch Veröffentlichungen in unkörperlicher Form z.B. im Internet erfasst). Dabei sind multimediale Werke (Audio und Film) ausdrücklich vom Zitatrecht erfasst und dürfen zitiert werden. 
        </li>
        <li>
          Zitiert werden darf nur ein einzelnes Werk. Allerdings sind mehrere Zitate im Rahmen einer wissenschaftlichen Arbeit erlaubt.
        </li>
        <li>
          Der Zitatumfang muss angemessen sein, ist darüber hinaus jedoch nicht näher bestimmt. Wenn also die Takte 20–30 einer Komposition besprochen werden, dann ist auch nur die Aufnahme der Takte 20–30 in das eigene Werk zulässig (auch wenn in Takt 21 vielleicht die schönste Stelle des Werkes erklingt).
        </li>
        <li>
          Der Zitierende muss eine innere Verbindung zwischen den verwendeten fremden Werk oder Werkteil und den eigenen Gedanken herstellen, das Zitat darf also nur als Belegstelle für eigene, selbstständige Ausführungen und zur Erleichterung der geistigen Auseinandersetzung verwendet werden.
        </li>
        <li>
          Das zitierte Werk muss kenntnlich gemacht werden (→ Änderungsverbot § 62 UrhG) und sich vonden eigenen Gedanken deutlich abheben (was im Rahmen einer wissenschaftlichen Arbeit in der Regel durch Anführungszeichen kenntlich gemacht wird).
        </li>
        <li>
          Eine Quellenangabe nach den Regeln der wissenschaftlichen Community ist zwingend erfolrderlich (→ Quellenangabepflicht § 63 UrhG). 
        </li>
      </ul>
      <Text className='mts0'>
        Das heißt, im Extremfall könnten auch ganz Werke z.B. zur Besprechung der Form erlaubt sein (Großzitat). Dabei ist allerdings zu beachten, dass bei Streitigkeiten vor Gericht ein angemessener Ausgleich hergestellt wird, der im Einzelfall ermittelt werden muss. Das geschieht oftmals durch einen Drei-Stufen-Test, da nach Art. 5 Abs. 5 der Richtlinie 2001/29/EG Ausnahmen und Beschränkungen nur in bestimmten Sonderfällen angewandt werden dürfen, »in denen die normale Verwertung des Werks oder des sonstigen Schutzgegenstands nicht beeinträchtigt wird und die berechtigten Interessen des Rechtsinhabers nicht ungebührlich verletzt werden.« Das heißt, würden man zur Formanalyse einen bekannten Popsong in vollem Umfang zur Verfügung stellen, könnte nicht sichergestellt werden, dass die normale (das heißt: kommerzielle) Verwertung des Werks und die berechtigten Interessen der Rechtsinhaber nicht ungebührlich verletzt werden.
      </Text>
      <Container maxW='75%' mt='10' p='6' bg='green.100' borderRadius='20'>
        <Text>
          "in denen die normale Verwertung des Werks oder des sonstigen Schutzgegenstands nicht beeinträchtigt wird und die berechtigten Interessen des Rechtsinhabers nicht ungebührlich verletzt werden."
        </Text>        
        <Text mt='2' textAlign='right' fontSize='sm'>
          aus: <i>Richtlinie 2001/29/EG</i>, <a className='underline' href='https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX%3A32001L0029'>Art. 5 Abs. 5</a>.          
        </Text>
      </Container>
      <Text className='mt40'>
        Wird dagegen nur ein Formteil zitiert, müsste man davon ausgehen dürfen, dass die normale Verwertung des Werks nicht beeinträchtigt wird. (Denn wer möchte immer nur einen Formteil anstelle des ganzen Songs hören?) Im Gegenteil ließe sich argumentieren, dass eine wissenschaftliche Auseinandersetzung mit einem Werk die berechtigten Interessen des Rechtsinhabers nicht verletzt, sondern im Gegenteil zur Bekanntheit des zitierten Werkes und beiträgt und somit ein Interesse am ganzen Werk un deren Verkauf steigert. 
      </Text>

      <Divider m='6' />

      <Alert status='success'mb='4'>
        <AlertIcon />
        Was darf ich?
      </Alert>
      <ul className='list2040'>
        <li>
          Du darfst in einem eigenen, wissenschaftlichen Werk ein anderes Werk (Text, Audio, Video) zitieren um die mit diesem Werk auseinaderzusetzen. Dazu musst du weder die Rechteinhaber um Erlaubnis fragen noch eine Gebühr für die Verwednung des zitierten Werkes zahlen.
        </li>
      </ul>
      <Alert status='error' mb='4' mt='10'>
        <AlertIcon />
        Worauf muss ich achten?
      </Alert>
      <ul className='list2040'>
        <li>
          Du musst das Zitat von deiner eigenen Schöpfung abheben, deine Ausführungen müssen gegenüber dem zitierten Werk erkennbar selbstständig sein.
        </li>
        <li>
          Du musst das, was du zitierst, als Zitat kenntlich machen. 
        </li>
        <li>
          Du darfst das zitierte Werk nicht verändern (→ Änderungsverbot § 62 UrhG).
        </li>
        <li>
          Du musst die Quelle vollständig und korrekt angeben (→ Quellenangabepflicht § 63 UrhG).
        </li>
      </ul>
      <Text className='mt40'>
        Beachte, dass wenn du nur einem Teil deiner Verpflichtung nicht korrekt nachkommst (z.B. ein Ignorieren der Quellenangabepflicht), die ganze Verwendung des zitierten Werkes rechtswidrig ist. Und das kann Konsequenzen haben, die auch in finanzieller Hinsicht empfindlich sein können.   
      </Text>
    </>
  )
}

Urheberrecht.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}