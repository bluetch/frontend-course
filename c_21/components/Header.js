import Link from "next/link";
import styles from "./Header.module.scss";
import logo from "public/images/logo.svg";

export const Header = () => {

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flex}>
          {/* <h1>Lulu Chen</h1> */}
          <Link href="/" className={styles.logo}>
            <img src={logo.src} alt="lulu" />
          </Link>
          <nav>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/portfolio" className={styles.link}>Portfolio</Link>
            <Link href="/visual" className={styles.link}>Visual</Link>
            <Link href="https://docs.google.com/document/d/1-I3rKVlwMX-3BV6-dhjoB0HaEj_01S_anERDJTTpXDU/edit?usp=sharing" className={styles.link} target="_blank">Resume</Link>
          </nav>
        </div>

      </div>
    </header>
  )
}