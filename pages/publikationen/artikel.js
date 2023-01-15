import Link from 'next/link'
import ShortUniqueId from 'short-unique-id'
import { Image, Table, Breadcrumb } from 'semantic-ui-react'

import styles from './index.module.css'

import bookData from '../../data/articles.json'

const uid = new ShortUniqueId();

export default function Openbooks() {
  return (
    <div className='mainContainer'>      
      <main>
        <div className={styles.content}>
          <div className='bcs'>
            <Breadcrumb>
              <Breadcrumb.Section link><Link href="/">Home</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section link><Link href="/publikationen">Publikationen</Link></Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>Artikel</Breadcrumb.Section>
            </Breadcrumb>
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Abbildung</Table.HeaderCell>
                <Table.HeaderCell>Aufsätze (Open Access, in Verlagen erschienen)</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {
                bookData.map(article => {
                  return <Table.Row key={uid.seq()}>
                    <Table.Cell>
                      {!article.link && <Image src={article.image} />}                      
                    </Table.Cell>
                    <Table.Cell>
                      {article.link && <Image as='a' src={article.image} href={article.link} target='_blank' />}
                    </Table.Cell>                
                  </Table.Row>
                })
              }
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}