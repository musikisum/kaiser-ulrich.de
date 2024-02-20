import Link from 'next/link';
import styles from './homeImage.module.css';

export default function HomeImage() {

  return <>
    <div className={styles.headerText}>
      <h1 className={styles.ukName}>Prof. Dr. Ulrich Kaiser</h1>
      <h2 className={styles.hmtmFunctions}>Open Educational Resources / Musiktheorie</h2>
      <h2 className={styles.hmtm}>Hochschule für Musik und Theater München</h2>
    </div>
    <div className={styles.homeImageContainer}>
      <img className={styles.homeWoImage} src="/images/home1200oF.svg" alt="Hausabbildung auf der Landing-Page" />
      <img className={styles.homeWImage} src="/images/home1200mF.svg" alt="Hausabbildung auf der Landing-Page" />
      <div className={styles.homeGrid}>
        <div className={styles._d1}>
          <Link className={styles.window} href='/projekte'>Projekte</Link>
        </div>
        <div className={styles._11}>
          <Link className={styles.window} href='/wissenschaft'>Wissenschaft</Link>
        </div>
        <div className={styles._12}>
          <Link className={styles.window} href='/publikationen'>Publikationen</Link>
        </div>
        <div className={styles._21}>
          <Link className={styles.window} href='/angebote'>Angebote</Link>
        </div>
        <div className={styles._22}>
          <Link className={styles.window} href='/unterricht'>Unterricht</Link>
        </div>
        <div className={styles._31}>
          <Link className={styles.window} href='/gesang'>Gesang</Link>
        </div>
        <div className={styles._32}>
          <Link className={styles.window} href='/chorleitung'>Chorleitung</Link>
        </div>
        <div className={styles._ul}>
          <Link className={styles.windowULeft} href='/person/vita'>
            <img className={styles.windowULeftImage} src="/images/homeFenster2.svg" />            
          </Link>
          <Link className={styles.windowULeftText} href='/person/vita'>Vita</Link>
        </div>
        <div className={styles._ur}>
          <Link className={styles.windowURight} href='/person/profil'>
            <img className={styles.windowURightImage} src="/images/homeFenster2.svg"></img>            
          </Link>
          <Link className={styles.windowURightText} href='/person/profil'>zur Person</Link>
        </div>
      </div>
    </div>
  </>
} 