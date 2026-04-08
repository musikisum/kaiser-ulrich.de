import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';
import { Text, List, ListItem, Box, Flex, Heading } from '@chakra-ui/react';

const options = {
  title: 'Repertoire',
  filter: 'chorleitung',
  description: 'Hier finden Sie die in Konzerten aufgeführte Werke der Jahre 1988 bis 2000 (bzw. vor meinem Umzug nach München).',
  slug: '/chorleitung/repertoire'
}

export default function Repertoire() {

  return (
    <>
      <Head>
        <title>{options.title}</title>
        <meta name="description" content="Consortium Musicum | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/icon.png" />
      </Head>
      <PageHeader options={ options } />
      
      
      <Heading as='h3' m='40px' className="headingH4">
        1500–1700
      </Heading>

      <List m='12px' spacing={3} w='80%' ml='10%'> 
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Bennet, John
            </Box>
            <Box flex='1'>
              Weep, o mine eyes              
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Byrd, William
            </Box>
            <Box flex='1'>
              Arise, Lord, into thy rest<br/>
              Come, help, o God<br/>
              O magnum mysterium<br/>
              Though, amarillis dance
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Cannicciari, Pompeo
            </Box>
            <Box flex='1'>
              Messe in a              
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Carissimi, Giacomo
            </Box>
            <Box flex='1'>
              Plorate filii Israel           
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Costeley, Guillaume
            </Box>
            <Box flex='1'>
              Seigneur, dieu ta petié        
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Des Prez, Josquin
            </Box>
            <Box flex='1'>
              Tu solus, qui facis mirabilia<br/>
              Ave Maria    
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              East, Michael
            </Box>
            <Box flex='1'>
              Quick, away, despatch<br/>
              No haste, but good   
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Eccard, Johannes
            </Box>
            <Box flex='1'>
              Übers Gebirg Maria geht   
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Gabriele, Giovanni
            </Box>
            <Box flex='1'>
              O Domine Jesu Christe<br/>
              Viver lieto voglio   
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Gesualdo, Carlo
            </Box>
            <Box flex='1'>
              Ave dulcissima Maria<br/>
              Ave Maria<br/>
              In van dunque (V. Madrigalbuch)<br/>
              Io tacero Buch (V. Madrigalbuch)<br/>
              Mille volte il di (VI. Madrigalbuch)<br/>
              Moro lasso (VI. Madrigalbuch)  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Gibbons, Orlando
            </Box>
            <Box flex='1'>
              What is our life?  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Guillaume, de la Moeulle
            </Box>
            <Box flex='1'>
              Si je maintiens ma vie  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Hellinck, Lupus
            </Box>
            <Box flex='1'>
              In te domine speravi<br/>
              Quoniam fortitudo mea
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Jannequin, Clément
            </Box>
            <Box flex='1'>
              Le chant des oiseaux
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Lassus, Orlandus
            </Box>
            <Box flex='1'>
              Ave Maria
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Leonhard Lechner
            </Box>
            <Box flex='1'>
              Cantate domino<br/>
              Gott b’hüte dich<br/>
              Magnifict secundi toni
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Maitre, Ian
            </Box>
            <Box flex='1'>
              O roche beatissime<br/>
              Precare Deum quaesumus
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Maitre, Ian
            </Box>
            <Box flex='1'>
              Meine Schafe hören meine Stimme<br/>
              Unser Trübsal<br/>
              <Text fontSize='xs'>(Motetten aus: Musikalische Seelenlust, 1634-1637)</Text>
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Monte, Phillippe de
            </Box>
            <Box flex='1'>
              Lagrimose mie luce
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Monteverdi, Claudio
            </Box>
            <Box flex='1'>
              Ecco mormorar l’onde (II. Madrigalbuch)<br/>
              A un giro sol de’ begl’occhi lucenti (IV. Madrigalbuch)<br/>
              Ah, dolente partita (IV. Madrigalbuch)<br/>
              Che se tu se’’l cor mio (IV. Madrigalbuch)<br/>
              Io mi son giovinetta (IV. Madrigalbuch)<br/>
              Quel augellin, che canta (IV. Madrigalbuch)<br/>
              Sfogava, con le stelle ´(IV. Madrigalbuch)<br/>
              Ch’i t’ami, e t’ami piú de la mia vita (V. Madrigalbuch)<br/>
              Deh! bella e cara e sí soave un tempo (V. Madrigalbuch)<br/>
              Ma tu, piú che mai dura (V. Madrigalbuch)<br/>
              Cosi sol d’una chiara (VIII. Madrigalbuch)<br/>
              Hor che ciel (VIII. Madrigalbuch)<br/>
              Crucifixus<br/>
              Christe, adoramus te
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Morley, Thomas
            </Box>
            <Box flex='1'>
              April is in my mistress’ face<br/>
              Fire, fire
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Palestrina, G. P. da
            </Box>
            <Box flex='1'>
              Ave Maria<br/>
              Corona aurea<br/>
              Cum pervenissent beatus Andreas<br/>
              Domine praevenisti eum<br/>
              Dum complerentur<br/>
              Dum ergo essent<br/>
              Io son ferito, ahi lasso<br/>
              Figlio immortal d’immortal padre<br/>
              Hic est discipulus ille<br/>
              Magnum mysterium<br/>
              Novella aurora<br/>
              O beata et gloriosa Trinitatis<br/>
              O sacrum convivium<br/>
              Pater noster<br/>
              Quem vidistis<br/>
              Super flumina Babylonis (5-stg.)
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Passerau, Pierre
            </Box>
            <Box flex='1'>
              Il est bel et bon
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Philorodus, Paulus B.
            </Box>
            <Box flex='1'>
              Converte domine
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Purcell, Henry
            </Box>
            <Box flex='1'>
              In the midst of live<br/>
              Lord, how long wilt thou be angry<br/>
              Man, that is born of a woman<br/>
              Remember not<br/>
              Thou knowest, Lord
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Ramsey, Robert
            </Box>
            <Box flex='1'>
              Sleep, fleshly birth
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Rore, Cipriano de
            </Box>
            <Box flex='1'>
              Datemi pace
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Scandellus, Antonius
            </Box>
            <Box flex='1'>
              Ein Hennlein weiß
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Schein, J. H.
            </Box>
            <Box flex='1'>
              Da Jakob vollendet hatte<br/>
              Der Herr denket an uns<br/>
              Die mit Tränen Säen<br/>
              Freue dich deines Weibes<br/>
              Ich bin die Wurzel des Geschlechtes David<br/>
              Ich bin jung gewesen<br/>
              Ich freu mich des Herren<br/>
              Ich lasse dich nicht<br/>
              Lehre uns bedenken<br/>
              Lieblich und schöne<br/>
              Nun danket alle Gott<br/>
              O Herr, ich bin dein Knecht<br/>
              O, Herr Jesu Christe<br/>
              Wende dich Herr<br/>
              Zion spricht<br/>
              <Text fontSize='xs'>(Motetten aus dem »Israelisbrünnlein«)</Text>
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Schütz, Heinrich
            </Box>
            <Box flex='1'>
              Das ist je gewißlich wahr<br/>
              Die Himmel erzählen<br/>
              Die mit Tränen säen<br/>
              Es ist erschienen<br/>
              Gib unsern Fürsten<br/>
              Herr auf dich traue ich<br/>
              Herzlich lieb hab ich dich<br/>
              Selig sind die Toten<br/>
              So fahr ich hin<br/>
              Verleih uns Frieden<br/>
              Wohl dem, der den Herren fürchtet<br/>
              <Text fontSize='xs'>(Motetten aus der Geistlichen Chormusik«)</Text>
              Sospir, che del bel petto<br/>
              Io moro, ecco, ch’io moro<br/>
              <Text fontSize='xs'>(aus den Italienischen Madrigalen Op. 1)</Text>
              Ehre sei dir, Christe<br/>
              Deutsches Magnificat (4-stg.)<br/>
              Vater unser<br/>
              Cantate domino
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Tomkins, Thomas
            </Box>
            <Box flex='1'>
              Too much I once lamented<br/>
              See, see, the shepherds’ queen
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Vaet, Jacobus
            </Box>
            <Box flex='1'>
              Magnificat primi toni
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Vaet, Jacobus
            </Box>
            <Box flex='1'>
              Dolce mio ben
              <Text fontSize='xs'>(diatonische und chromatische Fassung)</Text>
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Ward, John
            </Box>
            <Box flex='1'>
              Hope of my heart<br/>
              Come, sable night<br/>
              Out from the vale
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Weelkes, Thomas
            </Box>
            <Box flex='1'>
              Hark, all ye lovely saints<br/>
              O care, thou wilt despatch me
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Wilbye, John
            </Box>
            <Box flex='1'>
              Weep, weep, mine eyes<br/>
              Draw on, sweet night
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Weinmann, Johann
            </Box>
            <Box flex='1'>
              Vater unser
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Wert, Giaches de
            </Box>
            <Box flex='1'>
              Forsennata gridava
            </Box>
          </Flex>                  
        </ListItem>
      </List>

      <Heading as='h3' m='40px' className="headingH4">
        1700–1800
      </Heading>

      <List m='12px' spacing={3} w='80%' ml='10%'>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Bach, J. S.
            </Box>
            <Box flex='1'>
              Jesu, meine Freude, BWV 227<br/>
              Singet dem Herrn, BWV 225<br/>
              Komm, Jesu, komm, BWV 229            
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Caldara, Antonio
            </Box>
            <Box flex='1'>
              Tristis est anima mea           
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Lotti, Antonio
            </Box>
            <Box flex='1'>
              Crucifixus (6 stg.)           
            </Box>
          </Flex>                  
        </ListItem>
      </List>

      <Heading as='h3' m='40px' className="headingH4">
        1800–1900
      </Heading>

      <List m='12px' spacing={3} w='80%' ml='10%'>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Becker, Albert
            </Box>
            <Box flex='1'>
              Geistl. Chorlieder (Auswahl)           
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Brahms, Johannes
            </Box>
            <Box flex='1'>
              Kyrie WoO 17<br/>
              Missa canonica WoO 18<br/>
              Frauenchöre op.37<br/>
              Chorlieder op. 42<br/>
              Gesänge op. 62<br/>
              Motteten op. 74, Nr.1 und 2<br/>
              Chorlieder op. 93a<br/>
              Fest- und Gedenksprüche op. 109<br/>
              5 Gesänge op. 104<br/>
              Volkslieder (Auswahl)           
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Bruckner, Anton
            </Box>
            <Box flex='1'>
              Ave Maria<br/>
              Locus iste<br/>
              Os iusti<br/>
              Pangue lingua<br/>
              Vexilla regis         
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Hoffmann, E. Th. A.
            </Box>
            <Box flex='1'>
              Salve Regina        
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Kaminski, Heinrich
            </Box>
            <Box flex='1'>
              Maria durch ein Dornwald ging<br/>
              130. Psalm       
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Liszt, Franz
            </Box>
            <Box flex='1'>
              Ave Maria     
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
            Mendelsohn-Bartholdy, Felix
            </Box>
            <Box flex='1'>
              Denn er hat seinen Engeln<br/>
              Psalm 100<br/>
              Richte mich Gott<br/>
              Zum Abendsegen<br/>
              Chorlieder (Auswahl)
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Reger, Max
            </Box>
            <Box flex='1'>
              8 Geistl. Lieder op.38<br/>
              Volkslieder (Auswahl)     
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Schumann, Robert
            </Box>
            <Box flex='1'>
              Chorlieder (Auswahl)     
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Wikander, David
            </Box>
            <Box flex='1'>
              Kung Liljekonvalje    
            </Box>
          </Flex>                  
        </ListItem>
      </List>

      <Heading as='h3' m='40px' className="headingH4">
        1900–2000
      </Heading>

      <List m='12px' spacing={3} w='80%' ml='10%'>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>  
              Copland, Aaron
            </Box>
            <Box flex='1'>
              Thou, O Jehova<br/>
              Help us, O Lord
              <Text fontSize='xs'>(aus: Four Motets 1921)</Text>          
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Debussy, Claude
            </Box>
            <Box flex='1'>
              Trois Chansons (Chansons de Charles d’Orléans)         
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Distler, Hugo
            </Box>
            <Box flex='1'>
              Singet dem Herrn<br/>
              Totentanz<br/>
              Feuerreiter und andere Werke aus dem Möricke-Chorbuch         
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Eben, Peter
            </Box>
            <Box flex='1'>
              Salve Regina<br/>
              Sonnengesang        
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Fladt, Hartmut
            </Box>
            <Box flex='1'>
              Fest- und Gedenksprüche       
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Helmschrott, Robert M.
            </Box>
            <Box flex='1'>
              Schweigen (aus: <i>Begegnungen</i> Nr. VII)<br/>
              Menschenzeit Nr. 1-3 (aus: <i>Fünf Gesänge</i>, 1993)       
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Hindemith, Paul
            </Box>
            <Box flex='1'>
              Madrigale (Auswahl)       
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Kodály, Zoltán
            </Box>
            <Box flex='1'>
              Jesus und die Krämer      
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Mauersberger, Rudolf
            </Box>
            <Box flex='1'>
              Wie liegt die Stadt so wüst    
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Mauersberger, Rudolf
            </Box>
            <Box flex='1'>
              Jesus und Nikodemus<br/>
              Herr neige deine Ohren<br/>
              Herr unser Gott<br/>
              Lob der Träne<br/>
              Volkslieder (Auswahl)<br/>
              Die Nachtigall   
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Pepping, Ernst
            </Box>
            <Box flex='1'>
              Jesus und Nikodemus<br/>
              Herr neige deine Ohren<br/>
              Herr unser Gott<br/>
              Lob der Träne<br/>
              Die Nachtigall<br/>
              Volkslieder (Auswahl)
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Poos, Heinrich
            </Box>
            <Box flex='1'>
              Einsetzung des heiligen Abendmahls<br/>
              Hochzeit hielt das Mückelein<br/>
              Nachklänge<br/>
              Sing mir, o Nachtigall<br/>
              Pavane<br/>
              Suite nach franz. Volksliedern  
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Poulenc, Francis
            </Box>
            <Box flex='1'>
              Sept Chansons<br/>
              Vier Motetten 1939<br/>
              O magnum mysterium<br/>
              Quem vidistis
              <Text fontSize='xs'>aus: Quadre motets (1951/52)</Text> 
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Schönberg, Arnold
            </Box>
            <Box flex='1'>
              Dreimal Tausend Jahre
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Stockmeier, Wolfgang
            </Box>
            <Box flex='1'>
              Vater unser
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Strawinsky, Igor
            </Box>
            <Box flex='1'>
              Otsche nasch
            </Box>
          </Flex>                  
        </ListItem>
      </List>

      <Heading as='h3' m='40px' className="headingH4">
        Werke für Chor und Instrumente / Orchester
      </Heading>

      <List m='12px' spacing={3} w='80%' ml='10%'>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Bach, J. S.
            </Box>
            <Box flex='1'>
              Magnificat, Fassung D-Dur (m. Einlegesätzen)<br/>
              Kantate BWV 12, »Weinen Zagen Sorgen Klagen«<br/>
              Kantate BWV 191, »Gloria in exelsis Deo«
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Brahms, Johannes
            </Box>
            <Box flex='1'>
              Liebesliederwalzer op.52<br/>
              Zigeunerlieder op. 103
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Dvořák, Antonín
            </Box>
            <Box flex='1'>
              Messe in D-Dur (Orgelfassung)
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Haydn, Joseph
            </Box>
            <Box flex='1'>
              Lieder für Chor und Klavier (Auswahl)
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Mozart, W. A.
            </Box>
            <Box flex='1'>
              Motette für Sopran, Orchester und Orgel KV 165 (»Exultate, Iubilate«)<br/>
              »Missa in honorem SS:mae Trinitatis« in C-Dur KV 167<br/>
              Requiem KV 626
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Pergolesi, G. B.
            </Box>
            <Box flex='1'>
              Stabat mater PayP 77
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Poos, Heinrich
            </Box>
            <Box flex='1'>
              Des Antonius von Padua Fischpredigt<br/>
              Zeichen am Weg
              <Text fontSize='xs'>(Erstaufführung der Fassung für gem. Chor Berlin 1991)</Text>
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Schubert, Franz
            </Box>
            <Box flex='1'>
              Gesänge zur Feier des heiligen Opfers der Messe (»Deutsche Messe«) in G-Dur D 872
            </Box>
          </Flex>                  
        </ListItem>
        <ListItem style={{'borderBottom': '1px solid gray'}}>
          <Flex mb='16px'>
            <Box as='b' w='250px' color='#6e91a1'>
              Vivaldi, Antonio
            </Box>
            <Box flex='1'>
              Gloria RV 589
            </Box>
          </Flex>                  
        </ListItem>
      </List>
    </>
  
  )
}

Repertoire.getLayout = function getLayout(page) {
  return (
    <Layout isCenter={false} showheaven={true}>
      {page}
    </Layout>
  )
}
