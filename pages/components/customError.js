import { Center } from '@chakra-ui/react';

export default function CustomError ({ theme }) {
  
  return <>
    <Center bg='#FFECEA' h='400px' color='white'>
      Ups! Das ist jetzt wirklich blöd, dass die Daten {theme} nicht geladen werden konnten. Bitte entschuldigen Sie den Fehler. Wenn Sie es gut meinen, schreiben Sie mir eine kurze Mail und und informieren Sie mich über den auftretenden Fehler. Vielen Dank! 
    </Center>
  </>
}