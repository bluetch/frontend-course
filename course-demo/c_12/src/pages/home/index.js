import { useEffect } from 'react';
import { Layout } from '../../components/Layout';
import styles from './home.module.scss'

const Message = (props) => {
  return (
    <div className={styles.message}>
      <img src={props.img} alt={props.title} />
      <div className={styles.content}>
        <p className={styles.date}>{props.date}</p>
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
      </div>
    </div>
  )
}



export const Home = () => {
  useEffect(() => {
    document.title = "c_12";
  }, [])
  return (
    <Layout>
      <h1>Home 財經新聞</h1>
      <Message
        title="美晶片法迫使半導體大廠選邊站 智庫專家：中國目前束手無策"
        img="https://s.yimg.com/ny/api/res/1.2/ChUWO8hLI1Gwz.1rCs6DQg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM5NztjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/Om5SgTRWqBhzpGsTne.Avg--~B/aD0yMTQ7dz0zODA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/cnyes.com.tw/120c8fda2409f517d526ccd1bb62299e"
        date="2022年8月17日"
        summary="美國總統拜登 (Joe Biden) 本月簽署晶片與科學法案 (CHIPS and Science Act) 後，台積電、三星電子等半導體大廠被迫選邊站，中國的回應備受關注。專家認為，即使對此感到不滿，北京政府目前仍無法做出有力回應。" />
      <Message
        title="通膨數據趨緩 高成長產業有錢景"
        img="https://s.yimg.com/ny/api/res/1.2/nwKxELwUspAJ2IZsvHDfNA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/OJkGhjxIJYdmnekRzbs8Bw--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/ko/mirrormedia.mg/041a0a2e54c5960d813974c86dc19a93"
        date="2022年8月16日"
        summary="美國上週公布的7月消費者物價指數年增率為8.5％，不僅低於前期的9.1％，更是低於預期的8.7％。這樣的數字一出，也讓市場對於聯準會在9月升息3碼的預期大幅下降，認為更有可能的結果將會是升息2碼。" />
      <Message
        title="狙殺死敵！台積電３奈米來了 7大客戶排隊"
        img="https://images.chinatimes.com/newsphoto/2022-08-17/1024/20220817001097.jpg"
        date="2022年8月15日"
        summary="據業界人士指出，今年底蘋果將是第一家採用3奈米投片客戶，英特爾明年下半年將擴大採用3奈米生產處理器內晶片塊（tiles），包括超微、輝達、高通、聯發科、博通等，會在明年及後年陸續完成3奈米新晶片開案。" />
    </Layout>
  )
}