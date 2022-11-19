import Link from "next/link";
import styles from "./Footer.module.scss";
import linkedin from "public/images/linkedin.png";
import github from "public/images/github.png";
import instagram from "public/images/instagram.png";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="https://github.com/lala6527" target="_blank">
            <img src={github.src} alt="github" />
          </Link>
          <Link href="https://www.linkedin.com/in/jihan-chen-b64850257/">
            <img src={linkedin.src} alt="linkedin" target="_blank"/>
          </Link>
          <Link href="https://www.instagram.com/bonnie_55417/" target="_blank">
            <img src={instagram.src} alt="instagram" />
          </Link>
        </nav>
        <p>© LuLu Chen 2022 Copyright. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
