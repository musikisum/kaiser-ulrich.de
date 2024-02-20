import { Center } from '@chakra-ui/react';

export default function CustomError ({ theme }) {
  
  return <>
    <Center bg='#FFECEA' h='400px' color='white'>
      UUps! Das ist ja jetzt wirklich blöd, dass die Daten {theme} nicht geladen werden konnten. Bitte entschuldigen Sie den Fehler, dass keine Daten geladen werden konnten. Wenn Sie es gut meinen, schreiben Sie mir eine kurze Mail und und informieren Sie mich darüber, dass dieser Fehler aufgetreten ist. Vielen Dank! 
    </Center>
  </>
}