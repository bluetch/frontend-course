import { useEffect } from 'react';
import { Layout } from '../../components';
// import styles from './home.module.scss'

export const Home = () => {

  useEffect(() => {
    document.title = "c12 首頁";
  }, []);

  return (
    <Layout>
      <h1>Home</h1>
      <h3>What is Hook</h3>
      <p>Hook 是 React 16.8 中增加的新功能。它讓你不必寫 class 就能使用 state 以及其他 React 的功能。
        Hook 是 function，他讓你可以從 function component「hook into」React state 與生命週期功能。Hook 在 class 裡面沒有辦法用——他們讓你不用 class 就能使用 React。
      </p>
      <p>React 提供一些內建 Hook 像是 useState。你也可以打造你自己的 Hook 用來在不同的 component 之間重複使用 stateful 邏輯。我們先來看看內建 Hook。</p>
      <ul>
        <li>useState</li>
        <li>useEffect</li>
        <li>useRef</li>
      </ul>
      <h3>Effect Hook</h3>
      <h3>State Hook</h3>
    </Layout>
  )
}