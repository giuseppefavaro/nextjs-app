import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJS App</title>
        <meta name="description" content="NextJS App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header /> 

      <main className={styles.main}>
        <ProductList />
      </main>

      <Footer />
    </>
  )
}
