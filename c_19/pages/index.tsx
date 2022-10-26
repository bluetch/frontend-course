import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return(
    <Link href="/employee">Employee</Link>
  )
}
