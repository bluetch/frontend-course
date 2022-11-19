import Link from "next/link";
import styles from "./PortfolioList.module.scss";

export const PortfolioList = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => {
        let tags = item.tags;
        return (
            <figure className={styles.figure}>
              <img src={item.img} alt="HurryBuy Dashboard" />
              <figcaption>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <div className={styles.tags}>
                  {tags.map((tag)=>{
                    return(
                      <span key={`${item.name}-${tag}`}>{tag}</span>
                    )
                  })}
                </div>
                <Link href={item.url} className={styles.link}>View detail</Link>
              </figcaption>
            </figure>
        )
      })}

    </div>
  )
}