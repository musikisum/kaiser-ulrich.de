import Link from 'next/link'
import bookData from '../../data/articles.json'
import { Image, Table, Breadcrumb } from 'semantic-ui-react'

import styles from './index.module.css'

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
                bookData.map((article, index) =>
                  <Table.Row key={index}>
                    <Table.Cell>
                      {!article.link && <Image src={article.image} />}
                      {article.link && <Image as='a' src={article.image} href={article.link} target='_blank' />}
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>                
                  </Table.Row>
                )
              }
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  );
}