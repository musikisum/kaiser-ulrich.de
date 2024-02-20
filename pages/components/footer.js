import Link from 'next/link'

export default function Footer() {
    return <>
        <div className='footerDiv'>
            <Link className='footerLink' href='/impressum'>Impressum</Link> | <Link className='footerLink' href='/datenschutz'>Datenschutz</Link> | <Link className='footerLink' href='/sitemap'>Sitemap</Link>
        </div>
    </>
}
