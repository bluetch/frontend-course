import { useEffect } from 'react';
import { Layout } from '../../components';
import styles from './home.module.scss';

export const Home = () => {

  useEffect(() => {
    document.title = "c14 首頁";
  }, []);

  return (
    <Layout className={styles.home}>
      <div className={styles.flex}>
        <aside className={styles.aside}>
          <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>useRef</li>
          </ul>
        </aside>
        <article className={styles.article}>
          <h1>Home</h1>
          <h3>What is Hook</h3>
          <p>Hook 是 React 16.8 中增加的新功能。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。
            Hook 是 function，他讓你可以從 function component「hook into」React state 與生命週期功能。Hook 在 class 裡面沒有辦法用——他們讓你不用 class 就能使用 React。
          </p>
          <p>React 提供一些內建 Hook 像是 useState。你也可以打造你自己的 Hook 用來在不同的 component 之間重複使用 stateful 邏輯。我們先來看看內建 Hook。</p>
          <hr />
          <h3>useState</h3>
          <p>useState 會回傳一個包含兩個值的 array，第一個值是 state、第二個值是用來更新 state 的函式。每當 state 值改變，就會觸發 re-render</p>
          <img src="/images/usestate.jpg" alt="" />
          <hr />
          <h3>useEffect</h3>
          <p>任何會產生 side Effect 的行為都應該 Effect Hook 裡執行。他和 componentDidMount，componentDidUpdate，與 componentWillUnmount 有著同樣的宗旨，但整合進一個單一的 API。</p>
          <img src="/images/useeffect.jpg" alt="" />
          <p>useEffect 有兩個參數，第一個參數是 Effect function，第二個則是 depandancy array。 根據不同 depandancy 決定何時要執行 Effect function</p>
          <hr />
          <h3>useRef</h3>
          <img src="/images/useref.jpg" alt="" />
          <p>除了可以在不 re-render 的狀態下更新值，也可以直接抓取 DOM 進而控制 DOM 的行為 (Imperative)</p>
        </article>
      </div>
    </Layout>
  )
}