import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return <>
        <div className={styles.footerDiv}>
            <Link className={styles.link} href='about'>Über mich</Link>
            <Link className={styles.link} href='DSGVO'>Vita</Link>
            <Link className={styles.link} href='???'>DSGVO</Link>
        </div>
    </>
}

