import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/main.module.scss';

export default function Home() {
  return (
    <div className="container">
      <div className={styles.cardMain}>
        <div className={styles.category}>
          <h2>開戶</h2>
          <Link href="/employee" >客戶名單</Link>
          <Link href="/" >新增客戶</Link>
        </div>
        <div className={styles.category}>
          <h2>交易</h2>
          <Link href="/" >交易名單</Link>
          <Link href="/" >新增交易</Link>
        </div>
        <div className={styles.category}>
          <h2>文件管理</h2>
          <Link href="/posts" >文件列表</Link>
          <Link href="/" >新增文件</Link>
        </div>
        <div className={styles.category}>
          <h2>KYC</h2>
          <Link href="/" >客戶評量列表</Link>
          <Link href="/" >新增評量</Link>
        </div>
        <div className={styles.category}>
          <h2>商品資訊</h2>
          <Link href="/" >商品列表</Link>
          <Link href="/" >新增商品</Link>
        </div>
      </div>
    </div>
  )
}
