import styles from './layout.module.css';
import Heaven from './heaven';

export default function Layout({ children, text }) {
  return (
    <>
      <Heaven />
      <div className={styles.contentContainer}>
        {children}
      </div>
    </>
  );
}