import styles from './layout.module.scss';

export const Layout =({children})=>{
    return(
        <main className={styles.layout}>
            {children}
        </main>
    );
}