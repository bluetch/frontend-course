import homeHero from "public/images/homeHero.png";
import { Button, Layout, PortfolioList } from 'components';
import { useState, useEffect } from "react";
import styles from 'styles/index.module.scss';

export default function Home() {
  const [portfolio, setPortfolio] = useState([]);

  const fetcher = async () => {
    const res = await fetch("/api/portfolio");
    const data = await res.json();
    setPortfolio(data);
  }

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <Layout title="Lulu Chen's Home">
      <div className={styles.hero}>
        <img src={homeHero.src} alt="lulu" className="w-full" />
        <p>I am a front-end developer, Visual designer and foody from Tainan, Taiwan.</p>
      </div>
      <div className="container">
        <h3 className={styles.h3}>Featured Work</h3>
        <PortfolioList data={portfolio} />
        <div className={styles.actions}>
          <Button href="/portfolio">More Portfolio</Button>
        </div>
      </div>
    </Layout>
  )
}
