import styles from './layout.module.css';
import Heaven from './heaven';

export default function Layout({ children, isCenter }) {
  return (
    <>
      <Heaven isCenter={ isCenter } />
      <div className={styles.contentContainer}>
        {children}
      </div>
    </>
  );
}