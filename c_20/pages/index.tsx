import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/main.module.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>首頁</title>
      </Head>
      <div className={styles.cardMain}>
        <div className={styles.category}>
          <h2>客戶</h2>
          <Link href="/" className={styles.linkDisabled}>客戶名單</Link>
          <Link href="/" className={styles.linkDisabled}>新增客戶</Link>
        </div>
        <div className={styles.category}>
          <h2>員工</h2>
          <Link href="/employee" >員工名單</Link>
          <Link href="/" className={styles.linkDisabled}>新增員工</Link>
        </div>
        <div className={styles.category}>
          <h2>交易</h2>
          <Link href="/" className={styles.linkDisabled}>交易名單</Link>
          <Link href="/" className={styles.linkDisabled}>新增交易</Link>
        </div>
        <div className={styles.category}>
          <h2>文件管理</h2>
          <Link href="/posts" >文件列表</Link>
          <Link href="/" className={styles.linkDisabled}>新增文件</Link>
        </div>
        <div className={styles.category}>
          <h2>商品資訊</h2>
          <Link href="/" className={styles.linkDisabled}>商品列表</Link>
          <Link href="/" className={styles.linkDisabled}>新增商品</Link>
        </div>
      </div>
    </div>
  )
}
