import styles from './layout.module.scss';

export const Layout = ({ children, className }) => {
  return (
    <main className={`${styles.layout} ${className}`}>
      {children}
    </main>
  );
}