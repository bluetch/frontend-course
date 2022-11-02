import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/employee.module.scss';

export default function Home() {
  return (
    <div className="container">
      <div className={styles.card}>
        <Link href="/employee" className={styles.btn}>Employee List</Link>
      </div>
    </div>
  )
}
