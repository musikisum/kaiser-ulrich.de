import Link from 'next/link'
import Image from 'next/image'
import styles from './homeImage.module.css'

export default function HomeImage() {
  return <>
    <div className={styles.headerText}>
      <h1 className={styles.ukName}>Prof. Dr. Ulrich Kaiser</h1>
      <h2 className={styles.hmtmFunctions}>OER / Musiktheorie / Multimedia</h2>
      <h2 className={styles.hmtm}>Hochschule für Musik und Theater München</h2>
    </div>
    <div className={styles.homeImageContainer}>
      <img className={styles.image100} src="/images/home1200oF.svg"></img>
      <div className={styles.homeGrid}>
        <div className={styles._d1}>
          <Link className={styles.window} href='/'>Projekte</Link>
        </div>
        <div className={styles._11}>
          <Link className={styles.window} href='/wissenschaft/articles'>Wissenschaft</Link>
        </div>
        <div className={styles._12}>
          <Link className={styles.window} href='/publikationen'>Publikationen</Link>
        </div>
        <div className={styles._21}>
          <Link className={styles.window} href='/unterricht'>Fortbildungen</Link>
        </div>
        <div className={styles._22}>
          <Link className={styles.window} href='/'>Lehre</Link>
        </div>
        <div className={styles._31}>
          <Link className={styles.window} href='/'>Gesang</Link>
        </div>
        <div className={styles._32}>
          <Link className={styles.window} href='/'>Chorleitung</Link>
        </div>
        <div className={styles._ul}>
          <Link className={styles.window} href='/'>
            <img className={styles.image100} src="/images/homeFenster2.svg" />
          </Link>
        </div>
        <div className={styles._ur}>
          <Link className={styles.window} href='/'>
            <img className={styles.image100} src="/images/homeFenster2.svg"></img>
          </Link>
        </div>
      </div>
    </div>
  </>
} 