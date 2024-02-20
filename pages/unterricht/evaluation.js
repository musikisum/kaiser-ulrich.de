import Head from 'next/head';
import Layout from '../components/layout';
import PageHeader from '../components/pagehaeder';

const options = {
  title: 'Evaluationen',
  description: 'Der Gruppenunterricht an der Hochschule für Musik und Theater München wird leider nur in unregelmäßigen Abständen evaluiert. Darüber hinaus haben weder gute noch schlechte Evaluationen für Professoren meines Alters eine Auswirkung. Auf dieser Seite finden Sie alle Evaluationen, die ich in meinen mehr als 25 Dienstjahren in München erhalten habe.',
  filter: 'unterricht',
  slug: '/unterricht/evaluation'
}

const Evaluation = () => {

  return (
    <>
      <Head>
        <title>Unterricht</title>
        <meta name="description" content="Evaluation | Ulrich Kaiser" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <PageHeader options={ options } />
      <div>
        Hier kommen die Evaluationen hin ...
      </div>
    </>
  )
}

Evaluation.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Evaluation;
