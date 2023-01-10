import Link from 'next/link'
import bookData from '../../data/openbooks.json'
import { Image, Table, Breadcrumb } from 'semantic-ui-react'


export default function Openbooks() {
  return (
    <div className='content'>
      <div className='bcs'>
        <Breadcrumb>
          <Breadcrumb.Section link><Link href="/">Home</Link></Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link><Link href="/publikationen">Publikationen</Link></Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>OpenBooks</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Abbildung</Table.HeaderCell>
            <Table.HeaderCell>OpenBooks (druckfähige Internetpublikationen im Selbstverlag)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            bookData.map((book, index) => 
              <Table.Row key={index}>
                <Table.Cell>
                  {!book.link && <Image src={book.image} />}
                  {book.link && <Image as='a' src={book.image} href={book.link} target='_blank' />}
                </Table.Cell>
                <Table.Cell><i>{book.title}</i>, {book.details}.</Table.Cell>                
              </Table.Row>
            )
          }
        </Table.Body>
      </Table>
    </div>
  );
}