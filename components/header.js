import styles from '../styles/header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Ping Films</h1>
    </header>
  );
}
