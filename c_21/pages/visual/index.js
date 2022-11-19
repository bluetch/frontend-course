import { Layout } from "components";
import { useState, useEffect } from "react";
import styles from "styles/visual.module.scss";

export const Visual = () =>{
  const [visual, setVisual] = useState([]);

  const fetcher = async () => {
    const res = await fetch("/api/visual");
    const data = await res.json();
    setVisual(data);
  }

  useEffect(() => {
    fetcher();
  }, []);

  return(
    <Layout>
      <div className="container">
        <h1>Visual</h1>
        <div className={styles.grid}>
          {visual.map((vis)=>{
            return(
              <figure key={vis.name}>
                <img src={vis.img} alt={vis.name} />
              </figure>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Visual;