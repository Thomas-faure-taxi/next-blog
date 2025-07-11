import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from './layout.module.css';

export default function Layout({ children, home }) {
  const [dynamicName, setDynamicName] = useState('Nom initial');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDynamicName('Nom changé dynamiquement');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{dynamicName}</title>
      </Head>
      <header>
        <h1>{dynamicName}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
