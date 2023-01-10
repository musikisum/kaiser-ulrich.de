import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return <>
        <div className={styles.footerDiv}>
            <Link className={styles.link} href='about'>about</Link>
            <Link className={styles.link} href='DSGVO'>DSGVO</Link>
            <Link className={styles.link} href='???'>???</Link>
        </div>
    </>
}

